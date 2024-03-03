<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>YouTube Clone Project</title>
</head>

<body>

    <h1>YouTube Clone Project</h1>

    <h2>Overview</h2>
    <p>This project is a YouTube clone that leverages the YouTube API to fetch video data. 🎉 It provides users with a familiar interface, showcasing videos, views, likes, comments, and recommended videos.</p>

    <h2>Features</h2>
    <ul>
        <li>Browse videos from different categories. 📺</li>
        <li>Display video details, including views, likes, comments, and published time.</li>
        <li>Show a list of recommended videos based on the user's preferences.</li>
        <li>Include a sidebar with categories, channel information, and subscriber count.</li>
    </ul>

    <h2>Technologies Used</h2>
    <ul>
        <li>React.js: JavaScript library for building user interfaces.</li>
        <li>YouTube API: To fetch video data and related information.</li>
        <li>CSS: Styling for a responsive and visually appealing UI. 🎨</li>
    </ul>

    <h2>What I Learned</h2>
    <p>During the development of this YouTube clone project, I gained valuable insights and improved my skills in several areas:</p>

    <h3>Clean Architecture</h3>
    <p>I implemented a clean architecture to organize my project structure effectively. By separating components into logical folders and modules, I achieved better code organization, readability, and maintainability. 🏛️</p>

    <h3>Effective Use of Props and React Hooks</h3>
    <p>I learned how to make efficient use of React props and hooks to pass data between components, manage component state, and handle side effects. This allowed for a more modular and reusable component structure. ⚛️</p>

    <h3>Fetching Data from API</h3>
    <p>Utilizing the YouTube API, I learned how to make asynchronous requests to fetch video data dynamically. This experience enhanced my understanding of handling API responses, error handling, and optimizing data fetching processes. 🌐</p>

    <h3>Clean Code Practices</h3>
    <p>I focused on writing clean and readable code by adhering to best practices and principles. This includes meaningful variable and function naming, avoiding code duplication, and organizing code blocks logically. 🧹</p>

    <h3>CSS Responsivity</h3>
    <p>Ensuring a responsive design was a crucial aspect of this project. I applied CSS media queries and flexbox to create a layout that adapts to various screen sizes, providing a seamless user experience across different devices. 📱</p>

    <h2>Getting Started</h2>

    <h3>Prerequisites</h3>
    <p>Node.js: Make sure Node.js is installed on your machine.</p>

    <h3>Installation</h3>
    <ol>
        <li>Clone the repository:</li>
        <code>git clone https://github.com/your-username/youtube-clone.git</code>
        <li>Navigate to the project directory:</li>
        <code>cd youtube-clone</code>
        <li>Install dependencies:</li>
        <code>npm install</code>
        <li>Set up YouTube API key:</li>
        <ul>
            <li>Obtain a YouTube Data API key from the Google Cloud Console.</li>
            <li>Copy the API key and replace the placeholder in the project with your key.</li>
        </ul>
        <li>Start the development server:</li>
        <code>npm start</code>
        <li>Open your browser and go to <a href="http://localhost:3000">http://localhost:3000</a> to view the YouTube clone.</li>
    </ol>

    <h2>Project Structure</h2>
    <pre>
youtube-clone/
|-- src/
|   |-- api/
|   |   |-- apiKey.js
|   |   |-- data.js
|   |-- assets/
|
|   |-- components/
|   |   |-- Feed/
|   |   |   |-- Feed.css
|   |   |   |-- Feed.jsx
|   |   |
|   |   |-- Navbar/
|   |   |   |-- Navbar.css
|   |   |   |-- Navbar.jsx
|   |   |
|   |   |-- PlayVideo/
|   |   |   |-- PlayVideo.css
|   |   |   |-- PlayVideo.jsx
|   |   |
|   |   |-- Recommended/
|   |   |   |-- Recommended.css
|   |   |   |-- Recommended.jsx
|   |   |
|   |   |-- Sidebar/
|   |       |-- Sidebar.css
|   |       |-- Sidebar.jsx
|
|   |-- pages/
|       |-- Home/
|       |   |-- Home.css
|       |   |-- Home.jsx
|       |
|       |-- Videos/
|           |-- Videos.css
|           |-- Videos.jsx
|
|   |-- App.jsx
|   |-- index.css
|   |-- main.jsx
|   |-- .gitignore
|   |-- index.html
|   |-- package.json
|   |-- README.md
    </pre>

    <h2>Usage</h2>
    <ul>
        <li>Navigate through different video categories using the sidebar.</li>
        <li>Click on a video to view its details, including views, likes, comments, and recommended videos.</li>
        <li>Explore recommended videos based on your preferences.</li>
    </ul>

    <h2>Acknowledgments</h2>
    <p>I would like to express my gratitude to <strong>GreatStack</strong> for their valuable resources and tutorials that contributed to my learning during the development of this project.</p>

</body>

</html>
