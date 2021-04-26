export class SistemasDeAutenticacao{

    static login(autenticavel, senha){

        if(SistemasDeAutenticacao.ehAutenticavel(autenticavel)){

            return autenticavel.autenticar(senha);

        }

        return false;

    }

    static ehAutenticavel(autenticavel){

        return "autenticar"  in autenticavel && autenticavel.autenticar instanceof Function;

    }

}