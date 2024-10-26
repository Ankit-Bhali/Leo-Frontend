import React from 'react';
import './content.css';
import Nextdivimg from './nextdivimg6.webp'

export default function Nextdivsixth() {
  return (
    <div>
      <div className="outerdiv6">
        <div className="innerouter6">
            <img src={Nextdivimg} alt="" />
        </div>
        <div className="innerouter6 innerouter61">
            <h1>Get Free Consultation from our Digital Marketing Experts!</h1>
            <div>
                connect with our digital marketing experts for a complimentary consultation today.
            </div>
            <form action="#">
                <label className='btnmain' htmlFor="">Name</label><br />
                <input className='inputbtn1 ' type="text" placeholder='Name'/>
                <label htmlFor="">Email</label><br />
                <input className='inputbtn1' type="Email" placeholder='Email'/>
                <label  htmlFor="">Phone No.</label><br />
                <input className='inputbtn1' type="number" placeholder='Phone No.' limit='10'/><br />
                <input type="submit" className='inputbtn'/>
            </form>
        </div>
      </div>
    </div>
  )
}
