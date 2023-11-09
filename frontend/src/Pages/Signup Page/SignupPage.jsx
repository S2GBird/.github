import React, {useState} from 'react';
import {Grid, Typography, TextField, InputLabel, Checkbox, FormControlLabel, Button, IconButton, Divider} from '@mui/material';
import ChirpLogo from '../../Images/ChirpLogo.svg';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

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
    <Grid container alignItems="center" justifyContent="center" >
        {/*left half page*/}
        <Grid item xs={6}>
            <Typography
            component="h1"
            variant="h3"
            align="center"
            gutterBottom
            >
                Call To Action<br />Message Or<br />Interesting Fact
            </Typography>
                <Typography
                component="h3"
                variant="h5"
                align="center"
                >   
                    Mini Action Line Statement<br />About Bird Watching
                </Typography>
        </Grid>
        {/*righ half page*/}
        <Grid item xs={6}>
            <Grid item style={{display:"flex", flexDirection:"column",alignItems:"flex-start",justifyContent:"flex-end"}}>
                <img src={ChirpLogo} alt="logoImage" style={{marginLeft:"200px"}}/>
                    <Typography variant="h4" fontWeight="bold" style={{marginLeft:"100px"}}>
                        Register An Account
                    </Typography>
            </Grid>
                <Grid container style={{marginTop:"20px"}}>
                    <form onSubmit={handleSignup}>
                    <Grid item style={{display:"flex", flexDirection:"row"}}>
                        <Grid item style={{display:"flex", flexDirection:"column"}}>
                            <InputLabel htmlFor="firstName" style={{fontWeight:"bold"}}>First Name</InputLabel>
                                <TextField id="firstName" label="Enter first name here..." variant="filled" name="fName" onChange={handleInput} value={userInfo.fName} error={!!error.fName} helperText={error.fName} InputProps={{style:{width: 250}}}/>
                        </Grid>
                            <Grid item style={{marginLeft:50}}>
                                <Grid item style={{display:"flex", flexDirection:"column"}}>
                                    <InputLabel htmlFor="lastName" style={{fontWeight:"bold"}}>Last Name</InputLabel>
                                    <TextField id="lastName" label="Enter last name here..." variant="filled" name="lName" onChange={handleInput} value={userInfo.lName} error={!!error.lName} helperText={error.lName} InputProps={{style:{width: 250} }}/>
                                </Grid>
                            </Grid>
                    </Grid>
                            <Grid item style={{marginTop:20}}>
                                <Grid item style={{display:"flex", flexDirection:"column"}}>
                                    <InputLabel htmlFor="username" style={{fontWeight:"bold"}}>Username</InputLabel>
                                    <TextField id="username" label="Enter email here..." variant="filled" name="username" onChange={handleInput} value={userInfo.username} error={!!error.username} helperText={error.username} InputProps={{style:{width: 550} }}/>
                                </Grid>
                            </Grid>
                            <Grid item style={{marginTop:20}}>
                                <Grid item style={{display:"flex", flexDirection:"column"}}>
                                    <InputLabel htmlFor="email" style={{fontWeight:"bold"}}>Email</InputLabel>
                                    <TextField id="email" label="Enter email here..." variant="filled" name="email" onChange={handleInput} value={userInfo.email} error={!!error.email} helperText={error.email} InputProps={{style:{width: 550} }}/>
                                </Grid>
                            </Grid>
                            <Grid item style={{marginTop:20}}>
                                <Grid item style={{display:"flex", flexDirection:"column"}}>
                                    <InputLabel htmlFor="password" style={{fontWeight:"bold"}}>Password</InputLabel>
                                    <TextField id="password" label="Enter password here..." variant="filled" name="password" onChange={handleInput} value={userInfo.password} error={!!error.password} helperText={error.password} InputProps={{style:{width: 550} }}/>
                                </Grid>
                            </Grid>
                            <Grid item xs={6} style={{marginTop:20}}>
                                <Grid item style={{display:"flex", flexDirection:"column"}}>
                                    <InputLabel htmlFor="confirmpassword" style={{fontWeight:"bold"}}>Confirm Password</InputLabel>
                                    <TextField id="confirm password" label="Enter password here..." variant="filled" name="confirmPassword" onChange={handleInput} value={userInfo.confirmPassword} error={!!error.confirmPassword} helperText={error.confirmPassword} InputProps={{style:{width: 550} }}/>
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
                            <Button variant="contained" type="submit" style={{alignItems:"center", color:"black", fontWeight:"bold",backgroundColor:"grey", marginLeft:"125px", marginTop:"20px",width:300}}>
                                Register
                            </Button>
                            <div style={{marginTop:20}}>
                            <Typography variant="body" style={{marginLeft:"125px"}}>
                                Already have an account?</Typography>
                                <Button variant="text" style={{color:"black", fontWeight:"bold"}}>Sign in!</Button>
                            </div>
                            </Grid>
                            </form>
                            <div>
                                <Divider variant="fullWidth" style={{marginLeft:50, marginTop:20}} sx={{ borderBottomWidth: 3, width:"120%"}}/>
                                <div style={{marginTop:15}}>
                                <Typography variant="body" fontWeight="bold" style={{marginLeft:"200px"}}>
                                    Or Sign Up With
                                </Typography></div>
                                <Grid container  justifyContent="center" spacing={3}>
                                    <Grid item style={{marginLeft:150}}>
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
                            </div>
                    </Grid>
                </Grid>
        </Grid>
    );
}

export default SignupPage;