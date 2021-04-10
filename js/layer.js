
function layerContent() {
    
    let httpRequest = new XMLHttpRequest();
   
    httpRequest.onreadystatechange = function() {
        let layerContent = document.getElementById("layerContent");
        
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
            
            if (httpRequest.status === 200) {
                let data = httpRequest.responseText;
                layerContent.innerText = data;
            } 
            // Si une erreur est survenue (exemple un fichier qui n'existe pas)
            else {
                layerContent.innerText = "Nous n'avons pas réussi à récupérer le contenu";
            }
        } 
        // Le serveur n'a pas encore répondu
        else {
            layerContent.innerText = "Requête en cours";
        }
    };
    // On envoie la requête
    httpRequest.open('GET', 'text_layer.txt', true);
    httpRequest.send();
}

















