import React, { Component } from "react";
import { connect } from "react-redux";
import {
  requestForPictures,
  requestComplete,
  getPictures,
  updateAmount
} from "./actions";
import { Col, Row, Container } from "react-bootstrap";
import ChangeAmount from "./changeAmount";
import "./App.css";

class App extends Component {
  componentDidUpdate() {
    console.log("COMPONENT_DID_UPDATE");
  }
  render() {
    console.log("RENDERING");
    return (
      <div>
        <h1 className="py-3" id="header">
          Get 50 Pictures
        </h1>
        <Container className="mt-5" style={{ fontFamily: "Neucha" }}>
          <Row className="justify-content-center">
            <Col id="col" sm={4} md={4}>
              <h2> Status </h2>
              <span id="statusValue">{this.props.status}</span>
            </Col>

            <Col id="col" sm={4}>
              <h2>Rendered</h2>
              <span id="value">{this.props.rendered}</span>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col id="col" sm={4}>
              <h2>Picture Count</h2>
              <span id="value">{this.props.pictures.length}</span>
            </Col>
            <Col id="col" sm={4}>
              <h2>Amount</h2>
              <span id="value">{this.props.amount}</span>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col className="mb-5">
              {/* changeAmount.js */}
              <ChangeAmount {...this.props} />
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col>
              <h2>Pictures</h2>
              {this.props.pictures.map(pic => (
                <img key={pic.id} src={pic.thumbnailUrl} alt={pic.title} />
              ))}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onUpdateAmount: amount => dispatch(updateAmount(amount)),
    onGetPictures: val => {
      getPictures(val)
        .then(pictures => dispatch(requestForPictures(pictures)))
        .catch(error => console.log("Error:", error));
      setTimeout(() => {
        dispatch(requestComplete());
      }, 2000);
    }
  };
};
const mapStateToProps = state => {
  return {
    status: state.status,
    pictures: state.pictures,
    rendered: state.rendered,
    amount: state.amount
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
