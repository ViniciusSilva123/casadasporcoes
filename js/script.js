function scrollToCategoria(categoriaId) {
  var categoria = document.getElementById(categoriaId);
  categoria.scrollIntoView({ behavior: "smooth" });
}

//

let divPorcoes = document.querySelector(".porcoes");

fetch("itens.json").then((response) => {
  response.json().then((dados) => {
    dados.porcoes.map((item) => {
      // Format the price to BRL currency with a comma for the decimal separator and two decimal places
      const formatpreco = `R$${item.preco.toFixed(2).replace(".", ",")}`;

      divPorcoes.innerHTML += `
      <div onclick="${item.funcao}">
      <div class="coluna" onclick="adicionarAoCarrinho('🍗${item.nome}',${item.preco})">
      <div class="descricao">
      <h3>${item.nome}</h3>
      <h4>${item.descricao}.</h4>
      </div>
      <div class="preco">
      <p>${formatpreco}</p>
      </div>
      </div>
      </div>
      `;
    });
  });
});

//

let divBatata = document.querySelector(".batatas");

fetch("itens.json").then((response) => {
  response.json().then((dados) => {
    dados.batatas.map((item) => {
      // Format the price to BRL currency with a comma for the decimal separator and two decimal places
      const formatpreco = `R$${item.preco.toFixed(2).replace(".", ",")}`;

      divBatata.innerHTML += `
      <div id="ads" onclick="${item.funcao}">
      <div onclick="adicionarAoCarrinho('🍟${item.nome}',${item.preco})">
      <h3>${item.nome}</h3>
      <p>${formatpreco}</p>
      </div>
      </div>
      `;
    });
  });
});

//

let divBebidas = document.querySelector(".bebidas");

fetch("itens.json").then((response) => {
  response.json().then((dados) => {
    dados.bebidas.map((item) => {
      // Format the price to BRL currency with a comma for the decimal separator and two decimal places
      const formatpreco = `R$${item.preco.toFixed(2).replace(".", ",")}`;

      divBebidas.innerHTML += `
      <div id="ads" onclick="${item.funcao}">
      <div onclick="adicionarAoCarrinho('🥤${item.nome}',${item.preco})">
      <h3>${item.nome}</h3>
      <p>${formatpreco}</p>
      </div>
      </div>
      `;
    });
  });
});

//

let divHamburgues = document.querySelector(".hamburguer");

fetch("itens.json").then((response) => {
  response.json().then((dados) => {
    dados.hamburguer.map((item) => {
      // Format the price to BRL currency with a comma for the decimal separator and two decimal places
      const formatpreco = `R$${item.preco.toFixed(2).replace(".", ",")}`;

      divHamburgues.innerHTML += `
      <div onclick="${item.funcao}">
      <div class="coluna" onclick="adicionarAoCarrinho('🍔${item.nome}', ${item.preco})">
      <div class="descricao">
      <h3>${item.nome}</h3>
      <h4>${item.descricao}.</h4>
      </div>
      <div class="preco">
      <p>${formatpreco}</p>
      </div>
      </div>
      </div>
      `;
    });
  });
});

//

let divAdicionais1 = document.querySelector(".molho1");

fetch("itens.json").then((response) => {
  response.json().then((dados) => {
    dados.adicionais1.map((item) => {
      // Format the price to BRL currency with a comma for the decimal separator and two decimal places
      const formatpreco = `R$${item.preco.toFixed(2).replace(".", ",")}`;

      divAdicionais1.innerHTML += `
      <div id="ads" onclick="${item.funcao}">
      <div onclick="adicionarAoCarrinho('${item.nome}',${item.preco})">
      <h3>${item.nome}</h3>
      <p>${formatpreco}</p>
      </div>
      </div>
      `;
    });
  });
});

//

let divAdicionais2 = document.querySelector(".molho2");

