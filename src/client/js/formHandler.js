function handleSubmit(event) {
    event.preventDefault()

    // input text or url
    let formTextInput = document.getElementById('url').value

    //Regex check  for input text ()
    if(Client.checkUrl(formTextInput)) {
    console.log("::: Form Submitted :::")

    newData1('http://localhost:8081/api', {url: formTextInput})

    .then(function(res) {
        let polarityField = document.getElementById("polarity");
        polarityField.innerHTML = 'Polarity: '+pol(res.score_tag);
        let agreementField = document.getElementById("agreement");
        agreementField.innerHTML = `Agreement: ${res.agreement}`;
        let subjectivityField = document.getElementById("subjectivity");
        subjectivityField.innerHTML = `Subjectivity: ${res.subjectivity}`;
        let confidenceField = document.getElementById("confidence");
        confidenceField.innerHTML = `Confidence: ${res.confidence}`;
        let ironyField = document.getElementById("irony");
        ironyField.innerHTML = `Irony: ${res.irony}`;
    })
    } else {
        alert('Enter Valid URL.');
    }
}

const newData1 = async (url = "", data = {}) => {
    console.log('imput:', data);
        const response = await fetch(url, {
            method: 'POST',
            credentials: 'same-origin',
            mode: 'cors',
            headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    }); 
    
    try 
    {   const newData2 = await response.json();
        console.log('New Data (works):', newData2)
        return newData2;} 
        catch (error) {
        console.log('error', error);
    }
};

// polarity checker function
function pol(score) {
    let display = '';
    if (score === 'P+') {
    return display = 'strong positive';
    }

    else if (score === 'P') {
    return display= 'positive';
    }
           
    else if  (score === 'NEW') {
    return display = 'neutral';
    }
           
    else if  (score === 'N') {
    return display = 'negative';
    }
            
    else if (score === 'N+'){
    return display = 'strong negative';
    }
           
    else if (score === 'NONE') {
    return display = 'no sentiment';
    }
  
};


// Regex check  for input
function checkUrl(inputURL) {
    var regex = inputURL.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);

     if(regex == null){
         return 0;
     } else{
     return 1;
     }
 };

 export { handleSubmit }
 export { pol }
 export { checkUrl }