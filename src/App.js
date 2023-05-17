import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import Table from 'react-bootstrap/Table';
import "./App.css";
function App() {
  const [input, setInput] = useState({ name: '', email: '' });
  const [tableData, setTableData] = useState([]);
  const [editButton, setEditButton] = useState(false);
  const [editIndex, setEditIndex] = useState('');

  function onControlInput(e) {
    console.log(e.target.name);
    setInput({ ...input, [e.target.name]: e.target.value });
  }

  function HandleSubmit(e) {
    e.preventDefault();
    if (editButton) {
      const tempd = tableData;
      Object.assign(tableData[editIndex], input);
      console.log('table sata is', input);
      setTableData([...tempd]);
      setEditButton(false);
      setInput({ name: '', email: '' });
    } else {
      setTableData([...tableData, input]);
      setInput({ name: '', email: '' });
    }
  }
  function deleteHandle(index) {
    const filterDatat = tableData.filter((items, i) => i !== index);
    setTableData(filterDatat);
  }

  function handleEdit(index) {
    const temporaryData = tableData[index];
    setInput({
      name: temporaryData.name,
      email: temporaryData.email,
    });
    setEditButton(true);
    setEditIndex(index);
  }
  return (
    <div style={{ width: "600px", margin: "auto" }}>
      <Form  className="form-styling"  onSubmit={HandleSubmit} >
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Name"
            onChange={onControlInput}
            value={input.name}
            name="name"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3 " controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            required
            onChange={onControlInput}
            value={input.email}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          {editButton ? 'update' : 'Add'}
        </Button>
      </Form>
      <div>
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>Sr</th>
                <th>First Name</th>
                <th>Email</th>
                <th>Options</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((item, i) => (
                <tr>
                  <td>{i}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>
                    <Button
                      variant="danger"
                      style={{ margin: '0px 10px' }}
                      onClick={() => deleteHandle(i)}
                    >
                      delete
                    </Button>
                    <Button variant="warning" onClick={() => handleEdit(i)}>
                      edit
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
    </div>
  );
}

export default App;
