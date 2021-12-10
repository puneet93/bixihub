import React from 'react';
import { Grid, makeStyles, Typography, Select } from '@material-ui/core';
import ThemeColor from '../style/color';

// assets
import Dummy from '../assets/images/dummy.png';


const useStyles = makeStyles({
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
    typoBold: {
        color: ThemeColor.Black,
        marginBottom: '12px',
        fontWeight: 'bold',
        lineHeight: '1',

        '@media (max-width: 959px)':{
            fontSize: '1.4rem'
        }
    },
    typoSubheading:{
        color: ThemeColor.GrayLight,
        fontWeight: 'normal',
        minHeight: '60px',
        fontSize: '18px',
        lineHeight: '1.2',
    },
    center:{
        textAlign: 'center'
    },
    gridBorder:{
        boxShadow: 'none',
        border: `2px solid ${ThemeColor.GrayDark}`,
        borderRadius: '15px',
        cursor: 'pointer',
        '&.active':{
            backgroundColor: ThemeColor.cream,
            borderColor: ThemeColor.YellowDark,
            boxShadow: '0px 3px 9px 1px rgba(232, 175, 70, 0.78)'
        },
        '&:hover':{
            backgroundColor: ThemeColor.cream,
            borderColor: ThemeColor.YellowDark
        }
    }
});

function GridRowSelect() {
    const classes = useStyles();
    
    const [SelectGrid, setSelectGrid] = React.useState(false);
    

    return (
        <Grid container alignItems="center" onClick={() => setSelectGrid(!SelectGrid)}  className={`${classes.Mb35} ${classes.gridBorder} ${SelectGrid ? 'active' : ''}`} spacing={3}>
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
    );
}

export default GridRowSelect;