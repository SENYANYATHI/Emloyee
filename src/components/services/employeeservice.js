
import { db } from "../firebase-config";



import { collection,
    getDocs,
    getDoc,
    addDoc,
    updateDoc,
    deleteDoc,
    doc} from "firebase/firestore";


    const EmployeeCollectionRef = collection(db,"employees");
    class EmployeesDetailservice {

        AddEmployee=(newemployee) => {
            return addDoc (EmployeeCollectionRef,newemployee);

        };
        updateEmployee = (id,updatedemployee) => {
            const employeedetails = doc (db,"employees",id);
            return updateDoc(employeedetails,updatedemployee);

        };
        deleteEmployee= (id) => {
            const employeedetails = doc(db,"employees",id);
            return deleteDoc(employeedetails);
        };

        getAllEmployees = () => {
            return getDocs(EmployeeCollectionRef);
        };
        getEmployee = (id) => {
            const employeedetails = doc (db,"employees",id);
            return getDoc(employeedetails);

        };
    }

    export default  new EmployeesDetailservice();
