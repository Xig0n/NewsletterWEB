const submitForm = document.getElementById("submitForm");
const successContainer = document.querySelector(".main__successContainer")
const mainContainer = document.querySelector(".main__container")

submitForm.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("Enviando Datos");

    const emailInput = document.getElementById("emailInput")
    emailInput.value = ""

    successContainer.classList.toggle("active");
    mainContainer.classList.toggle("active");



    const formData = new FormData(event.target);

    fetch('http://127.0.0.1/api-v1/createUser', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Hubo un problema al enviar los datos.');
        }
        return response.json(); // Si la respuesta es exitosa, parsea la respuesta como JSON
    })
    .then(data => {
        console.log('Datos enviados exitosamente:', data);
        // Aquí puedes hacer cualquier otra acción que necesites con los datos de la respuesta de la API
    })
    .catch(error => {
        console.error('Error al enviar los datos:', error);
        // Aquí puedes manejar el error de acuerdo a tus necesidades
    });

    
});

const successContainerButton = document.querySelector(".successContainer__button")

successContainerButton.addEventListener("click", () => {
    successContainer.classList.toggle("active");
    mainContainer.classList.toggle("active");
})