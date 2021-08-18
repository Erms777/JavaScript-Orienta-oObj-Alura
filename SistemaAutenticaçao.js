/*
Ser autenticavel significa ter o método autenticar
Duck typing
*/

export class SistemaAutenticaçao{
    static login(autenticavel, senha){
        if(SistemaAutenticaçao.trueAutenticavel(autenticavel)){
            return autenticavel.autenticar(senha);
        }
       return false;
    }

    static trueAutenticavel(autenticavel){
        return "autenticar" in autenticavel && 
        autenticavel.autenticar instanceof Function
    }
}