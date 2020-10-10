import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './style.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });

const Display = (props) => {

    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    

    const {body,id,title,userId}=props.data;
    return (
         
            <Card  className="bg-card col-12" style={{maxWidth:"300px",height:"350px",margin:"5px 5px"}}>
                <CardContent>
                    <h4 className="text-custom">Social Buddy : {id}</h4>
                    <Typography variant="h5" component="h2">
                    {title}
                    </Typography>
                    
                    <Typography variant="body2" component="p">
                    {body}
                    </Typography>
                </CardContent>
                <CardActions><Link to={"/details/"+id}>
                  <Button style={{textDecoration:"none"}} variant="contained" color="secondary">
                    See Full Post
                  </Button></Link>
                </CardActions>
            </Card>
         
    );
};

export default Display;