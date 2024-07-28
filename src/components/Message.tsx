import { useContext, useEffect} from "react";
import { Store } from "../context";

export default () => {
  const { message, setValue }: any = useContext(Store);
  const handleClose = () => {
    setValue((state: any) => ({ ...state, message: false }));
  };
  useEffect(() => {
    if (message)
      setTimeout(() => {
        handleClose();
      }, 6000);
  }, [message]);
  return message ? (
    <div
      style={{
        position: "absolute",
        width: "max-content",
        zIndex: 1,
        bottom: 10,
        left: 0,
        right: 0,
        margin: "auto",
      }}
    >
      <div
        className={`alert ${
          message.variant === "alert"
            ? "alert-warning"
            : message.variant === "danger"
            ? "alert-danger"
            : "alert-success"
        }`}
        role="alert"
      >
        {message.message}
        <button
          style={{
            background: "none",
            border: "none",
            fontWeight: "bold",
            padding: 0,
            fontSize: 16,
            cursor: "pointer",
            width: 20,
          }}
          className="ml-4"
          onClick={handleClose}
          type="button"
        >
          &times;
        </button>
      </div>
    </div>
  ) : (
    <></>
  );
};
