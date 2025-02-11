# Travel Agency Website

This is a travel agency website built using **React**, **Tailwind CSS**, **Material-UI**, **React Router DOM**, and **json-server**. The project focuses on creating a responsive, user-friendly UI with dynamic data fetched from a mock API. It includes features like a hamburger menu, slider, login and registration pages, and more.

## Features

- **Responsive Design**: Built with Tailwind CSS for a clean and modern look across all devices.
- **Dynamic Data**: Data is fetched from `json-server`, avoiding hardcoded content.
- **Navigation**: Includes a fully functional hamburger menu and page routing using React Router DOM.
- **Slider**: A responsive image slider showcasing destinations.
- **Accordion**: Utilizes Material-UI's Accordion for expanding content.
- **Authentication Pages**: Includes UI for login and registration pages (authentication functionality is not implemented).
- **API Integration**: Data like images, prices, ratings, and descriptions are fetched from a local API.

## Tech Stack

- **React**: For building the UI.
- **Tailwind CSS**: For styling.
- **Material-UI (MUI)**: Used for specific components like the Accordion.
- **React Router DOM**: For handling routing between pages.
- **json-server**: To create a mock API for fetching dynamic data.

## UI Design

The UI design was inspired by a [Figma design](https://www.figma.com/design/IA7ddcEdDyIBBE8pjX10Tt/Travel-Agency-\(Community\)?node-id=93-41). However, I customized several parts of the UI to improve usability and fix design issues present in the original file.

## Getting Started

### Prerequisites

Make sure you have **Node.js** and **npm** installed on your machine.

### Installation

1. **Clone the repository:**

   ```bash
   git clone <repository-link>
   cd <repository-folder>
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start json-server:**

   Make sure `json-server` is installed globally or as a dev dependency. If not, install it:

   ```bash
   npm install -g json-server
   ```

   Then, start the server:

   ```bash
   json-server --watch db.json --port 3001
   ```

4. **Run the React app:**

   In a separate terminal:

   ```bash
   npm start
   ```

The React app will run on [http://localhost:3000](http://localhost:3000), and `json-server` will serve the API at [http://localhost:3001](http://localhost:3001).

## Customization

- **API Data**: Data for the cities, tours, and other content is stored in `db.json` and fetched via `json-server`.
- **UI Adjustments**: Some elements were modified from the original Figma design to enhance the user experience.

## License

This project is for educational purposes and serves as a portfolio piece.

