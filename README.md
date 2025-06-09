Data Visualization Dashboard - Frontend
This is the frontend part of the Data Visualization Dashboard. It is built using React.js and D3.js to create interactive data visualizations.

Technologies Used
React.js

D3.js

Axios

JavaScript

CSS

 Project Structure
 visualization-frontend/
│
├── src/
│   ├── components/
│   │   ├── D3Tabs.jsx        // Tab layout for different charts
│   │   ├── LineChart.jsx     // Intensity vs Year Line Chart
│   │   ├── DonutChart.jsx    // Top Topics Donut Chart
│   │   └── ScatterPlot.jsx   // Relevance vs Likelihood Scatter Plot
│   │
│   ├── pages/
│   │   └── Dashboard.jsx     // Main dashboard page with filters
│   │
│   ├── services/
│   │   └── api.js            // Axios API calls to backend
│   │
│   ├── App.js                // Root component
│   └── index.js              // Entry point
│
├── package.json
└── README.md

 Setup Instructions
Clone the Repository
git clone https://github.com/Priyam280399/Priyam280399-Data_Visualization_Frontend.git
cd visualization-frontend

Install Dependencies

npm install


Start the React App

npm start


Backend API Dependency
Make sure your backend server is running at http://localhost:5000.
The frontend will fetch data from it using Axios.

Features
Interactive Line Chart: Intensity over the years

Donut Chart: Top 10 topics

Scatter Plot: Relevance vs Likelihood

Dynamic filters:

End Year

Topic

Sector

Region

PEST

SWOT

Source

Country

City

Tab-based chart layout

Clean and responsive UI
