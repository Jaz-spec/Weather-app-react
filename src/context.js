import React, { createContext, useState } from "react";

export const TemperatureContext = createContext({ degrees: "celsius" });

export const TemperatureContextProvider = (props) => {
	const [degrees, setDegrees] = useState("celsius");

	return (
		<TemperatureContext.Provider value={{ degrees, setDegrees }}>
			{props.children}
		</TemperatureContext.Provider>
	);
};
