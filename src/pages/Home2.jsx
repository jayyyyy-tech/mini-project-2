import { useState, useEffect } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import ButtonGroup from "react-bootstrap/ButtonGroup";
import { Link } from "react-router-dom";
import Booklist from "../components/Booklist";
import "./home.css";
import http from "../http";
import Button from "react-bootstrap/Button";
import "./home2.css";

const Home = () => {
  const api = http();
  const [books3, setBooks3] = useState([]);
  const [books4, setBooks4] = useState([]);

  useEffect(() => {
    getBooks3();
    getBooks4();
    return () => {};
  }, []);

  async function getBooks3() {
    const options = {
      url: "/books",
      params: { p: "3" },
    };
    const { data } = await api.request(options);

    setBooks3(data);
  }
  async function getBooks4() {
    const options = {
      url: "/books",
      params: { p: "4" },
    };
    const { data } = await api.request(options);
    setBooks4(data);
  }

  return (
    <>
      <Container>
        <div className="bookItem"></div>
        <Row gap={2}>
          {books3.map((item) => {
            return (
              <Col key={item.book_id} sm="6" md="3" className=" mb-4">
                <Booklist
                  className="cardBook"
                  book_id={item.book_id}
                  title={item.title}
                  cover={item.cover}
                  rating={item.rating}
                  genres={item.genres}
                />
              </Col>
            );
          })}
          {books4.map((item) => {
            return (
              <Col key={item.book_id} sm="6" md="3" className="mb-4">
                <Booklist
                  className="cardBook"
                  book_id={item.book_id}
                  title={item.title}
                  cover={item.cover}
                  rating={item.rating}
                  genres={item.genres}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
      <div className="buttonInfo">
        <ButtonGroup aria-label="Second group">
          <Button
            className="cardButton  mb-2 me-2"
            variant="outline-info"
            as={Link}
            to={`/`}
          >
            1
          </Button>
        </ButtonGroup>
        <ButtonGroup aria-label="Second group">
          <Button className="cardButton mb-2 " variant="info" disabled>
            2
          </Button>
        </ButtonGroup>
      </div>

      {/* <Paging /> */}
    </>
  );
};

export default Home;
