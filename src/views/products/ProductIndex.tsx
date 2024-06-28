import { ButtonLink } from "../../components/ButtonLink";
import { ProductCard } from "../../components/ProductCard";
import { useGetAllQuery } from "../../services/products";

export const ProductIndex = () => {
  const { data, error, isLoading } = useGetAllQuery();

  if (error) {
    return <div>Oh no, there was an error</div>;
  } else if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div>
        <ButtonLink to="/create" buttonStyles={true}>
          Create New
        </ButtonLink>
      </div>
      <hr className="h-px my-8 bg-gray-400 border-0" />
      <h2 className="text-4xl font-extrabold text-center">Products</h2>
      <ul className="grid-rows-1">
        {data?.map((d) => (
          <li key={d.id}>
            <ProductCard
              className="m-1 flex align-center"
              key={d.id}
              id={d.id}
              name={d.name}
              description={d.description}
              quantity={d.quantity}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
