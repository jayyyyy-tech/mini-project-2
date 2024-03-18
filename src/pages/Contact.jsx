import Form from "react-bootstrap/Form";
import "./Contact.css";
import Button from "react-bootstrap/Button";

function Contact() {
  return (
    <div className="contact">
      <Form className="contactCard">
        <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Button className="button" as="input" type="submit" value="Submit" />{" "}
      </Form>
    </div>
  );
}

export default Contact;
