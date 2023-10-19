function showMessage(){
    console.log("Me exibindo aqui pra vocês")
    //alert("Te peguei");
}


function saveNewsletterUser(event){
    event.preventDefault();
    alert("Formulário enviado!");
    console.log(event);

    const elementName = document.querySelector("#name");
    const elementEmail = document.querySelector("#email");

    console.log("elementName:", elementName);
    console.log("elementEmail:", elementEmail);
}
