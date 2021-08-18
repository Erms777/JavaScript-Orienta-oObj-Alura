import { Conta } from "./Conta.js";

export class ContaPoupança extends Conta{
    constructor(saldoinicial, cliente, agencia){
    super(saldoinicial, cliente, agencia);
    }

    sacar(valor){
        const taxa = 1.02;
        return this._sacar(valor, taxa);
    }
}