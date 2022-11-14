// SWIPER
let swiper = new Swiper(".mySwiper", {
  effect: "cube",
  grabCursor: false,
  cubeEffect: {
    shadow: true,
    slideShadows: true,
    shadowOffset: 20,
    shadowScale: 0.94,
  },
  allowTouchMove: false
});
// END OF SWIPER JS


const getStartedBtn = document.getElementById('getstarted-button');
getStartedBtn.onclick = function() {
  swiper.slideNext();
};

const goBtn = document.getElementById('go-button');
goBtn.onclick = function() {
  if (valid == true) {
    swiper.slideNext();
  }
};

const findBtn = document.getElementById('find-button');
findBtn.onclick = function() {
  swiper.slideNext();
  showAccommodation();
  searchResultsVariables();
};

const backBtn = document.getElementById('back-button');
backBtn.onclick = function() {
  swiper.slidePrev();
};

const backBtnTwo = document.getElementById('back-button-two');
backBtnTwo.onclick = function() {
  swiper.slidePrev();
};

const searchResults = document.getElementById("search-results");


// DATE RANGE PICKER

$(function() {
  $('input[name="daterange"]').daterangepicker({
    showDropdowns: true,
    // blank date by default
    autoUpdateInput: false,
    minYear: 1901,
    maxYear: parseInt(moment().format('YYYY'), 10)
  });
  $('input[name="daterange"]').on('apply.daterangepicker',
    function(ev, picker) {

      let fullDate = $(this).val(picker.startDate.format('MM/DD/YYYY') + ' - ' + picker.endDate.format('MM/DD/YYYY'));

      let start = picker.startDate.format('MM/DD/YYYY');
      let end = picker.endDate.format('MM/DD/YYYY');
      let daysSelected = datediff(parseDate(start), parseDate(end));
      // console.log(daysSelected);

      // work out the differece between two dates
      function parseDate(str) {
        var mdy = str.split('/');
        return new Date(mdy[2], mdy[0] - 1, mdy[1]);
      }

      // this function here works out the difference between the Dates
      // using two arguments, the start date and the end date
      function datediff(first, second) {
        // Take the difference between the dates and divide by milliseconds per day.
        // Round to nearest whole number to deal with DST.
        return Math.round((second - first) / (1000 * 60 * 60 * 24));
      }
      let messageContent;

      // add in our own validation
      if (daysSelected >= 1 && daysSelected <= 15) {
        messageContent = `<div class="popupmessage">You selected ${daysSelected} days.</div>
        `;
        valid = true;
      } else if (daysSelected > 15) {
        messageContent = `<div class="popupmessage">Please select 15 days or less.</div>
        `;
        valid = false;
      } else {
        messageContent = `<div class="popupmessage">Please select between 1 and 15 days.</div>
        `;
        valid = false;
      }
      message.innerHTML = messageContent;
    }
  );

});


// MAP BOX

mapboxgl.accessToken = 'pk.eyJ1IjoibW9sbHl0eG94IiwiYSI6ImNsM3J3bnh0ODAzbWgzaWw4bmpzaTdxOHEifQ.TSBVHJEKeygThQeJuFEUhA';
const map = new mapboxgl.Map({
  container: 'map', // container ID
  style: 'mapbox://styles/mollytxox/cl3rxj0sv000d14qa6fhz3lxa', // style URL
  center: [174.7800920681949, -41.278951279883685], // starting position [lng, lat]
  zoom: 12 // starting zoom
});

map.addControl(new mapboxgl.FullscreenControl());

// MAP BOX

const locationInput = document.getElementById("location-select");

