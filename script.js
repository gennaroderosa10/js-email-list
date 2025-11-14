// Attraverso l'apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all'interno di una lista.


const emailList = document.getElementById("mail-list")


const bottone = document.querySelector("button")
console.log(bottone);

bottone.addEventListener("click", function (event) {
    event.preventDefault();
    let emails = [];
    for (let i = 0; i < 10; i++) {
        axios.get(`https://flynn.boolean.careers/exercises/api/random/mail`).then(function (resp) {
            const randomMail = resp.data.response;
            emails.push(randomMail);


            if (emails.length === 10) {
                let lista = "";
                for (let y = 0; y < emails.length; y++) {
                    lista += `<li>${emails[y]}</li>`;
                }
                emailList.innerHTML = lista;
            };



        });

    };

})

