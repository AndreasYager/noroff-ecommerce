import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  FormGroup,
  Label,
  Input,
  Button,
  Form,
  FormFeedback,
} from "reactstrap";

const ContactPage = () => {
  const [form, setForm] = useState({
    fullName: "",
    subject: "",
    email: "",
    body: "",
  });
  const [errors, setErrors] = useState({});
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateForm = () => {
    let tempErrors = {};
    tempErrors.fullName =
      form.fullName.length > 2
        ? ""
        : "Full name must have at least 3 characters.";
    tempErrors.subject =
      form.subject.length > 2 ? "" : "Subject must have at least 3 characters.";
    tempErrors.email = /^\S+@\S+\.\S+$/.test(form.email)
      ? ""
      : "Email must be a valid email address.";
    tempErrors.body =
      form.body.length > 2 ? "" : "Message must have at least 3 characters.";
    setErrors(tempErrors);
    return Object.values(tempErrors).every((x) => x === "");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      console.log(form);
      setForm({
        fullName: "",
        subject: "",
        email: "",
        body: "",
      });
      setSubmitSuccess(true);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  return (
    <Container>
      <Row>
        <Col md={{ size: 6, offset: 3 }}>
          <p>Please fill out the form below to get in touch with us.</p>

          {submitSuccess && (
            <div className="alert alert-success" role="alert">
              Your message has been successfully sent.
            </div>
          )}

          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="fullName">Full Name</Label>
              <Input
                type="text"
                name="fullName"
                id="fullName"
                value={form.fullName}
                onChange={handleChange}
                invalid={!!errors.fullName}
              />
              <FormFeedback>{errors.fullName}</FormFeedback>
            </FormGroup>
            <FormGroup>
              <Label for="subject">Subject</Label>
              <Input
                type="text"
                name="subject"
                id="subject"
                value={form.subject}
                onChange={handleChange}
                invalid={!!errors.subject}
              />
              <FormFeedback>{errors.subject}</FormFeedback>
            </FormGroup>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                type="email"
                name="email"
                id="email"
                value={form.email}
                onChange={handleChange}
                invalid={!!errors.email}
              />
              <FormFeedback>{errors.email}</FormFeedback>
            </FormGroup>
            <FormGroup>
              <Label for="body">Message</Label>
              <Input
                type="textarea"
                name="body"
                id="body"
                value={form.body}
                onChange={handleChange}
                invalid={!!errors.body}
              />
              <FormFeedback>{errors.body}</FormFeedback>
            </FormGroup>
            <Button color="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactPage;
