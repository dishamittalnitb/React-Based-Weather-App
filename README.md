# React-Based Weather App

A modern, responsive weather application built with React and Vite that provides real-time weather information for any location worldwide.

## 🌤️ Features

- **Search by Location**: Search for weather information by entering any city name
- **Real-time Weather Data**: Fetches current weather data from OpenWeatherMap API
- **Weather Conditions Display**: Shows temperature, humidity, sea level, and weather description
- **Dynamic Visual Indicators**: Weather icons change based on conditions (sunny, rainy, cold, etc.)
- **Responsive Design**: Beautiful card-based UI using Material-UI components
- **Error Handling**: User-friendly error messages for invalid locations
- **Dynamic Background Images**: Weather cards display context-appropriate background images

## 📊 Weather Information Displayed

- **Temperature**: Current temperature in Celsius
- **Feels Like**: How the temperature feels to the user
- **Humidity**: Current humidity percentage
- **Sea Level**: Atmospheric pressure at sea level
- **Weather Description**: Detailed description of current weather conditions
- **Weather Icons**: Visual indicators (⛅ sunny, 🌧️ rainy, ❄️ cold, 🌊 low sea level)

## 🛠️ Tech Stack

- **Frontend Framework**: React 19.0.0
- **Build Tool**: Vite 6.2.3
- **UI Library**: Material-UI (MUI) 7.0.1
- **Styling**: Emotion (CSS-in-JS)
- **Icons**: MUI Icons
- **Language**: JavaScript (ES Module)
- **Package Manager**: npm

## 📦 Dependencies

```json
{
  "@emotion/react": "^11.14.0",
  "@emotion/styled": "^11.14.0",
  "@fontsource/roboto": "^5.2.5",
  "@mui/icons-material": "^7.0.1",
  "@mui/material": "^7.0.1",
  "react": "^19.0.0",
  "react-dom": "^19.0.0"
}
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/dishamittalnitb/React-Based-Weather-App.git
   cd React-Based-Weather-App
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   - Navigate to `http://localhost:5173` (or the port shown in terminal)

### Build for Production

```bash
npm run build
```

The optimized build will be created in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
React-Based-Weather-App/
├── src/
│   ├── components/
│   │   ├── App.jsx           # Main App component
│   │   ├── App.css           # App styling
│   │   ├── WeatherApp.jsx    # Weather App wrapper component
│   │   ├── SearchBox.jsx     # Search input component
│   │   ├── SearchBox.css     # Search box styling
│   │   ├── InfoBox.jsx       # Weather info display component
│   │   └── InfoBox.css       # Info box styling
│   ├── index.css             # Global styles
│   ├── main.jsx              # React entry point
│   └── assets/               # Static assets
├── public/                   # Public assets
├── index.html                # HTML entry point
├── vite.config.js            # Vite configuration
├── eslint.config.js          # ESLint configuration
├── package.json              # Project metadata and dependencies
└── README.md                 # This file
```

## 🔑 Key Components

### App.jsx
Main application component that renders the WeatherApp component.

### WeatherApp.jsx
Wrapper component that manages the state and coordinates between SearchBox and InfoBox components.

### SearchBox.jsx
- Handles user input for city search
- Fetches weather data from OpenWeatherMap API
- Manages form submission and error states
- Uses Material-UI TextField and Button components

### InfoBox.jsx
- Displays weather information in a Material-UI Card
- Shows dynamic background images based on weather conditions
- Renders weather icons based on current conditions
- Displays temperature, humidity, sea level, and weather description

## 🌐 API Integration

The app uses the **OpenWeatherMap API** to fetch weather data.

**API Endpoint**: `https://api.openweathermap.org/data/2.5/weather`

**Query Parameters**:
- `q`: City name
- `appid`: API key
- `units=metric`: Returns temperature in Celsius

**Note**: The API key in the code is for demonstration purposes. For production, use environment variables to store sensitive API keys.

## 🎨 UI/UX Highlights

- **Material Design**: Uses Material-UI for a modern, professional look
- **Icon System**: Weather-specific icons (WbSunnyIcon, AcUnitIcon, ThunderstormIcon, TsunamiIcon)
- **Card Layout**: Information presented in easy-to-read card format
- **Responsive Typography**: Using MUI Typography for consistent text styling
- **Custom Styling**: Combines MUI sx props with custom CSS for fine-tuned design

## 🌡️ Weather Condition Logic

The app determines visual appearance based on:
- **Humidity > 65%**: Rainy/Thunderstorm 🌧️
- **Sea Level < 1008**: Low pressure/Tsunami warning 🌊
- **Temperature > 20°C**: Hot/Sunny ☀️
- **Temperature ≤ 20°C**: Cold ❄️

## 🧪 Code Quality

- **ESLint**: Configured for code quality
- **React Best Practices**: Uses hooks (useState) for state management
- **Error Handling**: Try-catch blocks for API calls
- **User Feedback**: Clear error messages for invalid inputs

## 📝 Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint code quality checks |

## 🐛 Error Handling

- Invalid city names show: "No such Place found in our APIs"
- API errors are caught and displayed to the user
- Form validation ensures required fields are filled

## 🔮 Future Enhancements

- [ ] 5-day/7-day weather forecast
- [ ] Multiple location support
- [ ] Weather alerts and notifications
- [ ] Temperature unit toggle (°C/°F)
- [ ] Wind speed and direction
- [ ] UV index information
- [ ] Local storage to save favorite locations
- [ ] Dark/Light theme toggle
- [ ] Geolocation-based weather

## 🤝 Contributing

Feel free to fork this repository and submit pull requests for any improvements.

## 📄 License

This project is open source and available under the MIT License.

## 🙋 Support

For issues, questions, or suggestions, please open an issue on the GitHub repository.

---

**Happy Weather Tracking!** 🌈
