import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { StoreProvider } from "./context/";
import { loadConfig } from "./utils/bootstrap";

loadConfig().then((config: any) => {
  ReactDOM.createRoot(document.getElementById("root")!).render(
    <StoreProvider>
      <App config={config.data} />
    </StoreProvider>
  );
});