fetch("itens.json").then((response) => {
  response.json().then((dados) => {
    dados.adicionais2.map((item) => {
      // Format the price to BRL currency with a comma for the decimal separator and two decimal places
      const formatpreco = `R$${item.preco.toFixed(2).replace(".", ",")}`;

      divAdicionais2.innerHTML += `
      <div id="ads" onclick="${item.funcao}">
      <div onclick="adicionarAoCarrinho('${item.nome}',${item.preco})">
      <h3>${item.nome}</h3>
      <p>${formatpreco}</p>
      </div>
      </div>
      `;
    });
  });
});

//

let divCombos = document.querySelector(".combos");

fetch("itens.json").then((response) => {
  response.json().then((dados) => {
    dados.combos.map((item) => {
      // Format the price to BRL currency with a comma for the decimal separator and two decimal places
      const formatpreco = `R$${item.preco.toFixed(2).replace(".", ",")}`;

      divCombos.innerHTML += `
      <div onclick="${item.funcao}">
      <div class="coluna" onclick="adicionarAoCarrinho('📦${item.nome}',${item.preco})">
      <div class="descricao">
      <h3>${item.nome}</h3>
      <h4>${item.lanches}</h4>
      <h4>${item.descricao}.</h4>
      </div>
      <div class="preco">
      <p>${formatpreco}</p>
      </div>
      </div>
      </div>
      `;
    });
  });
});

//

function mostrarNotificacaoPOR() {
  var notificacao = document.createElement("div");
  notificacao.className = "notificacao";
  notificacao.innerHTML = '"🍗PORCÃO ADICIONADO(🛒)!"';
  document.body.appendChild(notificacao);

  setTimeout(function () {
    notificacao.remove();
  }, 1500); // Remove a notificação após 3 segundos
}

//

function mostrarNotificacaoHAM() {
  var notificacao = document.createElement("div");
  notificacao.className = "notificacao";
  notificacao.innerHTML = '"🍔HAMBURGUER ADICIONADO(🛒)!"';
  document.body.appendChild(notificacao);

  setTimeout(function () {
    notificacao.remove();
  }, 1500); // Remove a notificação após 3 segundos
}

//

function mostrarNotificacaoCOM() {
  var notificacao = document.createElement("div");
  notificacao.className = "notificacao";
  notificacao.innerHTML = '"📦COMBO ADICIONADO(🛒)!"';
  document.body.appendChild(notificacao);

  setTimeout(function () {
    notificacao.remove();
  }, 1500); // Remove a notificação após 3 segundos
}

//

function mostrarNotificacaoBAT() {
  var notificacao = document.createElement("div");
  notificacao.className = "notificacao";
  notificacao.innerHTML = '"🍟BATATA ADICIONADO(🛒)!"';
  document.body.appendChild(notificacao);

  setTimeout(function () {
    notificacao.remove();
  }, 1500); // Remove a notificação após 3 segundos
}

//

function mostrarNotificacaoBEB() {
  var notificacao = document.createElement("div");
  notificacao.className = "notificacao";
  notificacao.innerHTML = '"🥤BABIDA ADICIONADO(🛒)!"';
  document.body.appendChild(notificacao);

  setTimeout(function () {
    notificacao.remove();
  }, 1500); // Remove a notificação após 3 segundos
}

//

function mostrarNotificacaoCHE() {
  var notificacao = document.createElement("div");
  notificacao.className = "notificacao";
  notificacao.innerHTML = '"CHEDDAR ADICIONADO(🛒)!"';
  document.body.appendChild(notificacao);

  setTimeout(function () {
    notificacao.remove();
  }, 1500); // Remove a notificação após 3 segundos
}

//

function mostrarNotificacaoCAT() {
  var notificacao = document.createElement("div");
  notificacao.className = "notificacao";
  notificacao.innerHTML = '"CATUPIRY ADICIONADO(🛒)!"';
  document.body.appendChild(notificacao);

  setTimeout(function () {
    notificacao.remove();
  }, 1500); // Remove a notificação após 3 segundos
}

