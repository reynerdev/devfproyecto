
var positionscroll = 0 ;

var cuentas = [
    { nombre: "Mali", saldo: 200, password: 'helloworld' },
    { nombre: "Gera", saldo: 290, password: 'l33t' },
    { nombre: "Maui", saldo: 67, password: '123' }
  ];

var statusCleanInnerHTML = true;


var opciones  = [{opcion: 'Consultar Saldo'},
{opcion: 'Ingresar monto'},
{opcion: 'Retirar monto'}
];

var passwordStatus = true ;

var Cuentas = function (nombre,saldo,password) {
    this.nombre =  nombre;
    this.saldo = saldo;
    this.password = password;
    this.addToArrayCuentas = function (){
        cuentas.push ({
            nombre: nombre,
            saldo: saldo,
            password: password
        })
    }

}

Cuentas.prototype.showSaldo =  function (){
    console.log(this.saldo);
}

Cuentas.prototype.addMonto = function(monto) {
    this.saldo = this.saldo + monto;
    console.log(this.saldo);
}

Cuentas.prototype.retirarMonto = function(monto){
    this.saldo = this.saldo - monto;
    console.log(this.saldo);

}


var Cajero = function(){ 
    // this.usuarioActual = obj.name;
    // this.montoActual = obj.saldo;

    this.createDivScreenOpciones = function () { 
        /* Mostratmos en nuestro .screen todas los usuarios */
        var screenDiv = document.getElementsByClassName('screen');

        if (opciones.length){
            // var count = 0;
            for (let x of opciones){

                let divOpcion = document.createElement('div');
                divOpcion.className = 'opcion';
                divOpcion.innerHTML = x.opcion;
                screenDiv[0].appendChild(divOpcion);
                
            }   
            
            
        }else{
            console.log('No hay otras cuentas')
            let divCuenta = document.createElement('div')
            divCuenta.className = 'cuenta';
            divCuenta.innerHTML = 'No existe cuentas';

        }

    }


    this.createDivScreenUsers = function () { 
        /* Mostratmos en nuestro .screen todas los usuarios */
        var screenDiv = document.getElementsByClassName('screen');
        console.log('True')
        console.log(!cuentas.length)
        if (cuentas.length){
            // var count = 0;
            for (let x of cuentas){

                let divCuenta = document.createElement('div');
                divCuenta.className = 'cuenta';
                divCuenta.innerHTML = x.nombre;
                screenDiv[0].appendChild(divCuenta);
                
            }       
            
        }else{
            console.log('No hay otras cuentas')
            let divCuenta = document.createElement('div')
            divCuenta.className = 'cuenta';
            divCuenta.innerHTML = 'No existe cuentas';

        }

    }

    this.deleteContentScreen = function() {
        console.log('Screent contenten deleted')
        var screenDiv  = document.getElementsByClassName('screen');
        screenDiv[0].innerHTML = "";
        console.log(screenDiv)
    }

    this.addElementScreen = function (element, innerHTML = true){
        console.log('Add element start');
        var screenDiv = document.getElementsByClassName('screen');
        // Clean screenDiv
        if (innerHTML === true){
            screenDiv[0].innerHTML = ' ';
        }
        
        screenDiv[0].appendChild(element);
        

    }

}

var currentNameBasedPosition;

function addArrowElementsScreen  (position){
    /*Elements representa HTMLCollection */
    var elements =document.getElementsByClassName('screen')
    let cuenta = 0
    for( let elemento of elements[0].childNodes){
        if (cuenta === position ){

            let arrowSVG = document.createElement('img');
            arrowSVG.className = 'arrowLeft';
            arrowSVG.src = 'navigate_before-black-18dp.svg';
            arrowSVG.alt = 'arrowLeft'
            elemento.appendChild(arrowSVG);
            elemento.scrollIntoView(true);
            currentNameBasedPosition = elemento.textContent;  

        }

        cuenta += 1 ;
    }
}


var currentOpcionesPosition ;
function addArrowElementsScreenOpciones(position,set){
    /*Elements representa HTMLCollection */
    var elements =document.getElementsByClassName('screen')
    let cuenta = 0
    for( let elemento of elements[0].childNodes){
        if (cuenta === position ){

            let arrowSVG = document.createElement('img');
            arrowSVG.className = 'arrowLeft';
            arrowSVG.src = 'navigate_before-black-18dp.svg';
            arrowSVG.alt = 'arrowLeft'
            elemento.appendChild(arrowSVG);
            elemento.scrollIntoView(true);
            currentOpcionesPosition = elemento.textContent;  

        }

        cuenta += 1 ;
    }
}
function deleteArrowElementsScreen(position){

    var cuentas = document.getElementsByClassName('cuenta');
    cuentas[position].childNodes[1].remove();
    

    
}

function deleteArrowElementsScreen_(position,className){

    var cuentas = document.getElementsByClassName('cuenta');
    cuentas[position].childNodes[1].remove();
    

    
}

function deleteArrowElementsScreenOpciones(position){

    
    var cuentas = document.getElementsByClassName('opcion');
    console.log('DeleteArrowElementsOpciones');
    console.log(cuentas);
    cuentas[position].childNodes[1].remove();
    

    
}

function addModal(text){
    var modal = document.getElementById('modal');
    var p = modal.getElementsByTagName('p');
    p[0].innerHTML = text;
    modal.style.display = 'block'

    window.onclick = function (event) {
        console.log('insideEventOnClickOnWindow')
        if (event.target == modal) {
            modal.style.display = "none";
            
          }
        
    }
}

