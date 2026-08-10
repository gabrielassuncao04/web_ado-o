document.addEventListener('DOMContentLoaded', function () {

    let btn_perfil = document.getElementById('bl-perfil');
    let balao_login = document.getElementById('balao-login');

    if (btn_perfil && balao_login) {
        btn_perfil.addEventListener('click', function (event) {
            event.stopPropagation();
            balao_login.classList.toggle('ativo');
        });

        document.addEventListener('click', function () {
            balao_login.classList.remove('ativo');
        });

        balao_login.addEventListener('click', function (event) {
            event.stopPropagation();
        });
    }

    let cards = document.querySelectorAll('.noticia-car');
    let btn_prev = document.getElementById('btn-prev');
    let btn_next = document.getElementById('btn-next');
    let indice = 0;

    function mudar_noticia(novo_indice) {
        cards[indice].classList.remove('ativa');
        indice = novo_indice;
        cards[indice].classList.add('ativa');
    }

    if (btn_next) {
        btn_next.addEventListener('click', function () {
            let proximo = indice + 1;
            if (proximo >= cards.length) {
                proximo = 0;
            }
            mudar_noticia(proximo);
        });
    }

    if (btn_prev) {
        btn_prev.addEventListener('click', function () {
            let anterior = indice - 1;
            if (anterior < 0) {
                anterior = cards.length - 1;
            }
            mudar_noticia(anterior);
        });
    }

    let botoes_manutencao = document.querySelectorAll('.manutencao');

    for (let i = 0; i < botoes_manutencao.length; i++) {
    botoes_manutencao[i].addEventListener('click', function(event) {
        event.preventDefault(); 
        window.location.href = 'pages/erro.html'; 
    });
}

});
