import { useState } from "react";
import {
  useGetByIdQuery,
  useUpdateMutation,
  useRemoveMutation,
} from "../../services/products";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { ButtonLink } from "../../components/ButtonLink";

export const ProductDetails = () => {
  const navigate = useNavigate();
  let { productId = "" } = useParams();
  const { data, error, isLoading } = useGetByIdQuery(productId);
  const [update] = useUpdateMutation();
  const [remove] = useRemoveMutation();
  const [product, setProduct] = useState({
    name: data?.name,
    description: data?.description,
    quantity: data?.quantity,
  });

  const onFormSubmt = async (e: React.FormEvent) => {
    e.preventDefault();
    if (data) {
      await update({
        ...product,
        id: data.id,
      });
      navigate("/");
    }
  };

  const onClickDeleteAll = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    if (data) {
      await remove(data.id);
      navigate("/");
    }
  };

  if (error) {
    return <div>Oh no, there was an error</div>;
  } else if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <form onSubmit={onFormSubmt}>
      <div className="mb-6">
        <label
          htmlFor="productId"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Product Id
        </label>
        <input
          type="text"
          disabled
          id="productId"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="Id"
          value={productId}
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="name"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Product Name
        </label>
        <input
          type="text"
          id="name"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="Name"
          defaultValue={data?.name}
          value={product.name}
          onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
            setProduct({ ...product, name: e.target.value })
          }
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="description"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Product Description
        </label>
        <input
          type="text"
          id="description"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="Description"
          defaultValue={data?.description}
          value={product.description}
          onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
            setProduct({ ...product, description: e.target.value })
          }
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="quantity"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Quantity
        </label>
        <input
          type="number"
          id="quantity"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="Quantity"
          defaultValue={data?.quantity}
          value={product.quantity}
          onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
            setProduct({ ...product, quantity: parseInt(e.target.value) })
          }
          required
        />
      </div>
      <div className="flex items-center justify-between">
        <ButtonLink to="/">Back</ButtonLink>
        <Button onClick={onClickDeleteAll} className="bg-red-700">
          Delete all
        </Button>
        <Button>Update</Button>
      </div>
    </form>
  );
};
