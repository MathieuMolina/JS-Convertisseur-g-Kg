window.addEventListener("DOMContentLoaded", (event) => {
    const change = 1000;
    const Gramme = document.getElementById('Gramme');
    const Kilogramme = document.getElementById('Kilogramme');
   
    Gramme.addEventListener('keyup', function(){
      let g = this.value;
      let kg = g/change;
      Kilogramme.value = kg.toFixed(2);
    });
   
    Kilogramme.addEventListener('keyup', function(){
      let kg = this.value;
      let g = kg*change;
      Gramme.value = g.toFixed(2);
    });
});



//* toFixed permet de convertir un nombre en string ET de l'arrondire vers la décimale spécifiée.