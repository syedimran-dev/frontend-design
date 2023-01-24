import React from 'react'
import Buttons from '../../components/Buttons/Buttons'
import './home.css'
import img1 from "../../assets/images/card-bg.jpg"
import { faStar, faDownload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
            <div className="col-12 col-sm-6 col-lg-3">
              <div className="game-cards">
                <img src={img1} alt="" />
                <div className="games-card-heading d-flex mt-2">
                  <h6 className='text-white'>Fortnite</h6>
                  <h6 className='ms-auto text-white'><i className='m3-1'><FontAwesomeIcon icon={faStar} /></i>4.8</h6>
                </div>
                <div className="games-card-heading d-flex mt-2">
                  <p className='text-white'>sandbox</p>
                  <h6 className='ms-auto text-white'><i className='me-1'><FontAwesomeIcon icon={faDownload} /></i>4.8M</h6>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-3">
              <div className="game-cards">
                <img src={img1} alt="" />
                <div className="games-card-heading d-flex mt-2">
                  <h6 className='text-white'>Fortnite</h6>
                  <h6 className='ms-auto text-white'><i className='m3-1'><FontAwesomeIcon icon={faStar} /></i>4.8</h6>
                </div>
                <div className="games-card-heading d-flex mt-2">
                  <p className='text-white'>sandbox</p>
                  <h6 className='ms-auto text-white'><i className='me-1'><FontAwesomeIcon icon={faDownload} /></i>4.8M</h6>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-3">
              <div className="game-cards">
                <img src={img1} alt="" />
                <div className="games-card-heading d-flex mt-2">
                  <h6 className='text-white'>Fortnite</h6>
                  <h6 className='ms-auto text-white'><i className='m3-1'><FontAwesomeIcon icon={faStar} /></i>4.8</h6>
                </div>
                <div className="games-card-heading d-flex mt-2">
                  <p className='text-white'>sandbox</p>
                  <h6 className='ms-auto text-white'><i className='me-1'><FontAwesomeIcon icon={faDownload} /></i>4.8M</h6>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-3">
              <div className="game-cards">
                <img src={img1} alt="" />
                <div className="games-card-heading d-flex mt-2">
                  <h6 className='text-white'>Fortnite</h6>
                  <h6 className='ms-auto text-white'><i className='m3-1'><FontAwesomeIcon icon={faStar} /></i>4.8</h6>
                </div>
                <div className="games-card-heading d-flex mt-2">
                  <p className='text-white'>sandbox</p>
                  <h6 className='ms-auto text-white'><i className='me-1'><FontAwesomeIcon icon={faDownload} /></i>4.8M</h6>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-3">
              <div className="game-cards">
                <img src={img1} alt="" />
                <div className="games-card-heading d-flex mt-2">
                  <h6 className='text-white'>Fortnite</h6>
                  <h6 className='ms-auto text-white'><i className='m3-1'><FontAwesomeIcon icon={faStar} /></i>4.8</h6>
                </div>
                <div className="games-card-heading d-flex mt-2">
                  <p className='text-white'>sandbox</p>
                  <h6 className='ms-auto text-white'><i className='me-1'><FontAwesomeIcon icon={faDownload} /></i>4.8M</h6>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-3">
              <div className="game-cards">
                <img src={img1} alt="" />
                <div className="games-card-heading d-flex mt-2">
                  <h6 className='text-white'>Fortnite</h6>
                  <h6 className='ms-auto text-white'><i className='m3-1'><FontAwesomeIcon icon={faStar} /></i>4.8</h6>
                </div>
                <div className="games-card-heading d-flex mt-2">
                  <p className='text-white'>sandbox</p>
                  <h6 className='ms-auto text-white'><i className='me-1'><FontAwesomeIcon icon={faDownload} /></i>4.8M</h6>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-3">
              <div className="game-cards">
                <img src={img1} alt="" />
                <div className="games-card-heading d-flex mt-2">
                  <h6 className='text-white'>Fortnite</h6>
                  <h6 className='ms-auto text-white'><i className='m3-1'><FontAwesomeIcon icon={faStar} /></i>4.8</h6>
                </div>
                <div className="games-card-heading d-flex mt-2">
                  <p className='text-white'>sandbox</p>
                  <h6 className='ms-auto text-white'><i className='me-1'><FontAwesomeIcon icon={faDownload} /></i>4.8M</h6>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-3">
              <div className="game-cards">
                <img src={img1} alt="" />
                <div className="games-card-heading d-flex mt-2">
                  <h6 className='text-white'>Fortnite</h6>
                  <h6 className='ms-auto text-white'><i className='m3-1'><FontAwesomeIcon icon={faStar} /></i>4.8</h6>
                </div>
                <div className="games-card-heading d-flex mt-2">
                  <p className='text-white'>sandbox</p>
                  <h6 className='ms-auto text-white'><i className='me-1'><FontAwesomeIcon icon={faDownload} /></i>4.8M</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home