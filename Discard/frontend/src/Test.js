import axios from "axios";
import './Test.css';
import Button from 'react-bootstrap/Button';

function Test() {

    function handleSubmit(e) {
        e.preventDefault(); // Prevents browser from reloading.

        axios.post("http://127.0.0.1:8000/backend/addUser")
        .then((res) => {
            console.log("chancellor stinks");            
        })
        .catch((error) => {
            console.log(error);
        });
    }

    return (
        <div className="TestBody">
            <form method="post" onSubmit={handleSubmit}>
                <h1>Login</h1>
                <label>Username: </label>
                <input></input>
                <br />
                <label>Password: </label>
                <input></input>
                <br />
                <button type="submit">Submit form</button>
            </form>            
        </div>
    );
}

export default Test;