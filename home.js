import React, { useState, useEffect } from 'react';  // Import React and hooks
import axios from 'axios';  // Import axios for API calls
import { Link } from 'react-router-dom';  // Import Link for routing

export default function Home() {
  const [games, setGames] = useState([]);  // State to hold the games data

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/games');  // Fetch data from API
        setGames(response.data);  // Set the games data to state
      } catch (error) {
        console.error('Error fetching games:', error);  // Handle errors
      }
    };

    fetchData();  // Call fetchData when the component mounts
  }, []);  // Empty array means it runs once when the component mounts

  return (
    <div>
      <h1>Games List</h1>
      <ul>
        {games.map((game) => (
          <li key={game.title}>
            <Link to={`/detail?title=${game.title}`}>{game.title}</Link>  {/* Make each title clickable */}
          </li>
        ))}
      </ul>
    </div>
  );
}