//dichiaro le variabili del mio html
const commercial = document.getElementById(`commercial`)
const support = document.getElementById(`support`)
//per il bonus 2 prendo i 2 bottoni
const newCommercial = document.getElementById(`new-commercial`)
const newSupport = document.getElementById(`new-support`) 

//definisco la funzione che genererà 5 mail casuali
const randomMails = (destination) => {
  for (let i=0; i<5; i++) {
    axios.get(`https://flynn.boolean.careers/exercises/api/random/mail`).then((resp)=>{
      destination.innerHTML += `<li>${resp.data.response}</li>`
    })
  }
}

//invoco le funzioni
randomMails(support)
randomMails(commercial)

//aggiungo la funzione ai bottoni
newSupport.addEventListener(`click`, (e) => {
  e.preventDefault
  support.innerHTML = ""
  randomMails(support)
})

newCommercial.addEventListener(`click`, (e) => {
  e.preventDefault
  commercial.innerHTML = ""
  randomMails(commercial)
})
