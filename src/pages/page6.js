    import React from 'react';
    import {
    Container,
    makeStyles,
    Grid,
    Button,
    createTheme,
    Typography,
    Input,
    Box,
    Avatar,
    Link
    } from "@material-ui/core";
    import { ThemeProvider } from "@material-ui/styles";
    import ThemeColor from '../style/color';

    // layout
    import Layout from '../global/PrimaryLayout';
    import AccountMenu from '../components/AccountMenu';

    // assets
    import Logo from '../assets/images/logo.png';
    import Dummy from '../assets/images/dummy.png';
    import Star from '../assets/images/gold-star.jpg';

    const useStyles = makeStyles((theme) => ({
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
        typoSmall:{
            color: ThemeColor.GrayDark,
            fontWeight: 'bold',
            lineHeight: '1',
            fontSize: '15px',
            '& a':{
                color: ThemeColor.GrayDark,
                fontWeight: 'bold',

                '&:hover':{
                    color: ThemeColor.LinkColor,
                }
            }
        },
        typoXLSmall:{
            color: ThemeColor.Black,
            fontWeight: 'normal',
            lineHeight: '1',
            fontSize: '13px',
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
        mb8:{
            marginBottom: '8px'
        },
        mb12:{
            marginBottom: '15px'
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
            border: `1px solid ${ThemeColor.GrayDark}`,
            padding: '30px',
            height: '100%',
            '@media (max-width: 640px)':{
                padding: '15px'
            }
        },
        boxContainerInner:{
            maxWidth: '750px',
            width: '100%',
            margin: 'auto'
        },
        boxBorder:{
            border: `1px solid ${ThemeColor.GrayDark}`,
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
            fontSize: "18px",
            boxShadow: "none",
            borderRadius: "50px",
            padding: '4px 10px',
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
        formButtonXL:{
            fontSize: '20px',
            padding: '5px 10px',
        },
        btnGreen:{
            backgroundColor: ThemeColor.Green,
            '&:hover':{
                backgroundColor: '#448810'
            }
        },
        rating:{
            display: 'flex',
            fontSize: '18px',
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
                width: '20px',
                height: '20px',
                marginRight: '5px'
            }
        },
        list:{
            paddingLeft: '20px'
        },
        p0:{
            padding: '0px'
        },
        p20:{
            padding: '20px'
        },
        indigator:{
            border: `1px solid ${ThemeColor.GrayDark}`,
            backgroundColor: ThemeColor.Online,
            position: 'absolute',
            borderRadius: '15px',
            right: '0px',
            top: '0px',
            width: '15px',
            height: '15px'
        },
        avtar:{
            cursor: 'pointer',
            overflow: 'visible',
            position: 'relative',
            color: ThemeColor.White,
            width: theme.spacing(7),
            height: theme.spacing(7),
            backgroundColor: ThemeColor.YellowDark,
            border: `1px solid ${ThemeColor.GrayDark}`
        },
        avtarCenter:{
            margin: '0 auto 15px'
        },
        avatarItem:{
            display: 'flex',
            alignItems: 'center',
            padding: '15px 12px',
            '& + div' :{
                borderTop: `1px solid ${ThemeColor.GrayDark}`
            }
        },
        avatarItemContent:{
            paddingLeft: '15px'
        },
        textNoWrap:{
            display: 'flex',
            justifyContent: 'space-between'
        },
        divider:{
            fontWeight: 'bold',
            color: ThemeColor.YellowDark,
            borderBottom: `1px solid ${ThemeColor.YellowDark}`
        },
        noBorder:{
            border: 'none'
        },
        btnLink:{
            color: ThemeColor.LinkColor,
            textDecoration: 'underline',
            fontWeight: 'bold',
        },
        formSend:{
            display: 'flex',
            '& button':{
                marginLeft: '12px',
                fontWeight: 'bold'
            },
            '& input, & button':{
                border: `1px solid ${ThemeColor.GrayDark}`,
                borderRadius: '22px',
                boxShadow: 'none',
                padding: '5px 12px',
                textTransform: 'none'
            },
            '& div:before, & div:after':{
                display: 'none'
            }
        },
        alignStart:{
            alignSelf: 'flex-start'
        }
    }));


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
                            <Grid container spacing={2} className={classes.mb50}>
                                <Grid item xs={12} sm={12} md={3} className={classes.mb20}>
                                    <Box className={`${classes.boxContainer} ${classes.p0}`}>
                                        <Box className={classes.avatarItem}>
                                            <Avatar aria-haspopup="true" className={classes.avtar}>P <Box component="span" className={classes.indigator}></Box></Avatar>
                                            <Box className={classes.avatarItemContent}>
                                                <Typography variant="h5" className={`${classes.typoBold} ${classes.mb8}`}>
                                                    Text
                                                </Typography>
                                                <Typography variant="h6" className={classes.typoSmall}>
                                                    Text
                                                </Typography>
                                            </Box>
                                        </Box>
                                        <Box className={classes.avatarItem}>
                                            <Avatar aria-haspopup="true" className={classes.avtar}>P <Box component="span" className={classes.indigator}></Box></Avatar>
                                            <Box className={classes.avatarItemContent}>
                                                <Typography variant="h5" className={`${classes.typoBold} ${classes.mb8}`}>
                                                    Text
                                                </Typography>
                                                <Typography variant="h6" className={classes.typoSmall}>
                                                    Text
                                                </Typography>
                                            </Box>
                                        </Box>
                                        <Box className={classes.avatarItem}>
                                            <Avatar aria-haspopup="true" className={classes.avtar}>P <Box component="span" className={classes.indigator}></Box></Avatar>
                                            <Box className={classes.avatarItemContent}>
                                                <Typography variant="h5" className={`${classes.typoBold} ${classes.mb8}`}>
                                                    Text
                                                </Typography>
                                                <Typography variant="h6" className={classes.typoSmall}>
                                                    Text
                                                </Typography>
                                            </Box>
                                        </Box>
                                        <Box className={classes.avatarItem}>
                                            <Avatar aria-haspopup="true" className={classes.avtar}>P <Box component="span" className={classes.indigator}></Box></Avatar>
                                            <Box className={classes.avatarItemContent}>
                                                <Typography variant="h5" className={`${classes.typoBold} ${classes.mb8}`}>
                                                    Text
                                                </Typography>
                                                <Typography variant="h6" className={classes.typoSmall}>
                                                    Text
                                                </Typography>
                                            </Box>
                                        </Box>
                                        <Box className={classes.avatarItem}>
                                            <Avatar aria-haspopup="true" className={classes.avtar}>P <Box component="span" className={classes.indigator}></Box></Avatar>
                                            <Box className={classes.avatarItemContent}>
                                                <Typography variant="h5" className={`${classes.typoBold} ${classes.mb8}`}>
                                                    Text
                                                </Typography>
                                                <Typography variant="h6" className={classes.typoSmall}>
                                                    Text
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} sm={12} md={6} className={classes.mb20}>
                                    <Box className={`${classes.boxContainer} ${classes.p0}`}>
                                        <Box p={1.2}>
                                            <Typography variant="h6" className={`${classes.typoXLSmall} ${classes.center}`}>
                                                Text
                                            </Typography>
                                        </Box>
                                        <Box className={classes.textNoWrap} p={1.2}>
                                            <Typography variant="h6" className={classes.typoSmall}>
                                                Text
                                            </Typography>
                                            <Typography variant="h6" className={`${classes.typoXLSmall} ${classes.center}`}>
                                                Text
                                            </Typography>
                                        </Box>
                                        <Box className={classes.textNoWrap} p={1.2}>
                                            <Typography variant="h6" className={classes.typoSmall}>
                                                Text
                                            </Typography>
                                            <Typography variant="h6" className={`${classes.typoXLSmall} ${classes.center}`}>
                                                Text
                                            </Typography>
                                        </Box>
                                        <Box className={classes.textNoWrap} p={1.2}>
                                            <Typography variant="h6" className={classes.typoSmall}>
                                                Text
                                            </Typography>
                                            <Typography variant="h6" className={`${classes.typoXLSmall} ${classes.center}`}>
                                                Text
                                            </Typography>
                                        </Box>
                                        <Box className={classes.textNoWrap} p={1.2}>
                                            <Typography variant="h6" className={classes.typoSmall}>
                                                Text
                                            </Typography>
                                            <Typography variant="h6" className={`${classes.typoXLSmall} ${classes.center}`}>
                                                Text
                                            </Typography>
                                        </Box>

                                        <Typography variant="h6" className={`${classes.divider} ${classes.center}`}>
                                            Text
                                        </Typography>

                                        <Box p={1.2}>
                                            <Typography variant="h6" className={`${classes.typoXLSmall} ${classes.center}`}>
                                                Text
                                            </Typography>
                                        </Box>
                                        <Box className={classes.textNoWrap} p={1.2}>
                                            <Typography variant="h6" className={classes.typoSmall}>
                                                Text
                                            </Typography>
                                            <Typography variant="h6" className={`${classes.typoXLSmall} ${classes.center}`}>
                                                Text
                                            </Typography>
                                        </Box>
                                        <Box className={classes.textNoWrap} p={1.2}>
                                            <Typography variant="h6" className={classes.typoSmall}>
                                                Text
                                            </Typography>
                                            <Typography variant="h6" className={`${classes.typoXLSmall} ${classes.center}`}>
                                                Text
                                            </Typography>
                                        </Box>
                                        <Box className={classes.textNoWrap} p={1.2}>
                                            <Typography variant="h6" className={classes.typoSmall}>
                                                Text
                                            </Typography>
                                            <Typography variant="h6" className={`${classes.typoXLSmall} ${classes.center}`}>
                                                Text
                                            </Typography>
                                        </Box>
                                        <Box className={classes.textNoWrap} p={1.2}>
                                            <Typography variant="h6" className={classes.typoSmall}>
                                                Text
                                            </Typography>
                                            <Typography variant="h6" className={`${classes.typoXLSmall} ${classes.center}`}>
                                                Text
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} sm={12} md={3} className={classes.mb20}>
                                    <Box className={`${classes.boxContainer} ${classes.p20}`} display={'flex'} flexDirection="column">
                                        <Box className={classes.center} p={0}>
                                            <Avatar aria-haspopup="true" className={`${classes.avtar} ${classes.avtarCenter}`}>P</Avatar>
                                            <Typography variant="h5" className={`${classes.typoBold} ${classes.mb8}`}>
                                                Text
                                            </Typography>
                                            <Box className={`${classes.rating} ${classes.mb20}`}>
                                                <img src={Star} alt="star" />
                                                <strong>4.9</strong>
                                                <span>(1k+)</span>
                                            </Box>
                                        </Box>

                                        <Typography variant="h6" className={`${classes.divider} ${classes.noBorder} ${classes.mb8} ${classes.center}`}>
                                            Text
                                        </Typography>
                                        <Typography variant="h6" className={`${classes.typo} ${classes.mb30}`}>
                                            <strong>Text:</strong> Text <br /><strong>Text:</strong> Text <br /><strong>Text:</strong> Text
                                        </Typography>

                                        <Box p={0} marginTop="auto">
                                            <Button variant="contained" className={`${classes.formButton} ${classes.mb12}`} color="primary">Text</Button>

                                            <Grid container spacing={2}>
                                                <Grid item xs={6}>
                                                    <Button variant="contained" className={`${classes.formButton} ${classes.btnGreen}`}>Text Here</Button>
                                                </Grid>
                                                <Grid item xs={6}>
                                                    <Button variant="contained" className={classes.formButton} color="secondary">Text Here</Button>
                                                </Grid>
                                            </Grid>
                                        </Box>
                                    </Box>
                                </Grid>
                            </Grid>

                            <Grid container spacing={2} justifyContent="space-around" className={classes.mb50}>
                                <Grid item xs={12} sm={12} md={3} className={classes.mb30}>
                                    <Box className={`${classes.boxContainer} ${classes.p20}`} display={'flex'} flexDirection="column">
                                        <Box className={classes.center} p={0}>
                                            <Avatar aria-haspopup="true" className={`${classes.avtar} ${classes.avtarCenter}`}>P</Avatar>
                                            <Typography variant="h5" className={`${classes.typoBold} ${classes.mb8}`}>
                                                Text
                                            </Typography>
                                            <Box className={`${classes.rating} ${classes.mb20}`}>
                                                <img src={Star} alt="star" />
                                                <strong>4.9</strong>
                                                <span>(1k+)</span>
                                            </Box>
                                        </Box>

                                        <Typography variant="h6" className={`${classes.divider} ${classes.noBorder} ${classes.mb8} ${classes.center}`}>
                                            Text
                                        </Typography>
                                        <Typography variant="h6" className={`${classes.typoBold} ${classes.mb50}`}>
                                            Text: Text <br />
                                            Text: Text <br />
                                            Text: Text
                                        </Typography>

                                        <Typography variant="h6" className={`${classes.typoXLSmall} ${classes.mb8} ${classes.center}`}>
                                            Text
                                        </Typography>
                                        <Typography variant="h6" className={`${classes.typoSmall} ${classes.center} ${classes.mb30}`}>
                                            <Link
                                                variant="body2"
                                                href="#"
                                                className={classes.btnLink}
                                                >
                                                    Text Here
                                            </Link>
                                        </Typography>

                                        <Box p={0} marginTop="auto">
                                            <Button variant="contained" className={`${classes.formButton} ${classes.mb12}`} color="primary">Text</Button>

                                            <Button variant="contained" className={`${classes.formButton} ${classes.formButtonXL} ${classes.btnGreen}`}>Text Here</Button>
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} sm={12} md={3} className={classes.mb30}>
                                    <Box className={`${classes.boxContainer} ${classes.p20}`} display={'flex'} flexDirection="column">
                                        <Box className={classes.center} p={0}>
                                            <Avatar aria-haspopup="true" className={`${classes.avtar} ${classes.avtarCenter}`}>P</Avatar>
                                            <Typography variant="h5" className={`${classes.typoBold} ${classes.mb8}`}>
                                                Text
                                            </Typography>
                                            <Box className={`${classes.rating} ${classes.mb20}`}>
                                                <img src={Star} alt="star" />
                                                <strong>4.9</strong>
                                                <span>(1k+)</span>
                                            </Box>
                                        </Box>

                                        <Typography variant="h6" className={`${classes.divider} ${classes.noBorder} ${classes.mb8} ${classes.center}`}>
                                            Text
                                        </Typography>
                                        <Typography variant="h6" className={`${classes.typoBold} ${classes.mb50}`}>
                                            Text: Text <br />
                                            Text: Text <br />
                                            Text: Text
                                        </Typography>

                                        <Typography variant="h6" className={`${classes.typoXLSmall} ${classes.mb8} ${classes.center}`}>
                                            Text
                                        </Typography>
                                        <Typography variant="h6" className={`${classes.typoSmall} ${classes.center} ${classes.mb30}`}>
                                            <Link
                                                variant="body2"
                                                href="#"
                                                className={classes.btnLink}
                                                >
                                                    Text Here
                                            </Link>
                                        </Typography>

                                        <Box p={0} marginTop="auto">
                                            <Button variant="contained" className={`${classes.formButton} ${classes.mb12}`} color="primary">Text</Button>

                                            <Grid container spacing={2}>
                                                <Grid item xs={6}>
                                                    <Button variant="contained" className={`${classes.formButton} ${classes.btnGreen}`}>Text Here</Button>
                                                </Grid>
                                                <Grid item xs={6}>
                                                    <Button variant="contained" className={classes.formButton} color="secondary">Text Here</Button>
                                                </Grid>
                                            </Grid>
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} sm={12} md={3} className={classes.mb30}>
                                    <Box className={`${classes.boxContainer} ${classes.p20}`} display={'flex'} flexDirection="column">
                                        <Box className={classes.center} p={0}>
                                            <Avatar aria-haspopup="true" className={`${classes.avtar} ${classes.avtarCenter}`}>P</Avatar>
                                            <Typography variant="h5" className={`${classes.typoBold} ${classes.mb8}`}>
                                                Text
                                            </Typography>
                                            <Box className={`${classes.rating} ${classes.mb20}`}>
                                                <img src={Star} alt="star" />
                                                <strong>4.9</strong>
                                                <span>(1k+)</span>
                                            </Box>
                                        </Box>

                                        <Typography variant="h6" className={`${classes.divider} ${classes.noBorder} ${classes.mb8} ${classes.center}`}>
                                            Text
                                        </Typography>
                                        <Typography variant="h6" className={`${classes.typoBold} ${classes.mb50}`}>
                                            Text: Text <br />
                                            Text: Text <br />
                                            Text: Text
                                        </Typography>

                                        <Typography variant="h6" className={`${classes.typoXLSmall} ${classes.mb8} ${classes.center}`}>
                                            Text
                                        </Typography>
                                        
                                        <form action="/" className={`${classes.formSend} ${classes.mb30}`}>
                                            <Input />
                                            <Button variant="contained" color="primary">Send</Button>
                                        </form>

                                        <Box p={0} marginTop="auto">
                                            <Button variant="contained" className={`${classes.formButton} ${classes.mb12}`} color="primary">Text</Button>

                                            <Button variant="contained" className={`${classes.formButton} ${classes.formButtonXL} ${classes.mb12} ${classes.btnGreen}`}>Text Here</Button>

                                            <Typography variant="h6" className={`${classes.typoSmall} ${classes.center}`}>
                                                <Link
                                                    variant="body2"
                                                    href="#"
                                                    >
                                                        Text Here
                                                </Link>
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                            </Grid>

                            <Typography variant="h4" className={`${classes.typoBold} ${classes.center} ${classes.mb60}`}>
                                Text
                            </Typography>
                            
                            <Grid container spacing={4} justifyContent="center" className={classes.mb50}>
                                <Grid item xs={12} sm={12} md={9}>
                                    <Typography variant="h5" className={`${classes.typo} ${classes.center} ${classes.mb20}`}>
                                        Text
                                    </Typography>

                                    <Box className={classes.boxContainer}>
                                        <Box className={classes.boxContainerInner}>
                                            <Grid container spacing={3} className={classes.mb20}>
                                                <Grid item xs={12} sm={4}>
                                                    <Box p={2} className={`${classes.boxBorder} ${classes.boxBlue}`}>
                                                        <Typography variant="h6" className={`${classes.typoBold} ${classes.center} ${classes.mb10}`}>
                                                            Text
                                                        </Typography>
                                                        <Typography variant="h6" className={`${classes.typo} ${classes.center}`}>
                                                            6
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
                                                            10
                                                        </Typography>
                                                    </Box>
                                                </Grid>
                                            </Grid>

                                            <Box p={2} className={classes.boxGray}>
                                                <Grid container alignItems="center" spacing={3}>
                                                    <Grid item xs={4} sm={2}>
                                                        <img src={Dummy} className={classes.Thumbnail} alt="dummy" />
                                                    </Grid>
                                                    <Grid className={classes.alignStart} item xs={8} sm={7}>
                                                        <Typography variant="h6" className={classes.typoBold}>
                                                            Text
                                                        </Typography>
                                                        <Typography variant="h6" className={classes.lineHeight}>
                                                            Text
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
                                                    <Grid className={classes.alignStart} item xs={8} sm={7}>
                                                        <Typography variant="h6" className={classes.typoBold}>
                                                            Text
                                                        </Typography>
                                                        <Typography variant="h6" className={classes.lineHeight}>
                                                            Text
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
                                                    <Grid className={classes.alignStart} item xs={8} sm={7}>
                                                        <Typography variant="h6" className={classes.typoBold}>
                                                            Headphones
                                                        </Typography>
                                                        <Typography variant="h6" className={classes.lineHeight}>
                                                            Text
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
                                    </Box>
                                </Grid>
                            </Grid>
                        </Container>
                    </div>
                </Layout>
            </ThemeProvider>
        )
    }

    export default PageFormFlow3;