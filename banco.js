function lineBreak(father, manylb) {

	for (let i = 0; i < manylb; i++) {
		let lb = document.createElement("br");
		father.appendChild(lb);
	}
}
function address(){
	let address = document.getElementById("direccion").value;









}
/*
id.value = CALLE/ ALEJANDRO, 23, BAJO 1, 28000, MADRID, ESPAÑA
arr = CALLE, AVENIDA, VIA, BULEVAR...

split => id.value

comparar splitead[0] = tipoVIA[i]

splitedo[]
*/

/* ^(?=.[A-Za-z])(?=.\d)(?=.[@$!%#?&])[A-Za-z\d@$!%*#?&]{8,20}$ */
function forcePassword() {
	let forceInput = document.getElementById("password").value;
	let limitations = /^(?=.*[A-Z])(?=.*[a-z])(?=(.*\d){2,})(?=.*[@$#!%*?&])[A-Za-z\d@$#!%*?&]{8,20}$/;

	if (!limitations.test(forceInput)) {
		event.preventDefault();
		alert("La contraseña no cumple con el estándar");
	}
}

function forceDNI() {
	let forceInput = document.getElementById("dni").value;

	if(checkDNI(forceInput) !=  true) {
		event.preventDefault();
		alert("Documento no válido");
	}
}

function checkDNI(value){

	let validChars = 'TRWAGMYFPDXBNJZSQVHLCKET';
	let nifRexp = /^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKET]$/i;
	let nieRexp = /^[XYZ][0-9]{7}[TRWAGMYFPDXBNJZSQVHLCKET]$/i;
	let str = value.toString().toUpperCase();
  
	if (!nifRexp.test(str) && !nieRexp.test(str)) return false;
  
	let nie = str
		.replace(/^[X]/, '0')
		.replace(/^[Y]/, '1')
		.replace(/^[Z]/, '2');
  
	let letter = str.substr(-1);
	// Encuentra el resto de los 8 números para después localizar la letra en validChars
	let charIndex = parseInt(nie.substr(0, 8)) % 23;

	//Y aquí compara si la letra final es la que coincide en el orden del validChars
	if (validChars.charAt(charIndex) === letter) return true;

	return false;
  }

function forceConfirmEmail() {
	let inputEmail = document.getElementById("confirmEmail").value;
	let inputEmail2 = document.getElementById("email").value;

	if (!(inputEmail2)) {
		return ;
	}
	if (!(inputEmail == inputEmail2)) {
		event.preventDefault();
		alert("Lo correos no coinciden.");
	}
}

function forceEmail() {
	let forceInput = document.getElementById("email").value;
	let emailLimit = /^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$/;

	if (!(emailLimit.test(forceInput))) {
		event.preventDefault();
		alert("No es válido el correo electronico");
		return;
	}
}

function forceSurname() {
	let forceInput = document.getElementById("apellido").value;

	if (!(forceInput[0] === forceInput[0].toUpperCase())) {
		alert("El apellido ha de empezar por mayúsculas")
	}
	for (let i = 0; i < forceInput.length; i++) {
		if (!(isNaN(forceInput[i]))) {
			alert("No es válido un número en apellido");
			return;
		}
	}
}


function forceName() {
	let forceInput = document.getElementById("name").value;

	if (!(forceInput[0] === forceInput[0].toUpperCase())) {
		alert("El nombre ha de empezar por mayúsculas")
	}
	for (let i = 0; i < forceInput.length; i++) {
		if (!(isNaN(forceInput[i]))) {
			alert("No es válido un número en nombre");
			return;
		}
	}
}

function limitations() {
	forceName();
	forceSurname();
	forceEmail();
	forceConfirmEmail();
	forceDNI();
	forcePassword();
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
	//inputEmail.setAttribute("pattern", "/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/");
	inputEmail.setAttribute("placeholder", "eMail");

	let labelConfirmEmail = document.createElement("label");
	labelConfirmEmail.setAttribute("for", "confirmEmail");
	//labelConfirmEmail.textContent = "Confirmar Email: ";
	let inputConfirmEmail = document.createElement("input");
	inputConfirmEmail.setAttribute("type", "email");
	inputConfirmEmail.setAttribute("id", "confirmEmail");
	inputConfirmEmail.setAttribute("required", true);
	//inputConfirmEmail.setAttribute("pattern", "/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/");
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
	
	let inputSend = document.createElement("input");
	inputSend.setAttribute("type", "submit");
	inputSend.setAttribute("value", "Enviar");
	inputSend.setAttribute("id", "btnSubmit");
	inputSend.setAttribute("onclick", "limitations()")

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

	crearFormulario.appendChild(inputSend);



	document.body.appendChild(crearFormulario);  //  Agregamos el formulario al body



}

form();

