import * as React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import { CardMedia, Link } from '@material-ui/core';
import useFetch from './useFetch';
import { useHistory } from 'react-router-dom';
import './NavBar/NavBar.css'
// import ButtonGroup from '@mui/material-ui/ButtonGroup';

const Home = () => {
    const {data ,isPanding , error} = useFetch('https://jsonplaceholder.typicode.com/posts');
    console.log(data);
    const history = useHistory();

    const handleClick = () =>{
        console.log("you click me");
        history.push('/Register');
    } 

    return ( 
      <div className="">
          <card  className="card1"
          ><div className="cardText1">Get The Skills you Never knew you needed</div>
          <div ><p>Build new skills for that “this is my year” feeling with courses, certificates, and degrees from world-class universities and companies.</p></div>
          <Button color="primary" variant="contained" className="btn1">
          Join for Free
        </Button>
        <Button color="secondary" variant="contained" className="btn2" onClick={handleClick}>
          <Link to="/Register" className="">Login</Link>
        </Button>
          </card>
          
        
        <div className="img1">
            <img src="/image/Avatar Online Learning.jpg" alt="" />
        </div>
        <text className='text3'>Some of Our Courses</text>
        <Button className="btn3" variant='contained'><text>All</text></Button>
        <div>
            
        </div>
        <div>
          <p><b>This example demonstrates how to shrink a navigation bar when the user starts to scroll the page.</b></p>
          <p>Scroll down this frame to see the effect!</p>
          <p>Scroll to the top to remove the effect.</p>
          <p><b>Note:</b> We have also made the navbar responsive, resize the browser window to see the effect.</p>
          <p>Lorem ipsum dolor dummy text to enable scrolling, sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>
     );
}
 
export default Home;