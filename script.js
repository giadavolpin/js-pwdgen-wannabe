/* Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
poi chiedi la sua età
Infine scrivi sulla pagina nomecognomecolorepreferito21
(dove il 21 è in questo caso l'età) */

const nomeUtente = prompt ('come ti chiami?'); 
const cognomeUtente = prompt ('qual è il tuo cognome?')
const coloreUtente = prompt ('qual è il tuo colore preferito?')
const etaUtente = prompt ('quanti anni hai?')
const saluto = 
`${nomeUtente}
${cognomeUtente}
${coloreUtente}
${etaUtente}`;

const elemento = document.getElementById('utente');
elemento.innerHTML = saluto; 
