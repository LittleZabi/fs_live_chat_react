import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { StoreProvider } from "./context/";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StoreProvider>
    <App />
  </StoreProvider>
);
