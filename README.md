# Battery Monitoring System

This project is a Battery Monitoring System (BMS) that gathers data from a connected device and displays real-time information on a web dashboard. The system includes a Python script for data collection, a web interface created with HTML and Highcharts for data visualization, and a Node.js script for handling MQTT communication.

## Table of Contents

- [Project Structure](#project-structure)
- [Web Dashboard](#web-dashboard)
- [MQTT Communication](#mqtt-communication)
- [Data Collection](#data-collection)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Additional Resources](#additional-resources)
- [License](#license)

## Project Structure

The project consists of the following files:

- **`index.html`**: The main HTML file for the web dashboard.
- **`main.js`**: JavaScript file for creating and updating Highcharts, as well as handling data retrieval from an AWS endpoint.
- **`mykey`**: File containing security credentials for accessing the AWS endpoint.
- **`python.py`**: Python script for data collection, MQTT communication, and battery percentage calculation.

## Web Dashboard

The `index.html` file sets up a simple dashboard using HTML and includes Highcharts for real-time data visualization. The dashboard displays temperature, humidity, voltage, current, and power information in a tabular format and as a line chart.

## MQTT Communication

The `python.py` file handles MQTT communication with an AWS IoT endpoint. It establishes a secure connection, publishes data to the "device/data" topic, and subscribes to relevant topics for future enhancements.

## Data Collection

The Python script collects data from a connected device, performs necessary calculations (e.g., Fahrenheit conversion, power calculation), and constructs a JSON payload. This payload is then published via MQTT to the AWS IoT endpoint.

## Installation

1. Clone the repository.
2. Install the necessary Python dependencies using `pip install -r requirements.txt`.
3. Ensure that the required hardware (e.g., sensors, Raspberry Pi) is set up correctly.
4. Update the `mykey` file with your AWS security credentials.

## Usage

1. Run the Python script (`script.py`) on your Raspberry Pi or another compatible device.
2. Open the `index.html` file in a web browser to view the real-time dashboard.

## Contributing

Contributions are welcome! Please follow the guidelines in [CONTRIBUTING.md](CONTRIBUTING.md).

## Additional Resources

- [YouTube Video: Connecting Raspberry Pi to AWS IoT Core MQTT Test Client](https://www.youtube.com/watch?v=adKuyckikuw)
- [Blog Post: World's Simplest Synchronous Serverless IoT Dashboard](https://dev.to/aws-heroes/worlds-simplest-synchronous-serverless-iot-dashboard-3ige)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
