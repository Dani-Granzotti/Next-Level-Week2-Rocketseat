//Procurar o botão
document.querySelector("#add-time")
//Qd clicar no botão
.addEventListener('click', clonefield)

//Executar uma ação 
function clonefield() {
    //Duplicar os campos(Quais campos?)
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true) //boolean

    //Limpar os campos (Quais campos?)
    const fields = newFieldContainer.querySelectorAll('input')

    //Para cada campo, limpar
    fields.forEach(function(field) {
        //pega cada field no seu momento e limpa
        field.value = ""
    })


    //Colocar na página (Onde?)
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}