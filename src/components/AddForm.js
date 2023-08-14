import {Form,Button} from "react-bootstrap";
import { EmployeeContext } from "../context/EmployeeContext";
import { useContext ,useState} from "react";
const AddForm = () =>{
    const {dispatch} = useContext(EmployeeContext);
    // const [name,setName]=useState("");
    // const [email,setEmail]=useState("");
    // const [address,setAddress]=useState("");
    // const [phone,setPhone]=useState("");
    const [newEmployee,setNewEmployee] =useState({
        name:"",email:"",address:"",phone:""
    });
    const{name,email,address,phone}=newEmployee;
    const onInputChange = (e)=>{
        setNewEmployee({...newEmployee,[e.target.name]:e.target.value})
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        // addEmpoloyee(name,email,address,phone)
        dispatch({type:"add_employee",employee:{name,email,address,phone}})
    }

  
    
    return(
        <Form onSubmit={handleSubmit}>
            <Form.Group >
                <Form.Control type="text" value={name} name="name" onChange={e=>onInputChange(e)} placeholder="Name *" required/>
            </Form.Group>
            <Form.Group>
                <Form.Control type="email" value={email} name="email" onChange={e=>onInputChange(e)} placeholder="Email *" required/>
            </Form.Group>
            <Form.Group>
                <Form.Control as="textarea" value={address} name="address" onChange={e=>onInputChange(e)} placeholder="Address" rows={3}/>
            </Form.Group>
            <Form.Group>
                <Form.Control type="text" value={phone} name="phone" onChange={e=>onInputChange(e)} placeholder="Phone" />
            </Form.Group>
            <Button variant="succes" type="submit"> Add New Employee</Button>
        </Form>
    );
}

export default AddForm;