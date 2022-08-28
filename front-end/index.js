axios.get('http://localhost:3000/combat/1')
    .then(response => createNewElement(response.data))
    .catch(error => console.log(error))

const createNewElement = element => {
    const main = document.querySelector('main')
    const newElement = document.createElement('h3')
    newElement.innerHTML = `Adicionado: ${element.powerUsed} e ${element.point}`
    main.appendChild(newElement)
}

setTimeout(() => {
    let b = document.querySelector('h3')
    console.log(b)
}, 2000);

for (let i = 0; i < 3; i++) {
    axios.get(`http://localhost:3000/choice/${i}`)
        .then(response => createElementChoice(response.data))
        .catch(error => console.log(error))

    const createElementChoice = element => {
        const choice = document.getElementById('select-character')
        const ul = document.createElement('ul')
        choice.appendChild(ul)

        let li = document.createElement('li')
        li.innerHTML = element.name
        ul.appendChild(li)

        li = document.createElement('li')
        li.innerHTML = `HP: ${element.healPoints}`
        ul.appendChild(li)

        li = document.createElement('li')
        li.innerHTML = `MP: ${element.magicalPoints}`
        ul.appendChild(li)

        li = document.createElement('li')
        li.innerHTML = `DF.M: ${element.madicalDefense}`
        ul.appendChild(li)

        li = document.createElement('li')
        li.innerHTML = `AT.M: ${element.magicalAttack}`
        ul.appendChild(li)

        li = document.createElement('li')
        li.innerHTML = `DF.F: ${element.physicalDefense}`
        ul.appendChild(li)

        li = document.createElement('li')
        li.innerHTML = `AT.F: ${element.physicalAttack}`
        ul.appendChild(li)

        if (element.name == 'hero') {
            li = document.createElement('li')
            li.innerHTML = `<p>Habilidade Ativa:</p> ${element.hability1}`
            ul.appendChild(li)

            li = document.createElement('li')
            li.innerHTML = `<p>Habilidade Passiva:</p> ${element.hability2}`
            ul.appendChild(li)

            li = document.createElement('li')
            li.innerHTML = `<p>Habilidade Passiva:</p> ${element.hability3}`
            ul.appendChild(li)
        }
        else if (element.name == 'knight') {
            li = document.createElement('li')
            li.innerHTML = `<p>Habilidade Passiva:</p> ${element.hability1}`
            ul.appendChild(li)
        }
        else if (element.name == 'wizard') {
            li = document.createElement('li')
            li.innerHTML = `<p>Habilidade Ativa:</p> ${element.hability1}`
            ul.appendChild(li)
        }

        // data.forEach((item) => {
        //     let li = document.createElement("li");
        //     li.innerText = item;
        //     list.appendChild(li);
        // }
    }
}

