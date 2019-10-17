let Segment = function(origin, destination) {
    return { origin: origin, destination: destination};
};

let updatePrice = function(itenerary, emission){
    let priceBox = itenerary.getElementsByClassName("gws-flights-results__itinerary-price")[0];
    let priceTag = priceBox.getElementsByClassName("gws-flights-results__price")[0];
    let emissionTag = document.createElement("div");

    priceTag.classList.remove("flt-subhead1");
    priceTag.classList.add("flt-subhead2");

    emissionTag.className = priceTag.className;
    emissionTag.innerText = `${emission.footprint} kg CO2e`;

    priceTag.after(emissionTag);
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
    }
};

setTimeout ( "flightShame()", 2000 );
