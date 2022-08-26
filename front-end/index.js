axios.get('http://localhost:3000')
    .then(response => createNewElement(response.data))
    .catch(error => console.log(error))

const createNewElement = element => {
    const main = document.querySelector('main')
    const elemento = document.createElement('h3')
    elemento.innerHTML = `Adicionado: ${element.nome}`
    main.appendChild(elemento)
}

