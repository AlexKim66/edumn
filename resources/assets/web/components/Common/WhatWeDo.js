import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
} from "react-accessible-accordion";

const WhatWeDo = () => {
  return (
    <div className="what-we-do-area ptb-100">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12">
            <div className="what-we-do-content">
              <span className="sub-title">Бид юу хийдэг вэ?</span>
              <h2>Боловсролын цахим үйлчилгээ</h2>
              <p>
                Боловсролын салбарын мэдээллийн системийг хөгжүүлэх замаар
                боловсролын үйлчилгээг нээлттэй ил тод болгох, чанарын
                сайжруулах, хүртээмжийг нэмэгдүүлэх зорилго тавин ажиллаж байна.
              </p>

              {/* <div className="skills-item">
                <div className="skills-header">
                  <h4 className="skills-title"> Цахим Үйлчилгээ Хэрэглэгч </h4>
                  <div className="skills-percentage">
                    <div className="count-box">95%</div>
                  </div>
                </div> 
                <div className="skills-bar">
                  <div className="bar-inner">
                    <div className="bar progress-line" data-width="95"></div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>

          <div className="col-lg-6 col-md-12">
            <div className="what-we-do-content-accordion">
              <Accordion allowZeroExpanded preExpanded={["a"]}>
                <AccordionItem uuid="a">
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      <span>Боловсролын мэдээллийн технологийн дэд бүтэц</span>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      Мэдээллийн нэгдсэн сан, мэдээллийн нэгдсэн сүлжээ,
                      боловсролын дата төвийн хяналт, удирдлага, тогтвортой
                      ажиллагааг хариуцан ажиллаж байна.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem uuid="b">
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      <span>Боловсрол, шинжлэх ухааны яамны бодлого</span>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      Боловсролын асуудал эрхэлсэн Төрийн захиргааны төв
                      байгууллагыг судалгаанд суурилсан бодит мэдээллээр хангах.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem uuid="c">
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      <span>Боловсролын байгууллагуудын уялдаа холбоо</span>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      Цахим системийн тусламжтайгаар боловсролын байгууллагуудын
                      үйл ажиллагааг хөнгөвчлөх, сургалтын чанар, хамтын
                      ажиллагааг сайжруулах зорилгоор parent буюу эцэг эхийн
                      систем, scholarship буюу тэтгэлгийн систем, investment
                      буюу салбарын хөрөнгө оруулалтын бүртгэлийн систем,
                      license буюу сургууль цэцэрлэгийн тусгай зөвшөөрлийн
                      системүүдийг хөгжүүлж байна.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
