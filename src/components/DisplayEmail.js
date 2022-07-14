
import { Table,Button } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import "../css/DisplayEmail.css";
import EmployeesDetailservice from "./services/employeeservice";
import { addDoc } from "firebase/firestore";




function DisplayEmail ({ getEmployeeId}) {
    const[employees, setemployees]= useState([]);
        useEffect(() => {
                getEmployees();
    
        }, []);
    
     const getEmployees = async() => {
            const data = await EmployeesDetailservice.getAllEmployees();
            console.log(data.docs);
            setemployees(data.docs.map((doc) => ({...doc.data(), id :doc.id })))

        };
        const editHandler= async (id) => {
            await EmployeesDetailservice.updateEmployee(id);
            getEmployeeId();
        };

        const deleteHandler = async (id) => {
            await EmployeesDetailservice.deleteEmployee(id);
            getEmployeeId();
        };
        return(
    
    
    <>
    <div className="mb-2">
        <button variant="dark edit" onClick={getEmployees }>
            REFRESH LIST
            </button>

    </div>

    {/*<pre>{JSON.stringify(employees,undefined,2)}</pre>*/}
    
    <caption><strong>EMPLOYEE LIST</strong></caption>
        
    
        <Table striped bordered hover size="sm">
    
    <thead>
        <tr>
            <th>EmployeeId</th>
            <th>Fisrt name</th>
            <th>Last name</th>
            <th>Email Address</th>
            <th>Action</th>
        </tr>
    
    </thead>
    
    <tbody>
 
            
       
    
        {employees.map((doc,index) => {
return(

  <tr key={ doc.id}>
    <td>{index + 1}</td>
    <td>{doc.Fname}</td>
    <td>{doc.Lname}</td>
    <td>{doc.Email}</td>
<td>
    <Button variant="secondary" className="edit" 
    onClick={(e) => getEmployeeId(doc.id)}>edit</Button>
<button variant="dark delete" className="delete" onClick={(e) => deleteHandler(doc.id) }>
            delete
            </button>

</td>
</tr>

);
        })}
      
     
    </tbody>
    </Table>
            
       
    </>         
            
        );
        
    }
export default DisplayEmail;