function showAccommodation() {
  let location = locationInput.value;
  let people = guestNumberInput.value;

  // IF PEOPLE SELECTED IS ONE ----------------------------
  if (people == "oneperson" && location == "wellington") {
    map.flyTo({
      center: [174.7773030834805, -41.28939253210325],
      zoom: 11
    });
    wellingtonHotelMarkers.features.forEach(renderMarkers);
    wellingtonHostelMarkers.features.forEach(renderMarkers);
    wellingtonHouseMarkers.features.forEach(renderMarkers);

  } else if (people == "oneperson" && location == "auckland") {
    map.flyTo({
      center: [174.7259149407958, -36.8635747204515],
      zoom: 8
    });
    aucklandHotelMarkers.features.forEach(renderMarkers);
    aucklandHostelMarkers.features.forEach(renderMarkers);
    aucklandHouseMarkers.features.forEach(renderMarkers);

  } else if (people == "oneperson" && location == "christchurch") {
    map.flyTo({
      center: [172.57122501169368, -43.530448986479506],
      zoom: 10
    });
    christchurchHotelMarkers.features.forEach(renderMarkers);
    christchurchHostelMarkers.features.forEach(renderMarkers);
    christchurchHouseMarkers.features.forEach(renderMarkers);
  }
  // IF PEOPLE SELECTED IS TWO ----------------------------
  else if (people == "twopeople" && location == "wellington") {
    map.flyTo({
      center: [174.7773030834805, -41.28939253210325],
      zoom: 11
    });
    wellingtonHotelMarkers.features.forEach(renderMarkers);
    wellingtonMotelMarkers.features.forEach(renderMarkers);
    wellingtonHouseMarkers.features.forEach(renderMarkers);

  } else if (people == "twopeople" && location == "auckland") {
    map.flyTo({
      center: [174.7259149407958, -36.8635747204515],
      zoom: 8
    });
    aucklandHotelMarkers.features.forEach(renderMarkers);
    aucklandMotelMarkers.features.forEach(renderMarkers);
    aucklandHouseMarkers.features.forEach(renderMarkers);

  } else if (people == "twopeople" && location == "christchurch") {
    map.flyTo({
      center: [172.57122501169368, -43.530448986479506],
      zoom: 10
    });
    christchurchHotelMarkers.features.forEach(renderMarkers);
    christchurchMotelMarkers.features.forEach(renderMarkers);
    christchurchHouseMarkers.features.forEach(renderMarkers);
  }
  // IF PEOPLE SELECTED IS THREE ----------------------------
  else if (people == "threepeople" && location == "wellington") {
    map.flyTo({
      center: [174.7773030834805, -41.28939253210325],
      zoom: 11
    });
    wellingtonMotelMarkers.features.forEach(renderMarkers);
    wellingtonHouseMarkers.features.forEach(renderMarkers);

  } else if (people == "threepeople" && location == "auckland") {
    map.flyTo({
      center: [174.7259149407958, -36.8635747204515],
      zoom: 8
    });
    aucklandMotelMarkers.features.forEach(renderMarkers);
    aucklandHouseMarkers.features.forEach(renderMarkers);

  } else if (people == "threepeople" && location == "christchurch") {
    map.flyTo({
      center: [172.57122501169368, -43.530448986479506],
      zoom: 10
    });
    christchurchMotelMarkers.features.forEach(renderMarkers);
    christchurchHouseMarkers.features.forEach(renderMarkers);
  }
  // IF PEOPLE SELECTED IS FOUR ----------------------------
  else if (people == "fourpeople" && location == "wellington") {
    map.flyTo({
      center: [174.7773030834805, -41.28939253210325],
      zoom: 11
    });
    wellingtonMotelMarkers.features.forEach(renderMarkers);
    wellingtonHouseMarkers.features.forEach(renderMarkers);

  } else if (people == "fourpeople" && location == "auckland") {
    map.flyTo({
      center: [174.7259149407958, -36.8635747204515],
      zoom: 8
    });
    aucklandMotelMarkers.features.forEach(renderMarkers);
    aucklandHouseMarkers.features.forEach(renderMarkers);

  } else if (people == "fourpeople" && location == "christchurch") {
    map.flyTo({
      center: [172.57122501169368, -43.530448986479506],
      zoom: 10
    });
    christchurchMotelMarkers.features.forEach(renderMarkers);
    christchurchHouseMarkers.features.forEach(renderMarkers);
  }
}

function searchResultsVariables() {
  let location = locationInput.value.toUpperCase();
  let people = guestNumberInput.value.toUpperCase();
  let holidayDays = dateInput.value;
searchResults.innerHTML = ` <strong>Location:</strong>  ${location}  <strong>Guests:</strong>  ${people} <br> <strong>Holiday Dates:</strong>  ${holidayDays}
`;
}


