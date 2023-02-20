const movies = {
    0: 'https://www.indiewire.com/wp-content/uploads/2017/02/10wrp4zrhzcnjka7dklcxz6ebhd.jpg', // logan
    1: 'https://www.einerd.com.br/wp-content/uploads/2021/10/a-force-vingadores-ultimato-heroinas-mulheres-890x466.jpg', // ultimato
    2: 'https://cdn.britannica.com/88/200588-050-3F16ED94/Jim-Carrey-How-the-Grinch-Stole-Christmas.jpg', // grinch
    3: 'https://www.dci.com.br/wp-content/uploads/2023/01/vingadores-guerra-infinita.jpg', // guerra infinita
    4: 'https://m.media-amazon.com/images/M/MV5BMTY2ODQ3NjMyMl5BMl5BanBnXkFtZTcwODg0MTUzNA@@._V1_.jpg', // avatar
    5: 'https://assets.mubicdn.net/images/film/3397/image-w1280.jpg?1546146009', // indiana jones
    6: 'https://imageio.forbes.com/specials-images/imageserve/63056b6d029a8cffac053a5f/Robert-Pattinson-stars-in--The-Batman-/960x0.jpg?format=jpg&width=960', // batman
    7: 'https://images.immediate.co.uk/production/volatile/sites/3/2023/02/7-Toy-Story-3-2-078930c.jpg' // toy story
};
let verify = [0, 1, 2, 3, 4, 5, 6, 7]

const submit = document.querySelector('#send')
submit.addEventListener("click", (e) => {
    e.preventDefault();
    const value = document.querySelector('#ans').value.toLowerCase();
    // return value;
    const tag = document.querySelector('img');
    // tag.src = `${movies['0']}`;

    const getRan = () => {
        let num = Math.floor(Math.random() * verify.length);
        return verify[num];

    }


    if (document.querySelector('img').src == movies['0'] && value == 'logan') {
        let delIdx = verify.indexOf(0)
        verify.splice(delIdx, 1)
        let index = getRan();
        tag.src = `${movies[`${index}`]}`
        document.querySelector('#ans').value = ''
        document.querySelector('#contagem').innerHTML = `${Number(document.querySelector('#contagem').innerHTML) + 1}`
    }

    else if (document.querySelector('img').src == movies['1'] && value == 'ultimato') {
        let delIdx = verify.indexOf(1)
        verify.splice(delIdx, 1)
        let index = getRan();
        tag.src = `${movies[`${index}`]}`
        document.querySelector('#ans').value = ''
        document.querySelector('#contagem').innerHTML = `${Number(document.querySelector('#contaglologanem').innerHTML) + 1}`
    }

    else if (document.querySelector('img').src == movies['2'] && value == 'grinch') {
        let delIdx = verify.indexOf(2)
        verify.splice(delIdx, 1)
        let index = getRan();
        tag.src = `${movies[`${index}`]}`
        document.querySelector('#ans').value = ''
        document.querySelector('#contagem').innerHTML = `${Number(document.querySelector('#contagem').innerHTML) + 1}`
    }

    else if (document.querySelector('img').src == movies['3'] && value == 'guerra infinita') {
        let delIdx = verify.indexOf(3)
        verify.splice(delIdx, 1)
        let index = getRan();
        tag.src = `${movies[`${index}`]}`
        document.querySelector('#ans').value = ''
        document.querySelector('#contagem').innerHTML = `${Number(document.querySelector('#contagem').innerHTML) + 1}`
    }

    else if (document.querySelector('img').src == movies['4'] && value == 'avatar') {
        let delIdx = verify.indexOf(4)
        verify.splice(delIdx, 1)
        let index = getRan();
        tag.src = `${movies[`${index}`]}`
        document.querySelector('#ans').value = ''
        document.querySelector('#contagem').innerHTML = `${Number(document.querySelector('#contagem').innerHTML) + 1}`
    }

    else if (document.querySelector('img').src == movies['5'] && value == 'indiana jones') {
        let delIdx = verify.indexOf(5)
        verify.splice(delIdx, 1)
        let index = getRan();
        tag.src = `${movies[`${index}`]}`
        document.querySelector('#ans').value = ''
        document.querySelector('#contagem').innerHTML = `${Number(document.querySelector('#contagem').innerHTML) + 1}`
    }

    else if (document.querySelector('img').src == movies['6'] && value == 'batman') {
        let delIdx = verify.indexOf(6)
        verify.splice(delIdx, 1)
        let index = getRan();
        tag.src = `${movies[`${index}`]}`
        document.querySelector('#ans').value = ''
        document.querySelector('#contagem').innerHTML = `${Number(document.querySelector('#contagem').innerHTML) + 1}`
    }

    else if (document.querySelector('img').src == movies['7'] && value == 'toy story') {
        let delIdx = verify.indexOf(7)
        verify.splice(delIdx, 1)
        let index = getRan();
        tag.src = `${movies[`${index}`]}`
        document.querySelector('#ans').value = ''
        document.querySelector('#contagem').innerHTML = `${Number(document.querySelector('#contagem').innerHTML) + 1}`
    }
    else {
        verify = [0, 1, 2, 3, 4, 5, 6, 7]
        let index = getRan();
        tag.src = `${movies[`${index}`]}`
        document.querySelector('#ans').value = ''
        document.querySelector('#contagem').innerHTML = '0'
        alert('Resposta errada!')
    };

    if (verify.length == 0) {
        const pFinal = document.querySelector('#final')
        document.querySelector('#contagem').innerHTML = `${Number(document.querySelector('#contagem').innerHTML) + 1}`
        tag.src = ''
        tag.alt = ''
        pFinal.innerHTML = 'PARABENS, CONCLUIU <3'
    }

});