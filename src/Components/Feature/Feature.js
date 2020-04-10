import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight, faArrowAltCircleLeft, faBus, faTruck } from '@fortawesome/free-solid-svg-icons';
import './Feature.css';
const Feature = (props) => {
    const { key, title, des, img, icon } = props.feature;
    return (
        <>
            <div className="col-lg-4">
                <div className="card feature-card">
                    <div className="card-image">
                        <img src={img} alt="feature" className="img-fluid" />
                    </div>
                    <div className="card-body">
                        <div class="card-body-top">
                            <h2 className="feature-title"> <span>{icon}</span> {title}</h2>
                        </div>
                        <p>{des}</p>
                        <a href="#" className="seemore-btn">See more  <span><FontAwesomeIcon className="icon" icon={faArrowAltCircleRight} /></span> </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Feature;