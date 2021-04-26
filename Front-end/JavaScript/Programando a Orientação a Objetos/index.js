import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";

// function verSaldo(cliente){
//     return cliente.contaCorrente.saldo;
// }

//instânciando os clientes
const cliente1 = new Cliente("John", 11122233301);
const cliente2 = new Cliente("Mary", 44455566602);
const cliente3 = new Cliente("Katlin", 77788899903);

//instânciando as contas
const contaCliente1 = new ContaCorrente(263, cliente1);
const contaCliente2 = new ContaCorrente(263, cliente2);
const contaCliente3 = new ContaCorrente(263, cliente3);

contaCliente1.depositar(700);
console.log(`Saldo do ${contaCliente1._cliente.nome}: R$${contaCliente1.saldo}`);
console.log(`Saldo do ${contaCliente2._cliente.nome}: R$${contaCliente2.saldo}`);
console.log(`Saldo do ${contaCliente3._cliente.nome}: R$${contaCliente3.saldo}`);
contaCliente1.sacar(100);
contaCliente1.transferir(200, contaCliente2);
contaCliente1.transferir(150, contaCliente3);
contaCliente2.transferir(50, contaCliente3);
console.log(`Saldo do ${contaCliente1._cliente.nome}: R$${contaCliente1.saldo}`);
console.log(`Saldo do ${contaCliente2._cliente.nome}: R$${contaCliente2.saldo}`);
console.log(`Saldo do ${contaCliente3._cliente.nome}: R$${contaCliente3.saldo}`);

// console.log(contaCliente1);
// console.log(cliente2);
// console.log(cliente3);