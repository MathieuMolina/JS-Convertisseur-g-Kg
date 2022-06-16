window.addEventListener("DOMContentLoaded", (event) => {
    const change = 1000;
    const Gramme = document.getElementById('Gramme');
    const Kilogramme = document.getElementById('Kilogramme');
   
    Gramme.addEventListener('keyup', function(){
      let g = parseFloat(this.value.trim());
      let kg = parseFloat(g/change);
      Kilogramme.value = kg.toFixed(2);
    });
   
    Kilogramme.addEventListener('keyup', function(){
      let kg = parseFloat(this.value.trim());
      let g = parseFloat(kg*change);
      Gramme.value = g.toFixed(2);
    });
});


