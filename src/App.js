import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import WeatherData from "./WeatherData";

function App(props) {
	const [weatherData, setWeatherData] = useState({ ready: false });
	const [cityInput, setCityInput] = useState(props.city);
	const [formValues, setFormValues] = useState({ name: "" });
	const [buttonText, setButtonText] = useState("Submit");

	function handleChange(event) {
		//Sets city value as user types
		setFormValues({ name: event.target.value });
		if (formValues.name.length > 0) {
			setCityInput(event.target.value);
		} else console.log("search stopped");
	}

	function handleSubmit(event) {
		//Sends city value to search function when user submits
		event.preventDefault();
		setButtonText("Loading...");
		search(cityInput);
		console.log(`Searching for ${cityInput}`);
		setFormValues({ name: "" });
	}

	function search(cityInput) {
		//Sends API data to handle response function
		const apiKey = "oa9f439cb230f940atf8b1fac2e41075";
		const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${cityInput}&key=${apiKey}&units=metric`;
		axios.get(apiUrl).then(handleResponse);
		console.log("retreiving data");
	}

	function handleResponse(response) {
		//formats data from API
		console.log(response);
		setButtonText("Submit");

		setWeatherData({
			ready: true,
			city: response.data.city,
			time: new Date(response.data.time * 1000),
			condition: response.data.condition.description,
			temperature: response.data.temperature.current,
			humidity: response.data.temperature.humidity,
			wind: response.data.wind.speed,
			icon: response.data.condition.icon,
			iconUrl: response.data.condition.icon_url,
		});
	}

	if (weatherData.ready) {
		// displays if weather data has been set
		return (
			<div className="App">
				<div className="container">
					<form onSubmit={handleSubmit}>
						<input
							onChange={handleChange}
							className="input-text"
							value={formValues.name}
							type="text"
							placeholder="Enter a city..."
							id="inputValue"
							required
							autoComplete="off"
						/>
						<input
							onClick={handleSubmit}
							className="input-submit"
							type="submit"
							value={buttonText}
						/>
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
		search(cityInput);
		return <div className="loading">Loading...</div>;
	}
}

export default App;
