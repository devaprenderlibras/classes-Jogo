class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
    atacar() {
        let ataque;
        // Estrutura de decisão para determinar o tipo de ataque
        switch (this.tipo) {
            case 'mago':
                ataque = 'magia';
                break;
            case 'guerreiro':
                ataque = 'espada';
                break;
            case 'monge':
                ataque = 'artes marciais';
                break;
            case 'ninja':
                ataque = 'shuriken';
                break;
            default:
                ataque = 'ataque desconhecido';
        }
        console.log(`o ${this.tipo} atacou usando ${ataque}`);
    }
}

// Criando instâncias da classe Heroi
const hero1 = new Heroi('Gandalf', 150, 'mago');
const hero2 = new Heroi('Aragorn', 30, 'guerreiro');
const hero3 = new Heroi('Li Mu Bai', 35, 'monge');
const hero4 = new Heroi('Ryu', 28, 'ninja');

// Chamando o método atacar para cada herói
hero1.atacar();
hero2.atacar();
hero3.atacar();
hero4.atacar();