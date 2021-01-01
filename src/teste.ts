// Varíavel do Tipo Booleano
let isLoading: boolean = false;

// Variavel do Tipo Number
let lista: number[];
lista = [1, 2, 3];
lista.push(4);

// Variável do Tipo Array de Números
let lista1: Array<number>;
lista1 = [4, 5, 6];
lista1.push(7);

// Variável de Array de Tipos 
let info: [string, number];

info = ["Roberto", 56];

// Tipo Enum
enum Status {
  Aguardando,
  Cancelado,
  Pago,
  Processando
}

let meuStatus: number = Status.Cancelado;

// Variável com Any, vai aceitar qualquer tipo de dados
let info1: any;

info1 = 4;
info1 = 'Roberto';
info1 = true;
info1 = [1, 2, "abcde"];

// Variável com Any, com acertiva de Types
let info2: any = 'Bonieky';
let infoLength: number = (info2 as string).length;

function bemvindo(nome: string, idade: string | number): string {
  let frase = 'Olá, ' + nome + ", você tem " + idade + " anos";

  return frase;
}

bemvindo('Bonieky', 90);