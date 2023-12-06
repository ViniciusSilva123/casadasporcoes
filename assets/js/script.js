let divPedidos = document.querySelector("#pedidos");

fetch("dados.json").then((response) => {
  response.json().then((dados) => {
    dados.listaPedidos.map((pedidos) => {
      divPedidos.innerHTML += `
            <div class="coluna">
                <div>
                    <h3 class="nome">${pedidos.nome}</h3>
                    <p class="descricao">${pedidos.descricao}</p>
                </div>
                <div>
                <p class="preco">${pedidos.preco}</p>
                </div>
            </div>
            `;
    });
  });
});
