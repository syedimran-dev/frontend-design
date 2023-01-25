import React from 'react'
import './cards.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Cards = (props) => {
    return (
        <div className="col-12 col-sm-6 col-lg-3">
            <div className="game-cards">
                <img src={props.img} alt="" />
                <div className="games-card-heading d-flex mt-2">
                    <h6 className='text-white'>Fortnite</h6>
                    <h6 className='ms-auto text-white'><i className='me-1'><FontAwesomeIcon icon={props.FontAwesomeIcon_one}/></i>{props.rating}</h6>
                </div>
                <div className="games-card-heading d-flex mt-2">
                    <p className='text-white'>sandbox</p>
                    <h6 className='ms-auto text-white'><i className='me-1'><FontAwesomeIcon icon={props.FontAwesomeIcon_two}/></i>4.8M</h6>
                </div>
            </div>
        </div>
    )
}

export default Cards