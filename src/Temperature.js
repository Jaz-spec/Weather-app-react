import React, { useContext } from "react";
import { TemperatureContext } from "./context";

export default function Temperature(props) {
	const { degrees, setDegrees } = useContext(TemperatureContext);
	console.log(degrees);
	function showFahrenheit(event) {
		event.preventDefault();
		setDegrees("fahrenheit");
	}

	function showCelsius(event) {
		event.preventDefault();
		setDegrees("celsius");
	}

	function convertToFahrenheit() {
		return (props.celsius * 9) / 5 + 32;
	}

	if (degrees === "celsius") {
		return (
			<h2>
				{Math.round(props.celsius)}
				<span className="degrees">
					°C |{" "}
					<a className="degreesLink" onClick={showFahrenheit} href="/">
						°F
					</a>{" "}
				</span>
			</h2>
		);
	} else {
		return (
			<h2>
				{Math.round(convertToFahrenheit())}
				<span className="degrees">
					<a className="degreesLink" onClick={showCelsius} href="/">
						°C
					</a>{" "}
					| °F
				</span>
			</h2>
		);
	}
}
