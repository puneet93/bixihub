import React from 'react';
import { Container, Grid, makeStyles, Button, TextField, createTheme, Typography, Select } from '@material-ui/core';
import { ThemeProvider } from "@material-ui/styles";
import ThemeColor from '../style/color';
import {
    Link
} from "react-router-dom";

// layout
import Layout from '../global/PrimaryLayout';

// assets
import Back from '../assets/images/back-arrow.png';
import Logo from '../assets/images/logo.png';
import GoogleSignIn from '../assets/images/google-signIn.png';
import Dummy from '../assets/images/dummy.png';

const useStyles = makeStyles({
    BannerOuter:{
        textAlign: "center",
        padding: '40px 0 30px',
        borderBottom: `1px solid ${ThemeColor.GrayDark}`
    },
    Back:{
        position: 'absolute',
        left: '15px',
        top: '0px',
        "@media (max-width: 959px)":{
            top: '-25px',
            '& img':{
                maxWidth: '30px'
            }
        }
    },
    Relative: {
        position: 'relative'
    },
    header: {
        marginBottom: '40px',
        '& img' :{
            maxWidth: '360px',
            marginBottom: '8px',

            "@media (max-width: 959px)":{
                maxWidth: '230px'
            }
        }
    },
    typoH3:{
        color: ThemeColor.Black,
        fontWeight: 'normal',
        marginBottom: '10px',
        lineHeight: '1',

        '@media (max-width: 959px)':{
            fontSize: '2rem'
        }
    },
    typo:{
        color: ThemeColor.Black,
        fontWeight: 'normal',
        marginBottom: '10px',
        lineHeight: '1',

        '@media (max-width: 959px)':{
            fontSize: '1.2rem'
        }
    },
    typoBold: {
        color: ThemeColor.Black,
        marginBottom: '12px',
        fontWeight: 'bold',
        lineHeight: '1',

        '@media (max-width: 959px)':{
            fontSize: '1.4rem'
        }
    },
    pageContent:{
        padding: '25px 0 60px',
        "@media (max-width: 959px)":{
            padding: '20px 0 30px'
        }
    },
    center:{
        textAlign: 'center'
    },
    signInBtns:{
        padding: '15px 0',
        marginBottom: '40px',
        
        '& button' :{
            backgroundColor: ThemeColor.White,
            
            '&:hover':{
                backgroundColor: ThemeColor.White
            }
        },

        '& img':{
            maxWidth: '420px',
            width: '100%',

            "@media (max-width: 959px)":{
                maxWidth: '320px'
            }
        }
    },
    Thumbnail: {
        maxWidth: '100%',
        display: 'block',
        maxHeight: '130px',
        "@media (max-width: 959px)":{
            margin: 'auto'
        }
    },
    fieldOuter:{
        border: `1px solid ${ThemeColor.GrayDark}`,
        backgroundColor: ThemeColor.White,
        padding: '10px 15px 8px',
        borderRadius: '25px',
        cursor: 'auto',

        '& textarea':{
            border: 'none',
            width: '100%',
            resize: 'none',
            fontSize: '18px',
            textAlign: 'center',
            fontFamily: 'Helvetica Neue'
        },
        '& > div':{
            width: '100%',
            '&:before, &:after':{
                display: 'none'
            },
            '& select':{
                backgroundColor: '#fff',
                color: ThemeColor.GrayLight,
                '&:focus':{
                    backgroundColor: '#fff'
                }
            }
        }
    },
    Mb20:{
        marginBottom: '20px'
    },
    Mb35:{
        marginBottom: '35px'
    },
    Mb10:{
        marginBottom: '10px',
        "@media (max-width: 639px)":{
            marginBottom: '0px'
        }
    },
    Mb50:{
        marginBottom: '50px',
        "@media (max-width: 959px)":{
            marginBottom: '35px'
        }
    },
    textGray: {
        color: ThemeColor.GrayDark
    },
    pageBottom:{
        margin: '80px auto 20px',
        maxWidth: '620px',
        width: '100%',
        '& .MuiOutlinedInput-root':{
            '& select':{
                backgroundColor: ThemeColor.White
            }
        },
        '& .MuiTextField-root':{
            width: '100%',
            marginBottom: '15px',

            '&.Mui-focused':{
                borderColor: ThemeColor.YellowDark
            },

            '& fieldset':{
                borderRadius: '35px',
                padding: '0 25px'
            },
            '& input':{
                marginLeft: '5px',
                paddingLeft:'25px',
                paddingRight:'25px',
                fontSize: '22px'
            }
        },
        '& .MuiSelect-select':{
            fontSize: '20px',
            lineHeight: '1.1',
            paddingLeft:'25px',
            paddingRight:'25px'
        },
        '& .MuiSelect-iconOutlined':{
            right: '15px'
        },
        "@media (max-width: 959px)":{
            margin: '35px auto 10px'
        }
    },
    buttonXL: {
        fontSize: "40px",
        boxShadow: "none",
        borderRadius: "50px",
        lineHeight: "normal",
        fontWeight: "normal",
        padding: "1.6% 10% 1.5%",
        textTransform: "none",
        fontFamily: "Helvetica Neue",
        border: `1px solid ${ThemeColor.GrayDark}`,
        "&:hover": {
          backgroundColor: ThemeColor.Black,
          color: ThemeColor.White,
        },
        "@media (max-width: 575px)": {
          fontSize: "30px",
          padding: "10px 36px 14px",
        },
    },
    typoSubheading:{
        color: ThemeColor.GrayLight,
        fontWeight: 'normal',
        minHeight: '60px',
        fontSize: '18px',
        lineHeight: '1.2',
    },
    gridBorder:{
        border: `2px solid ${ThemeColor.GrayDark}`,
        borderRadius: '15px',
        cursor: 'pointer',
        '&.active':{
            backgroundColor: ThemeColor.cream,
            borderColor: ThemeColor.YellowDark
        },
        '&:hover':{
            backgroundColor: ThemeColor.cream
        }
    }
});