// WELLINGTON HOTEL MARKERS ---------------------------------------------------------------------------------------------
const wellingtonHotelMarkers = {
  //declare the type of data we are giving to mapbox
  type: 'FeatureCollection',
  // declare our list of features
  features: [{
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [174.7773030834805, -41.28939253210325]
      },
      properties: {
        title: `
    <img class="popupimage" src="https://images.trvl-media.com/hotels/1000000/30000/24900/24850/f3d33d05.jpg?impolicy=resizecrop&rw=1200&ra=fit">
    <h1 class="locationpopuptitle"> James Cook Hotel </h1>
    `,
        description: `<p class=locationpopupdescription>Amazing Location!</p>`,
        price: `<p class="accomprice">$157</p>`,
        id: "James Cook Hotel"
      }
    }, //end of first feature
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [174.78946471360433,-41.29602160471644]
      },
      properties: {
        title: `
    <img class="popupimage" src="https://images.trvl-media.com/hotels/1000000/10000/1300/1275/2d9de268.jpg?impolicy=resizecrop&rw=1200&ra=fit">
    <h1 class="locationpopuptitle"> Copthorne Hotel </h1>
    `,
        description: `<p class=locationpopupdescription>Incredible service</p>`,
        price: `<p class="accomprice">$157</p>`,
        id: "Copthorne Hotel"
      }
    }, //end of second feature

  ]
};

// WELLINGTON HOSTEL MARKERS ---------------------------------------------------------------------------------------------
const wellingtonHostelMarkers = {
  //declare the type of data we are giving to mapbox
  type: 'FeatureCollection',
  // declare our list of features
  features: [{
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [174.7714538327303,-41.29613628049876]
      },
      properties: {
        title: `
    <img class="popupimage" src="https://exp.cdn-hotels.com/hotels/2000000/1540000/1532700/1532614/6b25c6e1_z.jpg?impolicy=fcrop&w=1000&h=666&q=medium">
    <h1 class="locationpopuptitle"> Nomads Capital </h1>
    `,
        description: `<p class=locationpopupdescription>Great space</p>`,
        price: `<p class="accomprice">$30</p>`,
        id: "Nomads Capital"
      }
    }, //end of first feature
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [174.78149528133395, -41.293156941126576]
      },
      properties: {
        title: `
    <img class="popupimage" src="https://pix10.agoda.net/hotelImages/296/296141/296141_17071906450054533085.jpg?ca=13&ce=1&s=1024x768">
    <h1 class="locationpopuptitle"> Trek Global </h1>
    `,
        description: `<p class=locationpopupdescription>Great Value!</p>`,
        price: `<p class="accomprice">$30</p>`,
        id: "Trek Global"
      }
    }, //end of second feature

  ]
};

// WELLINGTON MOTEL MARKERS ---------------------------------------------------------------------------------------------
const wellingtonMotelMarkers = {
  //declare the type of data we are giving to mapbox
  type: 'FeatureCollection',
  // declare our list of features
  features: [{
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [174.77900677914505,-41.299190344503224]
      },
      properties: {
        title: `
    <img class="popupimage" src="https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/13200446.jpg?k=3e6f67c77a6e1885481014cfebc6ca5ab77a29c199afa95a46d8fb7c51b97388&o=&hp=1">
    <h1 class="locationpopuptitle"> Bella Vista </h1>
    `,
        description: `<p class=locationpopupdescription>Value for money</p>`,
        price: `<p class="accomprice">$90</p>`,
        id: "Bella Vista"
      }
    }, //end of first feature
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [174.78459157768742, -41.29249530663375]
      },
      properties: {
        title: `
    <img class="popupimage" src="https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/122672618.jpg?k=ee3b44268ea39bfb73004b97bb41080df07a48b1ee1cf67e3a43d329b8c7a193&o=&hp=1">
    <h1 class="locationpopuptitle"> Halswell Lodge </h1>
    `,
        description: `<p class=locationpopupdescription>Will stay again!</p>`,
        price: `<p class="accomprice">$90</p>`,
        id: "Halswell Lodge"
      }
    }, //end of second feature

  ]
};

