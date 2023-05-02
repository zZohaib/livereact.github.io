import React from "react";
import { useRouteError } from "react-router-dom";
import errorStyles from "./error.module.css"
 

export default function Error() {
    const error = useRouteError();
    console.error(error);
  
    return (
      <div className={errorStyles.container} id="error-page">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    );
  }
