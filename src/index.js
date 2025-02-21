import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { TemperatureContextProvider } from "./context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<TemperatureContextProvider>
			<App city="Bristol" />
		</TemperatureContextProvider>
	</React.StrictMode>
);
reportWebVitals();
