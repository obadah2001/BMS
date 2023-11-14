let data = [];
let dataTable = document.querySelector("#dataTable tbody");

// create the chart with empty data
let myChart = Highcharts.chart("container1", {
  title: {
    text: "Line chart",
  },
  subtitle: {
    text: "subtitle",
  },
  yAxis: {
    title: {
      text: "Value",
    },
  },
  xAxis: {
    type: "datetime", // set the x-axis to be datetime
    scrollbar: {
      enabled: true,
    },
  },
  legend: {
    layout: "vertical",
    align: "right",
    verticalAlign: "middle",
  },
  plotOptions: {
    series: {
      label: {
        connectorAllowed: false,
      },
    },
  },
  series: [
    {
      name: "Temperature (in °C)",
      data: [],
    },
    {
      name: "Temperature (in °F)",
      data: [],
    },
    {
      name: "Humidity (in %)",
      data: [],
    },
    {
      name: "Voltage (in V)",
      data: [],
    },
    {
      name: "Current (in mA)",
      data: [],
    },
    {
      name: "Power (in W)",
      data: [],
    },
  ],
});

// function to get weather data
let getWeatherData = function () {
  $.ajax({
    type: "GET",
    url: "https://bms2023.s3.amazonaws.com/mykey",
    dataType: "json",
    success: function (response) {
      console.log("response", response);
      // add the new data to the data array
      data.push({
        x: Date.now(), // use the current time as the x-value
        y0: Number(response.CelsiusTemperature),
        y1: Number(response.FahrenheitTemperature),
        y2: Number(response.Humidity),
        y3: Number(response.Voltage),
        y4: Number(response.Current),
        y5: Number(response.Power),
      });
      // redraw the chart with the updated data
      myChart.series[0].setData(data.map(({ x, y0 }) => [x, y0]), true);
      myChart.series[1].setData(data.map(({ x, y1 }) => [x, y1]), true);
      myChart.series[2].setData(data.map(({ x, y2 }) => [x, y2]), true);
      myChart.series[3].setData(data.map(({ x, y3 }) => [x, y3]), true);
      myChart.series[4].setData(data.map(({ x, y4 }) => [x, y4]), true);
      myChart.series[5].setData(data.map(({ x, y5 }) => [x, y5]), true);

      // add the raw values to the table
      dataTable.innerHTML = `
        <tr>
          <td>${response.CelsiusTemperature}</td>
          <td>${response.FahrenheitTemperature}</td>
          <td>${response.Humidity}</td>
          <td>${response.Voltage}</td>
          <td>${response.Current}</td>
          <td>${response.Power}</td>
        </tr>
      ` + dataTable.innerHTML;
    },
    error: function (xhr, status, error) {
      console.error("JSON error:", status);
    },
  });
};

let intervalTime = 2 * 1000; // 2 second interval polling, change as you like

let intervalId; // declare a variable to hold the interval id

// function to start the data polling
let startPolling = function() {
  intervalId = setInterval(() => {
    getWeatherData();
  }, intervalTime);
};

// function to stop the data polling
let stopPolling = function() {
  clearInterval(intervalId);
};

// start the data polling
startPolling();