import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
 

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

export default function Cart() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  var cartStyle={
      boxShadow:"0px 0px 0px"
  }

  return (
    <Card style={cartStyle} className={classes.root}>
      <CardContent>
        <Typography variant="h6" component="h3" className="mt-2">
          Total Order :
        </Typography>

        <Typography variant="h6" component="h3" className="mt-2">
          Price :
        </Typography>
        
        <Typography color="textSecondary" className="mt-2">
          Vat & Tax : 15%
        </Typography>

        <Typography variant="h6" component="h3" className="mt-3">
          Total Price :
        </Typography>

        <Button variant="contained" size="medium" color="primary" className={classes.margin} className="mt-4">
          Check Out
        </Button>
        
      </CardContent>
        
    </Card>
  );
}
