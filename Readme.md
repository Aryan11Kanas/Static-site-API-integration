# 🌦️ Weather Dashboard

A simple Weather Dashboard built using HTML, CSS, and JavaScript.

This project includes:
- Login Authentication using a local `users.json` file
- Live Weather Search using the WeatherAPI
- Dynamic background image based on current weather conditions

---

## Features

- User Login
- Username & Password Validation
- Weather Search by City
- Displays:
  - Temperature
  - Humidity
  - Wind Speed
  - Weather Condition
- Background changes according to weather
- Responsive UI

---

## Technologies Used

- HTML5
- CSS3
- JavaScript (Vanilla JS)
- JSON
- Fetch API
- WeatherAPI

---

## Project Structure

```
Mini_Project/
│
├── index.html
├── dashboard.html
├── login.js
├── dashboard.js
├── style.css
├── users.json
│
└── images/

```

---

## Login Credentials

| Username | Password |
|----------|----------|
| admin | password123 |
| student | jsbasic2026 |

---

## How to Run

1. Download or clone this repository.
2. Open the project in VS Code.
3. Install the **Live Server** extension.
4. Right-click **index.html**.
5. Select **Open with Live Server**.
6. Login using one of the provided credentials.
7. Search for any city to view the current weather.

---

## Weather API Setup

This project uses the **WeatherAPI** service.

1. Create a free account on :contentReference[oaicite:0]{index=0}.
2. Generate your API key from your account dashboard. :contentReference[oaicite:1]{index=1}
3. Open `dashboard.js`.
4. Replace:

```javascript
const apiKey = "YOUR_API_KEY";
```

with

```javascript
const apiKey = "YOUR_API_KEY_HERE";
```

---

## Images

For the best visual experience, add high-quality weather images inside the **images** folder.

You can use any copyright-free weather images or GIFs.

---

## Notes

- Run the project using **Live Server**.
- Do not open the HTML files directly using `file://`.
- Internet connection is required for fetching weather data.

---

## Author

Aryan
