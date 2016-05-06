//Agregar item a la lista
function addNewItem(list, itemText){
	//Contador de id de checkbox y spans
	totalItems++;
	//Crear elemento li
	var listItem=document.createElement("li");
	//Crear boton de Borrar item
	removeButton = document.createElement('button');
	//Lo hace checkbox
	var checkBox=document.createElement("input");
	checkBox.type="checkBox";
	//Crear id de checkbox
	checkBox.id="cb"+totalItems;
	//Evento en checkbox
	checkBox.onclick=checarItem;
	//Hace Span
	var span=document.createElement("span");
	span.innerText=itemText;
	//Crear id de spans
	span.id="item"+totalItems;

	listItem.appendChild(checkBox);
	listItem.appendChild(span); 
	list.appendChild(listItem);


	removeButton.className = 'removeMe'; // Add class to button for CSS
  	removeButton.innerHTML = "<i class='icono fa fa-trash'></i>"; // Add text to the remove button
  	removeButton.setAttribute('onclick', 'removeMe(this);'); 
  	// Very important! Builds the onclick event that will trigger when a task is clicked. (We will create this function 'removeMe(this) later'
  	listItem.appendChild(removeButton); // Add the created removeThis button to the li

}
//Funcion Borrar

function removeMe(item){
  var parent = item.parentElement;
  parent.parentElement.removeChild(parent);
}

//Input Box
var inItemText= document.getElementById("inItemText");
inItemText.focus();

//Boton
var btnNew=document.getElementById("btnAdd");
btnNew.onclick =function(){
	//Toma el valor del input
	var itemText=inItemText.value;
	//No permite ingresar elementos en blanco
	if(itemText == " " || itemText==""){
		return false;
	}
	//Agrega el elemento a la lista
	addNewItem(document.getElementById("todoList"), itemText);
	//Despues de agregarlo se borra el input
	inItemText.value = "";
	inItemText.focus();
};
//Contador de items para id de checkbox y spans
var totalItems=0;
//Evento en el checkbox
function checarItem(){
	//Obtener el id del elemento que va a tachar, replace borra el cb y solo deja el id
	var cb=this.id.replace("cb","");
	//Selecciona el item con el numeto del id
	var itemText=document.getElementById("item"+cb)
	if(this.checked){
		//Estilo de tachar
		itemText.className="checked";
	}else{//estilo cuando no esta tachado
		itemText.className="";
	}	
}



