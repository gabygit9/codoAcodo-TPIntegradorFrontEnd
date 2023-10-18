let cantidad = document.getElementById("cantidad");
let categoria = document.getElementById("categoria");
let totalAPagar = document.getElementById("totalAPagar");

let resumen = document.getElementById("resumen").addEventListener("click", () => {
    let categoriaSeleccionada = categoria.value;
    let ticket = 200;
    
    if(categoriaSeleccionada==="Estudiante"){
        totalAPagar.value= "Total a pagar: $ " +cantidad.value*(ticket-(ticket*0.8));
    }else if(categoriaSeleccionada==="Trainee"){
        totalAPagar.value = "Total a pagar: $ " +cantidad.value*(ticket-(ticket*0.5));
    }else if(categoriaSeleccionada==="Junior"){
        totalAPagar.value = "Total a pagar: $ " +cantidad.value*(ticket-(ticket*0.15));
    }else{
        totalAPagar.value = "Total a pagar: $ " + cantidad.value*ticket;
    }
    cantidad.value="";
})