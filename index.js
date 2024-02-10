const perguntas = [
    {
      pergunta: "O que é JavaScript?",
      respostas: [
        "Uma linguagem de programação de servidor",
        "Uma linguagem de marcação",
        "Uma linguagem de programação de alto nível"
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a função do operador 'typeof' em JavaScript?",
      respostas: [
        "Concatenar strings",
        "Verificar o tipo de uma variável",
        "Realizar operações matemáticas"
      ],
      correta: 1
    },
    {
      pergunta: "Como se declara uma variável em JavaScript?",
      respostas: [
        "var nomeVariavel;",
        "variable nomeVariavel;",
        "let nomeVariavel ="
      ],
      correta: 2
    },
    {
      pergunta: "O que é uma função em JavaScript?",
      respostas: [
        "Um tipo de dado",
        "Um operador lógico",
        "Um bloco de código reutilizável"
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a diferença entre 'let' e 'const' na declaração de variáveis?",
      respostas: [
        "Nenhuma, são intercambiáveis",
        "let é usado para variáveis mutáveis, const para imutáveis",
        "const é usado para variáveis globais, let para locais"
      ],
      correta: 1
    },
    {
      pergunta: "O que é o DOM em JavaScript?",
      respostas: [
        "Um método de criptografia",
        "Um modelo de objeto para interação com documentos HTML",
        "Um sistema de gerenciamento de pacotes"
      ],
      correta: 1
    },
    {
      pergunta: "O que é um evento em JavaScript?",
      respostas: [
        "Uma função recursiva",
        "Uma ação que ocorre em resposta a uma interação do usuário",
        "Um tipo de dado primitivo"
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a finalidade do método 'querySelector'?",
      respostas: [
        "Modificar o estilo de um elemento",
        "Selecionar elementos no DOM com base em um seletor CSS",
        "Calcular valores matemáticos"
      ],
      correta: 1
    },
    {
      pergunta: "O que é um loop 'for' em JavaScript?",
      respostas: [
        "Uma estrutura condicional",
        "Um tipo de dado composto",
        "Um meio de repetir um bloco de código várias vezes"
      ],
      correta: 2
    },
    {
      pergunta: "Como se adiciona um comentário de uma linha em JavaScript?",
      respostas: [
        "// Este é um comentário",
        "# Este é um comentário",
        "/* Este é um comentário */"
      ],
      correta: 0
    },
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  for(const item of perguntas) {
    const quizItem =  template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
    for(let resposta of item.respostas){
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-',+ perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
        
        corretas.delete(item)
        if(estaCorreta){
          corretas.add(item)
        }
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
  
      quizItem.querySelector('dl').appendChild(dt)
    }
  
    quizItem.querySelector('dl dt').remove()
  
    quiz.appendChild(quizItem)
  }