

const userInfo={
    username:"gloria",
    description:"hello i am the first user in the website",
    theme:"red"
}

function displayUser(userInfo){
const header = document.querySelector("#main")
header.textContent = userInfo.username +"'s is a personal website"
header.className=userInfo.theme
const description =document.createElement("p")
description.textContent =userInfo.description
const body = document.querySelector("body")
body.append(description)
}
displayUser(userInfo);