//

function mostrarNotificacaoMOL() {
  var notificacao = document.createElement("div");
  notificacao.className = "notificacao";
  notificacao.innerHTML = '"MOLHO ADICIONADO(🛒)!"';
  document.body.appendChild(notificacao);

  setTimeout(function () {
    notificacao.remove();
  }, 1500); // Remove a notificação após 3 segundos
}

//

//função alternarCarrinho()
function toggleCart() {
  var cartContainer = document.getElementById("cart-container"); //carrinho-contêiner
  //atualDireito
  var currentRight = parseInt(getComputedStyle(cartContainer).right);

  // Toggle entre mostrar e ocultar o carrinho
  cartContainer.style.right = currentRight === 0 ? "-390px" : "0";
}

//

// Array para armazenar os itens no carrinho
var carrinhoDeCompras = [];

// Função para adicionar um item ao carrinho
function adicionarAoCarrinho(nome, preco) {
  // Procura pelo item no carrinho
  var indexn = carrinhoDeCompras.findIndex((element) => element.nome === nome);

  var indexp = carrinhoDeCompras.findIndex(
    (element) => element.preco === preco
  );

  // Se o item já estiver no carrinho, incrementa a quantidade
  if (indexn !== -1 && indexp !== -1) {
    carrinhoDeCompras[indexn].quantidade++;
  } else {
    // Caso contrário, adiciona o item ao carrinho com quantidade 1

    carrinhoDeCompras.push({ nome: nome, preco: preco, quantidade: 1 });
  }

  // Atualiza o carrinho na página
  atualizarCarrinho();
}

//

// Função para remover um item do carrinho
function removerDoCarrinho(index) {
  // Verifica se o índice é válido
  if (index >= 0 && index < carrinhoDeCompras.length) {
    // Decrementa a quantidade do item no carrinho
    carrinhoDeCompras[index].quantidade--;

    // Remove o item se a quantidade for zero ou negativa
    if (carrinhoDeCompras[index].quantidade <= 0) {
      carrinhoDeCompras.splice(index, 1);
    }

    // Após a remoção ou atualização, chama a função para atualizar o carrinho
    atualizarCarrinho();
  }
}

//

// Função para atualizar o carrinho na página
function atualizarCarrinho() {
  // Obtém o elemento HTML do carrinho
  var carrinhoElemento = document.getElementById("carrinho");
  var carrinhoCountElemento = document.getElementById("cart-count");
  var carrinhoToggleElemento = document.getElementById("cart-toggle");

  // Inicializa o conteúdo do carrinho
  carrinhoElemento.innerHTML = "";

  // Inicializa o contador de itens no carrinho
  var itemCount = 0;

  // Inicializa o total
  var total = 0;

  // Itera sobre os itens no carrinho e exibe na página
  for (var i = 0; i < carrinhoDeCompras.length; i++) {
    const formatpreco = `R$${carrinhoDeCompras[i].preco
      .toFixed(2)
      .replace(".", ",")}`;

    const formatpreco1 = (
      carrinhoDeCompras[i].quantidade * carrinhoDeCompras[i].preco
    ).toFixed(2);

    carrinhoElemento.innerHTML +=
      '<div class="item-no-carrinho"><div class="divremover"><button class="remover-botao" onclick="removerDoCarrinho(' +
      i +
      ')">X</button> ' +
      "</div>" +
      '<span class="qt">' +
      carrinhoDeCompras[i].quantidade +
      "</span>" +
      "x " +
      '<span class="nm">' +
      carrinhoDeCompras[i].nome +
      "</span>" +
      '<span class="pr">' +
      formatpreco +
      "</span>" +
      "</div>";

    // Atualiza o contador de itens no carrinho
    itemCount += carrinhoDeCompras[i].quantidade;

    // Soma ao total
    total += parseFloat(formatpreco1);
  }

  // Formata o total e atualiza o elemento HTML
  const totalFormatado = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(total);

  document.getElementById("total").textContent = totalFormatado;

  // Atualiza o texto do elemento com ID "cart-count" com o número total de itens no carrinho
  carrinhoCountElemento.textContent = itemCount;

  // Adiciona ou remove a classe CSS "has-items" com base no número de itens no carrinho
  carrinhoToggleElemento.classList.toggle("has-items", itemCount > 0);
}

