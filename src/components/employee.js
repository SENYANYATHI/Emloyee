
import { async } from "@firebase/util";
import { Alert } from "bootstrap";
import React, {useEffect, useState} from "react";
import "../css/employee.css";
import EmployeesDetailservice from "./services/employeeservice";







function Addemployee (id){
   
    const[Fname ,setName] =useState("");
    const[Lname ,setLname] =useState("");
    const[Email ,setEmail] =useState("");
    const [message , setMessage]=useState({error:false, msg: ""});


    const handleSubmit= async (e)=> {
        e.preventDefault ();
        setMessage("");
        
        if (Fname === "" || Lname === ""  || Email === "") {
            setMessage({error:true,msg: "ALL FIELDS ARE REQUIRED"});
            return;
        }
        const newemployee = {
            Fname,
            Lname,
            Email,
        };
        console.log(newemployee);
        try {
       
            await EmployeesDetailservice.AddEmployee(newemployee);
            message({error:false, msg: "new employee added successfully"});
        } catch(err){
        setMessage ({error: true ,msg: err.message});
       
        }
       
        setName("");
        setLname("");
        setEmail("");

        
    };
    const add=(() =>{
        console.log(Fname)
        console.log(Lname)
        console.log(Email)
    
  
       
});

    const editHandler = async() => {
        setMessage("");
        try {
            const docsnap = await EmployeesDetailservice.get (id);
            console.log("the record is :", docsnap.data());
            setName(docsnap.data().Fname);
            setLname(docsnap.data().Lname);
            setEmail(docsnap.data().Email);

        } catch(err) {
            setMessage({error:true, msg:err.message});
        }
    };
    useEffect(() => {
        console.log("the  id here is :" , id)
        if (id !== undefined && id !==""){
            editHandler();

        }
    },[id]);
   
  
   

    return(
     
        
    
   <div className="p-4 box">
 
  
            <form onSubmit={handleSubmit}>
            
            <div className="new-employee"><strong>Nem Employee</strong></div>
        <br></br> 
            <label>First Name</label><br></br>
            <input placeholder="enter your Fname " 
            
            onChange={(e)=> setName (e.target.value)}/><br></br>
           
                <label>Last Name</label><br></br>
            <input placeholder="enter your Lname "
            name="name" 
            onChange={(e)=> setLname (e.target.value)}/><br></br>
            
                <label>Email</label><br></br>
            <input placeholder="enter your Email "  name="email" 
            onChange={(e)=> setEmail (e.target.value)}/>
            
            
            <br></br>
            <button id="btn" type="Submit">Add/Update Employee</button>
      
           
            </form>
            
          
           
         

        </div>
         
       
    );
}



export default Addemployee;