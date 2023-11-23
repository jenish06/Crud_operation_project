import React, { Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Table } from "react-bootstrap";
import Emploayees from "./Emploayees";
import {Link,  useNavigate } from "react-router-dom";

const Home = () => {

  let history = useNavigate();

  const handleEdite = (id, name, age) =>{
    localStorage.setItem('name',name)
    localStorage.setItem('age',age)
    localStorage.setItem('id',id)
  }

  const handleDelete = (id) =>{
    var index = Emploayees.map(function(e){
      return e.id
    }).indexOf(id);

    Emploayees.splice(index,1);
    history('/');
  }
  return (
    <Fragment>
      <div style={{ margin: "10rem" }}>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {Emploayees && Emploayees.length > 0
              ? Emploayees.map((item) => {
                  return (
                    <tr key={item.id}>
                      <td>{item.name}</td>
                      <td>{item.age}</td>
                      <td>
                        <Link to={'/edit'}>
                        <Button onClick={() => handleEdite(item.id, item.name, item.age)}>Edit</Button> 
                        </Link>
                        &nbsp;
                        <Button onClick={() => handleDelete(item.id)}>DELETE</Button>
                      </td>
                    </tr>
                  );
                })
              : <tr>
                <td colSpan={3}>"No data available"</td>
                </tr>
                }
          </tbody>
        </Table>
        <br></br>
        <Link className="d-grid gap-2" to="create">
          <Button size="lg">Create</Button>
        </Link>
      </div>
    </Fragment>
  );
};

export default Home;
