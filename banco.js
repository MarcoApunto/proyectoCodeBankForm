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
	labelName.textContent = "Nombre: " // Añadimos el nombre de la etiqueta label
	let inputName = document.createElement("input"); //  Creamos un input
	inputName.setAttribute("type", "text"); //Ponemos los atributos que llevaran los INPUTS.
	inputName.setAttribute("id", "name");
	inputName.setAttribute("required", true);

	let labelApellido = document.createElement("label");
	labelApellido.setAttribute("for", "apellido")
	labelApellido.textContent = "Apellido: "
	let inputApellido = document.createElement("input");
	inputApellido.setAttribute("type", "text");
	inputApellido.setAttribute("id", "apellido");
	inputApellido.setAttribute("required", true);

	let labelDireccion = document.createElement("label");
	labelDireccion.setAttribute("for", "direccion");
	labelDireccion.textContent = "Direccion: ";
	let inputDireccion = document.createElement("input");
	inputDireccion.setAttribute("type", "text");
	inputDireccion.setAttribute("id", "direccion");
	inputDireccion.setAttribute("required", true);


	let labelEmail = document.createElement("label");
	labelEmail.setAttribute("for", "email");
	labelEmail.textContent = "Email: ";
	let inputEmail = document.createElement("input");
	inputEmail.setAttribute("type", "email");
	inputEmail.setAttribute("id", "email");
	inputEmail.setAttribute("required", true);
	inputEmail.setAttribute("pattern",  "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$");

	let labelConfirmEmail = document.createElement("label");
	labelConfirmEmail.setAttribute("for", "confirmEmail");
	labelConfirmEmail.textContent = "Confirmar Email: ";
	let inputConfirmEmail = document.createElement("input");
	inputConfirmEmail.setAttribute("type", "email");
	inputConfirmEmail.setAttribute("id", "confirmEmail");
	inputConfirmEmail.setAttribute("required", true);
	inputConfirmEmail.setAttribute("pattern",  "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$");

	let labelDni =  document.createElement("label");
	labelDni.setAttribute("for", "dni");
	labelDni.textContent = "DNI: ";
	let inputDni = document.createElement("input");
	inputDni.setAttribute("type", "text");
	inputDni.setAttribute("id", "dni");
	inputDni.setAttribute("required", true);

	let  labelIntereses = document.createElement("label");
	labelIntereses.setAttribute("for", "intereses");
	labelIntereses.textContent = "Intereses: ";
	let inputIntereses = document.createElement("input");
	inputIntereses.setAttribute("type", "text");
	inputIntereses.setAttribute("id", "intereses");
	inputIntereses.setAttribute("required", true);

	let labelPassWord = document.createElement("label");
	labelPassWord.setAttribute("for", "password");
	labelPassWord.textContent = "Contraseña: ";
	let inputPassWord = document.createElement("input");
	inputPassWord.setAttribute("type", "text");
	inputPassWord.setAttribute("id", "password");
	inputPassWord.setAttribute("required", true);

	// Creamos los APPENDCHILD

	crearFormulario.appendChild(labelName); //  Agregamos el label al formulario
	crearFormulario.appendChild(inputName); //  Agregamos el input al formulario
	lineBreak(crearFormulario, 2);

	crearFormulario.appendChild(labelApellido);
	crearFormulario.appendChild(inputApellido);
	lineBreak(crearFormulario, 2);

	crearFormulario.appendChild(labelDireccion);
	crearFormulario.appendChild(inputDireccion);
	lineBreak(crearFormulario, 2)

	crearFormulario.appendChild(labelEmail); 
	crearFormulario.appendChild(inputEmail);
	lineBreak(crearFormulario, 2);

	crearFormulario.appendChild(labelConfirmEmail); //  Agregamos el label al formulario
	crearFormulario.appendChild(inputConfirmEmail); //  Agregamos el input al formulario
	lineBreak(crearFormulario, 2);

	crearFormulario.appendChild(labelDni); //  Agregamos el label al formulario
	crearFormulario.appendChild(inputDni); //  Agregamos el input al formulario
	lineBreak(crearFormulario, 2);

	crearFormulario.appendChild(labelIntereses);
	crearFormulario.appendChild(inputIntereses);
	lineBreak(crearFormulario, 2);

	crearFormulario.appendChild(labelPassWord); 
	crearFormulario.appendChild(inputPassWord);
	lineBreak(crearFormulario, 2);



	document.body.appendChild(crearFormulario);  //  Agregamos el formulario al body

}

form();

function limitations() {
	ecent
}