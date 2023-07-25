const key = '22bd48cca8b35f3a534482166189e512';

// const baseURL = 'http://api.lopenweathermap.org/data/2.5/weather?q=Lagos&appid=1a3f145a3b10499787bc8baa36feed1e';

// fetch(baseURL)
//     .then((data) => { console.log('response', data.json()) })
//     .catch((error) => {
//         console.log(error);
//     });

const requestCity = async (city) => {
    const baseURL = 'https://api.openweathermap.org/data/2.5/weather'
    const query = `?q=${city}&appid=${key}`;

    //make fetch call (promise call)
    const response = await fetch(baseURL + query);

    //promise data
    const data = await response.json();
    return data;

}
