import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecast() {
	return (
		<div className="forecastContainer">
			<div className="dayContainer">
				<div className="day">Monday</div>
				<div className="icon">icon</div>
				<div className="temperatures">
					<div className="tempHigh">5°</div>
					<div className="tempLow">1°</div>
				</div>
			</div>
		</div>
	);
}
