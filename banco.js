function lineBreak(father, manylb) {

	for (let i = 0; i < manylb; i++) {
		let lb = document.createElement("br");
		father.appendChild(lb);
	}
}


function limitations() {
	let forceImput = document.getElementById("name").value;

	if (!(forceImput[0] === forceImput[0].toUpperCase())) {
		alert("El nombre ha de empezar por mayúsculas")
	}
	for (let i = 0; i < forceImput.length; i++) {
		if (!(Number.isNaN(forceImput[i]))) {
			alert("No es válido un número");
			return;

		}

	}
}

function form() {
	let crearFormulario = document.createElement("form");
	let divL1 = document.createElement("div");
	let divL2 = document.createElement("div");
	let divL3 = document.createElement("div");
	let divL4 = document.createElement("div");


	let labelName = document.createElement("label"); // Se crea el LABEL
	labelName.setAttribute("for", "name")//Aqui se ponen los atributos del label.
	let inputName = document.createElement("input"); //  Creamos un input
	inputName.setAttribute("type", "text"); //Ponemos los atributos que llevaran los INPUTS.
	inputName.setAttribute("id", "name");
	inputName.setAttribute("required", true);
	inputName.setAttribute("placeholder", "Nombre");



	let labelApellido = document.createElement("label");
	labelApellido.setAttribute("for", "apellido")
	//labelApellido.textContent = "Apellido: "
	let inputApellido = document.createElement("input");
	inputApellido.setAttribute("type", "text");
	inputApellido.setAttribute("id", "apellido");
	inputApellido.setAttribute("required", true);
	inputApellido.setAttribute("placeholder", "Apellido");

	let labelDireccion = document.createElement("label");
	labelDireccion.setAttribute("for", "direccion");
	//labelDireccion.textContent = "Direccion: ";
	let inputDireccion = document.createElement("input");
	inputDireccion.setAttribute("type", "text");
	inputDireccion.setAttribute("id", "direccion");
	inputDireccion.setAttribute("required", true);
	inputDireccion.setAttribute("placeholder", "Dirección");


	let labelEmail = document.createElement("label");
	labelEmail.setAttribute("for", "email");
	//labelEmail.textContent = "Email: ";
	let inputEmail = document.createElement("input");
	inputEmail.setAttribute("type", "email");
	inputEmail.setAttribute("id", "email");
	inputEmail.setAttribute("required", true);
	inputEmail.setAttribute("pattern", "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$");
	inputEmail.setAttribute("placeholder", "eMail");

	let labelConfirmEmail = document.createElement("label");
	labelConfirmEmail.setAttribute("for", "confirmEmail");
	//labelConfirmEmail.textContent = "Confirmar Email: ";
	let inputConfirmEmail = document.createElement("input");
	inputConfirmEmail.setAttribute("type", "email");
	inputConfirmEmail.setAttribute("id", "confirmEmail");
	inputConfirmEmail.setAttribute("required", true);
	inputConfirmEmail.setAttribute("pattern", "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$");
	inputConfirmEmail.setAttribute("placeholder", "Confirmar eMail");

	let labelDni = document.createElement("label");
	labelDni.setAttribute("for", "dni");
	//labelDni.textContent = "DNI: ";
	let inputDni = document.createElement("input");
	inputDni.setAttribute("type", "text");
	inputDni.setAttribute("id", "dni");
	inputDni.setAttribute("required", true);
	inputDni.setAttribute("placeholder", "DNI");

	let labelIntereses = document.createElement("label");
	labelIntereses.setAttribute("for", "intereses");
	//labelIntereses.textContent = "Intereses: ";
	let inputIntereses = document.createElement("input");
	inputIntereses.setAttribute("type", "text");
	inputIntereses.setAttribute("id", "intereses");
	inputIntereses.setAttribute("required", true);
	inputIntereses.setAttribute("placeholder", "Intereses");


	let labelPassWord = document.createElement("label");
	labelPassWord.setAttribute("for", "password");
	//labelPassWord.textContent = "Contraseña: ";
	let inputPassWord = document.createElement("input");
	inputPassWord.setAttribute("type", "text");
	inputPassWord.setAttribute("id", "password");
	inputPassWord.setAttribute("required", true);
	inputPassWord.setAttribute("placeholder", "Contraseña");

	// Creamos los APPENDCHILD
	crearFormulario.appendChild(divL1);
	divL1.appendChild(labelName); //  Agregamos el label al formulario
	divL1.appendChild(inputName); //  Agregamos el input al formulario
	lineBreak(crearFormulario, 1);

	divL1.appendChild(labelApellido);
	divL1.appendChild(inputApellido);
	//lineBreak(crearFormulario, 2);

	crearFormulario.appendChild(divL2);
	divL2.appendChild(labelEmail);
	divL2.appendChild(inputEmail);
	lineBreak(crearFormulario, 1);

	divL2.appendChild(labelConfirmEmail); //  Agregamos el label al formulario
	divL2.appendChild(inputConfirmEmail); //  Agregamos el input al formulario
	//lineBreak(crearFormulario, 2);

	crearFormulario.appendChild(divL3);
	divL3.appendChild(labelDireccion);
	divL3.appendChild(inputDireccion);
	lineBreak(crearFormulario, 1)

	divL3.appendChild(labelDni); //  Agregamos el label al formulario
	divL3.appendChild(inputDni); //  Agregamos el input al formulario
	//lineBreak(crearFormulario, 2);

	crearFormulario.appendChild(divL4);
	divL4.appendChild(labelIntereses);
	divL4.appendChild(inputIntereses);
	//lineBreak(crearFormulario, 2);

	divL4.appendChild(labelPassWord);
	divL4.appendChild(inputPassWord);
	lineBreak(crearFormulario, 2);



	document.body.appendChild(crearFormulario);  //  Agregamos el formulario al body



}

form();

function limitations() {
	event.preventDefault()

	let forceImput = document.getElementById("name").ariaValueMax;
	let chartMayus = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

}

