import "./ProductCard.css";
import { Link } from "react-router-dom";

export const ProductCard = ({
  className,
  id,
  name,
  description,
  quantity,
}: {
  className?: string;
  id: number;
  name: string;
  description: string;
  quantity: number;
}) => (
  <Link to={`/${id}`}>
    <div
      className={`${className} block p-2 border rounded-lg shadow hover:bg-gray-100 border-gray-700`}
    >
      <h5 className="text-sm font-bold text-gray-900 w-1/3">{name}</h5>
      <div className="w-full flex justify-between">
      <p className="text-sm font-normal text-gray-700">{description}</p>
      <p className="text-sm font-normal text-gray-900">{quantity}</p>
      </div>
    </div>
  </Link>
);
