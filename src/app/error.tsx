"use client";

import React, { useEffect } from "react";

const Error = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return <div>Something went wrong... <button onClick={()=>{reset()}}>Try again</button></div>;
};

export default Error;
