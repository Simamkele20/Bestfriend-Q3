 AddButton = document.querySelector("#Button");

let friends= []

function AddFriends(){
    let name = document.querySelector(".user-input").value
    friends.push(name)
    localStorage.setItem('key', JSON.stringify(friends))
}

function DisplayNames(){
    let names = JSON.parse(localStorage.getItem('key'))
    names.forEach((name,index)=>{
        let li = document.getElementById("List")
        li.textContent = name
        li
        .appendChild(li)
    })
}



console.log(friends)
AddButton.addEventListener("click",DisplayNames)




