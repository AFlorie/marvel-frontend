import react, { useState } from "react";
import noPicture from "../img/noPhoto.png";

const AllCharacters = ({ data }) => {
  const [focus, setFocus] = useState(false);
  const [idFocus, setIdFocus] = useState(0);
  //console.log(idFocus);
  return (
    <div className="charactersContainer">
      {data.results.map((character, index) => {
        // console.log(character);
        return (
          <div
            className="characterProfil"
            key={character.id}
            onMouseEnter={() => {
              setFocus(true);
              setIdFocus(character.id);
            }}
            onMouseLeave={() => {
              setFocus(false);
            }}
          >
            <span>{character.name}</span>
            {/* <img
              className={
                idFocus === character.id && focus ? "hidden" : "display"
              }
              src={
                character.thumbnail.path ===
                "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available"
                  ? `${noPicture}`
                  : `${character.thumbnail.path}.${character.thumbnail.extension}`
              }
              alt=""
            /> */}
            <p
              className={`characterInfo" ${
                idFocus === character.id && focus ? "display" : "hidden"
              } `}
            >
              {character.description}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default AllCharacters;
