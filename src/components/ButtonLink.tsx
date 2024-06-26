import { ReactNode } from "react";
import { Link } from "react-router-dom";

export const ButtonLink = ({
  children,
  to,
  buttonStyles,
}: {
  children: ReactNode;
  to: string;
  buttonStyles?: boolean;
}) => {
  const btnClasses =
    "inline-block	text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800";
  const lnkClasses = "mr-8 text-gray-500";

  return (
    <Link className={buttonStyles ? btnClasses : lnkClasses} to={to}>
      {children}
    </Link>
  );
};
