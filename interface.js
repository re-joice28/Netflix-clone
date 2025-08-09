function verification(){
    const mot_de_passe ="george";
    const a = document.getElementById("pass").value;
    const b = document.getElementById("mail").value.trim();
    if(b===""){
        alert("veuillez entrer votre adresse emeil ou numero");
        return;
    }
    if (a === mot_de_passe){
        alert("mot de passe correct");
        window.location.href ="page.html";
    
    }else{
        alert("Mot de passe incorrect veuillez réessayer.")
    }
}
