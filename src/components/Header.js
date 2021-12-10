import { Container, makeStyles, Input, Button, createTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import ThemeColor from '../style/color';
import {
    Link
  } from "react-router-dom";
  

// assets
import Logo from '../assets/images/logo.png';

const useStyles = makeStyles({
    header:{
        padding: '20px 0'
    },
    HeaderTop:{
        display: 'flex', 
        marginBottom: '15px',
        justifyContent: 'flex-end',
        '& a': {
            marginLeft: '30px',
            '&:hover':{
                color: ThemeColor.YellowDark
            },
            '@media (max-width: 575px)':{
                marginLeft: '10px',
                fontSize: '14px'
            }
        },
        '& span':{
            marginLeft: '6px',
            marginRight: '-22px',
            '@media (max-width: 575px)':{
                marginRight: '-4px'
            }
        }
    },
    dfc:{
        display: 'flex',
        alignItems: 'center',
        '@media (max-width: 767px)':{
            flexDirection: 'column'
        }
    },
    slogo:{
        width: "100%",
        display: "block",
        maxWidth: "295px",
        marginRight: "40px",
        '& img' :{
            maxWidth: '100%'
        },
        '@media (max-width: 767px)': {
            marginRight: '0px',
            marginBottom: '15px',
            marginTop: '10px',
            maxWidth: '220px'
        }
    },
    isg:{
        display: 'flex',
        alignItems: 'center',
        borderRadius: '50px',
        border: `1px solid ${ThemeColor.GrayDark}`,
        '& > div:after' : {
            display: 'none'
        },
        '& > div:before' : {
            display: 'none'
        },
        '& button': {

        }
    },
    isicon:{
        paddingLeft: '15px',
        paddingRight: '3px',
        '& svg':{
            width: '22px',
            height: '22px',
            display: 'block'
        }
    },
    input:{
        width: '180px',
        border: 'none',
        fontSize: '18px',
        fontWeight: 'bold',
        padding: '6px 12px',
        color: ThemeColor.Black,
        fontFamily: 'Helvetica Neue'
    },
    button:{
        fontSize: '20px',
        boxShadow: 'none',
        fontWeight: 'bold',
        lineHeight: 'normal',
        padding: '12px 28px',
        display: 'inline-block',
        fontFamily: 'Helvetica Neue',
        borderRadius: '0px 50px 50px 0',
        borderLeft: `1px solid ${ThemeColor.GrayDark}`,
        '&:hover':{
            backgroundColor: ThemeColor.Black,
            color: ThemeColor.White
        },
        '@media (max-width: 575px)':{
            padding: '15px 20px',
            fontSize: '15px'
        }
    }
});

const theme = createTheme({
    palette: {
      primary: {
        main: ThemeColor.YellowDark,
      }
    },
});
  

const Header = () =>{
    const classes = useStyles();

    return(
        <ThemeProvider theme={theme}>
            <div className={classes.header}>
                <Container>
                    <div className={classes.HeaderTop}>
                        <Link to="/">How It Works</Link>
                        <Link to="/">Sign Up</Link>
                        <span>/</span>
                        <Link to="/">Log In</Link>
                    </div>
                    <div className={classes.dfc}>
                        <div className={classes.slogo}>
                            <Link to="/"><img src={Logo} alt="logo" /></Link>
                        </div>

                        <div className={classes.isg}>
                            <div className={classes.isicon}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                                </svg>
                            </div>
                            <Input className={classes.input} placeholder="Search a product" />
                            <Button className={classes.button} variant="contained" type="submit" color="primary">
                                Search
                            </Button>
                        </div>
                    </div>
                </Container>
            </div>
        </ThemeProvider>
    )
}

export default Header;