
//function submitData which takes two strings, userName & userEmail
function submitData(userName, userEmail){

    //write a POST req to http://localhost:3000/users using fetch()
    return fetch('http://localhost:3000/users', {
            method: "POST",
            headers:{
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                name: `${userName}`,
                email: `${userEmail}`
            }),  
    })
    .then(function(object){
        return object.json();
    })
    .then(function(data){
        const bod = document.querySelector('body')                               
        bod.textContent = data.id
    })
    .catch(function(error){
        const bodyy = document.querySelector('body')                               
        bodyy.textContent = error
    })

};