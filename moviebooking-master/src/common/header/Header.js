import { Box, Button, Paper, Tab, Tabs, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Header.css";
import Logo from './../../assets/logo.svg';
import Modal from 'react-modal';
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';

Modal.setAppElement(document.getElementById('root'));

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

function Header(props) {

    const [modalIsOpen, setIsOpen] = useState(false);
    const [value, setValue] = useState(0);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");
    const [loggedIn, setLoggedIn] = useState(false);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const display = props.display;

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    function handleLogout() {
        setLoggedIn(false);
    }

    function handleSubmit() {
        if(username === "admin" && password === "admin"){
            setLoggedIn(true);
            alert("Logged In");
            closeModal();
        }
        else {
            alert("Incorrect username or password");
        }
    }

    function handleRegister() {
        if(firstname && lastname && password && email && contact) {
            alert("Registration Successful. Please Login!");
            closeModal();
        }
    }

    function handleUsername(event) {
        setUsername(event.target.value);
    }

    function handlePassword(event) {
        setPassword(event.target.value);
    }

    function handleFirstname(event) {
        setFirstname(event.target.value);
    }

    function handleLastname(event) {
        setLastname(event.target.value);
    }

    function handleEmail(event) {
        setEmail(event.target.value);
    }

    function handleContact(event) {
        setContact(event.target.value);
    }

    return (
        <div className="header">
            <img src={Logo} id="logo" alt="logo" />
            <div style={{ float: "right", display: "flex" }}>
                <div style={{ padding: "3px 15px" }}>
                    {display ?
                        <Button variant="contained" color="primary">
                            <Link to={`/book-show/${props.id}`} style={{ textDecoration: "none", color: "white" }} >BOOK SHOW</Link>
                        </Button> : null}
                </div>
                <div style={{ padding: "3px 15px" }}>
                    {loggedIn ? 
                        <Button variant="contained" onClick={handleLogout}>LOGOUT</Button> 
                        : 
                        <Button variant="contained" onClick={openModal}>LOGIN</Button>}
                    <div className="loginModal">
                        <Modal
                            isOpen={modalIsOpen}
                            onRequestClose={closeModal}
                            style={customStyles}
                            contentLabel="Login Modal">
                            <Paper elevation={0}>
                                <Tabs
                                    value={value}
                                    indicatorColor="secondary"
                                    textColor="secondary"
                                    onChange={handleChange}
                                >
                                    <Tab label="LOGIN" id="login" />
                                    <Tab label="REGISTER" id="register" />
                                </Tabs>
                            </Paper>
                            <div
                                role="tabpanel"
                                hidden={value !== 0}
                                id={`login`}
                                aria-labelledby={`login`}
                            >
                                {value === 0 && (
                                    <Box p={3}>
                                        <ValidatorForm onSubmit={handleSubmit} onError={errors => console.log(errors)}>
                                            <Box p={2}>
                                                <TextValidator
                                                    label="Username" onChange={handleUsername} name="username"
                                                    value={username}
                                                    validators={['required']}
                                                    errorMessages={['Username is required']} />
                                            </Box>
                                            <Box p={2}>
                                                <TextValidator
                                                    label="Password" onChange={handlePassword} name="password"
                                                    value={password}
                                                    type="password"
                                                    validators={['required']}
                                                    errorMessages={['Please enter your password']} />
                                            </Box>
                                            <div style={{margin: "10% 35% 0"}}>
                                                <Button type="submit" onClick={handleSubmit} variant="contained" color="primary">LOGIN</Button>
                                            </div>
                                        </ValidatorForm>
                                    </Box>
                                )}
                            </div>
                            <div
                                role="tabpanel"
                                hidden={value !== 1}
                                id={`register`}
                                aria-labelledby={`register`}
                            >
                                {value === 1 && (
                                    <Box p={3}>
                                        <ValidatorForm onSubmit={handleRegister} onError={errors => console.log(errors)}>
                                            <Box p={2}>
                                                <TextValidator
                                                    label="First Name" onChange={handleFirstname} name="firstname"
                                                    value={firstname}
                                                    validators={['required']}
                                                    errorMessages={['required']} />
                                            </Box>
                                            <Box p={2}>
                                                <TextValidator
                                                    label="Last Name" onChange={handleLastname} name="lastname"
                                                    value={lastname}
                                                    validators={['required']}
                                                    errorMessages={['required']} />
                                            </Box>
                                            <Box p={2}>
                                                <TextValidator
                                                    label="Email" onChange={handleEmail} name="email"
                                                    value={email}
                                                    validators={['required','isEmail']}
                                                    errorMessages={['required','Not a valid email ID']} />
                                            </Box>
                                            <Box p={2}>
                                                <TextValidator
                                                    label="Password" onChange={handlePassword} name="password"
                                                    value={password}
                                                    type="password"
                                                    validators={['required']}
                                                    errorMessages={['required']} />
                                            </Box>
                                            <Box p={2}>
                                                <TextValidator
                                                    label="Contact No." onChange={handleContact} name="contact"
                                                    value={contact}
                                                    validators={['required','isNumber']}
                                                    errorMessages={['required','Not a valid number']} />
                                            </Box>
                                            <div style={{margin: "10% 35% 0"}}>
                                                <Button type="submit" onClick={handleRegister} variant="contained" color="primary">REGISTER</Button>
                                            </div>
                                        </ValidatorForm>
                                    </Box>
                                )}
                            </div>
                        </Modal>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;