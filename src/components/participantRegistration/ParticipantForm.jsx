import React from "react";
import { useMemo, useState } from "react";
import Select from "react-select";
import { Row, Col, Form, Button, InputGroup, Table, Container } from "react-bootstrap";
import countryList from "react-select-country-list";

const ParticipantForm = () => {
  const [value, setValue] = useState("");
  const options = useMemo(() => countryList().getData(), []);
  console.log(options);
  const changeHandler = (value) => {
    setValue(value);
  };
  return (
    <div className="bg-white">
      <Row>
        <Col className="participant-form">
          <h1 className="reg-header">Registration Details</h1>
          <Form>
            <Row>
              <Col lg={12} sm={12}>
                <Form.Group>
                  <InputGroup>
                    <Form.Check
                      inline
                      label="Ms"
                      type="checkbox"
                      id="titleMs"
                    />
                    <Form.Check
                      inline
                      label="Mrs"
                      type="checkbox"
                      id="titleMrs"
                    />
                    <Form.Check
                      inline
                      label="Dr"
                      type="checkbox"
                      id="titleDr"
                    />
                    <Form.Check
                      inline
                      label="Prof"
                      type="checkbox"
                      id="titleProf"
                    />
                  </InputGroup>
                </Form.Group>
              </Col>
              <Col lg={12} sm={12}>
                <Form.Group className="d-flex">
                  <div style={{ flex: 1, marginRight: "10px" }}>
                    <Form.Label>Family Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="family name"
                      required
                      name="familyName"
                      className="form-control-lg"
                    />
                  </div>
                  <div style={{ flex: 1 }}>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="first name"
                      required
                      name="firstName"
                      className="form-control-lg"
                    />
                  </div>
                </Form.Group>
              </Col>
              <Col lg={12} sm={12}>
                <Form.Group className="d-flex">
                  <div style={{ flex: 1, marginRight: "10px" }}>
                    <Form.Label>position</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="add your position"
                      required
                      name="position"
                      className="form-control-lg"
                    />
                  </div>
                  <div style={{ flex: 1 }}>
                    <Form.Label>Department:</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="add your department"
                      required
                      name="department"
                      className="form-control-lg"
                    />
                  </div>
                </Form.Group>
              </Col>
              <Col lg={12} sm={12}>
                <Form.Group>
                  <Form.Label>Organisation/Company:</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="add your company"
                    required
                    name="firstName"
                    className="form-control-lg"
                  />
                </Form.Group>
              </Col>
              <Col lg={12} sm={12}>
                <Form.Group>
                  <Form.Label>Address:</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="enter the address"
                    required
                    name="address"
                    className="form-control-lg"
                  />
                </Form.Group>
              </Col>
              <Col lg={12} sm={12}>
                <Form.Group className="d-flex">
                  <div style={{ flex: 1, marginRight: "10px" }}>
                    <Form.Label>Country of Origin:</Form.Label>
                    <Select
                      options={options}
                      value={value}
                      onChange={changeHandler}
                    />
                  </div>
                  <div style={{ flex: 1, marginRight: "10px" }}>
                    <Form.Label>Zip code:</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="xxxxxx"
                      required
                      name="zipcode"
                      className="form-control-lg"
                    />
                  </div>
                  <div style={{ flex: 1 }}>
                    <Form.Label>Town:</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="town..."
                      required
                      name="town"
                      className="form-control-lg"
                    />
                  </div>
                </Form.Group>
              </Col>
              <Col lg={12} sm={12}>
                <Form.Group className="d-flex ">
                  <div style={{ flex: 1, marginRight: "10px" }}>
                    <Form.Label>Telephone:</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="add your number"
                      required
                      name="telephone"
                      className="form-control-lg"
                    />
                  </div>
                  <div style={{ flex: 1 }}>
                    <Form.Label>Email:</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="example@gmail.com"
                      required
                      name="email"
                      className="form-control-lg"
                    />
                  </div>
                </Form.Group>
              </Col>
              <Col lg={12} sm={12}>
                <Form.Group>
                  <InputGroup className="mb-3 d-flex align-items-center">
                    <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                    <Form.Label className="pt-3 pl-2">
                      Specific diet requirements (vegetarian, allergies …):
                    </Form.Label>
                  </InputGroup>
                  <Form.Control
                    type="text"
                    placeholder="specify your diet requirements..."
                    required
                    name="diet"
                    className="form-control-lg"
                  />
                </Form.Group>
              </Col>
            </Row>
            <Button className="button">Submit</Button>
          </Form>
          <p>
            If you need any other specific facilities (wheelchair access …), do
            not hesitate to inform the
          </p>
        </Col>
        <Col className="pt-3">
          <h1 className="reg-header">Registration Fee</h1>
          <Container>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th className="text-light">#</th>
                <th className="text-light">Rwandans</th>
                <th className="text-light">Africans</th>
                <th className="text-light">Internationals</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Registration Type</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Early Birds</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Normal fee</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </Table>
          </Container>
         <p style={{textAlign:"center"}}>The registration fee includes workshop material, coffee breaks and
          lunch.
          </p>
        </Col>
        <Col lg={12}>
          <h1 className="reg-header">Cancellation Policy</h1>
          <p className="canselation-col">
            All cancellations must be in writing. Cancellations received 5 days
            before the event are subject to a charge of 25% of the registration
            fees for administrative costs. Cancellations received 2 days to the
            event or on the event day, full payment will be requested and
            refunds will not be provided. Replacements by colleagues, i.e.
            transfer of the registration at no extra cost, are much welcome.
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default ParticipantForm;
