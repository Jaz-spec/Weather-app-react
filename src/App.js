import "./App.css";

function App() {
	return (
		<div className="App">
			<form>
				<input type="text" placeholder="Enter a city here..." required />
				<input type="submit" />
			</form>
			<h1>London</h1>
			<h2>24 degrees</h2>
			<ul>
				<li>Thursday 31 October</li>
				<li>condition: light rain</li>
				<li>humidity: 44%</li>
				<li>wind speed: 15km/h</li>
			</ul>
			<div>
				Coded by Jaz and open sourced on
				<a
					href="https://github.com/Jaz-spec/Weather-app-react"
					target="_blank"
					rel="noreferrer">
					GitHub
				</a>
			</div>
		</div>
	);
}

export default App;
