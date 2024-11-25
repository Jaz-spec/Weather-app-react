import React, { useState } from "react";

export default function FormattedDate(props) {
	function getNth(date) {
		if (date > 3 && date < 21) {
			return "th";
		}
		switch (date % 10) {
			case 1:
				return "st";
			case 2:
				return "nd";
			case 3:
				return "rd";
			default:
				return "th";
		}
	}

	let day = props.date.getDay();
	let date = props.date.getDate();
	let hours = props.date.getHours();
	if (hours < 10) {
		hours = `0${hours}`;
	}
	let minutes = props.date.getMinutes();
	if (minutes < 10) {
		minutes = `0${minutes}`;
	}
	let days = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
	];
	let nth = getNth(date);

	return (
		<div>
			{days[day]} {date}
			{nth} {hours}:{minutes}{" "}
		</div>
	);
}
