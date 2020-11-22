import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import AllCharacters from "../components/AllCharacters";
import Pagination from "../components/Pagination";

const Home = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("Recherche");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const limit = 5;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          //`https://fa-marvel-backend.herokuapp.com/comics?limit=${limit}&page=${page}`
          `http://localhost:3001/?limit=${limit}&page=${page}$name=${search}`
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
  }, [data]);

  return isLoading ? (
    <div>Chargement en cours</div>
  ) : (
    <>
      <section className="search">
        <div className="inputSearch">
          <i>
            <FontAwesomeIcon icon="search" />
          </i>
          <input
            type="text"
            id="searchBar"
            name="searchBar"
            placeholder={search}
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          ></input>
          <span>Triés par A-Z</span>
        </div>
      </section>
      <AllCharacters data={data} />
      <Pagination page={page} setPage={setPage} totalPages={totalPages} />
    </>
  );
};

export default Home;
