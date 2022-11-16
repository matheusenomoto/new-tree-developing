import './portfolio.css';
import { portfolioArray, appPortfolioArray} from '../constants/portfolio'


function Portfolio() {

    return(
        <div class='main-portfolio'>
            <div class='portfolio-introduction'>
                <h3>Conheça onde já trabalhamos</h3>
                <p>Em nosso portfólio temos entre Website, WebApp, Ferramenta de automação e App, apresentamos o que já fizemos e no que estamos trabalhando.</p>
            </div>
            {
                portfolioArray.map((val)=>{
                    return(
                        <div class='portfolio-category'>
                            <div class='portfolio-single'>
                                <h3>{val.projectName}</h3>
                                <h5>{val.category}</h5>
                                <a href={val.link} target="_blank"><img class='portfolio-single-img'src={val.image}/></a>
                                <p>{val.description}</p>
                            </div>
                        </div>
                    )
                })
            }
            {
                appPortfolioArray.map((val)=>{
                    return(

                        <div class='portfolio-category'>
                            <div class='portfolio-single'>
                                <h3>{val.projectName}</h3>
                                <h5>{val.category}</h5>
                                <a href={val.link} target="_blank"><img class='portfolio-single-img'src={val.image}/></a>
                                <p>{val.description}</p>
                                <div>
                                <a href={val.playStoreLink} target="_blank"><img class='portfolio-single-download-app-link'src={val.playStoreImage}/></a>
                                <a href={val.appStoreLink} target="_blank"><img class='portfolio-single-download-app-link'src={val.appStoreImage}/></a>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Portfolio;