# ☀️🌦️ Weather App 🌩️❄️

A sleek and user-friendly weather application built with **HTML**, **CSS**, and **JavaScript**. This app delivers up-to-date weather information by fetching data from the OpenWeatherMap API based on the city entered by the user. It dynamically displays temperature, humidity, wind speed, and weather conditions, complemented by intuitive icons and visually responsive backgrounds to enhance the user experience.

---

## Features

- Search weather by city name.  
- Displays temperature in Celsius.  
- Shows humidity and wind speed.  
- Dynamically changes background image based on weather conditions (Clear, Clouds, Rain, Snow).  
- Responsive design with a modern, clean UI.  
- Error handling for invalid city names.

---

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Edge, Safari).  
- An internet connection to fetch weather data from OpenWeatherMap API.

### Installation

1. Clone the repository:

 ```bash
 git clone https://github.com/yourusername/weather-app.git
 ```
2. Navigate into the project folder:
```bash
cd weather-app
```
3. Open `index.html` in your preferred browser.
---
## Usage
-   Enter the city name in the search input.
    
-   Click the search button or press Enter.
    
-   View the current weather details and background changes based on the weather condition.
---
## API
This project uses the OpenWeatherMap API to retrieve weather data. An API key is required and is currently set in the `script.js` file:
```bash
const apiKey = "YOUR_API_KEY_HERE";
```
Replace `YOUR_API_KEY_HERE` with your own API key from OpenWeatherMap.

---
## Folder Structure
```
weather-app/
│
├── images/            # Weather icons 
├── photos/            # Background images
├── index.html         # Main HTML file
├── style.css          # Styling file
└── script.js          # JavaScript logic for fetching and displaying weather data
```
---
## Technologies Used
-   HTML5
    
-   CSS3 (Flexbox)
    
-   JavaScript (Fetch API, Async/Await)
    
-   OpenWeatherMap API
