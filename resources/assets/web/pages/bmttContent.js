import React from "react";

const BmttContent = () => {
  return (
    <div className="about-area ptb-100">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12">
            <div className="about-img">
              <img src="/images/about-bmtt.png" alt="image" />
            </div>
          </div>

          <div className="col-lg-6 col-md-12">
            <div className="about-content">
              <div className="text">
                <span className="sub-title">БМТТ</span>
                <h2>БОЛОВСРОЛЫН МЭДЭЭЛЛИЙН ТЕХНОЛОГИЙН ТӨВ УТҮГ</h2>
                <p>
                  Монгол Улсын Засгийн газрын 2020 оны 03 дугаар сарын 25-ны
                  өдрийн хуралдаанаар “Боловсролын салбарын мэдээллийн систем”
                  хөгжүүлэх баг болон “Эрдэмнэт” сүлжээний төвийн хүний нөөц,
                  дэд бүтэц дээр түшиглэн “Боловсролын мэдээллийн технологийн
                  төв” Улсын төсөвт үйлдвэрийн газрыг байгуулсан.
                </p>
                <p></p>

                <ul className="features-list">
                  <li>
                    <i className="flaticon-speed"></i>
                    <b>Алсын хараа</b> <br />
                    Боловсролыг цахимаар хүн бүрд.
                  </li>
                  <li>
                    <i className="flaticon-speed"></i>
                    <b> Эрхэм зорилго </b> <br />
                    Боловсролын салбарын мэдээллийн систем, сургалтын цахим
                    контент, удирдлагын систем, мэдээллийн сан, мэдээллийн
                    нэгдсэн сүлжээ болон боловсролын дата төвийн хяналт,
                    тогтвортой ажиллагааг хангах, хөгжлийн асуудлыг цогцоор нь
                    авч хэрэгжүүлэхэд байгууллагын эрхэм зорилго оршино.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BmttContent;