// WELLINGTON HOUSE MARKERS ---------------------------------------------------------------------------------------------
const wellingtonHouseMarkers = {
  //declare the type of data we are giving to mapbox
  type: 'FeatureCollection',
  // declare our list of features
  features: [{
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [174.78019533470513, -41.294469318325234]
      },
      properties: {
        title: `
    <img class="popupimage" src="https://a0.muscache.com/im/pictures/32e09a72-107f-4243-90d4-1642046de1ef.jpg?im_w=1200">
    <h1 class="locationpopuptitle"> Wellington Guesthouse </h1>
    `,
        description: `<p class=locationpopupdescription>Beautiful Views</p>`,
        price: `<p class="accomprice">$240</p>`,
        id: "Wellington Guesthouse"
      }
    }, //end of first feature
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [174.7741935635736, -41.2881171241229]
      },
      properties: {
        title: `
    <img class="popupimage" src="https://a0.muscache.com/im/pictures/cca62c1d-e318-416a-8845-ddec0cfce899.jpg?im_w=1440">
    <h1 class="locationpopuptitle"> Central House </h1>
    `,
        description: `<p class=locationpopupdescription>Compliments to the owner</p>`,
        price: `<p class="accomprice">$240</p>`,
        id: "Central House"
      }
    }, //end of second feature

  ]
};

// AUCKLAND HOTEL MARKERS ---------------------------------------------------------------------------------------------
const aucklandHotelMarkers = {
  //declare the type of data we are giving to mapbox
  type: 'FeatureCollection',
  // declare our list of features
  features: [{
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [174.74359419715518, -36.8460878038316]
      },
      properties: {
        title: `
    <img class="popupimage" src="https://www.telegraph.co.uk/content/dam/Travel/hotels/oceania/new-zealand/the-cordis-auckland-new-zealand-p.jpg">
    <h1 class="locationpopuptitle"> Hilton Hotel </h1>
    `,
        description: `<p class=locationpopupdescription>Stunning Hotel</p>`,
        price: `<p class="accomprice">$157</p>`,
        id: "Hilton Hotel"
      }
    }, //end of first feature
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [174.76970333780002,-36.888903930711116]
      },
      properties: {
        title: `
    <img class="popupimage" src="https://auckland-hotels.co.nz/wp-content/uploads/2019/06/skycity-hotel-premium-king-room-auckland-1-382x215.jpg">
    <h1 class="locationpopuptitle"> City Hotel </h1>
    `,
        description: `<p class=locationpopupdescription>5 star stay</p>`,
        price: `<p class="accomprice">$157</p>`,
        id: "City Hotel"
      }
    }, //end of second feature

  ]
};

// AUCKLAND HOSTEL MARKERS ---------------------------------------------------------------------------------------------
const aucklandHostelMarkers = {
  //declare the type of data we are giving to mapbox
  type: 'FeatureCollection',
  // declare our list of features
  features: [{
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [174.75101193363668, -36.877987351272346]
      },
      properties: {
        title: `
    <img class="popupimage" src="https://www.aucklandnz.com/sites/build_auckland/files/styles/carousel_banner/public/tourismnz/3128932/p-7F88D845-0EDB-FA81-613DC435D4F67FE3-2544003.jpg">
    <h1 class="locationpopuptitle"> Base Auckland </h1>
    `,
        description: `<p class=locationpopupdescription>Comfortable Stay</p>`,
        price: `<p class="accomprice">$30</p>`,
        id: "Base Auckland"
      }
    }, //end of first feature
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [174.77233792602198, -36.882119540699854]
      },
      properties: {
        title: `
    <img class="popupimage" src="https://hostel.nz/wp-content/uploads/2017/03/IMG_4433-01-1030x686.jpg">
    <h1 class="locationpopuptitle"> Auckland Hostel </h1>
    `,
        description: `<p class=locationpopupdescription>Great Price</p>`,
        price: `<p class="accomprice">$30</p>`,
        id: "Auckland Hostel"
      }
    }, //end of second feature

  ]
};

