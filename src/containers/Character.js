import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import noPicture from "../img/noCover.png";

const Character = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  //console.log(id);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          // `https://fa-marvel-backend.herokuapp.com/character/${id}`
          `http://localhost:3001/character/${id}`
        );

        // console.log(response.data.data.results);
        setData(response.data.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [id]);

  return isLoading ? (
    <div>chargement en cours</div>
  ) : (
    <div className="comicsContainer">
      {data.results.map((comic, index) => {
        console.log(comic);
        console.log(comic.thumbnail.path + "." + comic.thumbnail.extension);
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

export default Character;
