import React, { useState } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import ForecastDay from "./ForecastDay";

export default function WeatherForecast(props) {
	const [forecast, setForecast] = useState({ ready: false });
	const [dailyData, setDailyData] = useState();

	function search() {
		const apiKey = "oa9f439cb230f940atf8b1fac2e41075";
		const apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${props.city}&key=${apiKey}&units=metric`;
		axios.get(apiUrl).then(handleResponse);
		return null;
	}

	function handleResponse(response) {
		setForecast({ ready: true });
		setDailyData(response.data.daily);
	}

	if (forecast.ready) {
		return (
			<div className="forecastContainer">
				<ForecastDay data={dailyData[1]} />
				<ForecastDay data={dailyData[2]} />
				<ForecastDay data={dailyData[3]} />
				<ForecastDay data={dailyData[4]} />
				<ForecastDay data={dailyData[5]} />
			</div>
		);
	} else {
		search();
	}
}
