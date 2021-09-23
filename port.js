var Fname = window.prompt("Enter Your Name");
if(Fname == null){
    document.getElementById("visitor").innerHTML=("Welcome" + " visitor 🙏🙏").fontsize(90);
}
else{
    document.getElementById("visitor").innerHTML=("Hello " + Fname +" 👋 ").fontsize(90);
}

