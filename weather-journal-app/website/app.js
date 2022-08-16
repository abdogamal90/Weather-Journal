/* Global Variables */

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + '.' + d.getDate() + '.' + d.getFullYear();


let baseURL = 'http://api.openweathermap.org/data/2.5/weather?zip='
let apiKey = ',US&appid=8d0c5794a5f8d7a4014012f1a986d373&units=imperial'



document.getElementById('generate').addEventListener('click', performAction);


function performAction(e) {
  const zip = document.getElementById('zip').value
  const user_response = document.getElementById('feelings').value;

  getData(baseURL, zip, apiKey).then(function (data) {
      // Add data
      postData('/', {
        temp: data.main.temp,
        user_response,
        date: newDate,
      });
    })
    .then(function () {
      updateUI()
    }
    )
}
const getData = async (baseURL, zip, apiKey) => {

  const res = await fetch(baseURL + zip + apiKey)
  try {

    const userData = await res.json();
    console.log(userData)
    return userData;
  } catch (error) {
    console.log("error", error);
    // appropriately handle the error
  }
}

const postData = async (url = '', data = {}) => {
  console.log(data);
  const response = await fetch(url, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    // Body data type must match "Content-Type" header        
    body: JSON.stringify(data),
  });

  try {
    const newData = await response.json();
    return newData;
  } catch (error) {
    console.log("error", error);
  }
}

const updateUI = async () => {
  const request = await fetch('/all');
  try {
    const allData = await request.json();
    console.log(allData.date)
    document.getElementById('temp').innerHTML = Math.round(allData.main.temp) + 'degrees';
    document.getElementById('content').innerHTML = allData.user_response;
    document.getElementById("date").innerHTML = allData.date;

  } catch (error) {
    console.log("error", error);
  }
}