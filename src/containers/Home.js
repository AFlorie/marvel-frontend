import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import AllCharacters from "../components/AllCharacters";
import Pagination from "../components/Pagination";

import Loader from "react-loader-spinner";

const Home = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const limit = 100;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://fa-marvel-backend.herokuapp.com/?limit=${limit}&page=${page}&name=${search}`
          //`http://localhost:3001/?limit=${limit}&page=${page}&name=${search}`
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
  }, [page, search]);
  console.log(search);
  return isLoading ? (
    <div className="loader">
      <Loader
        type="Oval"
        color="#EE171F"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
      <h2>Chargement en cours</h2>
    </div>
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
            placeholder="Recherche"
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
