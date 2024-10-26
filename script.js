const apiKey = 'befd984de4d3c050671d4eb935e6c660';

function loadData()
{
    const city=document.getElementById('name');
    const spinner=document.getElementById('spin');
    const error = document.getElementById('error');
    const result = document.getElementById('result')

    spinner.style.display = 'block'
    result.style.display = 'none'
    error.style.display = 'none'
     fetch('https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}')
     .then(response=>
     {
        if(!response.ok)
        {
            throw new Error(`City not found: ${response.statusText}`);
        }
        else
        {
            return response.json()
        }
     })
     console.log(data)
     .then(data=> {
        spinner.style.display='none'
        result.style.display ='block'
       

     })
}
    