import React from 'react';
import { Button, NavDropdown, Form, FormControl, Nav, Navbar, Badge } from 'react-bootstrap';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '50ch',
      },
    },
  }));

const Header = () => {
    const classes = useStyles();
    return (
        <Navbar bg="light" expand="lg">
        <div className="container">
        <Navbar.Brand href="#home">

        <Badge variant="warning">Test Logo</Badge>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">


        <Nav className="mx-auto">

        <form className={classes.root} noValidate autoComplete="off">
        
        <TextField id="standard-basic" label="🔎 Search"  />
        
        </form>


        </Nav>
        <Nav className="ml-auto">
        <Nav.Link href="#link">
        <ShoppingCartOutlinedIcon></ShoppingCartOutlinedIcon>Cart <Badge variant="warning">2</Badge> 
            </Nav.Link>
        <Nav.Link href="#link"><PersonOutlineOutlinedIcon>
            </PersonOutlineOutlinedIcon></Nav.Link>
            
        </Nav>

        </Navbar.Collapse>
        </div>
        </Navbar>
    );
};

export default Header;