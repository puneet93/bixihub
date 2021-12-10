import React from 'react';
import {
  makeStyles,
  Menu,
  MenuItem,
  Avatar
} from "@material-ui/core";
import ThemeColor from '../style/color';
import {
    Link
} from "react-router-dom";

import AvatarPic from '../assets/images/avatar.png';

const useStyles = makeStyles({
  header:{
    display: 'flex',
    marginTop: '2px',
    marginBottom: '-52px',
    justifyContent: 'flex-end',
    alignItems: 'center',

    '@media (max-width: 959px)':{
      marginBottom: '15px',
      marginTop: '0px'
    },

    '& ul':{
      listStyleType: 'none',
      display: 'flex',
      padding: '0px'
    },
    '& a': {
      marginRight: '30px',
      position: 'relative',
      
      '&:hover':{
          color: ThemeColor.YellowDark
      },
      '@media (max-width: 575px)':{
          marginRight: '25px',
          fontSize: '18px'
      }
    }
  },
  indigator:{
    backgroundColor: ThemeColor.RedDark,
    position: 'absolute',
    borderRadius: '8px',
    right: '-8px',
    top: '0px',
    width: '8px',
    height: '8px'
  },
  avtar:{
    padding: '4px',
    width: '60px',
    height: '60px',
    cursor: 'pointer',
    color: ThemeColor.White,
    border: `1px solid ${ThemeColor.GrayDark}`,
    backgroundColor: ThemeColor.White,

    '& img' : {
        maxWidth: '100%'
    }
  },
  menu:{
    '& .MuiPaper-root':{
      marginTop: '52px'
    }
  }
});

function AccountMenu() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.header}>
      <ul>
        <li><Link to="/">Dashboard <span className={classes.indigator}></span></Link></li>
      </ul>

        <Avatar aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} className={classes.avtar}><img src={AvatarPic} alt="Avatar" /></Avatar>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        className={classes.menu}
      >
        <MenuItem onClick={handleClose}>Text Here, Text</MenuItem>
        <MenuItem onClick={handleClose}>Text Here, Text</MenuItem>
        <MenuItem onClick={handleClose}>Text Here, Text</MenuItem>
      </Menu>
    </div>
  );
}

export default AccountMenu;