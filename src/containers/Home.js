import React, { useState, useEffect } from "react";
import axios from "axios";

import AllCharacters from "../components/AllCharacters";

const Home = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://fa-marvel-backend.herokuapp.com/"
          // "http://localhost:3001/"
        );
        //console.log(response.data.data);
        setData(response.data.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);
  return isLoading ? (
    <div>Chargement en cours</div>
  ) : (
    <AllCharacters data={data} />
  );
};

export default Home;
