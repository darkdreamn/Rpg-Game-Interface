axios.get('http://localhost:3000/combat/1')
    .then(response => createNewElement(response.data))
    .catch(error => console.log(error))

const createNewElement = element => {
    const main = document.querySelector('main')
    const elemento = document.createElement('h3')
    elemento.innerHTML = `Adicionado: ${element}`
    main.appendChild(elemento)
}


