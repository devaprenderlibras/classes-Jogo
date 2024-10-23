# classes-Jogo

Escrevendo as classes de um Jogo<br>

class Heroi {<br>
    constructor(nome, idade, tipo) {<br>
        this.nome = nome;<br>
        this.idade = idade;<br>
        this.tipo = tipo;<br>
    }<br>
    atacar() {<br>
        let ataque;<br>  
        // Estrutura de decisão para determinar o tipo de ataque<br>
        switch (this.tipo) {<br>
            case 'mago':<br>
                ataque = 'magia';<br>
                break;<br>
            case 'guerreiro':<br>
                ataque = 'espada';<br>
                break;<br>
            case 'monge':<br>
                ataque = 'artes marciais';<br>
                break;<br>
            case 'ninja':<br>
                ataque = 'shuriken';<br>
                break;<br>
            default:<br>
                ataque = 'ataque desconhecido';<br>
        }<br>
        console.log(`o ${this.tipo} atacou usando ${ataque}`);<br>
    }<br>
}<br>

// Criando instâncias da classe Heroi<br>
const hero1 = new Heroi('Gandalf', 150, 'mago');<br>
const hero2 = new Heroi('Aragorn', 30, 'guerreiro');<br>
const hero3 = new Heroi('Li Mu Bai', 35, 'monge');<br>
const hero4 = new Heroi('Ryu', 28, 'ninja');<br>

// Chamando o método atacar para cada herói<br>
hero1.atacar();<br>
hero2.atacar();<br>
hero3.atacar();<br>
hero4.atacar();<br>

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
