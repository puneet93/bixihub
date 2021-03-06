import { Container} from '@material-ui/core';
import {
    Link
  } from "react-router-dom";

// assets
import Logo from '../assets/images/logo.png';

const Header = () =>{
    return(
        <div className="header">
            <Container>
                <div className="header-top">
                    <Link to="/">How It Works</Link>
                    <Link to="/">Sign Up</Link>
                    <span>/</span>
                    <Link to="/">Log In</Link>
                </div>
                <div className="header-main">
                    <div className="header-logo">
                        <img src={Logo} alt="logo" />
                    </div>

                    <div className="input-search-group">
                        <div className="input-search-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                            </svg>
                        </div>
                        <input type="text" className="form-control" placeholder="Search a product" />
                        <button className="btn btn-primary" type="submit">Search</button>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Header;