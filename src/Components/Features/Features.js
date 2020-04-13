import React, { useState } from 'react';
import Feature from '../Feature/Feature';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight,faArrowAltCircleLeft,faBus,faTruck,faBell } from '@fortawesome/free-solid-svg-icons';
const Features = () => {
    const features = [
        {
            "key": "B001STKY12",
            "title": 'Fast Delevery',
            "icon":<FontAwesomeIcon className="icon" icon={faBus} />,
            'img':'https://live.staticflickr.com/65535/49769667033_4c3759ec65.jpg',
            'des': "Some quick example text to build on the card title and make up the bulk of the card's content......"

        },
        {
            "key": "B009STKY12",
            "title": 'A Good Auto Responder',
            'img':'https://live.staticflickr.com/65535/49770523902_cfa902542c.jpg',
            "icon":<FontAwesomeIcon className="icon" icon={faBell} />,
            'des': "Some quick example text to build on the card title and make up the bulk of the card's content......"

        },
        {
            "key": "B0090STKY12",
            "title": 'Home Delivery',
            "icon":<FontAwesomeIcon className="icon" icon={faTruck} />,
            'img':'https://live.staticflickr.com/65535/49769667158_d04aa93de9.jpg',
            'des': "Some quick example text to build on the card title and make up the bulk of the card's content......"

        }
    ]

    const [feature, setFeature] = useState(features);

    return (
        <div className="container pt-5 pb-5">
            <div className="row">
                <div className="col-lg-6">
                    <h2 className="section-title">Why you choose us</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui sapiente eaque repellendus asperiores nisi! Architecto, praesentium eligendi consequatur inventore fuga eius totam officia adipisci. Nostrum quia soluta vel distinctio delectus!</p>
                </div>
            </div>
            <div className="row">
                {feature.map(item => <Feature feature={item} key={item.key} />)}
            </div>
        </div>
    );
};

export default Features;