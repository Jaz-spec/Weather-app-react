import React from "react";

export default function ForecastDay(props) {
	console.log(props);

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
	return (
		<div className="dayContainer">
			<div className="day">{day()}</div>
			<img
				className="icon"
				src={props.data.condition.icon_url}
				alt={props.data.condition.description}
			/>
			<div className="temperatures">
				<div className="tempHigh">
					{Math.round(props.data.temperature.maximum)}°
				</div>
				<div className="tempLow">
					{Math.round(props.data.temperature.minimum)}°
				</div>
			</div>
		</div>
	);
}
