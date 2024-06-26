import { ReactNode } from "react";

export const Button = ({
  className,
  onClick,
  children,
}: {
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
}) => (
  <button
    className={`${className} text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center bg-blue-600`}
    onClick={onClick}
  >
    {children}
  </button>
);
