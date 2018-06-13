const state = {
  activities: [
    {
      id: 1,
      name: "Blue Hole Regional Park",
      description: " The park includes approximately 3.5 miles of trails, picnic areas, a community pavilion, playscape, basketball court, sand volleyball court, amphitheater, and the Blue Hole Swimming Area.  The entire park is open to visitors within the regular operating hours, however swimming is only allowed during the designated swimming season.",
      website: "http://www.cityofwimberley.com/index.asp?Type=B_BASIC&SEC=%7B1CDE9473-341C-496E-BD68-CED18B923848%7D&DE=%7B73216981-2826-4903-ADED-090ADBF499A6%7D"
    },
    {
      id: 2,
      name: "Wimberley ZipLine Adventures",
      description: "Prepare for highflying fun as you harness up and glide through the air on this thrilling, action packed zipline adventure. Experience a rush as you soar over canyons and creeks with breathtaking 15-mile views of the Wimberley Valley.",
      website: "https://wimberleyzipline.com/index.html"
    },
    {
      id: 3,
      name: "Jacob's Well Natural Area",
      description: "The cool clear water here makes Jacob's Well a unique swimming destination in the Texas summer heat.",
      website: "http://www.visitwimberley.com/jacobswell/"
    },
    {
      id: 4,
      name: "Driftwood Estate Winery",
      description: "Driftwood Estate Winery sits on a bluff overlooking the Estate Vineyard and the Hill Country from which visitors can enjoy their award winning wines.",
      website: "http://www.driftwoodwine.com/"
    },
    {
      id: 5,
      name: "Bella Vista Ranch",
      description: "The Bella Vista Ranch is located in the hill country of Wimberley, Texas. Designed to reflect a traditional Italian family farm, the ranch is home to over 1,200 producing olive trees, seasonal fruit and vegetables, a frantoio (olive press), a winery, tasting room, and gift shop. Yes, we make 100% Texan olive oil!",
      website: "https://www.texasoliveoil.com"
    },
    {
      id: 6,
      name: "Rough Creek Lavender Fields",
      description: "is located in the heart of the beautiful Texas Hill Country, just 7 miles NW of Wimberley on FM 2325. You may pick your own lavender from 5,000 lavender plants or shop in the on-site store. Herb classes, special events and tour buses are welcome when scheduled",
      website: "http://www.roughcreeklavender.com"
    }
  ],
  booknow: [
    {
      id: 0,
      title: "Book Directly with the Property Manager",
      url1: "",
      url2: "",
      house1: "Luna Rio Main House",
      house2: "Luna Rio Cabana"
    },
    {
      id: 1,
      title: "Book on HomeAway",
      url1: "https://www.homeaway.com/vacation-rental/p4716211?_branch_match_id=499985297927192544",
      url2: "https://www.homeaway.com/vacation-rental/p4716210",
      house1: "Luna Rio Main House",
      house2: "Luna Rio Cabana"
    },
    {
      id: 2,
      title: "Book on AirBnb",
      url1: "https://www.airbnb.com/rooms/18994327",
      url2: "https://www.airbnb.com/rooms/19608834",
      house1: "Luna Rio Main House",
      house2: "Luna Rio Cabana"
    }
  ],
  breweries: {
    id: 0,
    title: "Wine, Brew and Rum Tasting",
    name1: "Wimberley Valley Winery",
    website1: "http://www.wimberleyvalleywinery.com/",
    name2: "Wimberley Brewing Company",
    website2: "https://www.brewsterspizza.com/",
    name3: "Middleton Brewery",
    website3: "http://www.middletonbrewingllc.com/defaultsite",
    name4: "Driftwood Winery",
    website4: "http://www.driftwoodwine.com/",
    name5: 'Cypress Creek Reserve',
    website5: "http://www.cypresscreekreserve.com/",
    name6: "Mike's Luxury Transports",
    website6: "http://www.mikesluxurytransports.com/"
  },
  events: [
    {
      id: 0,
      name: "Corral Theatre",
      description: "The corral is a unique outdoor walk-in theater showing first-run movies that start at 'Dark Thirty, PM'. Bring your own lawn chair or sit in theirs any Friday and Saturday, or Sunday from Memorial Day to Labor Day.",
      website: "http://www.corraltheatre.com"
    },
    {
      id: 1,
      name: "EmilyAnn Theatre",
      description: "Visit an outdoor amphitheater for seasonal events and outdoor plays.",
      website: "http://emilyann.org"
    },
    {
      id: 2,
      name: "Wimberley Players",
      description: "Live theatre right here in Wimberley.",
      website: "http://www.wimberleyplayers.org"
    },
    {
      id: 3,
      name: "Bingo! (at the VFW Hall)",
      description: "Every Friday night, starts at 7pm. Come to the meeting hall at Oldham-Cummings Post 6441.",
      website: "http://www.visitwimberley.com/vfw/index.shtml"
    },
    {
      id: 4,
      name: "Old Glory Ranch",
      description: "Come see a magical outdoor setting on the Blanco River for corporate events, private parties, or weddings.",
      website: "https://oldgloryranch.com"
    },
    {
      id: 5,
      name: "Devil's Backbone Tavern",
      description: "Open mic/song-writer’s night on Wednesdays and acoustic performances on Fridays.",
      website: "https://www.yelp.com/biz/devils-backbone-tavern-fischer"
    },
    {
      id: 6,
      name: "Aloe Skin & Body",
      description: "Aloe skin + body is a holistic day spa that specializes in providing treatments that focus on the overall wellness of the entire body.",
      website: "http://aloeskinandbody.com"
    }
  ],
  photos: [
    {
      id: 0,
      url: "https://i.imgur.com/MbDCzl5.jpg"
    },
    {
      id: 1,
      url: "https://i.imgur.com/lXd9p3v.jpg"
    },
    {
      id: 2,
      url: "https://i.imgur.com/fccXuLk.jpg"
    },
    {
      id: 3,
      url: "https://i.imgur.com/m7CMZIx.jpg"
    },
    {
      id: 4,
      url: "https://i.imgur.com/ZxxG5Lr.jpg"
    },
    {
      id: 5,
      url: "https://i.imgur.com/FmKIYwn.jpg"
    },
    {
      id: 6,
      url: "https://i.imgur.com/BA6swbp.jpg"
    },
    {
      id: 7,
      url: "https://i.imgur.com/Y2C7hZZ.jpg"
    },
    {
      id: 8,
      url: "https://i.imgur.com/PXjymd6.jpg"
    },
    {
      id: 9,
      url: "https://i.imgur.com/XfqupJV.jpg"
    },
    {
      id: 10,
      url: "https://i.imgur.com/qUfT7cG.jpg"
    },
    {
      id: 11,
      url: "https://i.imgur.com/fJm89rr.jpg"
    },
    {
      id: 12,
      url: "https://i.imgur.com/j2Wqvbq.jpg"
    },
    {
      id: 13,
      url: "https://i.imgur.com/FSUh7Qz.jpg"
    },
    {
      id: 14,
      url: "https://i.imgur.com/cJ8RrtU.jpg"
    },
    {
      id: 15,
      url: "https://i.imgur.com/F7zEXmp.jpg"
    },
    {
      id: 16,
      url: "https://i.imgur.com/vKdAWaA.jpg"
    },
    {
      id: 17,
      url: "https://i.imgur.com/Nm3GQp7.jpg"
    },
    {
      id: 18,
      url: "https://i.imgur.com/iMpzuho.jpg"
    },
    {
      id: 19,
      url: "https://i.imgur.com/QC8slxL.jpg"
    },
    {
      id: 20,
      url: "https://i.imgur.com/oebhbyo.jpg"
    },
    {
      id: 21,
      url: "https://i.imgur.com/wmZzB2F.jpg"
    },
    {
      id: 22,
      url: "https://i.imgur.com/VbvfIe1.jpg"
    },
    {
      id: 23,
      url: "https://i.imgur.com/s7Z3uS7.jpg"
    },
    {
      id: 24,
      url: "https://i.imgur.com/yMuVQUN.jpg"
    },
    {
      id: 25,
      url: "https://i.imgur.com/z1a1adc.jpg"
    },
    {
      id: 26,
      url: "https://i.imgur.com/vsi0Pfw.jpg"
    },
    {
      id: 27,
      url: "https://i.imgur.com/770CQhs.jpg"
    },
    {
      id: 28,
      url: "https://i.imgur.com/6fiQ4Df.jpg"
    },
    {
      id: 29,
      url: "https://i.imgur.com/oV2iMOv.jpg"
    },
    {
      id: 30,
      url: "https://i.imgur.com/aU5UGZp.jpg"
    },
    {
      id: 31,
      url: "https://i.imgur.com/9n3jFQR.jpg"
    },
    {
      id: 32,
      url: "https://i.imgur.com/FsjxARz.jpg"
    },
    {
      id: 33,
      url: "https://i.imgur.com/QkIFViD.jpg"
    },
    {
      id: 34,
      url: "https://i.imgur.com/mVgqxwe.jpg"
    },
    {
      id: 35,
      url: "https://i.imgur.com/lOMsKDi.jpg"
    },
    {
      id: 36,
      url:"https://i.imgur.com/pZ9XzRn.jpg"
    },
    {
      id: 37,
      url:"https://i.imgur.com/cT906hh.jpg"
    },
    {
      id: 38,
      url:"https://i.imgur.com/taMn2AT.jpg"
    },
    {
      id: 39,
      url:"https://i.imgur.com/Co61h03.jpg"
    },
    {
      id: 40,
      url:"https://i.imgur.com/6kkRXJ6.jpg"
    },
    {
      id: 41,
      url:"https://i.imgur.com/TSABRdQ.jpg"
    },
    {
      id: 42,
      url:"https://i.imgur.com/EcFtI9M.jpg"
    },
    {
      id: 43,
      url:"https://i.imgur.com/MlV3M5Q.jpg"
    },
    {
      id: 44,
      url:"https://i.imgur.com/HFqm8D2.jpg"
    },
    {
      id: 45,
      url:"https://i.imgur.com/0iTXf3o.jpg"
    },
    {
      id: 46,
      url:"https://i.imgur.com/2tgG9Us.jpg"
    },
    {
      id: 47,
      url:"https://i.imgur.com/gTgRcJ1.jpg"
    },
    {
      id: 48,
      url:"https://i.imgur.com/1NeI5yD.jpg"
    },
    {
      id: 49,
      url:"https://i.imgur.com/3KWJFkL.jpg"
    },
    {
      id: 50,
      url:"https://i.imgur.com/ZBDYEh4.jpg"
    },
    {
      id: 51,
      url:"https://i.imgur.com/cdnNE2V.jpg"
    },
    {
      id: 52,
      url:"https://i.imgur.com/nUx4Q26.jpg"
    },
    {
      id: 53,
      url:"https://i.imgur.com/ExDa2FG.jpg"
    },
    {
      id: 54,
      url:"https://i.imgur.com/7NhdUiB.jpg"
    },
    {
      id: 55,
      url:"https://i.imgur.com/9XaJ6cr.jpg"
    },
    {
      id: 56,
      url:"https://i.imgur.com/AuiArqO.jpg"
    },
    {
      id: 57,
      url:"https://i.imgur.com/tE38KNh.jpg"
    },
    {
      id: 58,
      url:"https://i.imgur.com/zaPDcqM.jpg"
    },
    {
      id: 59,
      url:"https://i.imgur.com/Sp971Kf.jpg"
    }
  ],
  propertyDetail: [
    {
      id: 0,
      title: "Luna Rio Estate on the Blanco River",
      location: "Wimberley, TX",
      bedrooms: 4,
      bathrooms: 4,
      sleeps: 10,
      description: "Luna Rio Main House has been completely renovated creating a luxurious home in the tranquil setting of the Texas Hill Country and sits next to the Blanco River. Many claim Wimberley, TX to be 'a little bit of heaven' and our kids say Luna Rio is the best place on land. Please preview the pictures of the main house below.",
      avatar: "https://i.imgur.com/fccXuLkl.jpg"
    },
    {
      id: 1,
      title: "Luna Rio Casita",
      location: "Wimberley, TX",
      bedrooms: 1,
      bathrooms: 1,
      sleeps: 4,
      description: "The Luna Rio Casita sits above the garage and is a great “extra” room for up to four people. The Casita has its own special seating area with a flat screen television, a small kitchenette and small bathroom. Many find this space great for kids to hang out together and play games or just to utilize as a comfortable extra sleeping space. Please preview the photos of the Luna Rio Casita below.",
      avatar: "https://i.imgur.com/HFqm8D2.jpg?1"
    },
    {
      id: 2,
      title: "Luna Rio Cabana",
      location: "Wimberley, TX",
      bedrooms: 1,
      bathrooms: 1,
      sleeps: "2-3",
      description: "The Luna Rio Cabana is approximately 200 feet from the Luna Rio Main House and can be rented separately. The Luna Rio Cabana has been recently updated and has luxurious bedding with a queen bed and couch. There is ample seating in the living area, a small dining table, fully stocked kitchen and beautiful screen porch. The Luna Rio Cabana also has its own hot tub/spa. Please preview the photos of the Luna Rio Cabana below.",
      avatar: "https://i.imgur.com/nUx4Q26l.jpg"
    }
  ],
  restaurants: [
    {
      id: 0,
      name: "The Back Porch BBQ & BYOB.",
      description: "Brisket and Turkey!",
      phone: "512-722-3121",
      website: 'http://www.backporchwimberley.com/index.html'
    },
    {
      id: 1,
      name: "Blair House Inn",
      description: "Excellent breakfast and true fine dining in the Texas Hill Country.",
      phone: "512-847-1111",
      website: "https://blairhouseinn.com/dining/"
    },
    {
      id: 2,
      name: "Brewster's Pizza & Brew Pub",
      description: "Family owned and operated. Great original pizzas and brews.",
      phone: "512-847-3299",
      website: "http://www.brewsterspizza.com"
    },
    {
      id: 3,
      name: "Creekside Cookers BBQ",
      description: "Local BBQ. Try the Big Kahuna sandwich.",
      phone: "512-947-1609",
      website: "http://www.creeksidecookers.com"
    },
    {
      id: 4,
      name: "Hay's City Store",
      description: "Great Texas comfort food!",
      phone: "512-722-3905",
      website: "http://www/hayscitystoretx.com"
    },
    {
      id: 5,
      name: "Indigo Brew",
      description: "Excellent coffees and smoothies",
      phone: "512-618-3280​",
      website: "http://freshbrewed.business.site"
    },
    {
      id: 6,
      name: "Ino'z Brew & Chew",
      description: "In Wimberley Square, a good daytime restaurant and outdoor patio overlooking Cypress Creek. Enjoy sandwiches and burgers outdoors or watch a Longhorn game inside at the bar.",
      phone: "512-847-6060",
      website: "http://www.inozwimberley.com"
    },
    {
      id: 7,
      name: "Jobell Cafe & Bistro",
      description: "Eclectic bistro fare served in a rustic and intimate environment amidst the charm of the Texas Hill Country",
      phone: "512-847-7327",
      website: "http://www.jobellcafe.com"
    },
    {
      id: 8,
      name: "Kate's Place",
      description: "Seasonal food with local artwork",
      phone: "512-722-3744",
      website: "http://www.facebook.com/katesplacewimberley"
    },
    {
      id: 9,
      name: "The Leaning Pear",
      description: "Very fresh and interesting menu! Cool Vibe! A standard menu of sandwiches and salads while also offering specials each evening that reflect what produce and meats are 'in season’.",
      phone: "512-847-7327",
      website: "http://www.leaningpear.com"
    },
    {
      id: 10,
      name: "Linda's Fine Dining",
      description: " Bistro & Take-out.",
      phone: "512-847-5465",
      website: "http://www/lindaallencatering.com"
    },
    {
      id: 11,
      name: "Mandola's Trattoria Lisina",
      description: "Great italian restaurant as part of the Duchman Winery in Driftwood",
      phone: "512-847-5464",
      website: "http://www.trattorialisina.com"
    },
    {
      id: 12,
      name: "Marco's Italian Restaurant",
      description: "Homemade pizzas and pastas. BYOB and enjoy a meal inside or out in their garden area. Great for kids and adults! Find them in Wimberley Square.",
      phone: "512-847-0742",
      website: ""
    },
    {
      id: 13,
      name: "Pho-Lisha's Food Truck",
      description: "Mixes Cajun, Asian and Texan cuisines!",
      phone: "225-276-9928",
      website: ""
    },
    {
      id: 14,
      name: "Sip! On the Square",
      description: "Coffees, teas, and sweets on the Square.",
      phone: "512-722-3685",
      website: "http://www.siponthesquare.com/index2.ph"
    },
    {
      id: 15,
      name: "Wimberley Cafe",
      description: "Good breakfasts & Chicken Fried.",
      phone: "512-847-9462",
      website: "http://www.wimberleycafe.com"
    },
    {
      id: 16,
      name: "Wimberley Pie Company",
      description: "Pie lovers, stop in a get a piece of your favorite pie, or take the whole thing to go!",
      phone: "512-847-9462",
      website: "http://www.wimberleypie.com"
    }
  ],
  shops: [
    {
      id: 0,
      name: "Wimberley Glassworks",
      description: "Wimberley Glassworks is Texas’ premier hand blown glass lighting and art glass studio, creating exclusive glass collections, limited edition vases, sculptures, platters and lighting since 1992. ",
    },
    {
      id: 1,
      name: "Bent Tree Gallery",
      description: "The gallery features an eclectic mix of representational and expressionistic paintings, photography, assemblages, jewelry and sculpture."
    },
    {
      id: 2,
      name: "Rancho Deluxe",
      description: "A beautiful store featuring rustic and eclectic home furnishings, Texas stars, Hill Country limestone, milagro crosses from Mexico, lamps, furniture, hardware, books, music, children's gifts."
    },
    {
      id: 3,
      name: "Art on 12",
      description: "Art on 12 is Central Texas' largest art gallery. We display the work of 53 local artists in media including oil, acrylic, pastel and watercolor painting as well as mixed media, sculpture and fine art photography."
    },
    {
      id: 4,
      name: "Kiss the Cook Kitchen Essentials",
      description: "Kiss The Cook is the finest and most complete kitchen store in the Hill Country. Bakeware, cookware, appliances, linens, aprons, cookbooks, hundreds of tools / gadgets."
    },
    {
      id: 5,
      name: "Shop the Tree House",
      description: "Bohemian apparel and decor, rustic accents, unique furniture, vintage one-of-a-kind finds, and humorous and fun gifts."
    },
    {
      id: 6,
      name: "Visit Wimberley",
      description: "Check out VisitWimberley.com for more information on Shopping, Guides, Events, Wildlife, etc."
    },
    {
      id: 7,
      name: "Wimberley Market Days",
      description: "Wimberley hosts the oldest outdoor market in the Texas Hill Country and the second-largest in the state. We feature over 475 booths of everything you can't live without. Come stroll our tree-shaded paths, listen to live music and shop to your heart's content. Open the 1st Saturday of the month March-December. From 7:00 AM -4:00 PM."
    }
  ],
  spa: {
      id: 0,
      name: "Massage & Spa",
      description: "Massage - To book a spa experience check out",
      subtitle: "Aloe Skin + Body",
      subtitle2: "A Polished Touch Relaxation Medi Spa",
      website1: "http://wimberley.aloeskinandbody.com/",
      website2: "http://www.apolishedtouch.net/"
    },
  testimonialObj: [
      {
        id: 0,

        testimonial1: 'We spent my 60th birthday here, and even though it got down in the 30s at night, it was really pleasant during the day! We enjoyed relaxing and eating. We loved the horseshoes and walking down the river. WE absolutely loved our time at this beautiful home. We cannot wait to come back!',

        author1: 'The Ramirez Family from Houston, Texas',

        testimonial2: 'We spent Christmas here with our families. We played games, cooked in the fabulous kitchen, watched the river, walked and talked a lot, worked on puzzles, avoided as many nerf gun wars as possible, enjoyed the town of Wimberley at Christmas time and attended Christmas Eve service in Buda. We love this house and had a wonderful time!',

        author2: 'The Shaeffer, Green and Pierson Families from Dallas, Austin & Houston, TX',

        testimonial3: 'We spent Spring Break here with grandparents, grandkids and siblings and it was PERFECT! Ziplining and shopping in the square. Floated the Blanco River. Relaxed and danced on the screen porch! We loved the super friendly people in town! Spending time in this amazing house was so wonderful for our family! We cannot wait to come back and bring more family and friends! Thanks you loaning us your lovely Luna Rio! It was a blessing for us!',

        author3: 'The Copeland Family from Pflugerville, Texas'
      },
      {
        id: 1,

        testimonial1: 'We came to Wimberley as a family to try to find our own property. We love the people here and we love Wimberley. We cooked in the amazing kitchen and had everything we needed at our fingertips. Your property is so well thought out and we loved your decor choices! Thank you for allowing our family to enjoy your beautiful home.',

        author1: 'The Arnold Family from Dallas, Texas',

        testimonial2: 'We hung out on the river in floats, shopped in the square, golfed, went to Jacob’s Well, the Blue Hole and mainly spent quality time with family. We loved having coffee on the porch every morning. THIS IS A LOVELY HOME! We really enjoyed our stay, it was perfect for the family. We enjoyed a splash in the hot tub and sitting on the screen porch. We cannot wait to come back next year! Wimberley is so relaxing and beautiful… the perfect combination for rejuvenation.',

        author2: 'The Gibbs Family from Fort Worth, Texas',

        testimonial3: 'This house could not have been more perfect! Whoever designed this house has amazing taste! We relaxed, cooked and enjoyed the Blanco River. It was a blast. Coffee on the porch was awesome. We really loved our time here and thank you for having us! We will definitely be back!',

        author3: 'Kasy’s Bachelorette Party - South Texas, Houston and San Antonio '
      },
      {
        id: 2,

        testimonial1: 'We took one last vacation on the last weekend of summer. Perfect weather and no bugs due to the screen porch. We floated the river and cooked at the house and relaxed, relaxed, relaxed… Amazing decor touches in this house and the hot tub gets two thumbs up. You have thought of everything. 100% incredible - We are absolutely dying to come back for a longer stay! THANK YOU!',

        author1: 'The Chaumont & Grissom Family',

        testimonial2: 'THIS PLACE IS PERFECT! We played games, drank beverages on the porch, waded in the river, shopped in the town, watched movies, even some mud masking…all in all ….GREAT TIME! This is an amazing home and we are sure to be back! Thank you!',

        author2: 'Century 21 Girls Getaway - San Antonio, Texas',

        testimonial3: 'We are back for our second Christmas Family gathering. We love it here and it is wonderful place to have our family get together and celebrate Christmas. We cooked, ate, opened presents, played “white elephant”, played with our one-year-old, played board games, watched football, stayed up late, went hiking, watched football, stay up late, told stories, zip-lining….you name it. We even had a few visits from a fox. Thank you for providing the perfect place for our growing family to meet & celebrate this Holiday Season!',

        author3: 'The Shaeffer, Green and Pierson Families from Dallas, Austin & Houston, TX'
      }
  ],
  theatre: {
    id: 0,
    name1: "Corral Theatre",
    website1: "http://www.corraltheatre.com/",
    name2: "EmilyAnn Theatre",
    website2: "http://www.emilyann.org/",
    name3: "Wimberley Players",
    website3: "http://www.wimberleyplayers.org/"
  }
}
export default state;
