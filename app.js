let grammes = document.getElementById("grammes")
let deca = document.getElementById("decagrammes")
let hecto = document.getElementById("hectogrammes")
let kilo = document.getElementById("kilogrammes")

grammes.addEventListener("input", function(){convPoids(this.id, this.value);});
deca.addEventListener("input", function(){convPoids(this.id, this.value);});
hecto.addEventListener("input", function(){convPoids(this.id, this.value);});
kilo.addEventListener("input", function(){convPoids(this.id, this.value);});

function convPoids(id, valeur){
  if(id == "grammes"){
      kilo.value = valeur/1000;
      hecto.value = valeur/100;
      deca.value = valeur/10;
  }

  else if(id == "decagrammes"){
    kilo.value = valeur/100;
    hecto.value = valeur/10;
    grammes.value = valeur*10;
  }

  else if(id == "hectogrammes"){
    kilo.value = valeur/10;
    deca.value = valeur*10;
    grammes.value = valeur*100;
  }  
  else if(id == "kilogrammes"){
    hecto.value = valeur*10;
    deca.value = valeur*100;
    grammes.value = valeur*1000;
  }
};