# classes-Jogo

# 3️⃣ Escrevendo as classes de um Jogo

**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções
- Classes e Objetos

## Objetivo:

Crie uma classe generica que represente um herói de uma aventura e que possua as seguintes propriedades:

- nome
- idade
- tipo (ex: guerreiro, mago, monge, ninja )

além disso, deve ter um método chamado atacar que deve atender os seguientes requisitos:

- exibir a mensagem: "o {tipo} atacou usando {ataque}")
- aonde o {tipo} deve ser concatenando o tipo que está na propriedade da classe
- e no {ataque} deve seguir uma descrição diferente conforme o tipo, seguindo a tabela abaixo:

se mago -> no ataque exibir (usou magia)
se guerreiro -> no ataque exibir (usou espada)
se monge -> no ataque exibir (usou artes marciais)
se ninja -> no ataque exibir (usou shuriken)

## Saída

Ao final deve se exibir uma mensagem:

- "o {tipo} atacou usando {ataque}"
  ex: mago atacou usando magia
  guerreiro atacou usando espada

Explicação do Código<br>
1. Classe Heroi: A classe é definida usando a palavra-chave class. O construtor (constructor) inicializa as propriedades nome, idade, e tipo com os valores passados.<br>
2. Método atacar: Este método utiliza uma estrutura de decisão switch para determinar o tipo de ataque com base na propriedade tipo. Dependendo do tipo, a variável ataque é atribuída a um valor correspondente.<br>
3. Instâncias da classe: Criamos quatro instâncias de Heroi, cada uma com um nome, idade e tipo diferentes.<br>
4. Chamada do Método atacar: O método atacar é chamado para cada herói, exibindo a mensagem apropriada.<br>

Saída Esperada<br>
Quando você executa esse código em um ambiente Node.js, a saída será:<br>
o mago atacou usando magia<br>
o guerreiro atacou usando espada<br>
o monge atacou usando artes marciais<br>
o ninja atacou usando shuriken
