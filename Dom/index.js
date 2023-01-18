const btnAdd = document.getElementById("btn-add")
const tbody = document.getElementById("table-body")


let data = []

function loadData() {
    let string = ""
    for (let i = 0; i < data.length; i++) {
        string = string + `<tr>
                            <td>${(i + 1)}</td>
                            <td>${data[i]}</td>
                            </tr>`
    }
    tbody.innerHTML = string
}

btnAdd.onclick = function () {
    const input = document.getElementById("input").value
    if (input.length == 0) {
        alert("Name is empty")
        return;
    }
    data.push(input)
    loadData()
}




