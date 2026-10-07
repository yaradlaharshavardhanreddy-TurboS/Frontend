document.getElementById('myform').addEventListener('submit',function(e){
    e.preventDefault()
    var city = document.getElementById('city').value;
    var apiKey = "ea11a3bc1927843c305e789e12978e3f";

    //get request response status code
    //CRUD - POST,GET,PUT,DELETE

    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)


    .then (function(res){
        console.log(res)
    })

    .catch (function(res){
        console.log(res)
    })



})
