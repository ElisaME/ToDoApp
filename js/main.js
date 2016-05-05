//Agregar item a la lista
function addNewItem(list, itemText){
	//Contador de id de checkbox y spans
	totalItems++;
	//Crear elemento li
	var listItem=document.createElement("li");
	//Lo hace checkbox
	var checkBox=document.createElement("input");
	checkBox.type="checkBox";
	//Crear id de checkbox
	checkBox.id="cb"+totalItems;
	//Evento en checkbox
	checkBox.onclick=updateItemStatus;
	//Hace Span
	var span=document.createElement("span");
	span.innerText=itemText;
	//Crear id de spans
	span.id="item"+totalItems;
		
	listItem.appendChild(checkBox);
	listItem.appendChild(span);
	list.appendChild(listItem);

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
	inItemText.focus();
	//Despues de agregarlo selecciona lo escrito para no tener que borrarlo
	inItemText.select();
};
//Contador de items para id de checkbox y spans
var totalItems=0;
//Evento en el checkbox
function updateItemStatus(){
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

