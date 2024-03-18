import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "./Booklist.css";

const Booklist = (props) => {
  return (
    <Card className="cardName ">
      <Card.Img className="cardImage" variant="top" src={props.cover} />

      <Card.Body className="cardBody">
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>Rating: {props.rating}</Card.Text>
        <Card.Text>Genres: {props.genres + " "}</Card.Text>
      </Card.Body>
      <Button
        className="cardButton mb-2 bg-"
        variant="info"
        as={Link}
        to={`/books/${props.book_id}`}
      >
        More Info
      </Button>
    </Card>
  );
};

export default Booklist;
