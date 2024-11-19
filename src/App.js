import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import WeatherData from "./WeatherData";

function App(props) {
	const [weatherData, setWeatherData] = useState({ ready: false });
	function handleResponse(response) {
		setWeatherData({
			ready: true,
			city: response.data.city,
			time: new Date(response.data.time * 1000),
			condition: response.data.condition.description,
			temperature: response.data.temperature.current,
			humidity: response.data.temperature.humidity,
			wind: response.data.wind.speed,
		});
	}

	if (weatherData.ready) {
		return (
			<div className="App">
				<div className="container">
					<form>
						<input
							className="input-text"
							type="text"
							placeholder="Enter a city here..."
							id="inputValue"
							required
						/>
						<input className="input-submit" type="submit" />
					</form>
					<WeatherData data={weatherData} />
				</div>
				<div className="footer">
					Coded by Jaz and open sourced on{" "}
					<a
						href="https://github.com/Jaz-spec/Weather-app-react"
						target="_blank"
						rel="noreferrer">
						GitHub
					</a>
				</div>
			</div>
		);
	} else {
		const apiKey = "oa9f439cb230f940atf8b1fac2e41075";
		const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.city}&key=${apiKey}&units=metric`;
		axios.get(apiUrl).then(handleResponse);
		return "Loading...";
	}
}
export default App;