const theme = createTheme({
    palette: {
      primary: {
        main: ThemeColor.YellowDark,
      },
    },
});


const Home = () =>{
    const classes = useStyles();

    const [SelectVal, setSelectVal] = React.useState('');
    const [SelectGrid, setSelectGrid] = React.useState('');
    const [SignIn, setSignIn] = React.useState(false);
    
    const handleChange = (event) => {
        setSelectVal(event.target.value);
    };
    
    return(
        <ThemeProvider theme={theme}>
            <Layout>
                <div className={classes.BannerOuter}>
                    <Container className={classes.Relative}>
                        <Link className={classes.Back} to='/'><img src={Back} alt="back" /></Link>
                        <div className={classes.header}>
                            <Link to="/"><img src={Logo} alt="logo" /></Link>
                            <Typography variant="h3" className={classes.typoH3}>
                                Influencers
                            </Typography>
                        </div>

                        <Typography variant="h4" className={classes.typoBold}>
                            Social Media Verification
                        </Typography>
                        <Typography variant="h6" className={classes.typo}>
                            Note: Social media accounts must be public for successful verification
                        </Typography>
                    </Container>
                </div>

                <div className={classes.pageContent}>
                    <Container>
                        <Typography variant="h5" className={`${classes.typo} ${classes.center}`}>
                            Sign in with the google account registered to your YouTube channel
                        </Typography>

                        <div className={`${classes.signInBtns} ${classes.center}`}>
                            <Button onClick={()=> setSignIn(true)}><img src={GoogleSignIn} alt="google" /></Button>
                        </div>

                        {SignIn ? 
                            (
                                <>
                                    <Grid container alignItems="center" onClick={() => setSelectGrid('row1')}  className={`${classes.Mb35} ${classes.gridBorder} ${SelectGrid === 'row1' ? 'active' : ''}`} spacing={3}>
                                        <Grid item md={2} sm={4} xs={6}>
                                            <img src={Dummy} className={classes.Thumbnail} alt="dummy" />
                                        </Grid>
                                        <Grid item md={2} sm={4} xs={6}>
                                            <div className={classes.fieldOuter}>
                                                <Typography variant="h6" className={`${classes.typoSubheading} ${classes.center}`}>
                                                    Channel Name
                                                </Typography>
                                                <Typography variant="h5" className={`${classes.typoBold} ${classes.center}`}>
                                                    TEXT
                                                </Typography>
                                            </div>
                                        </Grid>
                                        <Grid item md={2} sm={4} xs={6}>
                                            <div className={classes.fieldOuter}>
                                                <Typography variant="h6" className={`${classes.typoSubheading} ${classes.center}`}>
                                                    Total number of channel views
                                                </Typography>
                                                <Typography variant="h5" className={`${classes.typoBold} ${classes.center}`}>
                                                    TEXT
                                                </Typography>
                                            </div>
                                        </Grid>
                                        <Grid item md={2} sm={4} xs={6}>
                                            <div className={classes.fieldOuter}>
                                                <Typography variant="h6" className={`${classes.typoSubheading} ${classes.center}`}>
                                                    Number of Subscribers
                                                </Typography>
                                                <Typography variant="h5" className={`${classes.typoBold} ${classes.center}`}>
                                                    TEXT
                                                </Typography>
                                            </div>
                                        </Grid>
                                        <Grid item md={2} sm={4} xs={6}>
                                            <div className={classes.fieldOuter}>
                                                <Typography variant="h6" className={`${classes.typoSubheading} ${classes.center}`}>
                                                    Another Field
                                                </Typography>
                                                <Typography variant="h5" className={`${classes.typoBold} ${classes.center}`}>
                                                    TEXT
                                                </Typography>
                                            </div>
                                        </Grid>
                                        <Grid item md={2} sm={4} xs={6}>
                                            <div className={classes.fieldOuter}>
                                            <Select native defaultValue="" id="grouped-native-select">
                                                <option value={1}>Channel Category</option>
                                                <option value={2}>Channel Category</option>
                                                <option value={2}>Channel Category</option>
                                                <option value={2}>Channel Category</option>
                                                </Select>
                                            </div>
                                        </Grid>
                                    </Grid>
                                    <Grid container alignItems="center" onClick={() => setSelectGrid('row2')}  className={`${classes.Mb35} ${classes.gridBorder} ${SelectGrid === 'row2' ? 'active' : ''}`} spacing={3}>
                                        <Grid item md={2} sm={4} xs={6}>
                                            <img src={Dummy} className={classes.Thumbnail} alt="dummy" />
                                        </Grid>
                                        <Grid item md={2} sm={4} xs={6}>
                                            <div className={classes.fieldOuter}>
                                                <Typography variant="h6" className={`${classes.typoSubheading} ${classes.center}`}>
                                                    Channel Name
                                                </Typography>
                                                <Typography variant="h5" className={`${classes.typoBold} ${classes.center}`}>
                                                    TEXT
                                                </Typography>
                                            </div>
                                        </Grid>
                                        <Grid item md={2} sm={4} xs={6}>
                                            <div className={classes.fieldOuter}>
                                                <Typography variant="h6" className={`${classes.typoSubheading} ${classes.center}`}>
                                                    Total number of channel views
                                                </Typography>
                                                <Typography variant="h5" className={`${classes.typoBold} ${classes.center}`}>
                                                    TEXT
                                                </Typography>
                                            </div>
                                        </Grid>
                                        <Grid item md={2} sm={4} xs={6}>
                                            <div className={classes.fieldOuter}>
                                                <Typography variant="h6" className={`${classes.typoSubheading} ${classes.center}`}>
                                                    Number of Subscribers
                                                </Typography>
                                                <Typography variant="h5" className={`${classes.typoBold} ${classes.center}`}>
                                                    TEXT
                                                </Typography>
                                            </div>
                                        </Grid>
                                        <Grid item md={2} sm={4} xs={6}>
                                            <div className={classes.fieldOuter}>
                                                <Typography variant="h6" className={`${classes.typoSubheading} ${classes.center}`}>
                                                    Another Field
                                                </Typography>
                                                <Typography variant="h5" className={`${classes.typoBold} ${classes.center}`}>
                                                    TEXT
                                                </Typography>
                                            </div>
                                        </Grid>
                                        <Grid item md={2} sm={4} xs={6}>
                                            <div className={classes.fieldOuter}>
                                            <Select native defaultValue="" id="grouped-native-select">
                                                <option value={1}>Channel Category</option>
                                                <option value={2}>Channel Category</option>
                                                <option value={2}>Channel Category</option>
                                                <option value={2}>Channel Category</option>
                                                </Select>
                                            </div>
                                        </Grid>
                                    </Grid>
                                    <Grid container alignItems="center" onClick={() => setSelectGrid('row3')}  className={`${classes.Mb35} ${classes.gridBorder} ${SelectGrid === 'row3' ? 'active' : ''}`} spacing={3}>
                                        <Grid item md={2} sm={4} xs={6}>
                                            <img src={Dummy} className={classes.Thumbnail} alt="dummy" />
                                        </Grid>
                                        <Grid item md={2} sm={4} xs={6}>
                                            <div className={classes.fieldOuter}>
                                                <Typography variant="h6" className={`${classes.typoSubheading} ${classes.center}`}>
                                                    Channel Name
                                                </Typography>
                                                <Typography variant="h5" className={`${classes.typoBold} ${classes.center}`}>
                                                    TEXT
                                                </Typography>
                                            </div>
                                        </Grid>
                                        <Grid item md={2} sm={4} xs={6}>
                                            <div className={classes.fieldOuter}>
                                                <Typography variant="h6" className={`${classes.typoSubheading} ${classes.center}`}>
                                                    Total number of channel views
                                                </Typography>
                                                <Typography variant="h5" className={`${classes.typoBold} ${classes.center}`}>
                                                    TEXT
                                                </Typography>
                                            </div>
                                        </Grid>
                                        <Grid item md={2} sm={4} xs={6}>
                                            <div className={classes.fieldOuter}>
                                                <Typography variant="h6" className={`${classes.typoSubheading} ${classes.center}`}>
                                                    Number of Subscribers
                                                </Typography>
                                                <Typography variant="h5" className={`${classes.typoBold} ${classes.center}`}>
                                                    TEXT
                                                </Typography>
                                            </div>
                                        </Grid>
                                        <Grid item md={2} sm={4} xs={6}>
                                            <div className={classes.fieldOuter}>
                                                <Typography variant="h6" className={`${classes.typoSubheading} ${classes.center}`}>
                                                    Another Field
                                                </Typography>
                                                <Typography variant="h5" className={`${classes.typoBold} ${classes.center}`}>
                                                    TEXT
                                                </Typography>
                                            </div>
                                        </Grid>
                                        <Grid item md={2} sm={4} xs={6}>
                                            <div className={classes.fieldOuter}>
                                            <Select native defaultValue="" id="grouped-native-select">
                                                <option value={1}>Channel Category</option>
                                                <option value={2}>Channel Category</option>
                                                <option value={2}>Channel Category</option>
                                                <option value={2}>Channel Category</option>
                                                </Select>
                                            </div>
                                        </Grid>
                                    </Grid>
                                    <Grid container alignItems="center" onClick={() => setSelectGrid('row4')}  className={`${classes.Mb35} ${classes.gridBorder} ${SelectGrid === 'row4' ? 'active' : ''}`} spacing={3}>
                                        <Grid item md={2} sm={4} xs={6}>
                                            <img src={Dummy} className={classes.Thumbnail} alt="dummy" />
                                        </Grid>
                                        <Grid item md={2} sm={4} xs={6}>
                                            <div className={classes.fieldOuter}>
                                                <Typography variant="h6" className={`${classes.typoSubheading} ${classes.center}`}>
                                                    Channel Name
                                                </Typography>
                                                <Typography variant="h5" className={`${classes.typoBold} ${classes.center}`}>
                                                    TEXT
                                                </Typography>
                                            </div>
                                        </Grid>
                                        <Grid item md={2} sm={4} xs={6}>
                                            <div className={classes.fieldOuter}>
                                                <Typography variant="h6" className={`${classes.typoSubheading} ${classes.center}`}>
                                                    Total number of channel views
                                                </Typography>
                                                <Typography variant="h5" className={`${classes.typoBold} ${classes.center}`}>
                                                    TEXT
                                                </Typography>
                                            </div>
                                        </Grid>
                                        <Grid item md={2} sm={4} xs={6}>
                                            <div className={classes.fieldOuter}>
                                                <Typography variant="h6" className={`${classes.typoSubheading} ${classes.center}`}>
                                                    Number of Subscribers
                                                </Typography>
                                                <Typography variant="h5" className={`${classes.typoBold} ${classes.center}`}>
                                                    TEXT
                                                </Typography>
                                            </div>
                                        </Grid>
                                        <Grid item md={2} sm={4} xs={6}>
                                            <div className={classes.fieldOuter}>
                                                <Typography variant="h6" className={`${classes.typoSubheading} ${classes.center}`}>
                                                    Another Field
                                                </Typography>
                                                <Typography variant="h5" className={`${classes.typoBold} ${classes.center}`}>
                                                    TEXT
                                                </Typography>
                                            </div>
                                        </Grid>
                                        <Grid item md={2} sm={4} xs={6}>
                                            <div className={classes.fieldOuter}>
                                            <Select native defaultValue="" id="grouped-native-select">
                                                <option value={1}>Channel Category</option>
                                                <option value={2}>Channel Category</option>
                                                <option value={2}>Channel Category</option>
                                                <option value={2}>Channel Category</option>
                                                </Select>
                                            </div>
                                        </Grid>
                                    </Grid>


                                    <div className={classes.pageBottom}>
                                        <div className={`${classes.Mb50} ${classes.center}`}>
                                            <Typography variant="h4" className={classes.typoBold}>
                                                Text Box Here
                                            </Typography>
                                            <Typography variant="h6" className={`${classes.typo} ${classes.textGray}`}>
                                                Text box here. Text Box Here. Text Box Here.
                                            </Typography>
                                        </div>
                                        
                                        <div className={classes.Mb50}>
                                            <TextField placeholder="Text Here" type="text" variant="outlined" />
                                            <TextField placeholder="Text Here" type="text" variant="outlined" />
                                            <TextField placeholder="Text Here" type="text" variant="outlined" />
                                            <TextField placeholder="Text Here" type="text" variant="outlined" />
                                        </div>

                                        <div className={classes.Mb50}>
                                            <TextField placeholder="Text Here" type="text" variant="outlined" />
                                            <TextField placeholder="Text Here" type="text" variant="outlined" />
                                            <TextField placeholder="Text Here" type="text" variant="outlined" />
                                            <TextField placeholder="Text Here" type="text" variant="outlined" />
                                            <TextField
                                                select
                                                value={SelectVal}
                                                variant="outlined"
                                                onChange={handleChange}
                                                SelectProps={{
                                                    native: true,
                                                }}
                                                >
                                                    <option value="Text Here 1">Text Here 1</option>
                                                    <option value="Text Here 2">Text Here 2</option>
                                                    <option value="Text Here 3">Text Here 3</option>
                                            </TextField>
                                        </div>

                                        <div className={`${classes.Mb20} ${classes.center}`}>
                                            <Typography variant="h4" className={classes.typoBold}>
                                                Text Box Here
                                            </Typography>
                                        </div>
                                        
                                        <div className={classes.Mb50}>
                                            <TextField placeholder="Text Here" type="text" variant="outlined" />
                                            <TextField placeholder="Text Here" type="text" variant="outlined" />
                                            <TextField placeholder="Text Here" type="text" variant="outlined" />
                                            <TextField placeholder="Text Here" type="text" variant="outlined" />
                                            <TextField placeholder="Text Here" type="text" variant="outlined" />
                                            <TextField placeholder="Text Here" type="text" variant="outlined" />
                                        </div>

                                        <div className={classes.center}>
                                            <Button
                                                className={classes.buttonXL}
                                                variant="contained"
                                                color="primary"
                                                >
                                                Text Here
                                            </Button>
                                        </div>

                                    </div>
                                </>
                            ) : null
                        }

                    </Container>
                </div>
            </Layout>
        </ThemeProvider>
    )
}

export default Home;