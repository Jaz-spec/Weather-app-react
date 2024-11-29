import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import WeatherData from "./WeatherData";
import WeatherForecast from "./WeatherForecast";

function App(props) {
	const [weatherData, setWeatherData] = useState({ ready: false });
	const [cityInput, setCityInput] = useState(props.city);
	const [formValues, setFormValues] = useState({ name: "" });
	const [buttonText, setButtonText] = useState("Submit");
	const [errorMessage, setErrorMessage] = useState("");

	useEffect(() => {
		//Clears form value on submit
		setFormValues({ name: "" });
	}, [buttonText]);

	function handleChange(event) {
		//Sets city value as user types
		//and stops API calls when form value is cleared
		setFormValues({ name: event.target.value });
		if (formValues.name.length > 0) {
			setCityInput(event.target.value);
		} else console.log("search stopped");
	}

	function handleSubmit(event) {
		//Sends city value to search function when user submits
		event.preventDefault();
		search(cityInput);
		//and manages some beauty features
		setButtonText("Loading...");
		setErrorMessage("");
		console.log(`Searching for ${cityInput}`);
	}

	function search(cityInput) {
		//Makes API call and calls handle response function
		const apiKey = "oa9f439cb230f940atf8b1fac2e41075";
		const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${cityInput}&key=${apiKey}&units=metric`;
		axios.get(apiUrl).then(handleResponse);
		console.log("retreiving data");
	}

	function handleResponse(response) {
		//formats data from API and catches any API errors
		try {
			if (response.data.status === "not_found") {
				console.log(response.data.message);
				setErrorMessage(response.data.message);
			}
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
		} catch (error) {
			console.log("error");
		}
	}

	if (weatherData.ready) {
		// displays if weather data has been set
		return (
			<div id="app" className="App">
				<div className="flexContainer">
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
						<div className="error-message">{errorMessage}</div>
						<WeatherData data={weatherData} />
					</div>
					<WeatherForecast city={weatherData.city} />
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
