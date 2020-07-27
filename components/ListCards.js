import React from "react";
import gql from "graphql-tag";
import { useQuery } from "react-apollo";
import Card from "./Card.js";

const FEED_QUERY = gql`
  query getCountries($continentCode: String!) {
    countries(filter: { continent: { eq: $continentCode } }) {
      name
      languages {
        name
      }
    }
  }
`;
const FEED_QUERY_ALT = gql`
  {
    countries {
      name
      languages {
        name
      }
    }
  }
`;
const ListCards = ({ search, code }) => {
  const result = useQuery(code === "" ? FEED_QUERY_ALT : FEED_QUERY, {
    variables: { continentCode: code },
  });
  let countries;
  if (result.data) {
    countries = result.data.countries.filter((country) =>
      country.name.includes(search)
    );
  }
  return (
    <div className="listCards">
      {result.loading ? <div>loading</div> : <span></span>}
      {result.error ? <span>error</span> : <span></span>}

      {result.data && (
        <div style={{display:"flex", flexDirection:"column"}}>
          {countries.length === 0 ? (
            <span>Sin resultados</span>
          ) : (
            countries.map((country, index) => {
              return (
                <Card
                  key={index}
                  name={country.name}
                  languages={country.languages
                    .map((language) => language.name)
                    .join("/ ")}
                />
              );
            })
          )}
        </div>
      )}
    </div>
  );
};

export default ListCards;
