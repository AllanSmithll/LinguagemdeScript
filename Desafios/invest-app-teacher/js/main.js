const table = document.querySelector('tbody')

function insertInvestmentRow (investment) {
    const view = `<tr>
    <th scope='row'>${investment.id}</th>
    <td>${investment.name}</td>
    <td>${investment.type}</td>
    <td>${investment.category}</td>
    <td>${investment.interest}</td>
    <td>${investment.start}</td>
    <td>${investment.end}</td>
    <td>${investment.value.toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL',
    })}</td>
    </tr>`

    table.insertAdjacentHTML('afterbegin', view)
}

function loadInvestments (investments) {
    investments.map((investment) => insertInvestmentRow(investment))
}

loadInvestments(investments)



function insertNew () {
    let number = document.getElementById('number').value
    let name = document.getElementById('name').value
    let type = document.getElementById('type').value
    let category = document.getElementById('category').value
    let rentability = document.getElementById('rentability').value
    let startDate = document.getElementById('startDate').value
    let endDate = document.getElementById('endDate').value
    let value = document.getElementById('value').value
    const newRow = `<tr>
    <th scope='row'>${number}</th>
    <td>${name}</td>
    <td>${type}</td>
    <td>${category}</td>
    <td>${rentability}</td>
    <td>${startDate}</td>
    <td>${endDate}</td>
    <td>${value}`

    table.insertAdjacentHTML('afterbegin', newRow)
    console.log(newRow)
}

let insert = document.getElementById('insert')
insert.addEventListener('click', insertNew)