import { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Pagination from "react-bootstrap/Pagination";
import axios from "axios";
import Booklist from "../components/Booklist";
import "./home.css";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import http from "../http";
import { Link } from "react-router-dom";

const Home = () => {
  const api = http();
  const [carouselItems, setCarouselItems] = useState([]);
  const [books, setBooks] = useState([]);
  const [books2, setBooks2] = useState([]);

  useEffect(() => {
    getBooks();
    getBooks2();
    return () => {};
  }, []);

  async function getBooks() {
    const options = {
      url: "/books",
    };
    const { data } = await api.request(options);
    const newCarouselItems = data.filter((_, index) => {
      return index < 3;
    });
    setBooks(data);
    setCarouselItems(newCarouselItems);
  }
  async function getBooks2() {
    const options = {
      url: "/books",
      params: { p: "2" },
    };
    const { data } = await api.request(options);
    setBooks2(data);
  }

  return (
    <>
      <Carousel className=" mb-4">
        {carouselItems.map((item) => {
          return (
            <Carousel.Item
              key={item.book_id}
              className="caroItem position-relative"
            >
              <img className="coverItem carousel-img" src={item.cover} />
              <Carousel.Caption className="textBack">
                <h3>{item.title}</h3>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
      <Container>
        {/* <h2 className="text-center mb-4 gap-4">Books:</h2> */}
        <Row gap={2}>
          {books.map((item) => {
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
          {books2.map((item) => {
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
          <Button className="cardButton me-2 mb-2" variant="info" disabled>
            1
          </Button>
        </ButtonGroup>
        <ButtonGroup aria-label="Second group">
          <Button
            className="cardButton mb-2"
            variant="outline-info"
            as={Link}
            to={`/Home2`}
          >
            2
          </Button>
        </ButtonGroup>
      </div>
    </>
  );
};

export default Home;
