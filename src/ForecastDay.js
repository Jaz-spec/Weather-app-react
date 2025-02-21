import React, { useContext } from "react";
import { TemperatureContext } from "./context";

export default function ForecastDay(props) {
	const { degrees } = useContext(TemperatureContext);
	let maxTemp = Math.round(props.data.temperature.maximum);
	let minTemp = Math.round(props.data.temperature.minimum);

	function convertToFahrenheit(temp) {
		return (temp * 9) / 5 + 32;
	}
	function day() {
		let date = new Date(props.data.time * 1000);
		let day = date.getDay();
		let days = [
			"Sunday",
			"Monday",
			"Tuesday",
			"Wednesday",
			"Thursday",
			"Friday",
			"Saturday",
		];
		return days[day];
	}
	if (degrees !== "celsius") {
		maxTemp = Math.round(convertToFahrenheit(props.data.temperature.maximum));
		minTemp = Math.round(convertToFahrenheit(props.data.temperature.minimum));
	}

	return (
		<div className="dayContainer">
			<div className="day">{day()}</div>
			<img
				className="icon"
				src={props.data.condition.icon_url}
				alt={props.data.condition.description}
			/>
			<div className="temperatures">
				<div className="tempHigh">{maxTemp}°</div>
				<div className="tempLow">{minTemp}°</div>
			</div>
		</div>
	);
}
