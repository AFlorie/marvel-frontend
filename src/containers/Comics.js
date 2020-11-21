import React, { useEffect, useState } from "react";
import axios from "axios";
import noPicture from "../img/noCover.png";

import Pagination from "../components/Pagination";

const Comics = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(1);
  const [page, setPage] = useState(1);

  const limit = 20;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          //`https://fa-marvel-backend.herokuapp.com/comics?limit=${limit}&page=${page}`
          `http://localhost:3001/comics?limit=${limit}&page=${page}`
        );
        setData(response.data.data);
        setTotalPages(
          Math.ceil(response.data.data.total / response.data.data.limit)
        );
        setIsLoading(false);
        //console.log(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
    // eslint-disable-next-line
  }, [data, page]);

  return isLoading ? (
    <div>chargement en cours</div>
  ) : (
    <>
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
      <Pagination page={page} setPage={setPage} totalPages={totalPages} />
    </>
  );
};

export default Comics;
