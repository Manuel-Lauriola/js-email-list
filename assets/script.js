//dichiaro le variabili del mio html
const commercial = document.getElementById(`commercial`)
const support = document.getElementById(`support`)

//definisco la funzione che genererà 5 mail casuali
const randomMails = (destination) => {
  for (let i=0; i<5; i++) {
    axios.get(`https://flynn.boolean.careers/exercises/api/random/mail`).then((resp)=>{
      destination.innerHTML += `<li>${resp.data.response}</li>`
    })
  }
}

//invoco le funzioni
randomMails(commercial)
randomMails(support)