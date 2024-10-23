# classes-Jogo

# Escrevendo as classes de um Jogo

class Heroi: <br>
    def __init__(self, nome, idade, tipo):<br>
        self.nome = nome<br>
        self.idade = idade<br>
        self.tipo = tipo<br>
    def atacar(self):<br>
        if self.tipo == "mago":<br>
            ataque = "magia"<br>
        elif self.tipo == "guerreiro":<br>
            ataque = "espada"<br>
        elif self.tipo == "monge":<br>
            ataque = "artes marciais"<br>
        elif self.tipo == "ninja":<br>
            ataque = "shuriken"<br>
        else:<br>
            ataque = "ataque desconhecido"<br>
        print(f"o {self.tipo} atacou usando {ataque}")

// Criando instâncias da classe Heroi <br>
hero1 = Heroi("Gandalf", 150, "mago") <br>
hero2 = Heroi("Aragorn", 30, "guerreiro") <br>
hero3 = Heroi("Li Mu Bai", 35, "monge") <br>
hero4 = Heroi("Ryu", 28, "ninja")

// Chamando o método atacar para cada herói <br>
hero1.atacar() <br>
hero2.atacar() <br>
hero3.atacar() <br>
hero4.atacar()

# Explicação do Código
1. Classe Heroi: Definimos uma classe chamada Heroi com um construtor __init__ que inicializa as propriedades nome, idade e tipo.
2. Método atacar: O método atacar verifica o tipo do herói e determina qual ataque utilizar. Ele usa uma estrutura de decisão (if-elif-else) para isso. Em seguida, exibe a mensagem apropriada.
3. Instâncias da classe: Criamos quatro instâncias de Heroi, cada uma representando um herói diferente, e chamamos o método atacar para cada um.

# Saída Esperada
Ao executar o código, a saída será semelhante a esta:

o mago atacou usando magia <br>
o guerreiro atacou usando espada <br>
o monge atacou usando artes marciais <br>
o ninja atacou usando shuriken
