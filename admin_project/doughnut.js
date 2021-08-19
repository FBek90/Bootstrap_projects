new Chart(document.getElementById("doughnut-chart"), {
	type: 'doughnut',
	data: {
		labels: ["California", "Utah", "Texas", "Nevada", "Oregon"],
		datasets: [
			{
				label: "Users",
				backgroundColor: ["#042d48", "#4e9ba5", "#07775f", "#865d52", "#961107"],
				data: [100, 200, 250, 300, 120]
        }
      ]
	},
	options: {
		title: {
			display: true,
			text: 'Predicted USers'
		}
	}
});
