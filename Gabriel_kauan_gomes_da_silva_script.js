// Selecionar os elementos que vamos usar
const inputBusca = document.getElementById('search-input');// Um elemento
const cartoes = document.querySelectorAll('.product-card');// Todos os elementos


// Esta função remove acentos e deixa tudo minúsculo
function limparTexto(texto) {
    return texto
        .toLowerCase()                               // Tudo minúsculo
        .normalize("NFD")                            // Decompõe os acentos (separa o 'ê' em 'e' + '^')
        .replace(/[\u0300-\u036f]/g, "");            // Remove os acentos "soltos"
}

// Adicionar o "Escutador de Eventos" (Event Listener)
inputBusca.addEventListener('input', () => {
    
    const cartoes = document.querySelectorAll('.product-card');
    
    // Agora limpamos o que o usuário digitou (remove acento e deixa minúsculo)
    const valorBusca = limparTexto(inputBusca.value);

    cartoes.forEach(cartao => {//  Para cada cartão vamos fazer a mesma coisa pegar o titulo comparar um a um e limpar de acentos
        const tituloBruto = cartao.querySelector('.product-title').innerText;// Pega o título bruto do cartão (com acento e tudo)
        
        // Também limpamos o título do cartão para comparar "igual com igual"
        const tituloLimpo = limparTexto(tituloBruto);

        if (tituloLimpo.includes(valorBusca)) {
            cartao.style.display = "flex";  // Mostra o cartão 
        } else {
            cartao.style.display = "none";  // Esconde o cartão
        }
    });
});

//  Evento adiocionar ao carrinho

//  Selecionamos o container que guarda todos os cartões
const gridProdutos = document.querySelector('.product-grid');

// Ouvimos o clique no container PAI
gridProdutos.addEventListener('click', (event) => {
    
    // Verificamos se o que foi clicado é o botão de adicionar
    if (event.target.classList.contains('btn-add')) {
        const botao = event.target;
        // O .closest('.product-card') sobe na hierarquia para achar o cartão pai do botão
        const cartao = botao.closest('.product-card');

        // Lógica de troca (Toggle)
        if (botao.innerText === "Adicionar ao carrinho") {
            // Estado: Adicionado
            botao.innerText = "Adicionado";
            botao.classList.add('btn-adicionado');
            cartao.classList.add('card-selecionado');
        } else {
            // Estado: Voltar ao original
            botao.innerText = "Adicionar ao carrinho";
            botao.classList.remove('btn-adicionado');
            cartao.classList.remove('card-selecionado');
        }
    }
});


// Selecionar o botão de amostra
const btnAmostra = document.getElementById('add-sample');

// Escutar o clique no botão
btnAmostra.addEventListener('click', () => {
    
    // Criar o novo elemento 'article' (o cartão)
    const novoCard = document.createElement('article');
    novoCard.classList.add('product-card');

    // Definir o conteúdo interno (HTML do cartão)
    // Aqui usamos o Template Literal (crases) para facilitar
    novoCard.innerHTML = `
        <img src="" alt="Produto Amostra" class="product-img">
        <div class="card-content">
            <h3 class="product-title">Produto Amostra Premium</h3>
            <p class="product-desc">Este é um produto gerado dinamicamente via JavaScript.</p>
            <span class="product-price">R$ 499,00</span>
            <button class="btn-add">Adicionar ao carrinho</button>
        </div>
    `;

    // O momento da "mágica": adicionar o novo cartão ao grid
    gridProdutos.appendChild(novoCard);
});