// AUCKLAND MOTEL MARKERS ---------------------------------------------------------------------------------------------
const aucklandMotelMarkers = {
  //declare the type of data we are giving to mapbox
  type: 'FeatureCollection',
  // declare our list of features
  features: [{
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [174.73680313319704,-36.8766954768581]
      },
      properties: {
        title: `
    <img class="popupimage" src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/255613520.jpg?k=149f0ae80785a8a112c1f942799d03d3bed4f782eb0664f69f68a3aeecec464a&o=&hp=1">
    <h1 class="locationpopuptitle"> Newmarket Motel </h1>
    `,
        description: `<p class=locationpopupdescription>Would stay again</p>`,
        price: `<p class="accomprice">$90</p>`,
        id: "Newmarket Motel"
      }
    }, //end of first feature
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [174.7651851086992, -36.845663799929255]
      },
      properties: {
        title: `
    <img class="popupimage" src="https://www.mtedenmotel.co.nz/client_media/000/000/001/561/img/raw/13.jpg">
    <h1 class="locationpopuptitle"> Mt Eden Motel </h1>
    `,
        description: `<p class=locationpopupdescription>Free Car parking</p>`,
        price: `<p class="accomprice">$90</p>`,
        id: "Mt Eden Motel"
      }
    }, //end of second feature

  ]
};

// AUCKLAND HOUSE MARKERS ---------------------------------------------------------------------------------------------
const aucklandHouseMarkers = {
  //declare the type of data we are giving to mapbox
  type: 'FeatureCollection',
  // declare our list of features
  features: [{
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [174.78533434153428,-36.86772113292416]
      },
      properties: {
        title: `
    <img class="popupimage" src="https://static.trip101.com/paragraph_media/pictures/001/828/407/large/ac9dea68_original.jpg?1584712082">
    <h1 class="locationpopuptitle"> Auckland Villa </h1>
    `,
        description: `<p class=locationpopupdescription>Lovely little house</p>`,
        price: `<p class="accomprice">$90</p>`,
        id: "Auckland Villa"
      }
    }, //end of first feature
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [174.78108025830278, -36.88572177981726]
      },
      properties: {
        title: `
    <img class="popupimage" src="https://www.jonesaroundtheworld.com/wp-content/uploads/2019/11/Cheap-Airbnbs-in-Auckland.jpg">
    <h1 class="locationpopuptitle"> CBD Cabin </h1>
    `,
        description: `<p class=locationpopupdescription>Lovely and cozy</p>`,
        price: `<p class="accomprice">$90</p>`,
        id: "CBD Cabin"
      }
    }, //end of second feature

  ]
};

// CHRISTCHURCH HOTEL MARKERS ---------------------------------------------------------------------------------------------
const christchurchHotelMarkers = {
  //declare the type of data we are giving to mapbox
  type: 'FeatureCollection',
  // declare our list of features
  features: [{
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [172.63727074338067, -43.54133770892387]
      },
      properties: {
        title: `
    <img class="popupimage" src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/4d/d8/bb/superior-twin-room.jpg?w=900&h=-1&s=1">
    <h1 class="locationpopuptitle"> Distinction Hotel </h1>
    `,
        description: `<p class=locationpopupdescription>Walking distance to shops</p>`,
        price: `<p class="accomprice">$157</p>`,
        id: "Distinction Hotel"
      }
    }, //end of first feature
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [172.59136324493045, -43.53282430643415]
      },
      properties: {
        title: `
    <img class="popupimage" src="https://www.christchurchcityhotel.co.nz/content/christchurch-city-hotel-open-graph.jpg">
    <h1 class="locationpopuptitle"> City Hotel </h1>
    `,
        description: `<p class=locationpopupdescription>Incredible service</p>`,
        price: `<p class="accomprice">$157</p>`,
        id: "City Hotel"
      }
    }, //end of second feature

  ]
};

// CHRISTCHURCH HOSTEL MARKERS ---------------------------------------------------------------------------------------------
const christchurchHostelMarkers = {
  //declare the type of data we are giving to mapbox
  type: 'FeatureCollection',
  // declare our list of features
  features: [{
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [172.63150561566732, -43.49953310938738]
      },
      properties: {
        title: `
    <img class="popupimage" src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/167932735.jpg?k=a114b0bbd8eefeb3c5bc2e4ebc60b8597734e895ee62c94ee8d5095ce7c0ea6b&o=&hp=1">
    <h1 class="locationpopuptitle"> Point Break Backpackers </h1>
    `,
        description: `<p class=locationpopupdescription>Large Beds</p>`,
        price: `<p class="accomprice">$30</p>`,
        id: "Point Break Backpackers"
      }
    }, //end of first feature
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [172.6761319746264, -43.50634768633196]
      },
      properties: {
        title: `
    <img class="popupimage" src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/168311418.jpg?k=9cafc853e4d6357d3d37101f0d2f53d661650f50cc2c86ecb53ca3a980ec364e&o=&hp=1">
    <h1 class="locationpopuptitle"> Chester St Backpackers </h1>
    `,
        description: `<p class=locationpopupdescription>Spacious!</p>`,
        price: `<p class="accomprice">$30</p>`,
        id: "Chester St Backpackers"
      }
    }, //end of second feature

  ]
};

