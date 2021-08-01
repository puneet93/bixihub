import React from 'react';
import { Container, Grid, makeStyles, Button, Menu, MenuItem } from '@material-ui/core';
import ThemeColor from '../style/color';
import {
    Link
  } from "react-router-dom";

// layout
import Layout from '../global/PrimaryLayout';
import Banner from '../components/Banner';
import Card from '../components/ShopCard';
import Pagination from '../components/Pagination';

// assets

const useStyles = makeStyles({
    tabs:{
        display: 'flex',
        padding: '30px 0',
        marginBottom: '25px',
        '@media (max-width: 991px)' : {
            marginBottom: '15px'
        },
        '& ul':{
            listStyleType: 'none',
            borderRadius: '50px',
            alignItems: 'center',
            display: 'flex',
            flexWrap: 'wrap',

            '& li':{
                position: 'relative',
                '& a, & button': {
                    border: '1px solid transparent',
                    color: ThemeColor.Black,
                    textTransform: 'none',
                    padding: '10px 20px',
                    borderRadius: '25px',
                    fontWeight: 'bold',
                    fontSize: '20px',
                    display: 'block',
                    lineHeight: '1',
                    '&:hover':{
                        color: ThemeColor.GrayDark
                    },
                    '&.active':{
                        color: ThemeColor.Black,
                        borderColor: ThemeColor.GrayDark
                    },
                    '@media (max-width: 991px)' : {
                        fontSize: '15px',
                        padding: '8px 12px'
                    },
                    '@media (max-width: 575px)':{
                        fontSize: '14px',
                        padding: '7px 10px'
                    }
                }
            }
        }
    },
    menuItem: {
        '& ul li':{
            fontWeight: 'bold'
        }
    },
    fontBold:{
        fontWeight: 'bold'
    },
    mb30:{
        marginBottom: '30px',
        '@media (max-width: 991px)' : {
            marginBottom: '0px'
        }
    },
    paginationCenter: {
        justifyContent: 'center',
        padding: '15px 0 85px',
        display: 'flex',
        '@media (max-width: 991px)' : {
            paddingTop: '40px'
        }
    }
});


const Home = () =>{
    const classes = useStyles();

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return(
        <Layout>
            <Banner />
            
            <Container>
                <div className={classes.tabs}>
                    <ul>
                        <li><Link className="active" to="/">Text Here</Link></li>
                        <li><Link to="/">Text Here</Link></li>
                        <li><Link to="/">Text Here</Link></li>
                        <li><Link to="/">Text Here</Link></li>
                        <li>
                            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                                Drop Down Menu
                            </Button>
                            <Menu
                                id="simple-menu"
                                anchorEl={anchorEl}
                                keepMounted
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                                className={classes.menuItem}
                            >
                                <MenuItem onClick={handleClose}>Profile</MenuItem>
                                <MenuItem onClick={handleClose}>My account</MenuItem>
                                <MenuItem onClick={handleClose}>Logout</MenuItem>
                            </Menu>
                        </li>
                    </ul>
                </div>

                <Grid container spacing={3}>
                    <Grid item md={3} sm={4} xs={6} className={classes.mb30}>
                        <Card />
                    </Grid>
                    <Grid item md={3} sm={4} xs={6} className={classes.mb30}>
                        <Card />
                    </Grid>
                    <Grid item md={3} sm={4} xs={6} className={classes.mb30}>
                        <Card />
                    </Grid>
                    <Grid item md={3} sm={4} xs={6} className={classes.mb30}>
                        <Card />
                    </Grid>
                    <Grid item md={3} sm={4} xs={6} className={classes.mb30}>
                        <Card />
                    </Grid>
                    <Grid item md={3} sm={4} xs={6} className={classes.mb30}>
                        <Card />
                    </Grid>
                    <Grid item md={3} sm={4} xs={6} className={classes.mb30}>
                        <Card />
                    </Grid>
                    <Grid item md={3} sm={4} xs={6} className={classes.mb30}>
                        <Card />
                    </Grid>
                    <Grid item md={3} sm={4} xs={6} className={classes.mb30}>
                        <Card />
                    </Grid>
                    <Grid item md={3} sm={4} xs={6} className={classes.mb30}>
                        <Card />
                    </Grid>
                    <Grid item md={3} sm={4} xs={6} className={classes.mb30}>
                        <Card />
                    </Grid>
                    <Grid item md={3} sm={4} xs={6} className={classes.mb30}>
                        <Card />
                    </Grid>
                    <Grid item md={3} sm={4} xs={6} className={classes.mb30}>
                        <Card />
                    </Grid>
                    <Grid item md={3} sm={4} xs={6} className={classes.mb30}>
                        <Card />
                    </Grid>
                    <Grid item md={3} sm={4} xs={6} className={classes.mb30}>
                        <Card />
                    </Grid>
                    <Grid item md={3} sm={4} xs={6} className={classes.mb30}>
                        <Card />
                    </Grid>
                </Grid>

                <div className={classes.paginationCenter}>
                    <Pagination />
                </div>
            </Container>
        </Layout>
    )
}

export default Home;