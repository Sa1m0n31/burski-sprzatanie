import React, { useState } from "react";

import { graphql, useStaticQuery } from "gatsby";
import Img from 'gatsby-image';

// Import Swiper React components
import SwiperCore, { Pagination } from 'swiper';

// Import Swiper styles
import 'swiper/swiper.scss';

import TinderCard from 'react-tinder-card';

import StarRatings from 'react-star-ratings';

const Rekomendacje = () => {
    SwiperCore.use([Pagination]);

    const data = useStaticQuery(graphql`
        query RekomendacjeQuery {
    rekomendacje2: file(relativePath: { eq: "rekomendacje2.jpg" }) {
        childImageSharp {
            fluid(maxWidth: 280, maxHeight: 160) {
                ...GatsbyImageSharpFluid
            }
        }
    }
    rekomendacje3: file(relativePath: { eq: "rekomendacje3.jpg" }) {
        childImageSharp {
            fluid(maxWidth: 300, maxHeight: 160) {
                ...GatsbyImageSharpFluid
            }
        }
    }
    rekomendacje4: file(relativePath: { eq: "rekomendacje4.jpg" }) {
        childImageSharp {
            fluid(maxWidth: 280, maxHeight: 160) {
                ...GatsbyImageSharpFluid
            }
        }
    }
    fixly: file(relativePath: { eq: "fixly.png" }) {
        childImageSharp {
            fluid(maxWidth: 1000, maxHeight: 1000) {
                ...GatsbyImageSharpFluid
            }
        }
    }
    fixly1: file(relativePath: { eq: "fixly1.png" }) {
        childImageSharp {
            fluid(maxWidth: 1000, maxHeight: 1000) {
                ...GatsbyImageSharpFluid
            }
        }
    }
    fixly2: file(relativePath: { eq: "fixly2.png" }) {
        childImageSharp {
            fluid(maxWidth: 1000, maxHeight: 1000) {
                ...GatsbyImageSharpFluid
            }
        }
    }
    
    }
    `);

    const kolejka = [
        data.rekomendacje2,
        data.rekomendacje3,
        data.rekomendacje4
    ];

    const cardLeftScreen = () => {
        if(typeof document !== 'undefined') {
            let els = document.getElementsByClassName("swipe");
            for(let i=0; i<els.length; i++) {
                els[i].style.transition = "none";
                els[i].style.transform = "none";
                els[i].style.display = "block";
            }
        }
    };

    return (<section className="rekomendacje">
        <h2>Rekomendacje</h2>
        <div className="rekomendacjeInner">
            <div className="opinia">
                <a href="https://fixly.pl/profil/mAYK1kwm" target="_blank">
                <img className="avatar" src={require("../../static/img/b.jpg")} alt="avatar" />
                <StarRatings
                    className="ocena"
                    rating={5}
                    numberOfStars={5}
                    starRatedColor="#FFD700"
                    starDimension='20px'
                />
                <h4 className="imie">Bartek</h4>
                <div className="data">21 września 2020</div>
                <p className="text">Wszystko w jak najlepszym porządku. Zarówno kontakt z Panem Łukaszem, jak i wykonanie samej usługi sprzątania jest godne polecenia.</p>
                <img className="opinieFixly" src="https://fixly.pl/profil/mAYK1kwm/widget-a01.png" alt="fixly" />
                </a>
            </div>
            <div className="opinia">
                <a href="https://fixly.pl/profil/mAYK1kwm" target="_blank">
                    <img className="avatar" src={require("../../static/img/a.jpg")} alt="avatar" />
                    <StarRatings
                        className="ocena"
                        rating={5}
                        numberOfStars={5}
                        starRatedColor="#FFD700"
                        starDimension='20px'
                    />
                    <h4 className="imie">Aleksander</h4>
                    <div className="data">19 września 2020</div>
                    <p className="text">Solidnie wykonana robota w uczciwej cenie. Polecam.</p>
                    <img className="opinieFixly" src="https://fixly.pl/profil/mAYK1kwm/widget-a01.png" alt="fixly" />
                </a>
            </div>
            <div className="opinia">
                <a href="https://fixly.pl/profil/mAYK1kwm" target="_blank">
                    <img className="avatar" src={require("../../static/img/s.jpg")} alt="avatar" />
                    <StarRatings
                        className="ocena"
                        rating={5}
                        numberOfStars={5}
                        starRatedColor="#FFD700"
                        starDimension='20px'
                    />
                    <h4 className="imie">Szymon</h4>
                    <div className="data">18 września 2020</div>
                    <p className="text">Perfekcyjnie czyściutkie okna, wszystko na czas, przemiła obsługa. Zdecydowanie polecam.</p>
                    <img className="opinieFixly" src="https://fixly.pl/profil/mAYK1kwm/widget-a01.png" alt="fixly" />
                </a>
            </div>
        </div>
    </section>);
};

export default Rekomendacje;
