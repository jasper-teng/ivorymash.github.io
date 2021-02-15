

//html requests shit
// http://api.thingspeak.com/update.json?api_key=J0KLRH9BW15D8UIB&field1=20

function fetchData(url, value) {
    console.log(url)
    let string = url+ "&field1=" + value
    fetch(string, {
        method: 'POST'
    })
        .then(data => { return data.json(); })
        .then(res => {
            console.log(res);
        })
        .catch(error => {console.log(error); showFields()});
}
