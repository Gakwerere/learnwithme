
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import AllRouter from './Router/index';

function App() {
  return (
        <BrowserRouter>
            <AllRouter/>
        </BrowserRouter>
  );
}
export default App;


//  {/* <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header> */}



 // <ThemeProvider theme={theme}>
    // <Router>
    // <div className="App">
    //   <Navbar/>
    //   <div >
    //     <Switch>
    //      <Route exact path="/">
    //        <Home/>
    //        </Route>
    //      <Route exact path="/Course">
    //        <Course/>
    //        </Route>
    //        <Route exact path="/Register">
    //        <Register/>
    //        </Route>
    //        <Route exact path="/CareerAdvice">
    //        <CareerAdvice/>
    //        </Route>
    //     </Switch>
    //   </div>
    // </div>
    // </Router>
    // </ThemeProvider>


    // const theme = createTheme({
//   palette: {
//     primary: {
//       main: '#0F766E',
//     },
//     secondary: {
//       main: '#E5E5E5',
//     }
// }})


// import { ThemeProvider } from '@material-ui/core/';
//  import { purple } from '@material-ui/core/colors';
// import { createTheme } from '@material-ui/core';
// import Course from './Course';
// import CareerAdvice from './CareerAdvice';
// import Register from './Register';
// import NavBar1 from './NavBar/NavBar1';
// import Home from './Home';
// import Navbar from './NavBar/NavBar';