import React, { useEffect } from "react";
import { connect } from "react-redux";

import { Alert, Container } from "reactstrap";
import { getConcerts, loadConcertsRequest } from "../../../redux/concertsRedux";

const Prices = ({ concerts, loadConcerts }) => {
  useEffect(() => {
    loadConcerts();
  }, []);

  const days = ['one', 'two', 'three'];
  return (
    <Container>
      <h1>Prices</h1>
      <p>
        Prices may differ according the day of the festival. Remember that
        ticket includes not only the star performance, but also 10+ workshops.
        We gathered several genre teachers to help you increase your vocal
        skills, as well as self confidence.
      </p>

      <Alert color="info">
        Attention!
        <strong>
          Children under 4 can go freely with you without any other fee!
        </strong>
      </Alert>
      {concerts && concerts.map(({price, workshops}, index) => (
        <>
          <h2>Day {days[index]} </h2>
          <p>Price: {price}$</p>
          <p>
            Workshops: {workshops.map(({name}) =>  name).join(', ')}
          </p>
        </>
      ))}
    </Container>
  );
};

const mapStateToProps = (state) => ({
  concerts: getConcerts(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadConcerts: () => dispatch(loadConcertsRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Prices);
