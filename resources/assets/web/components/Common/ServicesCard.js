import React from 'react';
import Link from 'next/link';

const ServicesCard = () => {
    return (
        <div className="services-area bg-f9f9f9 pt-100 pb-70">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">төсөл</span>
                    <h2> Хэрэгжүүлж буй төслүүд  </h2>
                    <p> Төслийн хүрээнд БСМС-ийн баг нь esis.edu.mn үндсэн системийг хөгжүүлэхээс гадна дараах дэд системүүдийн хөгжүүлэлтийг хариуцан ажиллаж байна. </p>
                </div>

                <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-featured-services-box">
                                <div className="icon">
                                    <i className="flaticon-megaphone"></i>
                                    <div className="circles-box">
                                        <div className="circle-one"></div>
                                        <div className="circle-two"></div>
                                    </div>
                                </div>
                                <h3>
                                    <Link href="">
                                        <a>ЕБС</a>
                                    </Link>
                                </h3>
                                <p>
                                Ерөнхий Боловсролын Сургууль
                                </p>

                                <Link href="">
                                    <a className="learn-more-btn" href="https://www.esis.edu.mn/hr/index.html#/" target="_blank">
                                        <i className="left-icon flaticon-next-button"></i> 
                                        дэлгэрэнгүй
                                        <i className="right-icon flaticon-next-button"></i>
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-featured-services-box">
                                <div className="icon">
                                    <i className="flaticon-keywords"></i>
                                    <div className="circles-box">
                                        <div className="circle-one"></div>
                                        <div className="circle-two"></div>
                                    </div>
                                </div>
                                <h3>
                                    <Link href="">
                                        <a>СӨБ</a>
                                    </Link>
                                </h3>
                                <p> Сургуулийн Өмнөх Боловсрол </p>
                                
                                <Link href="">
                                    <a className="learn-more-btn" href="https://www.esis.edu.mn/hr/index.html#/" target="_blank">
                                        <i className="left-icon flaticon-next-button"></i> 
                                        дэлгэрэнгүй
                                        <i className="right-icon flaticon-next-button"></i>
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-featured-services-box">
                                <div className="icon">
                                    <i className="flaticon-content-management"></i>
                                    <div className="circles-box">
                                        <div className="circle-one"></div>
                                        <div className="circle-two"></div>
                                    </div>
                                </div>
                                <h3>
                                    <Link href="">
                                        <a> Дээд </a>
                                    </Link>
                                </h3>
                                <p> Боловсролын Мэдээллийн Систем </p>
                                
                                <Link href="">
                                    <a className="learn-more-btn" href="https://hemis.edu.mn/hub/login.html" target="_blank">
                                        <i className="left-icon flaticon-next-button"></i> 
                                        дэлгэрэнгүй
                                        <i className="right-icon flaticon-next-button"></i>
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-featured-services-box">
                                <div className="icon">
                                    <i className="flaticon-ppc"></i>
                                    <div className="circles-box">
                                        <div className="circle-one"></div>
                                        <div className="circle-two"></div>
                                    </div>
                                </div>
                                <h3>
                                    <Link href="">
                                        <a> Эцэг Эх </a>
                                    </Link>
                                </h3>
                                <p> Эцэг Эхийн Мэдээллийн  Систем </p>
                                
                                <Link href="">
                                    <a className="learn-more-btn" href="https://parent.edu.mn/#/login" target="_blank">
                                        <i className="left-icon flaticon-next-button"></i> 
                                        дэлгэрэнгүй
                                        <i className="right-icon flaticon-next-button"></i>
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-featured-services-box">
                                <div className="icon">
                                    <i className="flaticon-competitor"></i>
                                    <div className="circles-box">
                                        <div className="circle-one"></div>
                                        <div className="circle-two"></div>
                                    </div>
                                </div>
                                <h3>
                                    <Link href="">
                                        <a> НТБ </a>
                                    </Link>
                                </h3>
                                <p> Насан Туршийн Боловсрол </p>
                                
                                <Link href="">
                                    <a className="learn-more-btn" href="https://www.ncle.mn/" target="_blank">
                                        <i className="left-icon flaticon-next-button"></i> 
                                        дэлгэрэнгүй
                                        <i className="right-icon flaticon-next-button"></i>
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-featured-services-box">
                                <div className="icon">
                                    <i className="flaticon-startup"></i>
                                    <div className="circles-box">
                                        <div className="circle-one"></div>
                                        <div className="circle-two"></div>
                                    </div>
                                </div>
                                <h3>
                                    <Link href="">
                                        <a> Тэтгэлэг </a>
                                    </Link>
                                </h3>
                                <p> Цахим Өргөдөл </p>
                                
                                <Link href="">
                                    <a className="learn-more-btn" href="https://scholarship.esis.edu.mn/grant/login.html" target="_blank">
                                        <i className="left-icon flaticon-next-button"></i> 
                                        дэлгэрэнгүй
                                        <i className="right-icon flaticon-next-button"></i>
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-featured-services-box">
                                <div className="icon">
                                    <i className="flaticon-ppc"></i>
                                    <div className="circles-box">
                                        <div className="circle-one"></div>
                                        <div className="circle-two"></div>
                                    </div>
                                </div>
                                <h3>
                                    <Link href="">
                                        <a> E-Content</a>
                                    </Link>
                                </h3>
                                <p> Цахим Сурах Бичиг </p>
                                
                                <Link href="">
                                    <a className="learn-more-btn" href="https://econtent.edu.mn/" target="_blank">
                                        <i className="left-icon flaticon-next-button"></i> 
                                        дэлгэрэнгүй
                                        <i className="right-icon flaticon-next-button"></i>
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-featured-services-box">
                                <div className="icon">
                                    <i className="flaticon-competitor"></i>
                                    <div className="circles-box">
                                        <div className="circle-one"></div>
                                        <div className="circle-two"></div>
                                    </div>
                                </div>
                                <h3>
                                    <Link href="/single-services">
                                        <a> Мобайл Аппууд </a>
                                    </Link>
                                </h3>
                                <p> Android, Ios </p>
                                
                                <Link href="/single-services">
                                    <a className="learn-more-btn">
                                        <i className="left-icon flaticon-next-button"></i> 
                                        дэлгэрэнгүй
                                        <i className="right-icon flaticon-next-button"></i>
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-featured-services-box">
                                <div className="icon">
                                    <i className="flaticon-startup"></i>
                                    <div className="circles-box">
                                        <div className="circle-one"></div>
                                        <div className="circle-two"></div>
                                    </div>
                                </div>
                                <h3>
                                    <Link href="">
                                        <a>Тусламж </a>
                                    </Link>
                                </h3>
                                <p> Хэрэглэгчийн Цахим Тусламж </p>
                                
                                <Link href="">
                                    <a className="learn-more-btn" href="https://help.esis.edu.mn/" target="_blank">
                                        <i className="left-icon flaticon-next-button"></i> 
                                        дэлгэрэнгүй
                                        <i className="right-icon flaticon-next-button"></i>
                                    </a>
                                </Link>
                            </div>
                        </div>

                    
                </div>
           </div>
        </div>
    )
}

export default ServicesCard;