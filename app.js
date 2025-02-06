//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();
    if (nome && !amigos.includes(nome)) {
        amigos.push(nome);
        atualizarLista();
    }
    input.value = "";
}

function atualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    amigos.forEach((amigo, index) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Adicione pelo menos 2 amigos para sortear!");
        return;
    }
    
    let embaralhado = [...amigos];
    embaralhado.sort(() => Math.random() - 0.5);
    
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "";
    
    for (let i = 0; i < embaralhado.length; i++) {
        let amigo1 = embaralhado[i];
        let amigo2 = embaralhado[(i + 1) % embaralhado.length];
        let li = document.createElement("li");
        li.textContent = `${amigo1} -> ${amigo2}`;
        resultado.appendChild(li);
    }
}
