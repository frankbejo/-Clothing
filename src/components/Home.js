import { HomeStyled } from '../theme';
import img1 from '../images/img1.jpg';

export const Home = () => {
    return(
        <HomeStyled>
        <section className="home">
            <div className="image-container">
                <img src={img1} alt="" />
            </div>
        </section>
        </HomeStyled>
    )
}