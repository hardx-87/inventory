import { useAppSelector } from "../../app/hooks";
import { ButtonLink } from "../../components/ButtonLink";
import { ProductCard } from "../../components/ProductCard";
import { ProductSearch } from "../../components/ProductSearch";
import { selectSearch } from "../../features/search/searchSlice";
import { useGetAllQuery } from "../../services/products";
import { ProductType } from "../../services/types";

const filterProducts = (products: Array<ProductType>, term: string) =>
  products.filter(
    (prod) => prod.name.toLowerCase().indexOf(term.toLowerCase()) !== -1
  );

export const ProductIndex = () => {
  const { data = [], error, isLoading } = useGetAllQuery();
  const { term } = useAppSelector(selectSearch);

  const filteredData = filterProducts(data, term);

  if (error) {
    return <div>Oh no, there was an error</div>;
  } else if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2 className="m-4 text-4xl font-extrabold text-center">Products</h2>
      <div className="flex">
        <div className="flex-1 mr-4">
          <ProductSearch />
        </div>
        <div className="flex-none">
          <ButtonLink to="/create" buttonStyles={true}>
            Create New
          </ButtonLink>
        </div>
      </div>
      <ul className="grid-rows-1">
        {filteredData.length > 0 ? (
          filteredData.map((d) => (
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
          ))
        ) : (
          <p className="text-sm font-medium text-gray-900 mt-2">No products</p>
        )}
      </ul>
    </div>
  );
};
