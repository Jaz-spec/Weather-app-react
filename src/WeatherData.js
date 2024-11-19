import React from "react";
import FormattedDate from "./FormattedDate.js";

export default function WeatherData(props) {
	return (
		<div className="weather-data">
			<div className="title">
				<div className="title-position">
					<h1>{props.data.city}</h1>
					<h2>
						{Math.round(props.data.temperature)}
						<span className="degrees">°C</span>
					</h2>
				</div>
				<div className="date">
					<FormattedDate date={props.data.time} />
				</div>
			</div>
			<ul>
				<li>condition: {props.data.condition}</li>
				<li>humidity: {props.data.humidity}%</li>
				<li>wind speed: {props.data.wind}km/h</li>
			</ul>
		</div>
	);
}
