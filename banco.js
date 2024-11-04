function lineBreak(father, manylb) {

	for (let i = 0; i < manylb; i++) {
		let lb = document.createElement("br");
		father.appendChild(lb);
	}
}

function form() {
	let crearFormulario = document.createElement("form");

	let labelName = document.createElement("label"); // Se crea el LABEL
	labelName.setAttribute("for", "name")//Aqui se ponen los atributos del label.
	labelName.textContent = "Nombre: " 
	let inputName = document.createElement("input"); //  Creamos un input
	inputName.setAttribute("type", "text"); //Ponemos los atributos que llevaran los INPUTS.
	inputName.setAttribute("id", "name");
	inputName.setAttribute("required", true);

	let labelApellido = document.createElement("label");
	labelApellido.setAttribute("for", "apellido")
	let inputApellido = document.createElement("input");
	inputApellido.setAttribute("type", "text");
	inputApellido.setAttribute("id", "apellido");
	inputApellido.setAttribute("required", true);

	let labelDireccion = document.createElement("label");
	labelDireccion.setAttribute("for", "direccion");
	let inputDireccion = document.createElement("input");
	inputDireccion.setAttribute("type", "text");
	inputDireccion.setAttribute("id", "direccion");
	inputDireccion.setAttribute("required", true);


	let labelEmail = document.createElement("label");
	labelEmail.setAttribute("for", "email");
	let inputEmail = document.createElement("input");
	inputEmail.setAttribute("type", "email");
	inputEmail.setAttribute("id", "email");
	inputEmail.setAttribute("required", true);

	let labelConfirmEmail = document.createElement("label");
	labelConfirmEmail.setAttribute("for", "confirmEmail");
	let inputConfirmEmail = document.createElement("input");
	inputConfirmEmail.setAttribute("type", "email");
	inputConfirmEmail.setAttribute("id", "confirmEmail");
	inputConfirmEmail.setAttribute("required", true);

	let labelDni =  document.createElement("label");
	labelDni.setAttribute("for", "dni");
	let inputDni = document.createElement("input");
	inputDni.setAttribute("type", "text");
	inputDni.setAttribute("id", "dni");
	inputDni.setAttribute("required", true);

	let  labelIntereses = document.createElement("label");
	labelIntereses.setAttribute("for", "intereses");
	let inputIntereses = document.createElement("input");
	inputIntereses.setAttribute("type", "text");
	inputIntereses.setAttribute("id", "intereses");
	inputIntereses.setAttribute("required", true);

	let labelPassWord = document.createElement("label");
	labelPassWord.setAttribute("for", "password");
	let inputPassWord = document.createElement("input");
	inputPassWord.setAttribute("type", "text");
	inputPassWord.setAttribute("id", "password");
	inputPassWord.setAttribute("required", true);

	// Creamos los APPENDCHILD

	crearFormulario.appendChild(labelName); //  Agregamos el label al formulario
	crearFormulario.appendChild(inputName); //  Agregamos el input al formulario
	lineBreak(crearFormulario, 1);

	crearFormulario.appendChild(labelApellido);
	crearFormulario.appendChild(inputApellido);
	crearFormulario.appendChild(labelDireccion);
	crearFormulario.appendChild(inputDireccion);
	crearFormulario.appendChild(labelEmail); 
	crearFormulario.appendChild(inputEmail);
	crearFormulario.appendChild(labelConfirmEmail); //  Agregamos el label al formulario
	crearFormulario.appendChild(inputConfirmEmail); //  Agregamos el input al formulario
	crearFormulario.appendChild(labelDni); //  Agregamos el label al formulario
	crearFormulario.appendChild(inputDni); //  Agregamos el input al formulario
	crearFormulario.appendChild(labelIntereses);
	crearFormulario.appendChild(inputIntereses);
	crearFormulario.appendChild(labelPassWord); 
	crearFormulario.appendChild(inputPassWord);



	document.body.appendChild(crearFormulario);  //  Agregamos el formulario al body

}

form();