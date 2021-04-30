// 1. chiedi all'utente il cognome
// 2. inseriscilo in un array con altri cognomi: 'Bianchi', 'Neri', 'Rossi', 'Verdi', 'Gialli'
// 3. stampa la lista ordinata alfabeticamente
// 4. scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova

var cognome = prompt("Inserire cognome");
var listaCognomi = ["Bianchi", "Neri", "Rossi", "Verdi", "Gialli"];
var posizione = 0;
listaCognomi.push(cognome);
for (i = 0; i < listaCognomi.length; i++) {
    document.getElementById("lista_cognomi").innerHTML += "<li>" + listaCognomi.sort()[i] + "</li>";
    if (listaCognomi.sort()[i] == cognome) {
        posizione = i + 1;
    }
}
document.getElementById("posizione").innerHTML = "Il tuo cognome è il numero " + posizione + " nella lista.";