// CHRISTCHURCH MOTEL MARKERS ---------------------------------------------------------------------------------------------
const christchurchMotelMarkers = {
  //declare the type of data we are giving to mapbox
  type: 'FeatureCollection',
  // declare our list of features
  features: [{
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [172.67098403582952,-43.478323771448174]
      },
      properties: {
        title: `
    <img class="popupimage" src="https://www.colombointhecity.co.nz/public/db_images/section/section_image_159.jpg">
    <h1 class="locationpopuptitle"> Colombo Motel </h1>
    `,
        description: `<p class=locationpopupdescription>Free breakfast</p>`,
        price: `<p class="accomprice">$90</p>`,
        id: "Colombo Motel"
      }
    }, //end of first feature
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [172.6922283696225, -43.499439638135485]
      },
      properties: {
        title: `
    <img class="popupimage" src="https://www.newzealand.com/assets/Tourism-NZ/Other/873e482067/img-1570101166-1129-2371-p-E1DFA891-DDE2-0A3B-79D9D1D255FBBADB-2544003__aWxvdmVrZWxseQo_CropResizeWzEyMDAsNjMwLDc1LCJqcGciXQ.jpg">
    <h1 class="locationpopuptitle"> Christchurch Motel </h1>
    `,
        description: `<p class=locationpopupdescription>Late checkout option!</p>`,
        price: `<p class="accomprice">$90</p>`,
        id: "Christchurch Motel"
      }
    }, //end of second feature

  ]
};

// CHRISTCHURCH HOUSE MARKERS ---------------------------------------------------------------------------------------------
const christchurchHouseMarkers = {
  //declare the type of data we are giving to mapbox
  type: 'FeatureCollection',
  // declare our list of features
  features: [{
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [172.57627842732387,-43.49563285959043]
      },
      properties: {
        title: `
    <img class="popupimage" src="https://a0.muscache.com/im/pictures/miso/Hosting-17190653/original/03341e9b-500d-4e0d-9bba-1b3ee9bdecfe.jpeg?im_w=720">
    <h1 class="locationpopuptitle"> Christchurch Villa </h1>
    `,
        description: `<p class=locationpopupdescription>Huge backyard!</p>`,
        price: `<p class="accomprice">$240</p>`,
        id: "Christchurch Villa"
      }
    }, //end of first feature
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [172.6908649841788,-43.56141454478675]
      },
      properties: {
        title: `
    <img class="popupimage" src="https://static.trip101.com/paragraph_media/pictures/002/385/493/large/24bbb443-fbcd-4bfd-b037-55ab69957fbc.jpg?1614145682">
    <h1 class="locationpopuptitle"> Christchurch Cottage </h1>
    `,
        description: `<p class=locationpopupdescription>Pet friendly</p>`,
        price: `<p class="accomprice">$240</p>`,
        id: "Christchurch Cottage"
      }
    }, //end of second feature

  ]
};

let mapboxConstArray = [];
mapboxConstArray.push(wellingtonHotelMarkers);
mapboxConstArray.push(wellingtonHostelMarkers);
mapboxConstArray.push(wellingtonMotelMarkers);
mapboxConstArray.push(wellingtonHouseMarkers);
mapboxConstArray.push(aucklandHotelMarkers);
mapboxConstArray.push(aucklandHostelMarkers);
mapboxConstArray.push(aucklandMotelMarkers);
mapboxConstArray.push(aucklandHouseMarkers);
mapboxConstArray.push(christchurchHotelMarkers);
mapboxConstArray.push(christchurchHostelMarkers);
mapboxConstArray.push(christchurchMotelMarkers);
mapboxConstArray.push(christchurchHouseMarkers);

