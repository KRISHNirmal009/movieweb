import { Button } from "react-bootstrap";

// import Footer from "../comp/footer";
import Form from 'react-bootstrap/Form';
import axios from "axios";
import { useState } from "react";

function From() {
    const [user,setUser] = useState({})
    const [index,setIndex]=useState({});
    const [user1,setUser1]=useState([]);
  async  function Checks(evt) {
    console.log(evt.target.value);
    setIndex(evt.target.value)
    
        
    }
    
   async function Check() {
        let data= await axios.get(`https://api.github.com/users/${index}`);
        console.log(data);
        setUser(data.data)
    }
    async function Check3() {
        let krishna= await axios.get(`https://api.github.com/users/${index}/repos`);
        // console.log(krishna.data);
        setUser1(krishna.data)
        
    }
   
    return (
       <>
     <Form.Group controlId='firstName'>
              <Form.Label>First Name</Form.Label>
              <Form.Control type='text' onChange={Checks} placeholder='Enter Here' name='firstName' />
            </Form.Group>
            <Button variant='primary' type='submit' onClick={Check}>
          Submit
        </Button>
        <Button variant='primary' type='submit' onClick={Check3}>
          repos
        </Button>
        <p>{user.login}</p>
        <img src={user.avatar_url}></img>
       
        {user1.map(val=>{
            return<h2>{val.name}</h2>
        })}      
       </>
    );
}

export default From;