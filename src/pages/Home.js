import { Container, Grid} from '@material-ui/core';
import {
    Link
  } from "react-router-dom";

// layout
import Layout from '../global/PrimaryLayout';

// assets
import SearchIcon from '../assets/images/search-icon.png';
import DeliveryIcon from '../assets/images/delivery-icon.png';
import UserSelfi from '../assets/images/user-selfi.png';
import Money from '../assets/images/money.png';
import Youtube from '../assets/images/youtube-circle.png';
import Instagram from '../assets/images/instagram-circle.png';

const Home = () =>{
    return(
        <Layout>
            <Container>
                <div className="navbar-tabs d-flex justify-content-center">
                        <ul>
                            <li><Link className="active" to="/">Text Here</Link></li>
                            <li><Link to="/">Text Here</Link></li>
                        </ul>
                </div>

                <section className="section-border text-center section-radius section-padding mb-30">
                    <div className="section-title">
                        <h2>How It Works</h2>
                    </div>

                    <Grid container>
                        <Grid item md={3} sm={6} xs={12}>
                            <div className="card-howItWork">
                                <div className="card-count">1</div>
                                <img src={SearchIcon} alt="media" />
                                <h4>Text Goes Here</h4>
                            </div>
                        </Grid>
                        <Grid item md={3} sm={6} xs={12}>
                            <div className="card-howItWork">
                                <div className="card-count">2</div>
                                <img src={DeliveryIcon} alt="media" />
                                <h4>Text Goes Here</h4>
                            </div>
                        </Grid>
                        <Grid item md={3} sm={6} xs={12}>
                            <div className="card-howItWork">
                                <div className="card-count">3</div>
                                <img src={UserSelfi} alt="media" />
                                <h4>Text Goes Here</h4>
                            </div>
                        </Grid>
                        <Grid item md={3} sm={6} xs={12}>
                            <div className="card-howItWork">
                                <div className="card-count">4</div>
                                <img src={Money} alt="media" />
                                <h4>Text Goes Here</h4>
                            </div>
                        </Grid>
                    </Grid>
                </section>

                <section className="section-border text-center section-radius section-padding mb-30">
                    <div className="section-title">
                        <h2>Text Goes Here</h2>
                    </div>

                    <Grid container justify="center" spacing={5}>
                        <Grid item lg={4} sm={6} md={5} xs={12}>
                            <div className="social-content">
                                <img src={Youtube} alt="media" />
                                <p><strong>1,000+</strong> subscribers <br /><strong>1,000+</strong> views per video after 30 days <br />Active channel <br />Relevant and consistent content</p>
                            </div>
                        </Grid>
                        <Grid item lg={4} sm={6} md={5} xs={12}>
                            <div className="social-content">
                                <img src={Instagram} alt="media" />
                                <p><strong>1,000+</strong> followers <br />2% engagement rate <br />Relevant and consistent content <br />Public account</p>
                            </div>
                        </Grid>
                    </Grid>
                </section>

                <section className="section-border text-center section-radius section-padding mb-30">
                    <div className="section-title">
                        <h2>Get Started Today</h2>
                    </div>

                    <Link to="/" className="btn btn-xl btn-primary border btn-rounded">Sign Up</Link>
                </section>
            </Container>
        </Layout>
    )
}

export default Home;