import React, { useEffect, useState } from "react";
import axios from "axios";
import noPicture from "../img/noCover.png";

const Comics = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://fa-marvel-backend.herokuapp.com/comics"
        );
        setData(response.data.data);
        setIsLoading(false);
        //console.log(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [data]);

  return isLoading ? (
    <div>chargement en cours</div>
  ) : (
    <div className="comicsContainer">
      {data.results.map((comic, index) => {
        return (
          <div className="comic" key={comic.id}>
            <span> {comic.title}</span>
            <img
              src={
                comic.thumbnail.path ===
                "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available"
                  ? `${noPicture}`
                  : `${comic.thumbnail.path}.${comic.thumbnail.extension}`
              }
              alt=""
            />
          </div>
        );
      })}
    </div>
  );
};

export default Comics;
