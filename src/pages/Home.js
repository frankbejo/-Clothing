import { HomeStyled } from '../theme';
import { NavLink } from 'react-router-dom';
import img1 from '../images/img1.jpg';
import img3 from '../images/img3.jpg';
import Footer from '../components/Footer';

export const Home = () => {

    
    return(
        <HomeStyled>
        <section className="home">
            <div className="covers-container">
                <div className="some-text">
                    <NavLink to="/account" aria-label='discount'>
                        Sign up & get 25% off one item + free delivery
                    </NavLink>
                </div>
                <div className="some-updates">
                    <NavLink to="/">
                        Check it out
                    </NavLink>
                    <img src={img3} alt="" />
                </div>
                <div className="image-container">
                    <img src={img1} alt="" />
                </div>
            </div>
        </section>
        <Footer />
        </HomeStyled>
    )
}