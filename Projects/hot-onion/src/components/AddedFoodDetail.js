import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import './style.css';
import Button from '@material-ui/core/Button';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    maxWidth:"700px",
    border:"1px solid #9F9F9F",
    padding:" 20px 20px",
    margin:"12px 0px",
    height:"210px"
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 170,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

export default function AddedFoodDetail(props) {
  const classes = useStyles();
  const theme = useTheme();

  const {type,name,price,count,shortDescription,fullDescription}=props.infos;
  const image=props.infos.images[0];

  return (
    <Card className={classes.root}>
        <CardMedia
        className={classes.cover}
        image={image}
        title="Live from space album cover"
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {name}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Price : ${price}
          </Typography>
          <Typography variant="subtitle2" color="textSecondary">
            Item Ordered : {count}
          </Typography>
          <Typography variant="subtitle3" color="textSecondary">
             {shortDescription}
          </Typography>
          <br/>
          <Typography variant="subtitle4" color="textSecondary">
              Food type : {type}
          </Typography>
           
          <Button className="ml-2" variant="outlined" color="secondary">
            X
        </Button>
        </CardContent>
      </div>
      
    </Card>
  );
}