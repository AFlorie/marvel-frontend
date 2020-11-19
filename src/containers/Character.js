import React from "react";
import { useParams } from "react-router-dom";

const Character = () => {
  const { id } = useParams();
  console.log(id);
  return <div>character </div>;
};

export default Character;
