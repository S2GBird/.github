import React, {useState} from 'react';
import {Grid, Typography, TextField, InputLabel, Checkbox, FormControlLabel, Button, IconButton, Divider} from '@mui/material';
import ChirpLogo from '../../Images/ChirpLogo.svg';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import bird from '../../Images/bird.jpg';

function SignupPage() {
    const [userInfo, setUserInfo] = useState({fName:"",lName:"",username:"",email:"",password:"",confirmPassword:""});
    const handleInput = (input) => {
        const {name, value} = input.target;
        setUserInfo({
            ...userInfo,
            [name]: value,
        });
    };
    const [error,setError] = useState({});
    // error checking
    function isValid () {
        const errors = {};
        if (!userInfo.fName) {
            errors.fName = "Enter the First Name.";
        }
        if(!userInfo.lName) {
            errors.lName = "Enter the Last Name.";
        }
        if(!userInfo.username) {
            errors.username = "Enter the Username.";
        }
        if(!userInfo.email) {
            errors.email = "Enter the Email";
        }
        if(!userInfo.password) {
            errors.password = "Enter the password";
        } else if(userInfo.password !== userInfo.confirmPassword) {
            errors.confirmPassword = "The password doesn't match";
        }

        setError(errors);
        return Object.keys(errors).length === 0;
    };
    const [checked, setChecked] = useState(false);
    const isChecked = (event) => {
        setChecked(event.target.checked);
    }
    const handleSignup=(event)=> {
        event.preventDefault(); //cancel the default event behavior (browser refresh) 
        if(isValid() && checked) {
            //if it's valid, request registrations to the server
            //navigate to landPage
        } else {
            alert("Enter the Required Fields and Confirm the Terms and Conditions")
        }
    }

    return (
    <Grid container >
        {/*left half page*/}
        <Grid item xs={6}>
        <img src={bird} alt="image1" style={{ width: '100%', height: '100%', objectFit: 'cover' }}/>
        </Grid>
        {/*righ half page*/}
    <Grid item xs={6} >
    <Grid style={{display:"flex", flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
        <img src={ChirpLogo} alt="logoImage" />
            <Typography variant="h4" fontWeight="bold">
                Register An Account
            </Typography>
        <Grid container style={{marginTop:"20px", alignItems:"center",justifyContent:"center"}}>
            <form onSubmit={handleSignup}>
            <Grid item style={{display:"flex", flexDirection:"row"}}>
                <Grid item style={{display:"flex", flexDirection:"column"}}>
                    <InputLabel htmlFor="firstName" style={{fontWeight:"bold"}}>First Name</InputLabel>
                        <TextField id="firstName" label="Enter first name" variant="filled" name="fName" onChange={handleInput} value={userInfo.fName} error={!!error.fName} helperText={error.fName} InputProps={{style:{width: 250}}}/>
                </Grid>
                    <Grid item style={{marginLeft:50}}>
                        <Grid item style={{display:"flex", flexDirection:"column"}}>
                            <InputLabel htmlFor="lastName" style={{fontWeight:"bold"}}>Last Name</InputLabel>
                            <TextField id="lastName" label="Enter last name" variant="filled" name="lName" onChange={handleInput} value={userInfo.lName} error={!!error.lName} helperText={error.lName} InputProps={{style:{width: 250} }}/>
                            </Grid>
                        </Grid>
                </Grid>
                    <Grid item style={{marginTop:20}}>
                        <Grid item style={{display:"flex", flexDirection:"column"}}>
                            <InputLabel htmlFor="username" style={{fontWeight:"bold"}}>Username</InputLabel>
                        <TextField id="username" label="Enter email" variant="filled" name="username" onChange={handleInput} value={userInfo.username} error={!!error.username} helperText={error.username} InputProps={{style:{width: 550} }}/>
                        </Grid>
                    </Grid>
                    <Grid item style={{marginTop:20}}>
                        <Grid item style={{display:"flex", flexDirection:"column"}}>
                            <InputLabel htmlFor="email" style={{fontWeight:"bold"}}>Email</InputLabel>
                            <TextField id="email" label="Enter email" variant="filled" name="email" onChange={handleInput} value={userInfo.email} error={!!error.email} helperText={error.email} InputProps={{style:{width: 550} }}/>
                        </Grid>
                    </Grid>
                    <Grid item style={{marginTop:20}}>
                        <Grid item style={{display:"flex", flexDirection:"column"}}>
                            <InputLabel htmlFor="password" style={{fontWeight:"bold"}}>Password</InputLabel>
                            <TextField id="password" type='password' label="Enter password" variant="filled" name="password" onChange={handleInput} value={userInfo.password} error={!!error.password} helperText={error.password} InputProps={{style:{width: 550} }}/>
                    </Grid>
                    </Grid>
                    <Grid item style={{marginTop:20}}>
                        <Grid item style={{display:"flex", flexDirection:"column"}}>
                            <InputLabel htmlFor="confirmpassword" style={{fontWeight:"bold"}}>Confirm Password</InputLabel>
                            <TextField id="confirm password" type='password' label="Enter password" variant="filled" name="confirmPassword" onChange={handleInput} value={userInfo.confirmPassword} error={!!error.confirmPassword} helperText={error.confirmPassword} InputProps={{style:{width: 550} }}/>
                        </Grid>
                    </Grid>
            <Grid item style={{display:"flex", flexDirection:"column",alignItems:"flex-start",justifyContent:"flex-end"}}>
                <InputLabel style={{marginTop:20}}>
                    <FormControlLabel control={<Checkbox checked={checked} onChange={isChecked} />}
                    label={
                        <Typography>
                            I have read and accept <span style={{fontWeight:"bold"}}>Terms and Conditions</span>
                        </Typography>
                    } />
                </InputLabel>
                <Button variant="contained" type="submit" style={{alignItems:"center", color:"black", fontWeight:"bold",backgroundColor:"#1B7D4F", marginLeft:"125px", marginTop:"20px",width:300}}>
                    Register
                </Button>
                <div style={{marginTop:20}}>
                <Typography variant="body" style={{marginLeft:"125px"}}>
                    Already have an account?</Typography>
                    <Button variant="text" style={{color:"black", fontWeight:"bold"}}>Sign in!</Button>
                </div>
                </Grid>
                </form>
                </Grid>
                </Grid>
                <Grid container style={{display:"flex", flexDirection:"column",alignItems: 'center', justifyContent: 'center'}}>
                    <Divider sx={{ borderBottomWidth: 3, width:"75%"}}/>
                    <div style={{marginTop:10}} >
                    <Typography variant="body" fontWeight="bold" >
                        Or Sign Up With
                    </Typography></div>
                    <Grid container spacing={3} style={{display:"flex", flexDirection:"row",alignItems: 'center', justifyContent: 'center'}} >
                        <Grid item >
                            <IconButton color="primary">
                                <GoogleIcon/></IconButton>
                        </Grid>
                        <Grid item>
                            <IconButton color="primary">
                                <InstagramIcon/></IconButton>
                        </Grid>
                        <Grid item>
                            <IconButton color="primary">
                                <LinkedInIcon/></IconButton>
                        </Grid>
                        <Grid item>
                            <IconButton color="primary">
                                <FacebookIcon/></IconButton>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default SignupPage;