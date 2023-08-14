import { Form, Button } from "react-bootstrap";
import { EmployeeContext } from "../context/EmployeeContext";
import { useContext, useState } from "react";
const EditForm = ({theEmployee}) => {
  const { dispatch } = useContext(EmployeeContext);

  const employee = theEmployee;
  const id = employee.id;
  const [name, SetName] = useState(employee.name);
  const [email, SetEmail] = useState(employee.email);
  const [address, SetAddress] = useState(employee.address);
  const [phone, SetPhone] = useState(employee.phone);
  const updatedEmployee = {id,name,email,address,phone}; 
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({type:"update_employee",id,updatedEmployee});
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Control
          type="text"
          value={name}
          name="name"
          onChange={(e) => SetName(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="email"
          value={email}
          name="email"
          onChange={(e) => SetEmail(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          as="textarea"
          value={address}
          name="address"
          onChange={(e) => SetAddress(e.target.value)}
          rows={3}
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="text"
          value={phone}
          name="phone"
          onChange={(e) => SetPhone(e.target.value)}
        />
      </Form.Group>
      <Button variant="succes" type="submit">
        {" "}
        Update Employee
      </Button>
    </Form>
  );
};

export default EditForm;
