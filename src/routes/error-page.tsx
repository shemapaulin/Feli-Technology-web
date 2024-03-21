import { useRouteError } from "react-router-dom";

interface ErrorType {
  statusText?: string ;
  message?: string;
  // add any other properties you expect the error object to have
}

export default function ErrorPage() {
  // const error = useRouteError();
  const error = useRouteError() as ErrorType;


  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}