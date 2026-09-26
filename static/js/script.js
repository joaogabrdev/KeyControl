const API_URL = 'https://keycontrol.onrender.com';


function carregarSalas() {
fetch(`${API_URL}/salas/`)
    .then(response => response.json())
    .then(salas => {
    let abertas = 0;
    let fechadas = 0;

    salas.forEach(sala => {
        const idFormatado = String(sala.id).padStart(2, '0');
        const elemento = document.querySelector(`#aviso-sala-${idFormatado}`);

        if (elemento) {
            elemento.textContent = sala.status ? "🟢 Aberta" : "🔴 Fechada";
        }

        if (sala.status) {
            abertas++;
        } else {
            fechadas++;
        }
    });

    const elAbertas = document.querySelector("#sAb");
    const elFechadas = document.querySelector("#sFe");

    if (elAbertas) elAbertas.textContent = abertas;
    if (elFechadas) elFechadas.textContent = fechadas;
    })
    .catch(erro => console.error("Erro ao carregar salas:", erro));
}

function alternarStatusSala(idSala, seletorElemento) {
fetch(`${API_URL}/salas/${idSala}/alternar/`, { method: 'POST' })
    .then(response => response.json())
    .then(() => {
        carregarSalas();
    })
    .catch(erro => console.error("Erro ao alterar status:", erro));
}

carregarSalas();

setInterval(carregarSalas, 3000);