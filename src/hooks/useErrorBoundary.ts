import { useEffect, useState } from "react";

export const useErrorBoundary = () => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const handleError = (event: ErrorEvent) => {
      setHasError(true);
      console.error("Caught an error:", event.error);
    };

    const handleRejection = (event: PromiseRejectionEvent) => {
      setHasError(true);
      console.error("Unhandled rejection:", event.reason);
    };

    window.addEventListener('unhandledrejection', handleRejection);
    window.addEventListener('error', handleError);

    return () => {
      window.removeEventListener('unhandledrejection', handleRejection);
      window.removeEventListener('error', handleError);
    };
  }, []);

  return hasError;
}
