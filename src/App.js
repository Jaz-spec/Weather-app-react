import "./App.css";

function App() {
	return (
		<div className="App">
			<form>
				<input
					className="input-text"
					type="text"
					placeholder="Enter a city here..."
					required
				/>
				<input className="input-submit" type="submit" />
			</form>
			<div className="title">
				<h1>London</h1>
				<h2>
					24<span className="degrees">°C</span>
				</h2>
			</div>
			<ul>
				<li>Thursday 31 October</li>
				<li>condition: light rain</li>
				<li>humidity: 44%</li>
				<li>wind speed: 15km/h</li>
			</ul>
			<div className="footer">
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
