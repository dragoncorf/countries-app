import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
const Card = ({name, languages}) => {
  return (
    <div className="card">
          <span>Name: {name}</span>
          <span className="languages">Languages: {languages}. </span>
    </div>
  );
};

export default Card;