//

function converterParaMaiusculas(elemento) {
  elemento.value = elemento.value.toUpperCase();
}

//

function obterConteudoFormatado() {
  var conteudoFormatado = "Pedido:\n";

  // Inicializa um loop que percorre o array carrinhoDeCompras
  for (var i = 0; i < carrinhoDeCompras.length; i++) {
    // Concatena à variável conteudoFormatado a quantidade, 'x -', e o item do carrinho, seguido por uma quebra de linha
    conteudoFormatado +=
      carrinhoDeCompras[i].quantidade +
      "x - " +
      carrinhoDeCompras[i].item +
      "\n";
  }
  // Fim do loop

  return conteudoFormatado;
}

//

function formatarPedido() {
  // Seleciona todos os elementos com a classe 'item-no-carrinho'
  var itensCarrinho = document.querySelectorAll(".item-no-carrinho");

  // Converte NodeList para um array
  var itensArray = Array.from(itensCarrinho);

  // Inicializa um array para armazenar os itens do carrinho formatados
  var itensFormatados = [];

  // Para cada item no carrinho, adiciona um objeto ao array 'itensFormatados'
  itensArray.forEach(function (item) {
    var quantidade = parseInt(item.querySelector(".qt").textContent);
    var nome = item.querySelector(".nm").textContent;

    // Adiciona o item formatado ao array
    itensFormatados.push(`${quantidade}x ${nome}`);
  });

  // Retorna o array de itens formatados
  return itensFormatados.join("\n");
}

//

function limparCarrinho() {
  // Limpa o array de itens no carrinho
  carrinhoDeCompras = [];

  // Limpa o conteúdo do textarea
  document.getElementById("info").value = "";

  document.getElementById("endereco").value = "";

  // Atualiza o carrinho na página
  atualizarCarrinho();
}

//

function exibirConteudoCarrinhoNoWhatsApp() {
  // Chama a função formatarPedido para obter a string formatada dos itens do carrinho
  var itensFormatados = formatarPedido();

  //total
  var valortotal = document.getElementById("total");
  var totalconteudo = valortotal.textContent;

  // Obtém o valor digitado no campo de endereço
  var endereco = document.getElementById("endereco").value;

  // Obtém o valor digitado no campo de complemento
  var informar = document.getElementById("info").value;

  // Obtém o ID do método de pagamento selecionado (PIX, CARTÃO, DINHEIRO)
  var formaPagamento = document.querySelector('input[name="forma"]:checked').id;

  // Monta a string final com o pedido formatado, endereço, complemento e forma de pagamento
  var resultado =
    "PEDIDO:\n" +
    itensFormatados +
    "\n" +
    "\n" +
    "TOTAL:\n" +
    totalconteudo +
    "\n" +
    "\n" +
    "INFORMAÇÕES ADICIONAIS:\n" +
    informar +
    "\n" +
    "\n" +
    "ENDEREÇO:\n" +
    endereco +
    "\n" +
    "\n" +
    "FORMA DE PAGAMENTO:\n" +
    formaPagamento;

  // Define o conteúdo da div com o id 'mostrar' com a string montada

  // Codifica o conteúdo formatado para uso em URL
  var conteudoCodificado = encodeURIComponent(resultado);

  // Constrói a URL do WhatsApp com o conteúdo
  var urlWhatsApp =
    "https://api.whatsapp.com/send?phone=5511931461350&text=" +
    conteudoCodificado;

  // Abre a URL no navegador (você pode ajustar conforme necessário)
  window.open(urlWhatsApp, "_blank");
}
