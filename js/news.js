
function news() {
    

    let httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function() {
        let newsContent = document.getElementById("newsContent");
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
            if (httpRequest.status === 200) {
                let responseRequest = JSON.stringify(httpRequest.responseText);
                newsContent.innerText = responseRequest;
                console.log(responseRequest);
            } 
            else {
                newsContent.innerText = "Nous n'avons pas réussi à récupérer le contenu";
            }
        } 
        else {
            newsContent.innerText = "Requête en cours";
        }
    };

    httpRequest.open('GET', 'https://oc-jswebsrv.herokuapp.com/api/articles', true);
    httpRequest.send();
}