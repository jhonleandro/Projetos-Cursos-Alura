import {Funcionario} from "./Funcionario/Funcionario.js";
import {Gerente} from "./Funcionario/Gerente.js";
import {Diretor} from "./Funcionario/Diretor.js";
import {SistemasDeAutenticacao} from "./SistemaDeAutenticacao.js"
import { Cliente } from "./Cliente.js";


const diretor = new Diretor("Roberto", 10000, 11122233301);
const gerente = new Gerente("Lucio", 5000, 44455566602);
const cliente = new Cliente("Júlia", 77788899903, 456);

diretor.cadastrarSenha(654321);
gerente.cadastrarSenha(987654);

console.log(SistemasDeAutenticacao.login(gerente, 987654));
console.log(SistemasDeAutenticacao.login(cliente, 4556));


