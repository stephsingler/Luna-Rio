import React from 'react';

//Components
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import FaStar from "react-icons/lib/fa/star";

const EstateInformation = () => {
  return (
    <div className="estate-info">
      <Header />
      <div className="cta" style={{marginBottom: "-20px"}}>
        <Nav /> <br/><br />
        <p className="tour-link">
          <a href="http://www.seetheproperty.com/259574" target="_blank">Take a Virtual Tour of the Estate!
          </a>
        </p>
        <div className="container">
          <div className="row">
            <div className="col-xl-9 mx-auto">
              <div className="cta-inner info text-center rounded">
                <p>
                  <h6><strong><em>Luna Rio Estate on the Blanco River – Wimberley, Texas
                  </em></strong></h6>
                  The Luna Rio Estate on the Blanco River in Wimberley, Texas is the perfect peaceful getaway for
                  family, friends, groups, corporate retreats, small parties and celebrations. If you need to escape
                  the city and long for some relaxation and tranquility, the Luna Rio Estate is the place for you! <br /><br />
                  Upon arrival through the private, gated entrance, your vacation has begun! Settle into the
                  luxurious accommodations that each room has to offer and take advantage of all the amenities
                  the property has to offer. Enjoy coffee/drinks on the screen porch equipped with outdoor fans
                  when it is a bit hot outside OR relax by the fireplace and play your favorite games with family
                  and friends.<br /><br /> If you enjoy cooking, Luna Rio has a stunning kitchen fully equipped with
                  everything a master chef could possibly need/want. The kitchen is open an airy allowing all of
                  those who gather to commune with anyone sitting in the dining room and/or living areas. Take
                  advantage of the band new appliances including two dishwashers and a professional ice maker.
                  Cooking on beautiful gas powered Wolf Stove or grill your favorite dishes in our outdoor
                  pavilion which has both a propane grill and charcoal grill with special seating and lighting! <br /><br />
                  For those who are ready for some water relaxation, throw on a suit and hop in the large hot tub
                  that accommodates up to 8 people. Bring your river shoes and run down to the river, take a
                  fishing pole, or use one of the kayaks on property to explore the tranquility of the river flowing,
                  birds chirping, deer trotting, wildflowers smiling and fireflies showing off their magic. The Luna
                  Rio Estate view is unsurpassed by others as you look across the river, there are acres and acres
                  of nature that is protected and will never be developed. The beauty of the view makes for a
                  glorious sunrise and enchanting sunsets. <br /> <br />
                  The Luna Rio is unlike any other estate in Wimberley for large groups with distinguished tastes.
                  The Main House offers a very comfortable living room equipped with luxurious furniture and a
                  55 in Flat Screen television for movie night, football Saturday, Netflix binges, gaming…you name
                  it. Next to the wood burning fireplace are four luxurious lounge, swivel, rocking chairs that
                  make for fun late night chats, games, staring at the cool antler chandelier, and storytelling. The
                  dining room easily accommodates ten people and there is an outdoor dining table on the
                  screen porch for four people. With Sonos surround sound speakers, play music and dance on
                  the porch! The screen porch easily accommodates 10 people is what many consider to be the
                  best place to hang out with your group! Coffee in the mornings, drinks in the evening, special
                  workplace in the afternoon. Cherish the sounds of nature and the protection of Texas critters
                  and relax! <br /> <br />
                  The Master Bedroom is gorgeous with a large King Bed with high end bamboo sheets and
                  bedding. In addition, guests can lounge on the chaise lounge which can also serve as a nice little
                  bed for a child. Enjoy the 55 in Flat Screen Television and the environmentally friendly gas
                  fireplace. Take a dip in the jetted tub or relax in the walk in steam shower. The walk in closet is
                  spacious for all of your closet needs and includes drawers, iron, and ironing board. <br /><br />
                  The Upstairs of the Luna Rio Main House are three bedrooms with high end linens and towels.
                  Two bedrooms have queen beds and one bedroom has two twin beds. The bathrooms all have
                  brand new cabinetry and quartz countertops. As a bonus, there is a nook at the top of the stairs
                  which has a daybed that can be utilized if needed for an additional person. Another bonus is the
                  upstairs porch offering lovely high views of the property and river along with amazing star
                  gazing at night! <br /><br />
                  The Luna Rio Casita is a nice space above the garage that has two queen beds with high end
                  linens and towels. A small seating area with a 50 in flat screen television and a small kitchen for
                  those who want to have some coffee/snack in their own space. The casita is also has a small
                  bathroom with a shower. <br /><br />
                  The Luna Rio Cabana is a beautiful romantic little cabin in the woods that sits approximately
                  200 feet away from the main house. The Luna Rio Cabin can be rented separately from the Luna
                  Rio Main House. The Luna Rio Cabana is also newly updated and has its own internet, 40 inch
                  flat screen television, wood burning fireplace, living room area, full kitchen, bathroom and
                  bedroom with one queen bed. As a bonus, the cabin has its own screen porch for resting,
                  reading, telling stories and its own hot tub spa. This is a fantastic getaway for a couple or a
                  couple traveling with a small child. A path from the cabin to the river and all that nature has to
                  offer on the estate! <br /><br />
                  <h6><strong><em>MORE ABOUT WIMBERLEY, TEXAS</em></strong></h6>
                  <p style={{fontSize: '13px'}}>
                    Wimberley is the geographic center and the aesthetic heart of the Wimberley Valley and is located at the
                    confluence of Cypress Creek and the Blanco River. 12 miles from San Marcos, Texas, 50 Miles from San
                    Antonio and 40 Miles from the vibrant downtown of Austin, Texas. The natural beauty of the softly winding
                    Blanco River, shaded Cypress Creek and the stunning views of Lone Man Creek call to artists, retirees
                    and anyone seeking escape from city life. The Texas Hill Country is unique and special and the
                    Wimberley Valley is nestled right in the heart of it all. Located in the central flyway for migrating birds and
                    sitting atop the Edwards Plateau, where a huge variety of natural fauna and abundant wildlife can be
                    found, it's a perfect place for anyone who loves nature. Wimberley has been a retreat for artists,
                    musicians and writers for many years. Art galleries, quaint shops and performing arts venues showcase
                    the local talent year round. It's no wonder that the Texas Commission on the Arts recently designated
                    Wimberley as a Texas Cultural District. Wimberley also hosts the most popular Market Day in the
                    area. From March through December, on the first Saturday of the month, Market Day beckons treasure
                    hunters from all over the country. The climate and setting make Wimberley a desirable place to live and a
                    favorite vacation getaway.  Come see why Wimberley is known as "a little bit of heaven".<br/>   Credits Wimberley
                    Chamber of Commerce
                  </p>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default EstateInformation;
