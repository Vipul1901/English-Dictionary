// searchInput
// searchBtn
const dictionary=(word)=>{

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'b7b7b74615msh231bfb2b0a127c0p181202jsn7e0556b67dc8',
            'X-RapidAPI-Host': 'dictionary-by-api-ninjas.p.rapidapi.com'
        }
    };
    
    fetch('https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word='+ word, options)
    .then(response => response.json())
    .then((response) => {
        wordheading.innerHTML = "Here is the meaning of: "+ response.word;
        definition.innerHTML = response.definition;

    })
    .catch(err => console.error(err));
}
searchBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    dictionary(searchInput.value)
})