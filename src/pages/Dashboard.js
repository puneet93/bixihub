    import React from 'react';
    import {
    Container,
    makeStyles,
    Grid,
    Button,
    createTheme,
    Typography,
    Input,
    TextareaAutosize,
    Box,
    Avatar,
    Link,
    Modal
    } from "@material-ui/core";
    import { ThemeProvider } from "@material-ui/styles";
    import ThemeColor from '../style/color';

    // layout
    import Layout from '../global/PrimaryLayout';
    import AccountMenu from '../components/AccountMenuDasboard';

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
            border: `1px solid ${ThemeColor.GrayDark}`,
            padding: '30px',
            height: '100%',
            '@media (max-width: 640px)':{
                padding: '15px'
            }
        },
        boxContainerScroll:{
            height: '570px',
            overflow: 'auto'
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
            borderRadius: '4px',
            marginBottom: '15px',

            '& h6':{
                fontSize: '14px',
                marginBottom: '8px'
            }
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
            backgroundColor: ThemeColor.YellowLight,
            border: `1px solid ${ThemeColor.GrayDark}`,

            '& + button':{
                marginTop: '5px'
            }
        },
        formButtonXL:{
            fontSize: '20px',
            padding: '5px 10px',
        },
        formButtonXXL:{
            fontSize: '18px',
            padding: '15px 25px',
            width: 'auto',
            float: 'right'
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
        p10:{
            padding: '10px'
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
            color: ThemeColor.Black,
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
            cursor: 'pointer',
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
            marginBottom: '6px',
            '& button':{
                marginLeft: '12px',
                fontWeight: 'bold'
            },
            '& input, & button':{
                border: `1px solid ${ThemeColor.GrayDark}`,
                borderRadius: '22px',
                boxShadow: 'none',
                padding: '5px 12px',
                textTransform: 'none',
                width: '100%'
            },
            '& div:before, & div:after':{
                display: 'none'
            },
            '& div':{
                display: 'flex'
            }
        },
        alignStart:{
            alignSelf: 'flex-start'
        },
        modal:{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            maxWidth: '680px',
            width: '90%',
            padding: '25px',
            backgroundColor: ThemeColor.White,
            border: '1px solid #000',
            boxShadow: 24,
            borderRadius: '10px'
        },
        textArea:{
            border: `1px solid ${ThemeColor.GrayDark}`,
            borderRadius: '5px',
            boxShadow: 'none',
            padding: '5px 12px',
            textTransform: 'none',
            width: '100%',
            fontFamily: "Helvetica Neue",
            fontSize: '15px'
        },
        modalCloase:{
            position: 'absolute',
            backgroundColor: 'transparent !important',
            top: '10px',
            right: '0px',

            '& svg':{
                width: '22px',
                height: '22px'
            }
        },
        btnSm:{
            width: '100%',
            fontSize: "9px",
            boxShadow: "none",
            borderRadius: "50px",
            padding: '4px 3px',
            lineHeight: "normal",
            fontWeight: "bold",
            textTransform: "none",
            color: ThemeColor.Black,
            fontFamily: "Helvetica Neue",
            backgroundColor: ThemeColor.YellowLight,
            border: `1px solid ${ThemeColor.GrayDark}`,
        },
        btnBlue:{
            backgroundColor: ThemeColor.Blue,
            color: ThemeColor.White,
            padding: '8px 3px',
        },
        aStartTop:{
            alignSelf: 'flex-start'
        },
        textGreen:{
            color: ThemeColor.GreenText,
            textShadow: '0px 1px 0 #5A5959'
        },
        textOrange:{
            color: ThemeColor.Orange,
            textShadow: '0px 1px 0 #5A5959'
        },
        bgOrange: {
            backgroundColor: ThemeColor.OrangeLight
        },
        filter:{
            marginBottom: '10px',
            '& h6':{
                fontSize: '14px'
            }
        },
        filterBox:{
            border: '1px solid #005025',
            borderRadius: '4px',
            padding: '3px 6px',
            marginBottom: '5px',

            '& p':{
                color: '#707070',
                fontSize: '10px'
            }
        },
        filterThumbnail:{
            border: '1px solid #707070',
            borderRadius: '25px'
        },
        filterRating:{
            fontSize: '15px',
            '& strong':{
                marginLeft: '0px' 
            }
        },
        dropdown:{
            marginBottom: '30px',
            position: 'relative',

            '& button':{
                width: '185px',
                margin: 'auto',
                display: 'flex',

                '& svg':{
                    marginLeft: '5px'
                }
            }
        },
        dropdownMenu:{
            position: 'absolute',
            top: '100%',
            right: '0',
            zIndex: '5',
            padding: '15px',
            width: '620px',
            marginTop: '5px',
            height: '180px',
            overflow: 'auto',
            backgroundColor: ThemeColor.White,
            border: '1px solid #707070',

            '@media (max-width: 959px)':{
                width: '100%',
                padding: '10px',

                '& p':{
                    fontSize: '14px',
                    lineHeight: '1.3'
                }
            }
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

        const [open, setOpen] = React.useState(false);
        const handleOpen = () => setOpen(true);
        const handleClose = () => setOpen(false);
        
        
        const [dOpen, setdOpen] = React.useState(false);
        const dropdownOpen = () => setdOpen(!dOpen);

        const [filter, setFilter] = React.useState(false);

        const filterToggle = () =>{
            setFilter(!filter);
        }
        
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
                                    <Box className={`${classes.boxContainer} ${classes.p10} ${classes.boxContainerScroll}`}>
                                        <Typography variant="h6" className={`${classes.typoXLSmall} ${classes.mb8}`}>
                                            Posted Jan 21
                                        </Typography>

                                        <Box p={1} className={classes.boxGray}>
                                            <Grid container alignItems="center" spacing={1}>
                                                <Grid item xs={3}>
                                                    <img src={Dummy} className={`${classes.Thumbnail}`} alt="dummy" />
                                                </Grid>
                                                <Grid item xs={5}>
                                                    <Typography variant="h6" className={classes.typoBold}>
                                                        Elephant Scale
                                                    </Typography>
                                                    <Typography variant="h6" className={`${classes.lineHeight} ${classes.textGreen}`}>
                                                        Status: 12345678
                                                    </Typography>
                                                    <Typography variant="h6" className={classes.lineHeight}>
                                                        Due Date: <br />Jan 2, 2023
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={4} className={classes.aStartTop}>
                                                    <Typography variant="h6" className={`${classes.typoBold} ${classes.center} ${classes.mb30}`}>
                                                        Added Text
                                                    </Typography>
                                                    <Button variant="contained" className={classes.btnSm} color="primary">View/Edit text</Button>
                                                </Grid>
                                            </Grid>
                                        </Box>
                                        <Box p={1} className={classes.boxGray}>
                                            <Grid container alignItems="center" spacing={1}>
                                                <Grid item xs={3}>
                                                    <img src={Dummy} className={`${classes.Thumbnail}`} alt="dummy" />
                                                </Grid>
                                                <Grid item xs={5}>
                                                    <Typography variant="h6" className={classes.typoBold}>
                                                        Elephant Scale
                                                    </Typography>
                                                    <Typography variant="h6" className={`${classes.lineHeight} ${classes.textOrange}`}>
                                                        Status: 12345678
                                                    </Typography>
                                                    <Typography variant="h6" className={classes.lineHeight}>
                                                        Due Date: <br />Jan 2, 2023
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={4} className={classes.aStartTop}>
                                                    <Typography variant="h6" className={`${classes.typoBold} ${classes.center} ${classes.mb30}`}>
                                                        Added Text
                                                    </Typography>
                                                    <Button variant="contained" className={classes.btnSm} color="primary">View/Edit text</Button>
                                                </Grid>
                                            </Grid>
                                        </Box>
                                        <Box p={1} className={classes.boxGray}>
                                            <Grid container alignItems="center" spacing={1}>
                                                <Grid item xs={3}>
                                                    <img src={Dummy} className={`${classes.Thumbnail}`} alt="dummy" />
                                                </Grid>
                                                <Grid item xs={5}>
                                                    <Typography variant="h6" className={classes.typoBold}>
                                                        Elephant Scale
                                                    </Typography>
                                                    <Typography variant="h6" className={`${classes.lineHeight} ${classes.textGreen}`}>
                                                        Status: 12345678
                                                    </Typography>
                                                    <Typography variant="h6" className={classes.lineHeight}>
                                                        Due Date: <br />Jan 2, 2023
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={4} className={classes.aStartTop}>
                                                    <Typography variant="h6" className={`${classes.typoBold} ${classes.center} ${classes.mb30}`}>
                                                        Added Text
                                                    </Typography>
                                                    <Button variant="contained" className={classes.btnSm} color="primary">View/Edit text</Button>
                                                </Grid>
                                            </Grid>
                                        </Box>
                                        <Box p={1} className={classes.boxGray}>
                                            <Grid container alignItems="center" spacing={1}>
                                                <Grid item xs={3}>
                                                    <img src={Dummy} className={`${classes.Thumbnail}`} alt="dummy" />
                                                </Grid>
                                                <Grid item xs={5}>
                                                    <Typography variant="h6" className={classes.typoBold}>
                                                        Elephant Scale
                                                    </Typography>
                                                    <Typography variant="h6" className={`${classes.lineHeight} ${classes.textOrange}`}>
                                                        Status: 12345678
                                                    </Typography>
                                                    <Typography variant="h6" className={classes.lineHeight}>
                                                        Due Date: <br />Jan 2, 2023
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={4} className={classes.aStartTop}>
                                                    <Typography variant="h6" className={`${classes.typoBold} ${classes.center} ${classes.mb30}`}>
                                                        Added Text
                                                    </Typography>
                                                    <Button variant="contained" className={classes.btnSm} color="primary">View/Edit text</Button>
                                                </Grid>
                                            </Grid>
                                        </Box>

                                        <Typography variant="h6" className={`${classes.typoXLSmall} ${classes.mb8}`}>
                                            Posted Jan 22
                                        </Typography>

                                        <Box p={1} className={`${classes.boxGray} ${classes.bgOrange}`}>
                                            <Grid container alignItems="center" spacing={1}>
                                                <Grid item xs={3}>
                                                    <img src={Dummy} className={`${classes.Thumbnail}`} alt="dummy" />
                                                </Grid>
                                                <Grid item xs={5}>
                                                    <Typography variant="h6" className={classes.typoBold}>
                                                        Elephant Scale
                                                    </Typography>
                                                    <Typography variant="h6" className={classes.lineHeight}>
                                                        123456789: 2 <br />123456: 2 <br />123456789: 3 <br />123 12345678: 1
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={4} className={classes.aStartTop}>
                                                    <Typography variant="h6" className={`${classes.typoBold} ${classes.center} ${classes.mb30}`}>
                                                        Added Text
                                                    </Typography>
                                                    <Button onClick={() => filterToggle()} variant="contained" className={`${classes.btnSm} ${classes.btnBlue}`} color="primary">Added text</Button>
                                                    <Button variant="contained" className={classes.btnSm} color="primary">View/Edit text</Button>
                                                </Grid>
                                            </Grid>
                                        </Box>

                                        {filter ? (
                                            <>
                                                <Box className={classes.filter} style={{display: 'flex', alignItems: 'center', flexWrap: 'wrap'}}>
                                                    <Typography variant="h6" className={classes.lineHeight} style={{marginBottom: '3px'}}>
                                                        Filter By:
                                                    </Typography>

                                                    <Typography className={classes.lineHeight} style={{fontSize: '10px', marginLeft: '4px', marginBottom: '3px', border:'1px solid #005025', backgroundColor: '#ECFFE3', padding:'5px 4px', borderRadius: '5px'}}>
                                                        123456789: 2
                                                    </Typography>
                                                    <Typography className={classes.lineHeight} style={{fontSize: '10px', marginLeft: '4px', marginBottom: '3px', border:'1px solid #005025', backgroundColor: '#FFF8AA', padding:'5px 4px', borderRadius: '5px'}}>
                                                        Textt: 2
                                                    </Typography>
                                                    <Typography className={classes.lineHeight} style={{fontSize: '10px', marginLeft: '4px', marginBottom: '3px', border:'1px solid #005025', backgroundColor: '#FD9999', padding:'5px 4px', borderRadius: '5px'}}>
                                                        Text text: 3
                                                    </Typography>
                                                    <Typography className={classes.lineHeight} style={{fontSize: '10px', marginLeft: '4px', marginBottom: '3px', border:'1px solid #005025', backgroundColor: '#E5ACFF', padding:'5px 4px', borderRadius: '5px'}}>
                                                        Text text text: 1
                                                    </Typography>
                                                </Box>    
                                                <Box p={1} className={`${classes.filterBox}`} style={{backgroundColor: '#F3FFED89'}}>
                                                    <Grid container alignItems="center" spacing={1}>
                                                        <Grid item xs={2}>
                                                            <img src={Dummy} className={`${classes.Thumbnail} ${classes.filterThumbnail}`} alt="dummy" />
                                                        </Grid>
                                                        <Grid item xs={5}>
                                                            <Box className={`${classes.rating} ${classes.filterRating} ${classes.mb10}`}>
                                                                <img src={Star} alt="star" />
                                                                <strong>4.9</strong>
                                                                <span>(1k+)</span>
                                                            </Box>
                                                            <Typography>
                                                                Average 1234567891 Text: 3 text
                                                            </Typography>
                                                        </Grid>
                                                        <Grid item xs={5} className={classes.aStartTop}>
                                                            <Typography>
                                                                <strong>12345678912:</strong> 3.4k <br /><strong>Text 1234567 12345:</strong> 253k <br /><strong>12345678:</strong> 1234567891
                                                            </Typography>
                                                        </Grid>
                                                    </Grid>
                                                </Box>
                                                <Box p={1} className={`${classes.filterBox}`} style={{backgroundColor: '#FFFDE3'}}>
                                                    <Grid container alignItems="center" spacing={1}>
                                                        <Grid item xs={2}>
                                                            <img src={Dummy} className={`${classes.Thumbnail} ${classes.filterThumbnail}`} alt="dummy" />
                                                        </Grid>
                                                        <Grid item xs={5}>
                                                            <Box className={`${classes.rating} ${classes.filterRating} ${classes.mb10}`}>
                                                                <img src={Star} alt="star" />
                                                                <strong>4.9</strong>
                                                                <span>(1k+)</span>
                                                            </Box>
                                                            <Typography>
                                                                Average 1234567891 Text: 3 text
                                                            </Typography>
                                                        </Grid>
                                                        <Grid item xs={5} className={classes.aStartTop}>
                                                            <Typography>
                                                                <strong>12345678912:</strong> 3.4k <br /><strong>Text 1234567 12345:</strong> 253k <br /><strong>12345678:</strong> 1234567891
                                                            </Typography>
                                                        </Grid>
                                                    </Grid>
                                                </Box>
                                                <Box p={1} className={`${classes.filterBox}`} style={{backgroundColor: '#F3FFED89'}}>
                                                    <Grid container alignItems="center" spacing={1}>
                                                        <Grid item xs={2}>
                                                            <img src={Dummy} className={`${classes.Thumbnail} ${classes.filterThumbnail}`} alt="dummy" />
                                                        </Grid>
                                                        <Grid item xs={5}>
                                                            <Box className={`${classes.rating} ${classes.filterRating} ${classes.mb10}`}>
                                                                <img src={Star} alt="star" />
                                                                <strong>4.9</strong>
                                                                <span>(1k+)</span>
                                                            </Box>
                                                            <Typography>
                                                                Average 1234567891 Text: 3 text
                                                            </Typography>
                                                        </Grid>
                                                        <Grid item xs={5} className={classes.aStartTop}>
                                                            <Typography>
                                                                <strong>12345678912:</strong> 3.4k <br /><strong>Text 1234567 12345:</strong> 253k <br /><strong>12345678:</strong> 1234567891
                                                            </Typography>
                                                        </Grid>
                                                    </Grid>
                                                </Box>
                                            </>
                                        ) : null}
                                    </Box>
                                </Grid>
                                <Grid item xs={12} sm={12} md={6} className={classes.mb20}>
                                <Box className={`${classes.boxContainer} ${classes.boxContainerScroll} ${classes.p0}`}>
                                        <Box p={3}>
                                            <Typography variant="h6" className={`${classes.typoXLSmall} ${classes.center}`}>
                                                June 14, 2021
                                            </Typography>
                                        </Box>
                                        <Box className={classes.textNoWrap} p={1.2}>
                                            <Typography variant="h6" className={classes.typoSmall}>
                                                1234567 accepted by Textted
                                            </Typography>
                                            <Typography variant="h6" className={`${classes.typoXLSmall} ${classes.center}`}>
                                                3:45pm
                                            </Typography>
                                        </Box>
                                        <Box className={classes.textNoWrap} p={1.2}>
                                            <Typography variant="h6" className={classes.typoSmall}>
                                                12345678 1234567 shared with 1234567
                                            </Typography>
                                            <Typography variant="h6" className={`${classes.typoXLSmall} ${classes.center}`}>
                                                3:45pm
                                            </Typography>
                                        </Box>
                                        <Box p={2.5}>
                                            <Typography variant="h6" className={classes.typoBold}>
                                                12345678 1234567:
                                            </Typography>
                                            <Typography variant="h6" className={`${classes.typo}`}>
                                                123456 123 <br />12411 123456 123456 1234 <br />123456
                                            </Typography>
                                        </Box>
                                        <Box className={`${classes.textNoWrap} ${classes.mb12}`} p={1.2}>
                                            <Typography variant="h6" className={classes.typoSmall}>
                                                Waiting for 1234567 to 1234.
                                            </Typography>
                                            <Typography variant="h6" className={`${classes.typoXLSmall} ${classes.center}`}>
                                                3:45pm
                                            </Typography>
                                        </Box>

                                        <Typography variant="h6" className={`${classes.typoXLSmall} ${classes.center}`}>
                                            June 15, 2021
                                        </Typography>
                                        <Typography variant="h6" className={`${classes.divider} ${classes.center}`}>
                                            New
                                        </Typography>

                                        <Box className={classes.textNoWrap} p={1.2}>
                                            <Typography variant="h6" className={classes.typoSmall}>
                                                1234567 has updated 12345678 information
                                            </Typography>
                                            <Typography variant="h6" className={`${classes.typoXLSmall} ${classes.center}`}>
                                                3:45pm
                                            </Typography>
                                        </Box>
                                        <Box p={2.5}>
                                            <Typography variant="h6" className={`${classes.typoBold}`} style={{color: ThemeColor.GrayDark}}>
                                                12345678 123456: 904923403924
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
                                            <Avatar aria-haspopup="true" className={`${classes.avtar} ${classes.avtarCenter}`}>S</Avatar>
                                            <Typography variant="h5" className={`${classes.typoBold} ${classes.mb8}`}>
                                                Scale 1234567
                                            </Typography>
                                            <Box className={`${classes.rating} ${classes.mb20}`}>
                                                <img src={Star} alt="star" />
                                                <strong>4.9</strong>
                                                <span>(1k+)</span>
                                            </Box>
                                        </Box>

                                        <Typography variant="h6" className={`${classes.typoSmall} ${classes.mb30}`}>
                                            Text Text Text Text Text Text Text Text Text Text Text
                                        </Typography>

                                        <Box className={classes.dropdown}>
                                            <Button onClick={dropdownOpen} variant="contained" className={`${classes.formButton}`}>Requirements 
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                                                    <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                                                </svg>
                                            </Button>
                                            {/* dOpen */}
                                            {dOpen ? (
                                                <Box className={classes.dropdownMenu}>
                                                    <Typography className={`${classes.typo}`}>
                                                        Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text 
                                                    </Typography>
                                                </Box>
                                            ): null}
                                        </Box>

                                        <Typography variant="h6" style={{fontWeight: 'bold'}} className={`${classes.center}`}>
                                            12345678 123456
                                        </Typography>
                                        <Typography variant="h6" style={{color: ThemeColor.Black}} className={`${classes.typoSmall} ${classes.mb30} ${classes.center}`}>
                                            904923403924
                                        </Typography>

                                        <Typography variant="h6" className={`${classes.typo} ${classes.mb30}`}>
                                            Text Text Text Text Text Text Text Text Text
                                        </Typography>

                                        <form action="/" className={`${classes.formSend}`}>
                                            <Input placeholder="Paste Text here" />
                                        </form>

                                        <Typography variant="h6" style={{color: ThemeColor.Black}} className={`${classes.typoSmall} ${classes.mb20} ${classes.center}`}>
                                            Due: Jan 25, 2021
                                        </Typography>

                                        <Box p={0} marginTop="auto">
                                            <Button onClick={handleOpen} variant="contained" className={`${classes.formButton} ${classes.formButtonXL} ${classes.btnGreen}`}>Submit</Button>
                                        </Box>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Container>
                    </div>

                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box className={classes.modal}>
                            <Button onClick={handleClose} className={classes.modalCloase}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/>
                                    <path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/>
                                </svg>
                            </Button>
                            <Typography variant="h6" className={`${classes.typoBold} ${classes.mb30}`} style={{paddingRight: '15px'}}>
                                1234 x 123456 xx xxx xxxx xxxxxx (xxxxxxxxxx)
                            </Typography>
                            <TextareaAutosize
                                placeholder="Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text "
                                minRows={8}
                                className={`${classes.textArea} ${classes.mb20}`}
                            />
                            <Button onClick={handleClose} variant="primary" className={`${classes.formButton} ${classes.formButtonXXL}`}>XXXX xxxxxx</Button>
                        </Box>
                    </Modal>
                </Layout>
            </ThemeProvider>
        )
    }

    export default PageFormFlow3;