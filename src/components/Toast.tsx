import { useEffect } from "react";
import clsx from "clsx";

type ToastVariant = "success" | "error";

interface ToastProps {
  message: string;
  show: boolean;
  variant?: ToastVariant;
  duration?: number;
  onDismiss: () => void;
}

const Toast = ({ message, show, variant = "success", duration = 4000, onDismiss }: ToastProps) => {
  useEffect(() => {
    if (!show) return;
    const timer = setTimeout(onDismiss, duration);
    return () => clearTimeout(timer);
  }, [show, duration, onDismiss]);

  return (
    <div
      role="status"
      aria-live="polite"
      className={clsx(
        "fixed bottom-6 right-6 z-50 px-6 py-3 rounded-lg text-base font-medium shadow-lg transition-all duration-300",
        variant === "success" ? "bg-kAppYellow text-kAppBlack" : "bg-kAppRed text-kAppWhite",
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      )}
    >
      {message}
    </div>
  );
};

export default Toast;
