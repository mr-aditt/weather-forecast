//Complete the Weather API Backend part using openweathermap api

document.querySelector(".search-box").addEventListener("keypress", async (e)=>{
    if(e.key === 'Enter'){
        // console.log("YES")
        const API_key = '66e7c77b3ad09e125cb8762ad947c3d3';
        let city = document.querySelector(".search-box").value.toLowerCase();
        let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=metric`)
        .then(res=>{
            return res.json();
        })

        let date = '';
        let dateObj = new Date(data.dt * 1000);
        let utcString = dateObj.toUTCString();
        switch (utcString.slice(0,3)) {
            case 'Mon': date+='Monday'
                break;
            case 'Tue': date+='Tuesday'
                break;
            case 'Wed': date+='Wednesday'
                break;
            case 'Thu': date+='Thrusday'
                break;
            case 'Fri': date+='Friday'
                break;
            case 'Sat': date+='Saturday'
                break;
            case 'Sun': date+='Sunday'
                break;
        }
        date+=" "+utcString.slice(5, 17);
        console.log(date)
        
        
        document.querySelector(".city").innerHTML = data.name+", "+data.sys.country;
        document.querySelector(".date").innerHTML = date;
        document.querySelector(".temp").innerHTML = parseInt(data.main.temp)+"°c";
        document.querySelector(".weather").innerHTML = data.weather[0].main;
        document.querySelector(".hi-low").innerHTML = data.main.temp_max+"°c/"+data.main.temp_min+"°c";

        // console.log(data);
        // console.log(data.name, data.sys.country); //City, Country
        // console.log(utcString)
        // console.log(data.main.temp); //Temp
        // console.log(data.weather[0].main);
        // console.log(data.main.temp_max, data.main.temp_min);
    }
});
//     data = get_data(city);
// }, 10*1000);

// function get_data(city){
//     const API_key = '66e7c77b3ad09e125cb8762ad947c3d3';
//     return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}`)
//     .then(res=>{
//         return res.json();
//     })
// }


// console.log(data);

// document.querySelector(".city").innerHTML = data
