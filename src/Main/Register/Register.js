import React , {useState} from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
// import SendToMobileIcon from '@mui/icons-material/SendToMobile';
import { FormControlLabel, makeStyles } from '@material-ui/core';
// import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { TextField } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import RadioGroup  from '@material-ui/core/RadioGroup';
import FormLabel  from '@material-ui/core/FormLabel';
import FormControl  from '@material-ui/core/FormControl';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
    field : {
        marginTop : 30,
        marginBottom: 30 ,
        display : 'block',
        width: '766px',
        height: '100px',
        left: '1019px',
        top: '529px',
        
        // background: '#0F766E',
        //border: '1px solid #0F766E',
        boxSizing: 'border-box',
        borderRadius: '20px',
      },
  
    btn: {
      fontSize : 13,
      background: 'violete',
      '&:hover':{
        background: 'gary'
      },
      position: 'absolute',
    width: '400px',
    height: '50px',
    left: '1019px',
    top: '903px',

    //background: '#0F766E',
    border: '2px solid #0F766E',
    boxSizing: 'border-box',
    borderRadius: '20px',
    },
    title : {
      // textDecoration : 'underline',
      marginBottom : 10 ,
      marginTop: 20,
      marginLeft: '200px',

     fontFamily: 'Mulish',
     fontSize: '50px',
    fontStyle: 'bold',
    fontWeight: '550px',
    lineHeight: '238px',
    letterSpacing:'0em',
     textAlign: 'center',
    },
});
const Register = () => {

    const classes = useStyles()
    return ( 
        <Container>
             <Typography
        className={classes.title}
        noWrap
        variant="h4"
        component="h2"
        gutterBottom
        color = 'primary'
      >
        Register
      </Typography>
      <div >
        <div className="img2">
          <img src="/image/register.jpeg" alt="" />
          <div 
           style={{
             
           }}
          >
            <p>Already have an account?</p>
          </div>
          <Button
          style={{
            marginLeft: '-40ch',
            position: 'absolute',
            width: '296px',
            height: '78px',
            left: '488px',
            top: '640px',
            
            background: '#0F766E','&:hover':{
              background: 'gary'
            },
            borderRadius: '10px',
        }}
        onClick={() => console.log('You click me')}
        color='secondary'
        type="submit"
        variant="contained"
        >SingIn
          </Button>
        </div> 
      </div>
      <div className="Registe">
      <form noValidate autoComplete='off' > 
      {/* onSubmit={handleSubmit} */}
        <TextField 
          // onChange={(e) => setTitle(e.target.value)}
           className = {classes.field}
           label = "Note Title"
           variant ="outlined"
           color='primary'
           fullWidth 
           required
          // error={titleError}
        />
        <TextField 
           //onChange={(e) => setDetails(e.target.value)}
           className = {classes.field}
           label = "Details"
           variant ="outlined"
           color='primary'
           multiline
           rows={4}
           fullWidth 
           required
           //error={detailsError}
        />
        <FormControl className={classes.field}>
        {/* <FormLabel>Note Category</FormLabel>
        <RadioGroup value={category} onChange={(e) =>setCategory(e.target.value) }>
          <FormControlLabel value="moneny" control={<Radio/>} label="Moneny"></FormControlLabel>
          <FormControlLabel value="todos" control={<Radio/>} label="Todos"></FormControlLabel>
          <FormControlLabel value="remaider" control={<Radio/>} label="Remaider"></FormControlLabel>
          <FormControlLabel value="work" control={<Radio/>} label="Work"></FormControlLabel>
        </RadioGroup> */}
        </FormControl>
        {/* Button */}
      <Button
        className={classes.btn}
        onClick={() => console.log('You click me')}
        color='secondary'
        type="submit"
        variant="contained"
        // startIcon={<SendToMobileIcon />}
        // endIcon ={<KeyboardArrowRightIcon/>}
      >Submit</Button> 
      </form>
      </div>
        </Container>
     );
}
 
export default Register;