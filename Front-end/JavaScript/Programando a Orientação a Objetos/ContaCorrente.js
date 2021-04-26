import {Cliente} from "./Cliente.js";

export class ContaCorrente{
    
    //variavéis
    static numeroDeContas = 0;
    agencia;
    _saldo = 0;
    _cliente;

    //getters e setters
    set cliente(instanciaCliente){
        if(instanciaCliente instanceof Cliente){
            this._cliente = instanciaCliente;
        }
    }
    
    get cliente(){
        return this._cliente;
    }

    get saldo(){
        return this._saldo;
    } 

    //construtor
    constructor(agencia, cliente){
        this.agencia = agencia;
        this._cliente = cliente;
        ContaCorrente.numeroDeContas++;
    }

    //funções
    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor;
            return valor;
        }
    }
    depositar(valor){
        if(valor > 0){
            this._saldo += valor;
        }
    }
    transferir(valor, conta){
        const valorTransferido = this.sacar(valor);
        conta.depositar(valorTransferido);
    }
}