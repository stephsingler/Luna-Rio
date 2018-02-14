import React from "react";
import FaStar from "react-icons/lib/fa/star";

const HomeDescription = () => {
  return (
    <div className="cta">
      <div className="container">
        <div className="row">
          <div className="col-xl-9 mx-auto">
            <div className="cta-inner">
              <h6><strong>COMPLETELY UPDATED LUXURIOUSE ESTATE ON THE BLANCO RIVER</strong></h6>
              <p className="mb-0 mission">
                <p style={{textAlign: 'center'}}>
                  Located on 6 beautiful acres, 300 feet of River Front Footage, two hot-tubs and **COMING SOON - A NEW POOL!**
                </p>
                <p>
                  <FaStar style={{color: 'goldenrod'}} size={12} /> &nbsp; Luna Rio Main House has four exquisitely decorated bedrooms that comfortably sleep 9 in beds. It includes its own hot tub/spa, screen porch and fabulous kitchen.
                </p>
                <p>
                  <FaStar style={{color: 'goldenrod'}} size={12} /> &nbsp; Luna Rio Casita (the garage apartment) has two queen beds and accommodates 4 people, has its own bathroom and small kitchen.
                </p>
                <p>
                  <FaStar style={{color: 'goldenrod'}} size={12} /> &nbsp; Luna Rio Cabana has one queen bed and sofa which accommodates 2-3 people, has its own screen porch, kitchen, bathroom and hot tub/spa.
                </p>
                <p style={{textAlign: 'center'}}>
                 The most peaceful and relaxing estate to share and make memories for a lifetime!
                </p>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default HomeDescription;
