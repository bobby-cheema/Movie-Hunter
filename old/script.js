const geoapifyKEY = "81227bc9482642b8b313e75b6f99fa21";
const inputEL = document.getElementById("input");
const startEL = document.getElementById("start")

const searchEl = document.getElementById("searchcity");
console.log(searchEl);
const movielist = (cinema) => {


}

const whatsrunning = (data) => {
    console.log("WHATS RUNNING", data.cinema_id)
    if (data.cinema_id) {
        movielist(data.cinema_id)
    }


}

const getdetails = (id) => {

    console.log("Getting details of ", id)
}

const getmovies = async(lon, lat) => {
    const date = new Date();

    const mydate = date.toISOString();
    console.log("DATE", mydate);

    //url = "https://api-gate2.movieglu.com/filmsNowShowing/?n=1";
    //url = "https://api-gate2.movieglu.com/cinemasNearby/?n=5";
    // const url = "https://api-gate2.movieglu.com/filmsNowShowing/?n=10";
    // const response = await fetch(
    //     url,

    //     {
    //         method: "GET", // *GET, POST, PUT, DELETE, etc.
    //         //mode: 'no-cors', // no-cors, *cors, same-origin
    //         // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    //         //credentials: 'same-origin', // include, *same-origin, omit
    //         headers: {
    //             "api-version": "v200",
    //             "Authorization": "Basic TkVFVDpqYnVldG5rUWM4eGk=",
    //             "x-api-key": "vi84gEiA6HaIcCuzRBrtbxFJ6UFM8h6al8ygnb27",
    //             "device-datetime": `${mydate}`,
    //             "territory": "AU",
    //             "client": "NEET",
    //             // "geolocation": `${lon};${lat}`
    //         },
    //         //redirect: "follow", // manual, *follow, error
    //         //referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    //         // body: JSON.stringify(data), // body data type must match "Content-Type" header
    //     }
    // );

    // if (response.status === 200) {
    //     const data = await response.json();

    //     console.log(data)
    //     for (let i = 0; i <= data.films.length; i++) {
    //         console.log(' line 63DATA', data.films[i])
    //         getdetails(data.films[i].imdb_title_id)
    //     }


    // for (let i = 0; i <= data.cinemas.length; i++) {
    //     console.log(data.cinemas[i])
    //     whatsrunning(data.cinemas[i])

    // }
    //}

    const id = ['tt4513678', 'tt11214590', 'tt10838180', 'tt2397461', 'tt3581652']
    for (let i in id) {
        getdetails(i)
    }
};



const searchcity = async(city) => {
    console.log("searching for city ", city);
    const fetchurl = `https://api.geoapify.com/v1/geocode/search?text=${city}%20Australia&apiKey=81227bc9482642b8b313e75b6f99fa21`;
    const response = await fetch(fetchurl);
    console.log(response);
    if (response.status === 200) {
        const data = await response.json();
        const [lat, lon] = await data.features[0].geometry.coordinates;
        console.log(data.features[0].geometry.coordinates);
        console.log(" long lat ", lon, lat);
        getmovies(lon, lat);
    }
};

searchEl.addEventListener("click", () => {
    searchcity(inputEL.value);
});