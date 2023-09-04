// Função que é executada quando o DOM é carregado
document.addEventListener('DOMContentLoaded', function() {
    let sections = document.querySelectorAll('section');
    sections.forEach(function(section) {
        let observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.5 });

        observer.observe(section);
    });
});

// Função para alternar a visibilidade da lista suspensa
function toggleDropdown() {
    var dropdown = document.getElementById("servicesDropdown");
    dropdown.classList.toggle("active");
}

// Função para fechar a lista suspensa ao selecionar um item
function closeDropdown() {
    var dropdown = document.getElementById("servicesDropdown");
    dropdown.classList.remove("active");
}

// Função para mostrar a tela de Fale Conosco
function openFaleConosco() {
    var faleConosco = document.getElementById("faleConosco");
    faleConosco.style.display = "flex";
}

// Função para fechar a tela de Fale Conosco
function closeFaleConosco() {
    var faleConosco = document.getElementById("faleConosco");
    faleConosco.style.display = "none";
    $("#nome").val("");
    $("#email").val("");
    $("#telefone").val("");
    $("#mensagem").val("");
    $("#mensagemErro").hide();
    $("#mensagemSucesso").hide();
}

// Função executada quando o documento está pronto
$(document).ready(function() {
    $("#enviar").click(function() {
        var nome = document.getElementById("nome").value;
        var email = document.getElementById("email").value;
        var telefone = document.getElementById("telefone").value;
        var mensagem = document.getElementById("mensagem").value;

        if (!nome || !email || !telefone || !mensagem) {
            $("#mensagemSucesso").hide();
            $("#mensagemErro").show();
        } else {
            $("#mensagemErro").hide();
            $("#mensagemSucesso").show();
            setTimeout(function() {
                $("#faleConosco").hide();
                $("#mensagemSucesso").hide();
                $("#nome").val("");
                $("#email").val("");
                $("#telefone").val("");
                $("#mensagem").val("");
            }, 3000); // Ocultar após 3 segundos
        }
    });
});

// Função executada quando o documento está pronto
$(document).ready(function() {
    document.getElementById("form-fale-conosco").addEventListener("submit", function(event) {
        event.preventDefault(); // Evita o comportamento padrão de envio do formulário
        
        // Pega os dados do formulário
        var formData = $(this).serialize();

        // Cria um objeto Date representando a data e hora atuais
        var dataHoraAtual = new Date();

        // Obtém os componentes individuais da data e hora
        var ano = dataHoraAtual.getFullYear();
        var mes = dataHoraAtual.getMonth() + 1; // Os meses são indexados a partir de 0
        var dia = dataHoraAtual.getDate();
        var hora = dataHoraAtual.getHours();
        var minutos = dataHoraAtual.getMinutes();
        var segundos = dataHoraAtual.getSeconds();

        // Formata a data e hora como uma string
        var dataFormatada = dia + "/" + mes + "/" + ano;
        var horaFormatada = hora + ":" + minutos + ":" + segundos;

        // Definindo dados para envio via AJAX
        var dataEnvio = formData + "&data%5Bdata%5D=" + dataFormatada + "&data%5Bhora%5D=" + horaFormatada
        
        // Envia os dados via AJAX
        $.ajax({
            type: "POST",
            url: "https://sheetdb.io/api/v1/ur2bco1l89cgw",
            data: dataEnvio,
        });
    });
});
