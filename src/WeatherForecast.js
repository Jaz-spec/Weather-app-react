import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import ForecastDay from "./ForecastDay";

export default function WeatherForecast(props) {
	const [ready, setReady] = useState(false);
	const [dailyData, setDailyData] = useState();

	useEffect(() => {
		//prompts an API call when the city value changes
		setReady(false);
	}, [props.city]);

	function search() {
		//makes an API call
		const apiKey = "oa9f439cb230f940atf8b1fac2e41075";
		const apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${props.city}&key=${apiKey}&units=metric`;
		axios.get(apiUrl).then(handleResponse);
	}

	function handleResponse(response) {
		//stores response in {dailyData}
		setReady(true);
		setDailyData(response.data.daily);
	}

	if (ready) {
		//renders the forecast if data is ready
		return (
			<div className="forecastContainer">
				{dailyData.map((daily, index) => {
					//loops through array of days and sends data to ForecastDay component
					if (index < 6 && index > 0) {
						return <ForecastDay data={daily} key={index} />;
					} else return null;
				})}
			</div>
		);
	} else {
		search();
	}
}
