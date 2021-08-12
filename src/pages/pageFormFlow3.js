import React from 'react';
import {
  Container,
  makeStyles,
  Grid,
  TextField,
  Button,
  createTheme,
  Typography,
  FormControl,
  OutlinedInput,
  InputAdornment,
  Checkbox,
  FormControlLabel,
  FormGroup
} from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import ThemeColor from '../style/color';
import {
    Link
} from "react-router-dom";

// layout
import Layout from '../global/PrimaryLayout';

// assets
import Logo from '../assets/images/logo.png';

const useStyles = makeStyles({
    BannerOuter:{
        textAlign: "center",
        padding: '40px 0 30px',
    },
    Relative: {
        position: 'relative'
    },
    header: {
        marginBottom: '60px',
        '& img' :{
            maxWidth: '360px',
            marginBottom: '20px',

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
        color: ThemeColor.GrayDark,
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
    typoLabel:{
        color: ThemeColor.Black,
        marginBottom: '15px',
        fontWeight: 'bold',
        lineHeight: '1.3',

        '@media (max-width: 959px)':{
            fontSize: '1.4rem'
        }
    },
    pageContent:{
        padding: '60px 0 60px',
        "@media (max-width: 959px)":{
            padding: '20px 0 30px'
        }
    },
    center:{
        textAlign: 'center'
    },
    formField:{
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
                padding: '0 15px'
            },
            '& input':{
                marginLeft: '5px',
                paddingLeft:'15px',
                paddingRight:'15px',
                fontSize: '18px'
            },
            '& textarea':{
                paddingLeft:'8px',
                paddingRight:'8px',                
            }
        },
        '& .MuiSelect-select':{
            fontSize: '18px',
            lineHeight: '1.1',
            paddingLeft:'15px',
            paddingRight:'15px'
        },
        '& .MuiSelect-iconOutlined':{
            right: '15px'
        },
        '& .MuiInputBase-formControl':{
            borderRadius: '35px',
            '& p':{
                fontSize: '22px',
                color: ThemeColor.Black,
                fontFamily: 'Helvetica Neue'
            },
            '& input':{
                fontSize: '18px'
            },
        },
        '& .MuiFormControl-root':{
            '& .MuiFormHelperText-root':{
                fontSize: '14px',
                fontWeight: 'bold',
                textAlign: 'right',
                color: ThemeColor.GrayDark,
                fontFamily: 'Helvetica Neue'
            }
        },
        "@media (max-width: 959px)":{
            margin: '35px auto 10px'
        }
    },
    typoLabelSubheading:{
        color: ThemeColor.GrayLight,
        fontWeight: 'normal',
        fontSize: '85%'
    },
    typoLabelSubheadingBold:{
        color: ThemeColor.GrayDark,
        fontWeight: 'bold',
        fontSize: '85%'
    },
    mb0:{
        marginBottom: '0px'
    },
    mb20:{
        marginBottom: '20px'
    },
    mb30:{
        marginBottom: '30px'
    },
    mb50:{
        marginBottom: '50px'
    },
    formButton:{
        width: '100%',
        fontSize: "18px",
        boxShadow: "none",
        maxWidth: '260px',
        borderRadius: "50px",
        padding: '9px 15px',
        lineHeight: "normal",
        fontWeight: "bold",
        textTransform: "none",
        fontFamily: "Helvetica Neue",
        border: `1px solid ${ThemeColor.GrayDark}`,
        "&:hover": {
          backgroundColor: ThemeColor.Black,
          color: ThemeColor.White,
        }
    },
    checkBox:{
        alignItems: 'flex-start',
        '& .MuiIconButton-root':{
            paddingTop: '0px'
        }
    },
    underline:{
        textDecoration: 'underline'
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
    const [amount, setAmount] = React.useState({
        amount: '',
    });
    const [checked, setChecked] = React.useState({
        checkedA: true,
        checkedB: true,
        checkedF: true,
        checkedh: true
    });
    
    const handleChange = (event) => {
        setSelectVal(event.target.value);
    };

    
    const handleChangeAmount = (prop) => (event) => {
        setAmount({ ...amount, [prop]: event.target.value });
    };

    const handleChangeState = (event) => {
        setChecked({ ...checked, [event.target.name]: event.target.checked });
    };
    
    return(
        <ThemeProvider theme={theme}>
            <Layout>
                <div className={classes.BannerOuter}>
                    <Container className={classes.Relative}>
                        <div className={classes.header}>
                            <Link to="/"><img src={Logo} alt="logo" /></Link>
                            <Typography variant="h3" className={classes.typoH3}>
                                Text Here
                            </Typography>
                        </div>

                        <Typography variant="h4" className={classes.typoBold}>
                            Text Here
                        </Typography>
                        <Typography variant="h6" className={classes.typo}>
                            Text Here Text Here Text Here Text Here Text Here Text Here
                        </Typography>
                    </Container>
                </div>

                <div className={classes.pageContent}>
                    <Container>
                        <Grid container spacing={4} className={classes.mb30}>
                            <Grid item xs={12} sm={6} md={4} className={classes.formField}>
                                <Typography variant="h5" className={classes.typoLabel}>
                                    Text Here
                                </Typography>
                                <TextField type="text" variant="outlined" />
                            </Grid>
                            <Grid item xs={12} sm={6} md={4} className={classes.formField}>
                                <Typography variant="h5" className={classes.typoLabel}>
                                    Text Here
                                </Typography>
                                <FormControl fullWidth variant="outlined">
                                    <OutlinedInput
                                        id="standard-adornment-amount"
                                        value={amount.amount}
                                        onChange={handleChangeAmount('amount')}
                                        startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4} className={classes.formField}>
                                <Typography variant="h5" className={classes.typoLabel}>
                                    Text Here
                                </Typography>
                                <TextField type="text" variant="outlined" />
                            </Grid>
                            <Grid item xs={12} className={classes.formField}>
                                <Typography variant="h5" className={classes.typoLabel}>
                                    Text Here
                                </Typography>
                                <TextField
                                    id="outlined-multiline-static"
                                    multiline
                                    rows={12}
                                    variant="outlined"
                                    helperText="Text Here Text Here Text"
                                />
                            </Grid>
                        </Grid>

                        <Grid container spacing={4} className={classes.mb50}>
                            <Grid item xs={12} sm={6} md={4} className={classes.formField}>
                                <Typography variant="h5" className={`${classes.typoLabel} ${classes.mb30}`}>
                                    Text Here <br /><span className={classes.typoLabelSubheading}>Text Here Text Here Text Here</span>
                                </Typography>
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
                                <Button variant="contained" className={classes.formButton} color="primary">Text Here</Button>
                            </Grid>
                        </Grid>

                        <Grid container spacing={4} className={classes.mb50}>
                            <Grid item xs={12} sm={6} md={4} className={classes.formField}>
                                <Typography variant="h5" className={`${classes.typoLabel} ${classes.mb30}`}>
                                    Text Here <br /><span className={classes.typoLabelSubheading}>Text Here Text Here Text Here</span>
                                </Typography>
                                <TextField placeholder="Text Here" type="text" variant="outlined" />
                                <Button variant="contained" className={classes.formButton} color="primary">Text Here</Button>
                            </Grid>
                        </Grid>

                        <Grid container spacing={4} className={classes.mb50}>
                            <Grid item xs={12} sm={6} md={4} className={classes.formField}>
                                <FormGroup row>
                                    <FormControlLabel
                                        className={classes.checkBox}
                                        control={<Checkbox color="primary" checked={checked.checkedA} onChange={handleChangeState} name="checkedA" />}
                                        label={
                                            <Typography variant="h5" className={`${classes.typoLabel} ${classes.mb0}`}>
                                                Text Here <br /><span className={classes.typoLabelSubheadingBold}>Text Here Text Here Text Here</span>
                                            </Typography>
                                        }
                                    />
                                </FormGroup>
                            </Grid>
                        </Grid>

                        <Grid container spacing={4} className={classes.mb50}>
                            <Grid item xs={12} sm={6} md={4} className={classes.formField}>
                                <Typography variant="h5" className={`${classes.typoLabel} ${classes.mb30}`}>
                                    Text Here <span className={classes.typoLabelSubheadingBold}>(text here)</span>
                                </Typography>
                                <Button variant="contained" className={classes.formButton} style={{maxWidth: '140px'}} color="primary">Text</Button>
                            </Grid>
                        </Grid>

                        <Grid container spacing={4} className={classes.mb50}>
                            <Grid item xs={12} sm={6} md={4} className={classes.formField}>
                                <Typography variant="h5" className={`${classes.typoLabel} ${classes.mb30}`}>
                                    Text Here
                                </Typography>
                                <FormGroup row style={{marginBottom: '10px'}}>
                                    <FormControlLabel
                                        className={classes.checkBox}
                                        control={<Checkbox color="primary" checked={checked.checkedB} onChange={handleChangeState} name="checkedB" />}
                                        label={
                                            <Typography variant="h5" className={`${classes.typoLabel} ${classes.mb0}`}>
                                                Text
                                            </Typography>
                                        }
                                    />
                                </FormGroup>
                                <FormGroup row>
                                    <FormControlLabel
                                        className={classes.checkBox}
                                        control={<Checkbox color="primary" checked={checked.checkedF} onChange={handleChangeState} name="checkedF" />}
                                        label={
                                            <Typography variant="h5" className={`${classes.typoLabel} ${classes.mb0}`}>
                                                Text
                                            </Typography>
                                        }
                                    />
                                </FormGroup>
                            </Grid>
                        </Grid>

                        <Grid container spacing={4} className={classes.mb50}>
                            <Grid item xs={12} className={classes.formField}>
                                <Typography variant="h5" className={classes.typoLabel}>
                                    Text Here <br /><span className={classes.typoLabelSubheading}>Text Here. Text Here. Text Here. Text Here. Text Here. Text Here. Text Here. Text Here. Text Here. Text Here.</span>
                                </Typography>
                            </Grid>
                        </Grid>

                        <Grid container spacing={4} className={classes.mb50}>
                            <Grid item xs={12} className={classes.formField}>
                                <Typography variant="h5" className={`${classes.typoLabel} ${classes.mb30}`}>
                                    <Link className={classes.underline} to="/">Text Here</Link> <br /><span className={classes.typoLabelSubheadingBold}><Link className={classes.underline} to="/">Text Here</Link>. Text Here. Text Here.</span>
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4} className={classes.formField}>
                                <FormGroup row style={{marginBottom: '10px'}}>
                                    <FormControlLabel
                                        control={<Checkbox color="primary" checked={checked.checkedh} onChange={handleChangeState} name="checkedh" />}
                                        label={
                                            <Typography variant="h5" className={`${classes.typoLabel} ${classes.mb0}`}>
                                                Text
                                            </Typography>
                                        }
                                    />
                                </FormGroup>
                            </Grid>
                        </Grid>

                        <Grid container spacing={4} className={classes.center}>
                            <Grid item xs={12} className={classes.formField}>
                                <Button variant="contained" className={`${classes.formButton} ${classes.mb20}`} color="primary">Text Here</Button>
                                <Typography variant="h6" className={`${classes.typoLabel} ${classes.mb30}`}>
                                    Text Here. Text Here. Text Here.
                                </Typography>
                            </Grid>
                        </Grid>
                    </Container>
                </div>
            </Layout>
        </ThemeProvider>
    )
}

export default Home;