function onload(){
    console.log('Onload Init')
    var cajero = new Cajero();
    cajero.deleteContentScreen();
    cajero.createDivScreenUsers();
    /*Posicion inicial de la flecha que apunta a la cuenta activa */
    addArrowElementsScreen(positionscroll);

    var modal = document.createElement('div');
    modal.id = 'modal'
    var modalContent = document.createElement('div')
    modalContent.className ='modalContent';
    var p = document.createElement('p');
    p.innerHTML = '';
    modal.style.display = 'none';

    /*Adding */
    document.body.appendChild(modal);
    modal.appendChild(modalContent);
    modalContent.appendChild(p);

    /* Add an ID to the Up and down button */

    var up = document.getElementsByClassName('up')[0];
    var down = document.getElementsByClassName('down')[0];

    up.id = 'Cuentas';
    down.id = 'Cuentas';
    
}

function changeIdButtons(value){
    console.log('ChangedIDButtons')
    var up = document.getElementsByClassName('up')[0];
    var down = document.getElementsByClassName('down')[0];
    console.log(up)
    up.id = value;
    down.id = value; 
}


function removeModal () {
    document.getElementById('modal').style.display = 'none';
}

function down(){

    /* positionscroll del */
    
    console.log('Position Actual Scroll Before down')
    console.log(positionscroll);
    
    if ((positionscroll+1)<cuentas.length){
        deleteArrowElementsScreen(positionscroll)
        positionscroll += 1
        addArrowElementsScreen(positionscroll)
    }

    console.log('Position Actual Scroll After down')
    console.log(positionscroll);

}

function down_(){
    var down = document.getElementsByClassName('down')[0];
    
    if (down.id === 'Cuentas')
    {
        if ((positionscroll+1)<cuentas.length){
            deleteArrowElementsScreen(positionscroll)
            positionscroll += 1
            addArrowElementsScreen(positionscroll)
        }
    
        console.log('Position Actual Scroll After down')
        console.log(positionscroll);
            
        
    }

    if (down.id === 'Opciones'){

        
        
        if ((positionScrollOpciones+1)<opciones.length){
            deleteArrowElementsScreenOpciones(positionScrollOpciones)
            positionScrollOpciones += 1
            addArrowElementsScreenOpciones(positionScrollOpciones)
        }
    
        console.log('Position Actual Scroll After down')
        console.log(positionScrollOpciones);

    }

}

function up(){
    
    console.log('new up')
    console.log('Position Actual Scroll Before Up')
    console.log(positionscroll);

    if (positionscroll >0){

        deleteArrowElementsScreen(positionscroll)
        console.log('inside')
        positionscroll -= 1
        addArrowElementsScreen(positionscroll)
    }
    


}

function up_(){
    
    var up = document.getElementsByClassName('up')[0];

    if (up.id === 'Cuentas')  {

        if (positionscroll >0){
            deleteArrowElementsScreen(positionscroll)
            console.log('inside')
            positionscroll -= 1
            addArrowElementsScreen(positionscroll)
        }   

    }

    if (up.id === 'Opciones')  {
        console.log('insideOpciones')
        if (positionScrollOpciones >0){
            deleteArrowElementsScreenOpciones(positionScrollOpciones)
            console.log('inside')
            positionScrollOpciones -= 1
            addArrowElementsScreenOpciones(positionScrollOpciones)
        }

    }

}

function volver(){

    var up = document.getElementsByClassName('up')[0];

    if (up.id === 'Opciones'){
        statusCajero = 1 ;
        onload()

    }

    if (up.id === 'Cuentas'){
        statusCajero = 1 ;
        onload()
        
    }

}


var statusCajero = 1 ;
var positionScrollOpciones = 0  ;
var cuentaUser;

function start() {

        
        var cajero = new Cajero(); 

        switch(statusCajero) {
    
            case 1:  

                // Muestra el ingreso de la clave

                console.log('status1')
                cajero.deleteContentScreen();
                let label = document.createElement('label')
                label.for = 'password';
                label.innerHTML = 'Enter Password';
                label.style.marginTop='30px';
                cajero.addElementScreen(label);
            
                var input = document.createElement('input')
                input.id = 'password'
                input.type =  'password';
                input.fname = 'password';
                input.style.height='40px';
                input.style.marginTop= '10px';
                input.style.fontSize = '40px';
                input.style.padding = '10px';
            
                cajero.addElementScreen(input,false);
            
                statusCajero = 2
    
            break;


            case 2:
                /* Verifica la clave y de ahi muestra las opciones*/
                console.log('Case2')
                input = document.getElementById('password')
                let passworEntered = input.value;
                var currentUserArray = cuentas.filter(cuenta => cuenta.nombre === currentNameBasedPosition)
                cuentaUser = new Cuentas(currentUserArray[0].name,currentUserArray[0].saldo,currentUserArray[0].password)
                console.log(cuentaUser.saldo)
                console.log(cuentaUser);
                if (passworEntered !== cuentaUser.password){
                    addModal('Password incorrecto. Try again')
                    statusCajero = 1 ;
                    start();
                    break;
                }
                cajero.deleteContentScreen();
                cajero.createDivScreenOpciones();
                changeIdButtons('Opciones');
                addArrowElementsScreen(positionScrollOpciones);
                statusCajero = 3;
                break;

            case 3:

                
                if (positionScrollOpciones===0){
                    addModal(cuentaUser.saldo); 
                    break;
                }
                if (positionScrollOpciones===1){
                    var monto = prompt('Ingresar monto');

                    if (isNaN(parseInt(monto))){
                        console.log('nocorrecto');
                        alert('el valor ingresado no es un numero')
                        break;
                    }
                    cuentaUser.addMonto(parseInt(monto));
                    break;
                }

                if (positionScrollOpciones===2){
                    var monto = prompt('Ingresar monto a retirar');
                    cuentaUser.retirarMonto(monto);

                    break;
                }



        }


}
