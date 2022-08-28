axios.get('http://localhost:3000/combat/1')
    .then(response => createNewElement(response.data))
    .catch(error => console.log(error))

const createNewElement = element => {
    const main = document.querySelector('main')
    const newElement = document.createElement('h3')
    newElement.innerHTML = `Adicionado: ${element.powerUsed} e ${element.point}`
    main.appendChild(newElement)
}

for (let i = 0; i < 3; i++) {
    axios.get(`http://localhost:3000/choice/${i}`)
        .then(response => createElementChoice(response.data))
        .catch(error => console.log(error))

    const createElementChoice = element => {
        const choice = document.getElementById('select-character')
        const ul = document.createElement('ul')
        ul.innerHTML = `Novo: ${element.name}`
        choice.appendChild(ul)

        let li = document.createElement('li')
        li.innerHTML = element.healPoints
        ul.appendChild(li)

        li = document.createElement('li')
        li.innerHTML = element.magicalPoints
        ul.appendChild(li)

        li = document.createElement('li')
        li.innerHTML = element.madicalDefense
        ul.appendChild(li)

        li = document.createElement('li')
        li.innerHTML = element.magicalAttack
        ul.appendChild(li)

        li = document.createElement('li')
        li.innerHTML = element.physicalDefense
        ul.appendChild(li)

        li = document.createElement('li')
        li.innerHTML = element.physicalAttack
        ul.appendChild(li)

        // data.forEach((item) => {
        //     let li = document.createElement("li");
        //     li.innerText = item;
        //     list.appendChild(li);
        // }
    }
}