import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import http from "../http";
import Container from "react-bootstrap/Container";
import "./Books.css";
import Col from "react-bootstrap/Row";

import axios from "axios";

const Books = () => {
  const api = http();
  const { id } = useParams();
  const [books, setBooks] = useState({});

  useEffect(() => {
    getBooks();
    return () => {};
  }, []);
  async function getBooks() {
    const { data } = await api.get(`/books/${id}`);
    setBooks(data);
  }

  return (
    <Container>
      {books && (
        <div className="containerBar">
          <Col className=" gap-4" sm="12" md="1">
            <div className="imageSide">
              <img src={books.cover} alt="" className="banner mb-4" />
            </div>
            <div className="infoSide">
              <h1>{books.title}</h1>
              <p>Rating: {books.rating}</p>
              <p>Genres: {books.genres + " "}</p>
              <p className="plot">Plot: {books.plot}</p>
              <p>
                Url:{" "}
                <a href={books.url} className="url" target="_blank">
                  {books.url}
                </a>
              </p>
              <div>
                <h5>Reviews</h5>
                {books.review && (
                  <div className="reviews">
                    <p>Name: {books.review.name}</p>
                    <p>Comment:</p>
                    <p> {books.review.body}</p>
                  </div>
                )}
              </div>
            </div>
          </Col>
        </div>
      )}
    </Container>
  );
};

export default Books;
