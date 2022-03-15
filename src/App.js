import { useState } from "react";
import Hello from './hello';

function App() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [fullName, setFullName] = useState("");
    //function handleChange(event){
    //    setFirstName(event.target.value);
    // }
    // function handleChange2(event){
    //    setLastName(event.target.value);
    // }
    //onChange ={(e)=> setLastName(e.target.value)}
    return (
        <div>
            firstName:
            <input type="text" id="txtName" onChange={(e) => setFirstName(e.target.value)} />
            <br></br>

            lastName:
            <input type="text" id="txtLName" onChange={(e) => setLastName(e.target.value)} />

            <br></br>
            <button value="submit" onClick={(e) => {
                setFullName(firstName + lastName)

            }

            }>show</button>
            <Hello name={fullName} />
            {/* <Hello name={lastName} /> */}
        </div>
    )//add comment
}

export default App
