import {
  Container,
  Grid,
  makeStyles,
  Typography,
  Card,
  CardContent,
  createTheme,
  Button,
} from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import ThemeColor from "../style/color";
import { Link } from "react-router-dom";

// layout
import Layout from "../global/PrimaryLayout";
import Header from "../components/Header";

// assets
import SearchIcon from "../assets/images/search-icon.png";
import DeliveryIcon from "../assets/images/delivery-icon.png";
import UserSelfi from "../assets/images/user-selfi.png";
import Money from "../assets/images/money.png";
import Youtube from "../assets/images/youtube-circle.png";
import Instagram from "../assets/images/instagram-circle.png";

const useStyles = makeStyles({
  tabs: {
    display: "flex",
    justifyContent: "center",
    padding: "20px 0",
    marginBottom: "20px",
    "& ul": {
      border: `1px solid ${ThemeColor.GrayDark}`,
      justifyContent: "center",
      listStyleType: "none",
      borderRadius: "50px",
      alignItems: "center",
      display: "inline-flex",
      "& li": {
        position: "relative",
        "& + li::before": {
          transform: "skewX(-40deg)",
          backgroundColor: ThemeColor.GrayDark,
          position: "absolute",
          height: "100%",
          content: "''",
          width: "1px",
          left: "0px",
          top: "0px",
        },
        "& a": {
          color: ThemeColor.GrayLight,
          padding: "8px 40px",
          fontSize: "36px",
          display: "block",
          "&:hover, &.active": {
            color: ThemeColor.Black,
          },
          "@media (max-width: 575px)": {
            fontSize: "22px",
            padding: "10px 25px",
          },
        },
      },
    },
  },
  sectionContainer: {
    border: `1px solid ${ThemeColor.Black}`,
    borderRadius: "30px",
    padding: "30px 40px",
    marginBottom: "30px",
    textAlign: "center",
    "@media (max-width: 575px)": {
      padding: "20px 25px",
    },
  },
  sectionTitle: {
    marginBottom: "25px",
    "@media (max-width: 575px)": {
      "& h2": {
        fontSize: "36px",
      },
    },
  },
  fontBold: {
    fontWeight: "bold",
  },
  counter: {
    width: "60px",
    height: "60px",
    fontSize: "50px",
    lineHeight: "58px",
    fontWeight: "bold",
    borderRadius: "50%",
    margin: "-45px auto 15px",
    backgroundColor: `${ThemeColor.YellowDark}`,
    border: `1px solid ${ThemeColor.GrayDark}`,
  },
  cardContainer: {
    marginTop: "30px",
    overflow: "visible",
    padding: "15px 5px",
    borderRadius: "18px",
    borderColor: ThemeColor.GrayDark,
  },
  cardInner: {
    padding: "0 !important",
    "& img": {
      display: "block",
      maxWidth: "150px",
      maxHeight: "135px",
      margin: "0 auto 15px",
    },
  },
  socialContent: {
    marginTop: "20px",
    "& img": {
      maxHeight: "75px",
      margin: "0 auto 10px",
    },
    "& strong": {
      color: ThemeColor.Red,
      fontWeight: "bold",
    },
  },
  buttonXL: {
    fontSize: "40px",
    boxShadow: "none",
    borderRadius: "50px",
    lineHeight: "normal",
    fontWeight: "normal",
    padding: "1% 6% 1.5%",
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
});

const theme = createTheme({
  palette: {
    primary: {
      main: ThemeColor.YellowDark,
    },
  },
});

const Home = () => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Header />

        <Container>
          <div className={classes.tabs}>
            <ul>
              <li>
                <Link className="active" to="/">
                  Text Here
                </Link>
              </li>
              <li>
                <Link to="/">Text Here</Link>
              </li>
            </ul>
          </div>

          <section className={classes.sectionContainer}>
            <div className={classes.sectionTitle}>
              <Typography variant="h2" className={classes.fontBold}>
                How It Works
              </Typography>
            </div>

            <Grid container spacing={3}>
              <Grid item md={3} sm={6} xs={12}>
                <Card variant="outlined" className={classes.cardContainer}>
                  <CardContent className={classes.cardInner}>
                    <Typography className={classes.counter}>1</Typography>
                    <img src={SearchIcon} alt="media" />
                    <Typography variant="h5" className={classes.fontBold}>
                      Text Goes Here
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item md={3} sm={6} xs={12}>
                <Card variant="outlined" className={classes.cardContainer}>
                  <CardContent className={classes.cardInner}>
                    <Typography className={classes.counter}>2</Typography>
                    <img src={DeliveryIcon} alt="media" />
                    <Typography variant="h5" className={classes.fontBold}>
                      Text Goes Here
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item md={3} sm={6} xs={12}>
                <Card variant="outlined" className={classes.cardContainer}>
                  <CardContent className={classes.cardInner}>
                    <Typography className={classes.counter}>3</Typography>
                    <img src={UserSelfi} alt="media" />
                    <Typography variant="h5" className={classes.fontBold}>
                      Text Goes Here
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item md={3} sm={6} xs={12}>
                <Card variant="outlined" className={classes.cardContainer}>
                  <CardContent className={classes.cardInner}>
                    <Typography className={classes.counter}>4</Typography>
                    <img src={Money} alt="media" />
                    <Typography variant="h5" className={classes.fontBold}>
                      Text Goes Here
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </section>

          <section className={classes.sectionContainer}>
            <div className={classes.sectionTitle}>
              <Typography variant="h2" className={classes.fontBold}>
                Text Goes Here
              </Typography>
            </div>

            <Grid container justifyContent="center" spacing={5}>
              <Grid item lg={4} sm={6} md={5} xs={12}>
                <div className={classes.socialContent}>
                  <img src={Youtube} alt="media" />
                  <p>
                    <strong>1,000+</strong> subscribers <br />
                    <strong>1,000+</strong> views per video after 30 days <br />
                    Active channel <br />
                    Relevant and consistent content
                  </p>
                </div>
              </Grid>
              <Grid item lg={4} sm={6} md={5} xs={12}>
                <div className={classes.socialContent}>
                  <img src={Instagram} alt="media" />
                  <p>
                    <strong>1,000+</strong> followers <br />
                    2% engagement rate <br />
                    Relevant and consistent content <br />
                    Public account
                  </p>
                </div>
              </Grid>
            </Grid>
          </section>

          <section className={classes.sectionContainer}>
            <div className={classes.sectionTitle}>
              <Typography variant="h2" className={classes.fontBold}>
                Get Started Today
              </Typography>
            </div>

            <Button
              href="/"
              className={classes.buttonXL}
              variant="contained"
              color="primary"
            >
              Sign Up
            </Button>
          </section>
        </Container>
      </Layout>
    </ThemeProvider>
  );
};

export default Home;
