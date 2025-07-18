//dichiaro le variabili del mio html
const teacher = document.getElementById(`teacher`)
const tutor = document.getElementById(`tutor`)
//per il bonus 2 prendo i 2 bottoni
const newteacher = document.getElementById(`new-teacher`)
const newtutor = document.getElementById(`new-tutor`)
//variabili nomi casuali
const teacherNames = document.getElementById(`teacher-names`)
const tutorNames = document.getElementById(`tutor-names`) 

//definisco la funzione che genererà 5 mail casuali
const randomMails = (destination) => {
  for (let i=0; i<5; i++) {
    axios.get(`https://flynn.boolean.careers/exercises/api/random/mail`).then((resp)=>{
      destination.innerHTML += `<li class="list-group-item"><a href="#">${resp.data.response}</a></li>`
    })
  }
}

//funzione nomi casuali
const randomNames = (destination) => {
  for (let i=0; i<5; i++) {
    axios.get(`https://flynn.boolean.careers/exercises/api/random/name`).then((resp)=>{
      destination.innerHTML += `<li class="list-group-item">${resp.data.response}</li>`
    })
  }
}

//invoco le funzioni
randomMails(tutor)
randomMails(teacher)
randomNames(teacherNames)
randomNames(tutorNames)

//aggiungo la funzione ai bottoni
newtutor.addEventListener(`click`, (e) => {
  e.preventDefault
  tutorNames.innerHTML = ""
  tutor.innerHTML = ""
  randomNames(tutorNames)
  randomMails(tutor)
})

newteacher.addEventListener(`click`, (e) => {
  e.preventDefault
  teacherNames.innerHTML = ""
  teacher.innerHTML = ""
  randomNames(teacherNames)
  randomMails(teacher)
})
