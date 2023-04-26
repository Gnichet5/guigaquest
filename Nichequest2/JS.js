let movies = [
    {
        link: 'https://www.indiewire.com/wp-content/uploads/2017/02/10wrp4zrhzcnjka7dklcxz6ebhd.jpg',
        ans: 'logan',
        dica: 'Qual era o nome real do Wolverine mesmo?'
    },
    {
        link: 'https://www.einerd.com.br/wp-content/uploads/2021/10/a-force-vingadores-ultimato-heroinas-mulheres-890x466.jpg',
        ans: 'ultimato',
        dica: 'Último filme dos Vingadores'
    },
    {
        link: 'https://cdn.britannica.com/88/200588-050-3F16ED94/Jim-Carrey-How-the-Grinch-Stole-Christmas.jpg',
        ans: 'grinch',
        dica: 'Ele odeia o natal'
    },
    {
        link: 'https://www.dci.com.br/wp-content/uploads/2023/01/vingadores-guerra-infinita.jpg',
        ans: 'guerra infinita',
        dica: 'Guerra que não acaba nunca'
    },
    {
        link: 'https://m.media-amazon.com/images/M/MV5BMTY2ODQ3NjMyMl5BMl5BanBnXkFtZTcwODg0MTUzNA@@._V1_.jpg',
        ans: 'avatar',
        dica: 'Só o nome da saga, também tem um anime'
    },
    {
        link: 'https://assets.mubicdn.net/images/film/3397/image-w1280.jpg?1546146009',
        ans: 'indiana jones',
        dica: 'João da índia'
    },
    {
        link: 'https://imageio.forbes.com/specials-images/imageserve/63056b6d029a8cffac053a5f/Robert-Pattinson-stars-in--The-Batman-/960x0.jpg?format=jpg&width=960',
        ans: 'batman',
        dica: 'Só o do herói, homem morcego'
    },
    {
        link: 'https://images.immediate.co.uk/production/volatile/sites/3/2023/02/7-Toy-Story-3-2-078930c.jpg',
        ans: 'toy story',
        dica: 'Só o nome da saga, história de brinquedo'
    },
];

const moviesBack = [...movies];
const submit = document.querySelector('#send');
const dica = document.querySelector('#dica');

submit.addEventListener("click", (e) => {
    e.preventDefault();
    const value = document.querySelector('#ans').value.toLowerCase();
    const tag = document.querySelector('img');
    let link = tag.src
        let img = movies.filter(elem => {
            return elem.link == link
        })
    ;
    if (img[0].ans == value) {
        let delIdx = movies.findIndex((obj) => obj.ans === value)
        movies.splice(delIdx, 1)
        let index = Math.floor(Math.random() * movies.length);
        if (movies.length > 0) {
            tag.src = `${movies[`${index}`].link}`
        }
        document.querySelector('#ans').value = ''
        document.querySelector('#contagem').innerHTML = `${Number(document.querySelector('#contagem').innerHTML) + 1}`
        console.log(movies)
        Swal.fire({
            title: 'Resposta Correta!',
            text: 'Mais um ponto contabilizado',
            icon: 'success',
            confirmButtonText: 'Continuar',
            // color: '#ccc'
          })
    } else {
        Swal.fire({
            title: 'Resposta Incorreta!',
            text: 'Jogo Reiniciado',
            icon: 'error',
            confirmButtonText: 'Continuar'
          })
        movies = [...moviesBack]
        let index = Math.floor(Math.random() * movies.length);
        tag.src = `${movies[`${index}`].link}`
        document.querySelector('#ans').value = ''
        document.querySelector('#contagem').innerHTML = '0'
    };
    if (movies.length == 0) {
        const pFinal = document.querySelector('#final')
        document.querySelector('#contagem').innerHTML = `${Number(document.querySelector('#contagem').innerHTML)}`
        tag.src = ''
        tag.alt = ''
        pFinal.innerHTML = 'PARABÉNS, CONCLUIU <3'
    };
}
);

function showDica() {
    let link = document.querySelector('img').src;
        let img = movies.filter(elem => {
            return elem.link == link
        })
    let dica = img[0].dica;
    Swal.fire({
        title: 'Dica',
        text: dica,
        confirmButtonText: 'Continuar'
    }) 
}

function api() {
    fetch("https://api.nationalize.io/?name=guilherme")
      .then((response) => response.json())
      .then((data) => console.log(data));
}

setTimeout(api, 500);