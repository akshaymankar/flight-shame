let Segment = function(origin, destination) {
    return { origin: origin, destination: destination};
};

let updatePrice = function(itenerary, emission){
    if(emission.failed) return;

    let priceBox = itenerary.getElementsByClassName("gws-flights-results__itinerary-price")[0];
    let priceTag = priceBox.getElementsByClassName("gws-flights-results__price")[0];
    let emissionTag = document.createElement("div");

    priceTag.classList.remove("flt-subhead1");
    priceTag.classList.add("flt-subhead2");

    emissionTag.className = priceTag.className;
    emissionTag.innerText = `${emission.footprint * 2} kg CO₂e`;

    priceTag.after(emissionTag);
};

let formatNumber = n => ("" + n).padStart(2, "0");

let addTrains = function(iteneraries) {
    if(iteneraries.failed) return;

    let bestFlightsLabel = document.getElementsByClassName("gws-flights-results__best-flights")[0];
    let its = "";
    iteneraries.forEach(function(train){
        let departure = new Date(train.departure);
        let arrival = new Date(train.arrival);
        let durationHour = Math.floor(train.duration / 60);
        let durationMin = train.duration - durationHour * 60;
        its = its + `<li  class="gws-flights-results__result-item gws-flights__flex-box gws-flights-results__collapsed" >
         <div   class="gws-flights-results__itinerary-card gws-flights-results__result-item-content gws-flights__flex-filler gws-flights-widgets-expandablecard__card gws-flights-widgets-expandablecard__elevation-1" jsvs="&quot;YJLw5&quot;;&quot;KAw74b:ornU0b&quot;;" >
            <div class="gws-flights-widgets-expandablecard__header gws-flights-results__itinerary-card-header" >
               <div class="gws-flights-results__result-item-content-border"></div>
               <div  class="gws-flights-results__itinerary-card-summary gws-flights-results__result-item-summary gws-flights__flex-box" >
                  <span   style="display:none">
                     Select this itinerary.
                  </span>
                  <div  role="button" tabindex="0"   class="gws-flights-results__select-header gws-flights__flex-filler">
                     <div  class="gws-flights-results__collapsed-itinerary gws-flights-results__itinerary">
                        <div class="gws-flights-results__itinerary-logo gws-flights__flex-box gws-flights__align-center"> <img src="https://pbs.twimg.com/profile_images/1062299610234806274/g6y9hCeI_400x400.jpg" alt="" class="gws-flights-results__airline-logo" height="35" width="35">  </div>
                        <div class="gws-flights-results__itinerary-times gws-flights__ellipsize" data-animation-slideout="">
                           <div class="gws-flights-results__times-row">
                              <div class="gws-flights-results__times flt-subhead1"><span> <span   > <span>${formatNumber(departure.getHours())}:${formatNumber(departure.getMinutes())}</span> </span> </span> – <span> <span   > <span>${formatNumber(arrival.getHours())}:${formatNumber(arrival.getMinutes())}</span></span> </span> </div>
                           </div>
                           <div class="gws-flights-results__carriers gws-flights__ellipsize gws-flights__flex-box gws-flights__align-center flt-caption">     <span class="gws-flights__ellipsize"><span><span>${train.data_source}</span></span></span> <span class="gws-flights-results__airline-extra-info gws-flights__ellipsize">  <span class="gws-flights-results__disclosure"></span> </span> </div>
                        </div>
                        <div class="gws-flights-results__itinerary-duration gws-flights__ellipsize" data-animation-fadeout="">
                           <div class="gws-flights-results__duration flt-subhead1Normal">${durationHour}h ${durationMin}m</div>
                           <div>
                              <div class="gws-flights-results__airports flt-caption"> <span   >${train.origin}</span>–<span   >${train.destination}</span> </div>
                           </div>
                        </div>
                        <div class="gws-flights-results__itinerary-stops gws-flights__ellipsize" data-animation-fadeout="">
                           <div>
                              <div class="gws-flights-results__stops flt-subhead1Normal">
                                 <div><span>Non-stop</span></div>
                              </div>
                           </div>
                        </div>
                        <div  class="gws-flights-results__itinerary-price">
                           <div class="gws-flights-results__price gws-flights-results__cheapest-price flt-subhead2">£${train.price}</div>
                           <div class="gws-flights-results__price gws-flights-results__cheapest-price flt-subhead2">${train.footprint.toFixed(2)} kg CO₂e</div>
                        </div>
                     </div>
                     <div  class="gws-flights-results__expanded-itinerary gws-flights-results__itinerary">
                        <div class="gws-flights-results__itinerary-logo gws-flights__flex-box gws-flights__align-center"> <img src="https://pbs.twimg.com/profile_images/1062299610234806274/g6y9hCeI_400x400.jpg" alt="" class="gws-flights-results__airline-logo" height="35" width="35">  </div>
                        <div class="gws-flights-results__itinerary-details-heading gws-flights__flex-box gws-flights__flex-filler gws-flights__align-center flt-subhead1">
                           <div class="gws-flights__flex-filler gws-flights-results__itinerary-details-heading-text"> <span>   <span>Departure</span>  </span> <span class="gws-flights__separator"></span> <span>Sat, 2 Nov</span> </div>
                           <hairline-button class="gws-flights-results__select-button CpMx2b LZHEY flt-subhead2 RQn3j" role="button" tabindex="0">
                              <div class="j8apPd"></div>
                              Select flight
                           </hairline-button>
                        </div>
                        <div  class="gws-flights-results__itinerary-price">
                           <div class="flt-subhead1 gws-flights-results__price gws-flights-results__cheapest-price">      €820   </div>
                           <div class="gws-flights-results__price-annotation flt-caption">round trip</div>
                        </div>
                     </div>
                     <div  style="display:none"></div>
                  </div>
                  <div role="button" tabindex="0"   class="gws-flights-results__expand">
                     <span  class="gws-flights-results__more z1asCe QFl0Ff" >
                        <svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                           <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
                        </svg>
                     </span>
                  </div>
               </div>
            </div>
         </div>
      </li>`;
    });
    let template = document.createElement("template");
    template.innerHTML = `
<div  role="region" class="gws-flights-results__best-flights" >
   <h4 class="gws-flights-results__heading flt-headline6">
      <span>Trains, FTW!</span>
      </span>
   </h4>
   <ol  class="gws-flights-results__result-list">
      ${its}
   </ol>
</div>

`;
    bestFlightsLabel.before(template.content.firstElementChild);
};


let flightShame = function() {
    var iteneraries = document.getElementsByClassName("gws-flights-results__select-header");
    if(iteneraries.length == 0) {
        console.log("no result!");
        setTimeout ( "flightShame()", 2000 );
    } else {
        console.log("iteneraries found!");
        for (let itenerary of iteneraries) {
            let flightLabel = itenerary.getAttribute("aria-labelledby");
            let segmentLabels = flightLabel.split("-")[2].split("~");
            let segments = segmentLabels.map(segLabel => new Segment(segLabel.slice(0, 3), segLabel.slice(3, 6)));
            chrome.runtime.sendMessage({action: "fetch-co2e", data: segments},
                                       emission => updatePrice(itenerary, emission));
        }
        chrome.runtime.sendMessage({action: "fetch-trains", data: {origin: "London", destination: "Paris", departure: "2019-11-01T10:00:00Z"}}, addTrains);
    }
};

setTimeout ( "flightShame()", 2000 );
