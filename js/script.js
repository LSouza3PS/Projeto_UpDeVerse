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


$(document).ready(function() {
    $("#enviar").click(function() {
        var nome = document.getElementById("nome").value;
        var email = document.getElementById("email").value;
        var telefone = document.getElementById("telefone").value;
        var mensagem = document.getElementById("mensagem").value;

        if(!nome || !email || !telefone || !mensagem){
            $("#mensagemSucesso").hide();
            $("#mensagemErro").show();
        }
        else{
            $("#mensagemErro").hide();
            $("#mensagemSucesso").show();
            setTimeout(function() {
                $("#faleConosco").hide();
                $("#mensagemSucesso").hide();
                $("#nome").val("");
                $("#email").val("");
                $("#telefone").val("");
                $("#mensagem").val("");
        }, 3000); // Ocultar após 2 segundos (pode ajustar o tempo conforme necessário)
        }        
    });
});