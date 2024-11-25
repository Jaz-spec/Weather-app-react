import React from "react";
import FormattedDate from "./FormattedDate.js";
import Temperature from "./Temperature.js";

export default function WeatherData(props) {
	return (
		<div className="weather-data">
			<div className="title">
				<div className="title-position">
					<h1>{props.data.city}</h1>
					<span className="icon-container">
						<img src={props.data.iconUrl} alt="icon" />
						<Temperature celsius={props.data.temperature} />
					</span>
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
