const getToDo = document.getElementById("todolist"); //seleziono il form
console.log(getToDo); //log di verifica form correttamente selezionato

//avvio funzione
getToDo.addEventListener("submit", function (event) {
  event.preventDefault(); //evito ricarico pagina
  console.log(event); //log per evento
  const input = document.getElementById("inputfield"); //creo variante di nome input
  const wordsToAdd = input.value; // assegno a una variante il contenuto di inpiut
  console.log(wordsToAdd); // log per leggere cosa ho inserito nel form

  const checkList = document.createElement("p"); //creo paragrafo dove poter inserire gli elementi lista

  // funzione testo sbarrato al click

  checkList.addEventListener("click", function (event) {
    checkList.classList.add("decoration");
  });

  checkList.innerText = wordsToAdd; // parole da aggiungere alla lista

  const bottone = document.createElement("button"); //creo bottone
  bottone.classList.add("bottonilista"); //aggiungo classe al bottone lista
  bottone.innerText = "Elimina"; //aggiungo nome al bottone lista

  //funzione elimina elemento lista
  bottone.addEventListener("click", function (event) {
    checkList.remove();
  });

  const getList = document.getElementById("list"); //seleziono il div lista dell'html
  getList.appendChild(checkList); //'appendo' la lista creata
  checkList.appendChild(bottone); //appendo bottone all'elemento

  input.value = ""; //pulisci contenuto form
});
