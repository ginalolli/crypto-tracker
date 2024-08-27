# Crypto Tracker

A simple cryptocurrency tracker that fetches the latest prices of the top 10 cryptocurrencies using the CoinMarketCap API. The project includes a Node.js proxy server to handle API requests, avoiding CORS issues, and a basic front-end built with HTML, CSS, and vanilla JavaScript.

## Features

- Displays the current prices of the top 10 cryptocurrencies in USD.
- Refresh button to fetch the latest data.
- Proxy server to securely handle API requests.

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v12 or higher)
- An API key from [CoinMarketCap](https://coinmarketcap.com/api/)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/crypto-tracker.git
   cd crypto-tracker
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up the API key:**

   - Replace `'YOUR_API_KEY_HERE'` in the `proxy.js` file with your actual CoinMarketCap API key.

4. **Run the proxy server:**

   ```bash
   node proxy.js
   ```

5. **Open the application:**

   - Open `public/index.html` in your web browser.

### Directory Structure

```plaintext
crypto-tracker/
├── node_modules/       # Node.js dependencies
├── public/             # Front-end files
│   ├── index.html      # Main HTML file
│   ├── styles.css      # CSS for styling the app
│   └── app.js          # JavaScript for fetching and displaying data
├── .gitignore          # List of files and directories to ignore in Git
├── package.json        # Project dependencies and scripts
├── proxy.js            # Node.js proxy server to handle API requests
└── README.md           # Project documentation
```

### How It Works

1. **Node.js Proxy Server:**
   - The `proxy.js` file sets up an Express server that listens on port 3000.
   - It handles requests to `/crypto` by fetching data from the CoinMarketCap API using the provided API key.
   - The proxy server avoids CORS issues by acting as an intermediary between the client and the API.

2. **Front-End:**
   - The front-end is built with HTML, CSS, and vanilla JavaScript.
   - The `app.js` file fetches cryptocurrency data from the proxy server and displays it in a user-friendly format.
   - The user can click the "Refresh" button to get the latest data.

### Possible Future Enhancements

- Add more detailed information for each cryptocurrency, such as market cap, 24-hour change, and volume.
- Implement sorting and filtering options for the displayed cryptocurrencies.
- Use a front-end framework like React or Vue.js for a more dynamic user experience.


### Key Sections:
- **Project Overview:** A brief introduction to the project and its features.
- **Getting Started:** Instructions for setting up and running the project locally, including prerequisites and installation steps.
- **Directory Structure:** Overview of the project's file structure.
- **How It Works:** Explanation of how the proxy server and front-end interact.
- **Possible Future Enhancements:** Suggestions for  improvements.
