const form = document.getElementById('form-atividade')
const imgAprovado = '<img src="./images/aprovado.png" alt="Emoji Festejando"/>'
const imgReprovado = '<img src="./images/reprovado.png" alt="Emoji Triste"/>'
const atividades = []
const notas = []
const spamAprovado ='<span class="aprovado"> Aprovado </span>'
const spamReprovado ='<span class="reprovado"> Reprovado </span>'
const notaMinima = parseFloat(prompt("Digite a nota Mínima"))

let linhas =''

form.addEventListener('submit',function(e)
{
    e.preventDefault()

    adicionaLinha()
    atualizaTabela()
    atualizaMediaFinal()
})


function adicionaLinha()
{
    const inputNomeAtividade = document.getElementById('nome-atividade')
    const inputNotaAtividade = document.getElementById('nota-atividade')

   // let linhas = Deixando a variavel aqui o programa dentro escopo
   //              do form.addEventListener() a linha é zerada   
    if(atividades.includes(inputNomeAtividade.value))
    {   
        alert(`A Atividade ${inputNomeAtividade.value} já foi inserida`)
    }
    else
    {   
        atividades.push(inputNomeAtividade.value)
        notas.push(parseFloat(inputNomeAtividade.value))

        let linha = '<tr>'
        linha += `<td>${inputNomeAtividade.value}</td>`
        linha += `<td>${inputNotaAtividade.value}</td>`
        linha += `<td>${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}</td>`
        linha += '</tr>'

        linhas += linha
    }
    
    inputNomeAtividade.value = ''
    inputNomeAtividade.value = ''
}

function atualizaTabela()
{
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas
}

function atualizaMediaFinal()
{
    const mediaFinal = calculaMediaFinal()

    document.getElementById('media-final-valor').innerHTML  = mediaFinal
    document.getElementById('media-final-resultado').innerHTML  = mediaFinal >= notaMinima ? spamAprovado : spamReprovado
}

function calculaMediaFinal()
{
    let somaDasNotas = 0
    for(let i=0; i < notas.length; i++ )
    {
        somaDasNotas += notas[i]
    }
    return somaDasNotas / notas.length
}
/*
const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas
*/