// MAPBOX MARKERS-------------------------------------------------------------------

const guestNumberInput = document.getElementById("guestno-select");
const dateInput = document.getElementById("date-select");


function renderMarkers(currentMarker) {
  let newMarkerElement = document.createElement('div');
  newMarkerElement.className = 'marker';

  new mapboxgl.Marker(newMarkerElement)
    .setLngLat(currentMarker.geometry.coordinates)
    .setPopup(new mapboxgl.Popup({
        offset: 25
      })
      .setHTML('<h3>' + currentMarker.properties.title + '</h3><p>' + currentMarker.properties.description + '</p><p>' + currentMarker.properties.price + '</p><p>' + `<p id="${currentMarker.properties.id}" class="bookbutton">BOOK</p>` + '</p>'))
    .addTo(map);
}

// RESIZING MAP BUTTONS

var biggerSmaller;

map.on('load', function() {
    var mapCanvas = document.getElementsByClassName('mapboxgl-canvas')[0];
    var mapDiv = document.getElementById('map');
    var breakButton = document.getElementById('resizeDiv');
    var fixButton = document.getElementById('resizeMap');

    breakButton.onclick = function() {
        if (biggerSmaller !== 'smaller') {
            mapDiv.style.width = '50%';
            mapCanvas.style.width = '100%';
            biggerSmaller = 'smaller';
        } else {
            mapDiv.style.width = '150%';
            mapCanvas.style.width = '100%';
            biggerSmaller = 'bigger';
        }
    };

    fixButton.onclick = function() {
        map.resize();
    };

});

//MAKING THE BOOK BUTTON SLIDE TO THE NEXT SLIDE IN MAPBOX POPUP
$(document).on('click', '.bookbutton', function() {
  swiper.slideNext();
  let currentButtonId = this.id;
  // calling a function, passing a value into the brackets, otherwise known as an argument
  showBookingTitle(currentButtonId);
});

const bookingTitle = document.getElementById('selected-accommodation-title');
// running the function with an argument, can use id again
function showBookingTitle(id) {
  let currentButtonId = this.id;
  bookingTitle.innerHTML = `<strong>${id}'s Food Options:</strong>`;
  modalBookingTitle.innerHTML = `Your booking at <br> <strong>${id}</strong> <br> has been confirmed!`;
  modalDeniedText.innerHTML = `Your booking request for ${id} <br> has not been approved due to selected dates, <br> guest number or accommodation type. <br> Please try again. `;
  bookBtn.onclick = function() {
    let holidayDays = dateInput.value;
    openConfirmedModal();
} //bottom of on click
} //bottom of function


// MODAL CONFIRMED --------------------------------------------------------------------------------------------------
const bookingConfirmedModal = document.getElementById('bookingconfirmed-modal');
const closeModalBtn = document.getElementById('close-modal-btn');
const bookBtn = document.getElementById('book-button');
const modalBookingTitle = document.getElementById('bookingconfirmedtext');
const modalHolidayDateTotal = document.getElementById('holiday-total-dates');
// MODAL DENIED
const bookingDeniedModal = document.getElementById('bookingdenied-modal');
const modalDeniedText = document.getElementById('bookingdeniedtext');
const closeDeniedModalBtn = document.getElementById('closedenied-modal-btn');

function modalHolidayDates() {
  let holidayDays = dateInput.value;
  modalHolidayDateTotal.innerHTML = `<strong>Holiday Dates:</strong>  ${holidayDays}
`;
}

function refreshPage() {
  window.location.reload();
}

closeModalBtn.onclick = function() {
  closeModal();
};

closeDeniedModalBtn.onclick = function() {
  closeDeniedModal();
};


function openConfirmedModal() {
  bookingConfirmedModal.classList.toggle("active");
  modalHolidayDates();
}

function openDeniedModal() {
  bookingDeniedModal.classList.toggle("active");
}

function closeModal() {
  bookingConfirmedModal.classList.toggle("active");
  refreshPage();
}

function closeDeniedModal() {
  bookingDeniedModal.classList.toggle("active");
  refreshPage();
}



// ACTIVATING TITLE FLIP ANIMATION
AOS.init();
