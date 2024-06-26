import { useRouteError } from "react-router-dom";

export const ErrorBoundary = () => {
  let error = useRouteError();
  console.error(error);
  return <div>Oh no, there was an error</div>;
};
