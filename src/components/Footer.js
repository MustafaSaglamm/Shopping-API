import React from 'react'
import '../App.css'
import {FiSend} from 'react-icons/fi'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiFillYoutube} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {FaTripadvisor} from 'react-icons/fa'



const Footer = () => {
  return (
    <>
    <div className='footer'>
       
      <div>
        <div className="contactDiv">
          <div>
            <small>KEEP IN TOUCH</small>
            <h2>Shopping with us</h2>
          </div>

      {/* input for contact and Send button */}

          <div className="inputDiv">
            <input type="text" placeholder='Enter Email Address' />
            <button className='btn' type='submit'>
             SEND <FiSend className="icon"/>
            </button>
          </div>
        </div>


        <div className="footerCard">
          <div className="footerIntro">
            
    {/* Desciption for footer */}

            <div
            className="footerParagraph"><h5>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed provident odit maxime voluptatem et nihil quisquam, placeat quam! Temporibus, suscipit?</h5>
            </div>
           
          </div>
        

     {/* Social icons for contact */}

          <div className="footerDiv">
            <small>BEST SHOPPING WEBSITE</small>
            
            <div className="footerSocials">
              <AiOutlineTwitter className="icon"/>
              <AiFillYoutube className="icon"/>
              <AiFillInstagram className="icon"/>
              <FaTripadvisor className="icon"/>
            </div>
      
          </div>

        
      <div className='mysign'>
      <small>Mustafa SAĞLAM - 2023</small>
      </div>



        </div>
      </div>
    </div>
     
      </>
  )
}

export default Footer