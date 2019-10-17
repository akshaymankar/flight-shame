let fetchCO2e = function(segments, callback) {
    let headers = new Headers();
    let endpoint = new URL("https://api.goclimateneutral.org/v1/flight_footprint");
    endpoint.searchParams.append("cabin_class", "economy");
    endpoint.searchParams.append("currencies[]", "EUR");
    segments.forEach(function(seg, i){
        endpoint.searchParams.append(`segments[${i}][origin]`, seg.origin);
        endpoint.searchParams.append(`segments[${i}][destination]`, seg.destination);
    });
    headers.set("Authorization", "Basic " + window.btoa("wont-tell-you!"));

    let request = new Request(endpoint.toString(),{headers: headers});

    fetch(request)
        .then(function(response){
            if (!response.ok) {
                console.log("nope");
                return Promise.resolve({failed: true});
            }
            return response.json();
        })
        .then(json => callback(json));
};

let fetchTrains = function(data, callback) {
    let endpoint = new URL("https://hack-server.cfapps.io");
    endpoint.searchParams.append(`origin`, data.origin);
    endpoint.searchParams.append(`destination`, data.destination);
    endpoint.searchParams.append(`departure`, data.departure);

    let request = new Request(endpoint.toString());

    fetch(request)
        .then(function(response){
            if (!response.ok) {
                console.log("aaah the trains failed!!");
                return Promise.resolve({failed: true});
            }
            return response.json();
        })
        .then(json => callback(json));
};

chrome.runtime.onMessage.addListener(function(message, _, callback){
    if (message.action === "fetch-co2e") {
        fetchCO2e(message.data, callback);
        return true;
    }
    if (message.action === "fetch-trains") {
        fetchTrains(message.data, callback);
        return true;
    }
});
