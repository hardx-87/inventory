import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCreateMutation } from "../../services/products";

export const ProductCreate = () => {
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    name: "",
    description: "",
  });

  const onFormSubmt = async (e: React.FormEvent) => {
    e.preventDefault();
    await create(product);
    navigate("/");
  };

  const [create] = useCreateMutation();

  return (
    <form onSubmit={onFormSubmt} autoComplete="off">
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
          value={product.name}
          onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
            setProduct({ ...product, name: e.target.value })
          }
          required
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
          value={product.description}
          onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
            setProduct({ ...product, description: e.target.value })
          }
          required
        />
      </div>
      <div className="flex items-center justify-between">
        <Link className="mr-8 text-gray-500" to="/">
          Back
        </Link>
        <button
          type="submit"
          className="text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
        >
          Submit
        </button>
      </div>
    </form>
  );
};
