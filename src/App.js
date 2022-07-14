import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';
import Addemployee from './components/employee';
import DisplayEmail from './components/DisplayEmail';



function App() {
  const[employeeId, setEmployeesId] = useState();

  const getEmployeeIdhandler = (id) => {
    console.log("the id employee be edited" , id);
    setEmployeesId(id);
  };

  const [mail,setmail]=useState([]);


   const addEmail = ((Name,Lname,Email) => {
  setmail((Fname )=> [...Fname , {
    Fname:Name,
    Lname:Lname,
    Email:Email,

  }])

console.log(mail)

   })

  return (

    <div className="Container">
  
 
  <Addemployee id={addEmail} setEmployeesId={setEmployeesId}/>
   <DisplayEmail  getEmployeeId={getEmployeeIdhandler}/>
   
  
   
    </div>
  );
}

export default App;
