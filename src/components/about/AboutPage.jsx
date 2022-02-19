import React from 'react';
import './about.css';

// import images
import Dracula from '../../images/authors/Dracula.jpg';
// import Timur from '../../images/authors/Timur.jpg';

const AboutPage = () => {
  return (
      <>
        <div className="about-header">About Us</div>
    <div className='container about'>
        <div className="about-text">
            <h2>Front End Developer</h2>
            <div className="about-img-box">
                <img src={Dracula} width="100%" alt="Dracula" />
            </div>
            <p className="about-author">Dracula 13 <br /> Bekzodjon Sharobiddinov Baxriddin o'g'li</p>
            <p className="about-details">+998 94 134 24 45</p>
            <p className="about-details">+998 99 911 33 13</p>
            <a href='https://t.me/DRACULA131313' className="about-details">https://t.me/DRACULA131313</a><br />
            <a href='https://t.me/Reactiondeveloper' className="about-details">https://t.me/Reactiondeveloper</a><br />
        </div>
        <div className="about-text">
            <h2>Back End Developer</h2>
            <div className="about-img-box">
                {/* <img src={Timur} alt="Timur" /> */}
            </div>
            <p className="about-author">Timur Dev <br /> Timur Karabayev o'g'li</p>
            <p className="about-details">+998 99 040 40 47</p>
            <a href='https://t.me/timurPythonDev' className="about-details">https://t.me/timurPythonDev</a><br />
            <a href='https://t.me/Timur4047' className="about-details">https://t.me/Timur4047</a><br />
        </div>
    </div>
    <div className="container about-bottom">
        <p className="about-details">Ushbu website ma'lum bilimga ega bo'lgan va ishga kirish uchun portfolio tayyorlayotgan yosh va tajribasi oshirmoqchi bo'lgan dasturchila uchun maxsus tayyorlandi. Foydali bo'ladi degan umiddamiz</p>
        <p>Bizni donat bilan qo'llab quvvatlamoqchi bo'lsangiz</p>
        <a href="https://payme.uz/@dracula13">https://payme.uz/@dracula13 so'm bilan</a>
    </div>
      </>
  )
}

export default AboutPage