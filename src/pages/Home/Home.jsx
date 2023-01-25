import React from 'react'
import Buttons from '../../components/Buttons/Buttons'
import './home.css'
import img1 from "../../assets/images/card-bg.jpg"
import { faStar, faDownload } from '@fortawesome/free-solid-svg-icons'
import Cards from '../../containers/cards/Cards'

const Home = () => {
  return (
    <div className="py-5">
      <div className="container py-5 container-bg">
        <div className="row mx-md-4 mx-1">
          <div className="col-md px-md-5 bg-card">
            <h5 className='mb-4'>Welcome To Cybrog</h5>
            <h1 className='mb-4'><span className='color-pink'>BROWSE</span> OUR POPULAR <br /> GAMES HERE</h1>
            <Buttons text="Browse Now" />
          </div>
        </div>
        <div className="py-5">
          <div className="bg-games py-5 gy-3 gy-md-3 mx-1 px-md-5 row mx-md-4">
            <div className="  col-12">
              <h1><span>Most Popular</span> Right Now</h1>
            </div>
            <Cards img={img1} FontAwesomeIcon_one={faStar}  FontAwesomeIcon_two={faDownload} rating="4.8"/>
            <Cards img={img1} FontAwesomeIcon_one={faStar}  FontAwesomeIcon_two={faDownload} rating="3.8"/>
            <Cards img={img1} FontAwesomeIcon_one={faStar}  FontAwesomeIcon_two={faDownload} rating="2.9"/>
            <Cards img={img1} FontAwesomeIcon_one={faStar}  FontAwesomeIcon_two={faDownload} rating="1.2"/>
            <Cards img={img1} FontAwesomeIcon_one={faStar}  FontAwesomeIcon_two={faDownload} rating="4.1"/>
            <Cards img={img1} FontAwesomeIcon_one={faStar}  FontAwesomeIcon_two={faDownload} rating="1.0"/>
            <Cards img={img1} FontAwesomeIcon_one={faStar}  FontAwesomeIcon_two={faDownload} rating="0.5"/>
            <Cards img={img1} FontAwesomeIcon_one={faStar}  FontAwesomeIcon_two={faDownload} rating="4.1"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home