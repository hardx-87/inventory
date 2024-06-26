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
      <h2 className="text-4xl font-extrabold text-center">Products</h2>
      <div className="grid-rows-1">
        {data?.map((d) => (
          <ProductCard
            className="m-1 flex align-center"
            key={d.id}
            id={d.id}
            name={d.name}
            description={d.description}
            quantity={d.quantity}
          />
        ))}
      </div>
    </div>
  );
};
