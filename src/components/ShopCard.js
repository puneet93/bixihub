import { makeStyles, Typography, Card, CardContent } from '@material-ui/core';
import ThemeColor from '../style/color';

// assets
import ShopImage from '../assets/images/dummy.png';
import Star from '../assets/images/gold-star.jpg';

const useStyles = makeStyles({
    cardContainer:{
        maxWidth: '260px',
        padding: '8px 15px',
        borderRadius: '25px',
        borderColor: ThemeColor.GrayDark
    },
    cardInner:{
        padding: '0px',
        textAlign: 'center',
        '&:last-child':{
            paddingBottom: '0px'
        }
    },
    image:{
        display: 'block',
        maxWidth: '100%',
        maxHeight: '150px',
        margin: '0 auto 8px',

        '@media (max-width: 575px)':{
            maxHeight: '120px'
        }
    },
    typo:{
        color: ThemeColor.Black,
        fontWeight: 'normal',
        marginBottom: '8px',
        lineHeight: '1',

        '@media (max-width: 575px)':{
            fontSize: '1.05rem'
        }
    },
    rating:{
        display: 'flex',
        fontSize: '16px',
        marginBottom: '3px',
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
            width: '18px',
            height: '18px'
        }
    }
});

const ShopCard = () => {
    const classes = useStyles();

    return(
        <Card variant="outlined" className={classes.cardContainer}>
            <CardContent className={classes.cardInner}>
                <Typography variant="h6" className={classes.typo}>
                    Text Here
                </Typography>
                <img src={ShopImage} className={classes.image} alt="media" />
                <Typography variant="h6" className={classes.typo}>
                    Text Here
                </Typography>
                <div className={classes.rating}>
                    <img src={Star} alt="star" />
                    <strong>4.9</strong>
                    <span>(1k+)</span>
                </div>
            </CardContent>
        </Card>
    )
}


export default ShopCard;