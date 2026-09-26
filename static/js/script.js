const API_URL = 'https://keycontrol.onrender.com';

function carregarSalas() {
fetch(`${API_URL}/salas/`)
    .then(response => response.json())
    .then(salas => {
    let abertas = 0;
    let fechadas = 0;

    salas.forEach((sala, index) => {
    const idElemento = `#aviso-sala-0${index + 1}`;
    const elemento = document.querySelector(idElemento);

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