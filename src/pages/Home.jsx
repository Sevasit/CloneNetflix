import React from "react";
import Main from "../components/Main";
import Row from "../components/Row";
import requests from "../requests";

const Home = () => {
  return (
    <>
      <Main />
      <Row rowID="1" title="Up coming" FetchURL={requests.requestUpcoming} />
      <Row rowID="2" title="Poppular" FetchURL={requests.requestPopular} />
      <Row rowID="3" title="Trending" FetchURL={requests.requestTrending} />
      <Row rowID="4" title="TopRated" FetchURL={requests.requestTopRated} />
      <Row rowID="5" title="Horror" FetchURL={requests.requestHorror} />
    </>
  );
};

export default Home;
