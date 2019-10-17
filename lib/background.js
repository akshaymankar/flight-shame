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

    fetch(request, {headers : headers})
        .then(function(response){
            if (!response.ok) {
                throw new Error("Not OK!");
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
});
