import React from 'react';
import Link from 'next/link';

const MainBanner = () => {
    return (
        <div className="banner-area">
            <div className="container">
                <div className="main-banner-content">
                    <span className="sub-title"> Боловсролыг цахимаар хүн бүрт</span>
                    <h1>Боловсролын Мэдээллийн Технологийн Төв</h1>
                    <p>
                        Боловсролын салбарын мэдээллийн систем, сургалтын цахим контент, удирдлагын систем,
                        мэдээллийн сан, мэдээллийн нэгдсэн сүлжээ болон боловсролын дата төвийн хяналт,
                        тогтвортой ажиллагааг хангах, хөгжлийн асуудлыг цогцоор нь авч
                        хэрэгжүүлэхэд байгууллагын эрхэм зорилго оршино.
                    </p>

                    {/* <Link href="/contact">
                        <a className="default-btn">Get Started</a>
                    </Link> */}
                </div>
            </div>

            <div className="shape2"><img src="assets/web/images/shape/shape2.png"  alt="image" /></div>
            <div className="shape3"><img src="assets/web/images/shape/shape3.png" alt="image" /></div>
            <div className="shape4"><img src="assets/web/images/shape/shape4.png" alt="image" /></div>
            <div className="shape5"><img src="assets/web/images/shape/shape5.png" alt="image" /></div>
            <div className="shape6"><img src="assets/web/images/shape/shape6.png" alt="image" /></div>
            <div className="shape7"><img src="assets/web/images/shape/shape7.png" alt="image" /></div>
            <div className="shape8"><img src="assets/web/images/shape/shape8.png" alt="image" /></div>
        </div>
    )
}

export default MainBanner;
