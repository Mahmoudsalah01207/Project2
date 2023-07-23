var siteInput = document.getElementById("siteName")
var urlInput = document.getElementById("siteUrl")

var sitelist=[];
if (localStorage.getItem("List") != null) {
    sitelist = JSON.parse(localStorage.getItem("List"))
    displayData()
}

    function addSite(){
    var site={
        name:siteInput.value,
        url:urlInput.value,
    }
    sitelist.push(site)
    localStorage.setItem("List", JSON.stringify(sitelist))
     displayData()
}
 function displayData(){
    var temp = "";
    for (var i = 0; i < sitelist.length; i++) {
        temp += ` <tr>
        <td>`+ i + `</td>
        <td>`+ sitelist[i].name + `</td>
        <td><a href="https://${sitelist[i].url}" target="-blank"><button class="btn btn-success">Visit</button></a></td>
        <td>
            <button onclick="deleteData(`+ i + `)"  class="btn btn-outline-danger">Delete</button>
        </td>
              </tr>`
    }
    document.getElementById("tableBody").innerHTML = temp
}


function deleteData (index) {
    sitelist.splice(index, 1)
    localStorage.setItem("List", JSON.stringify(sitelist))
    displayData()
}

    






