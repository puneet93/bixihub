    import React from 'react';
    import {
    Container,
    makeStyles,
    Grid,
    Button,
    createTheme,
    Typography,
    Input,
    Box
    } from "@material-ui/core";
    import { ThemeProvider } from "@material-ui/styles";
    import ThemeColor from '../style/color';
    import {
        Link
    } from "react-router-dom";

    // layout
    import Layout from '../global/PrimaryLayout';
    import AccountMenu from '../components/AccountMenu';
    import Carousel from '../components/CarouselSimple';

    // assets
    import Logo from '../assets/images/logo.png';
    import Dummy from '../assets/images/dummy.png';
    import Star from '../assets/images/gold-star.jpg';

    const useStyles = makeStyles({
        header:{
            padding: '50px 0 40px',
            borderBottom: `1px solid ${ThemeColor.GrayDark}`,

            '@media (max-width: 959px)':{
                padding: '20px 0',
            }
        },
        Relative: {
            position: 'relative'
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
            maxWidth: "240px",
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
        },
        typo:{
            color: ThemeColor.Black,
            fontWeight: 'normal',
            lineHeight: '1',

            '@media (max-width: 959px)':{
                fontSize: '1.2rem'
            }
        },
        typoBold: {
            color: ThemeColor.Black,
            fontWeight: 'bold',
            lineHeight: '1',

            '@media (max-width: 959px)':{
                fontSize: '1.4rem'
            }
        },
        lineHeight:{
            lineHeight: '1.2'
        },
        pageContent:{
            padding: '30px 0',

            "@media (max-width: 959px)":{
                padding: '20px 0 30px'
            }
        },
        center:{
            textAlign: 'center'
        },
        mb10:{
            marginBottom: '10px'
        },
        mb20:{
            marginBottom: '20px',
            '@media (max-width: 640px)':{
                marginBottom: '10px'
            }
        },
        mb30:{
            marginBottom: '30px',
            '@media (max-width: 640px)':{
                marginBottom: '15px'
            }
        },
        mb60:{
            marginBottom: '60px',
            "@media (max-width: 959px)":{
                marginBottom: '40px'
            }
        },
        mb50:{
            marginBottom: '50px',
            "@media (max-width: 959px)":{
                marginBottom: '25px'
            }
        },
        boxContainer:{
            border: '1px solid #707070',
            padding: '30px',
            height: '650px',
            overflow: 'auto',
            '@media (max-width: 640px)':{
                padding: '15px',
                height: '380px'
            }
        },
        boxBorder:{
            border: '1px solid #707070',
            borderRadius: '25px'
        },
        boxBlue:{
            backgroundColor: 'rgb(232 250 238 / 87%)'
        },
        boxYellow:{
            backgroundColor: 'rgb(247 234 198 / 73%)'
        },
        boxRed:{
            backgroundColor: 'rgb(255 0 0 / 11%)'
        },
        boxGray:{
            backgroundColor: ThemeColor.GrayLightD6,
            border: '1px solid #005025',
            borderRadius: '25px',
            marginBottom: '15px'
        },
        Thumbnail:{
            maxWidth: '100%',
            display: 'block'
        },
        rounded:{
            borderRadius: '50%'
        },
        formButton:{
            width: '100%',
            fontSize: "16px",
            boxShadow: "none",
            borderRadius: "50px",
            padding: '3px 10px',
            lineHeight: "normal",
            fontWeight: "bold",
            textTransform: "none",
            color: ThemeColor.Black,
            fontFamily: "Helvetica Neue",
            border: `1px solid ${ThemeColor.GrayDark}`,

            '& + button':{
                marginTop: '5px'
            }
        },
        btnGreen:{
            backgroundColor: ThemeColor.Green,
            '&:hover':{
                backgroundColor: '#448810'
            }
        },
        rating:{
            display: 'flex',
            fontSize: '28px',
            alignItems: 'center',
            justifyContent: 'center',
            
            '& strong':{
                fontWeight: 'bold',
                color: ThemeColor.YellowLight,
                margin: '0 5px'
            },
            '& span':{
                color: ThemeColor.GrayLight
            },
            '& img':{
                width: '25px',
                height: '25px',
                marginRight: '5px'
            }
        },
        buttonXL: {
            fontSize: "40px",
            boxShadow: "none",
            borderRadius: "50px",
            lineHeight: "normal",
            fontWeight: "normal",
            padding: "5px 15px",
            height: '95px',
            width: '80%',
            maxWidth: '300px',
            textTransform: "none",
            fontFamily: "Helvetica Neue",
            border: `1px solid ${ThemeColor.GrayDark}`,
            "&:hover": {
            backgroundColor: ThemeColor.Black,
            color: ThemeColor.White,
            },
            "@media (max-width: 640px)": {
                height: '65px',
                fontSize: "30px",
                maxWidth: '220px',
                padding: "10px 36px 14px",
            },
        },
        list:{
            paddingLeft: '20px'
        }
    });


    const theme = createTheme({
        palette: {
        primary: {
            main: ThemeColor.YellowLight,
        },
        secondary: {
            main: ThemeColor.Red,
        }
        },
    });


    const PageFormFlow3 = () =>{
        const classes = useStyles();
        
        return(
            <ThemeProvider theme={theme}>
                <Layout>
                    <div className={classes.header}>
                        <Container className={classes.Relative}>
                            <AccountMenu />
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

                    <div className={classes.pageContent}>
                        <Container>
                            <Typography variant="h4" className={`${classes.typoBold} ${classes.center} ${classes.mb60}`}>
                                Text Here. Text Here
                            </Typography>
                            
                            <Grid container spacing={4} className={classes.mb50}>
                                <Grid item xs={12} sm={12} md={7}>
                                    <Typography variant="h5" className={`${classes.typo} ${classes.center} ${classes.mb20}`}>
                                        Text Here. Text Here
                                    </Typography>

                                    <Box className={classes.boxContainer}>
                                        <Grid container spacing={3} className={classes.mb20}>
                                            <Grid item xs={12} sm={4}>
                                                <Box p={2} className={`${classes.boxBorder} ${classes.boxBlue}`}>
                                                    <Typography variant="h6" className={`${classes.typoBold} ${classes.center} ${classes.mb10}`}>
                                                        Text
                                                    </Typography>
                                                    <Typography variant="h6" className={`${classes.typo} ${classes.center}`}>
                                                        10
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                            <Grid item xs={12} sm={4}>
                                                <Box p={2} className={`${classes.boxBorder} ${classes.boxYellow}`}>
                                                    <Typography variant="h6" className={`${classes.typoBold} ${classes.center} ${classes.mb10}`}>
                                                        Text
                                                    </Typography>
                                                    <Typography variant="h6" className={`${classes.typo} ${classes.center}`}>
                                                        6
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                            <Grid item xs={12} sm={4}>
                                                <Box p={2} className={`${classes.boxBorder} ${classes.boxRed}`}>
                                                    <Typography variant="h6" className={`${classes.typoBold} ${classes.center} ${classes.mb10}`}>
                                                        Text
                                                    </Typography>
                                                    <Typography variant="h6" className={`${classes.typo} ${classes.center}`}>
                                                        5
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                        </Grid>

                                        <Box p={2} className={classes.boxGray}>
                                            <Grid container alignItems="center" spacing={3}>
                                                <Grid item xs={4} sm={2}>
                                                    <img src={Dummy} className={classes.Thumbnail} alt="dummy" />
                                                </Grid>
                                                <Grid item xs={8} sm={7}>
                                                    <Typography variant="h6" className={classes.typoBold}>
                                                        Text
                                                    </Typography>
                                                    <Typography variant="h6" className={classes.lineHeight}>
                                                        Text: text
                                                    </Typography>
                                                    <Typography variant="h6" className={classes.lineHeight}>
                                                        Text: text
                                                    </Typography>
                                                    <Typography variant="h6" className={classes.lineHeight}>
                                                        Text: text
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={12} sm={3}>
                                                    <Typography variant="h6" className={`${classes.lineHeight} ${classes.center}`}>
                                                        Text
                                                    </Typography>

                                                    <Button variant="contained" className={classes.formButton} color="primary">Text</Button>
                                                    <Button variant="contained" className={classes.formButton} color="primary">Text</Button>
                                                    <Button variant="contained" className={classes.formButton} color="primary">Text</Button>
                                                </Grid>
                                            </Grid>
                                        </Box>

                                        <Box p={2} className={classes.boxGray}>
                                            <Grid container alignItems="center" spacing={3}>
                                                <Grid item xs={4} sm={2}>
                                                    <img src={Dummy} className={classes.Thumbnail} alt="dummy" />
                                                </Grid>
                                                <Grid item xs={8} sm={7}>
                                                    <Typography variant="h6" className={classes.typoBold}>
                                                        Text
                                                    </Typography>
                                                    <Typography variant="h6" className={classes.lineHeight}>
                                                        Text: text
                                                    </Typography>
                                                    <Typography variant="h6" className={classes.lineHeight}>
                                                        Text: text
                                                    </Typography>
                                                    <Typography variant="h6" className={classes.lineHeight}>
                                                        Text: text
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={12} sm={3}>
                                                    <Typography variant="h6" className={`${classes.lineHeight} ${classes.center}`}>
                                                        Text
                                                    </Typography>

                                                    <Button variant="contained" className={classes.formButton} color="primary">Text</Button>
                                                    <Button variant="contained" className={classes.formButton} color="primary">Text</Button>
                                                    <Button variant="contained" className={classes.formButton} color="primary">Text</Button>
                                                </Grid>
                                            </Grid>
                                        </Box>
                                    </Box>
                                </Grid>

                                <Grid item xs={12} sm={12} md={5}>
                                    <Typography variant="h5" className={`${classes.typo} ${classes.center} ${classes.mb20}`}>
                                        Text Here. Text Here
                                    </Typography>

                                    <Box className={classes.boxContainer}>
                                        <Box p={1} className={classes.boxGray}>
                                            <Grid container alignItems="center" spacing={3}>
                                                <Grid item xs={2}>
                                                    <img src={Dummy} className={`${classes.Thumbnail} ${classes.rounded}`} alt="dummy" />
                                                </Grid>
                                                <Grid item xs={6}>
                                                    <Typography variant="h6" className={classes.typoBold}>
                                                        Text
                                                    </Typography>
                                                    <Typography variant="h6" className={classes.lineHeight}>
                                                        Text: text
                                                    </Typography>
                                                    <Typography variant="h6" className={classes.lineHeight}>
                                                        Text: text
                                                    </Typography>
                                                    <Typography variant="h6" className={classes.lineHeight}>
                                                        Text: text
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={4}>
                                                    <Button variant="contained" className={`${classes.formButton} ${classes.btnGreen}`}>Text</Button>
                                                    <Button variant="contained" className={classes.formButton} color="secondary">Text</Button>
                                                    <Button variant="contained" className={classes.formButton} color="primary">Text</Button>
                                                </Grid>
                                            </Grid>
                                        </Box>
                                        <Box p={1} className={classes.boxGray}>
                                            <Grid container alignItems="center" spacing={3}>
                                                <Grid item xs={2}>
                                                    <img src={Dummy} className={`${classes.Thumbnail} ${classes.rounded}`} alt="dummy" />
                                                </Grid>
                                                <Grid item xs={6}>
                                                    <Typography variant="h6" className={classes.typoBold}>
                                                        Text
                                                    </Typography>
                                                    <Typography variant="h6" className={classes.lineHeight}>
                                                        Text: text
                                                    </Typography>
                                                    <Typography variant="h6" className={classes.lineHeight}>
                                                        Text: text
                                                    </Typography>
                                                    <Typography variant="h6" className={classes.lineHeight}>
                                                        Text: text
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={4}>
                                                    <Button variant="contained" className={`${classes.formButton} ${classes.btnGreen}`}>Text</Button>
                                                    <Button variant="contained" className={classes.formButton} color="secondary">Text</Button>
                                                    <Button variant="contained" className={classes.formButton} color="primary">Text</Button>
                                                </Grid>
                                            </Grid>
                                        </Box>
                                    </Box>
                                </Grid>
                            </Grid>

                            <Typography variant="h4" className={`${classes.typoBold} ${classes.center} ${classes.mb10}`}>
                                “Text”
                            </Typography>
                            <Typography variant="h5" className={`${classes.center} ${classes.mb20}`}>
                                Text
                            </Typography>

                            <Box className={`${classes.rating} ${classes.mb20}`}>
                                <img src={Star} alt="star" />
                                <strong>5.0</strong>
                                <span>(30)</span>
                            </Box>

                            <Grid container spacing={4} className={classes.mb50}>
                                <Grid item xs={12} sm={12} md={7}>
                                    <Box className={classes.boxContainer}>
                                        <Typography variant="h5" className={classes.mb20}>
                                            <strong>Text:</strong> Text
                                        </Typography>
                                        <Typography variant="h5" className={classes.mb20}>
                                            <strong>Text:</strong> Text
                                        </Typography>
                                        <Typography variant="h5" className={classes.mb50}>
                                            <strong>Text:</strong> Text
                                        </Typography>
                                        <Typography variant="h5">
                                            <strong>Text:</strong>
                                        </Typography>
                                        
                                        <ul className={`${classes.list} ${classes.mb30}`}>
                                            <li>Text</li>
                                            <li>Text</li>
                                            <li>Text</li>
                                            <li>Text</li>
                                            <li>Text</li>
                                        </ul>

                                        <Typography variant="h5">
                                            <strong>Text:</strong>
                                        </Typography>
                                        
                                        <ul className={`${classes.list} ${classes.mb20}`}>
                                            <li>Text</li>
                                        </ul>

                                        <Typography variant="h5" className={classes.mb30}>
                                            Text
                                        </Typography>
                                        
                                        <Typography variant="h5" className={classes.mb20}>
                                            <strong>Text:</strong> Text
                                        </Typography>
                                    </Box>
                                </Grid>

                                <Grid item xs={12} sm={12} md={5}>
                                    <Carousel />

                                    <Box className={classes.center}>
                                        <Button
                                            className={classes.buttonXL}
                                            variant="contained"
                                            color="primary"
                                            >
                                            Text
                                        </Button>
                                    </Box>
                                </Grid>
                            </Grid>

                            <Typography className={classes.mb30}>
                                Text
                            </Typography>
                        </Container>
                    </div>
                </Layout>
            </ThemeProvider>
        )
    }

    export default PageFormFlow3;