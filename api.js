const jc=document.querySelector(" div #p1")
const button=document.querySelector("div #button")
const url="https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single"

let getjoke=()=>{

jc.classList.remove(".fade")
fetch(url)
.then(data=>data.json())
.then(item=>{

jc.textContent=`${item.joke}`
jc.classList.add(".fade")

})
}

button.addEventListener('click', getjoke);
getjoke();