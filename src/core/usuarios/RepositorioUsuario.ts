import { Senha } from './../shared/Senha';
import Usuario from "./usuario";


export default class RepositorioUsuario {
    usuarios: Usuario[] = [
        new Usuario("maria@mail.com", "1234567"),
        new Usuario("pedro@mail.com", "1234"),
        new Usuario("ana@mail.com", "abc")
    ];

    encontrarIndice(email: string) {
        const i = this.usuarios.findIndex((usr) => usr.email === email);
        return i;
    }

    usuarioExiste(email: string) {
        return this.encontrarIndice(email) >= 0;
    }

    loginCorreto(email: string, senha: string) {
        const i = this.encontrarIndice(email);
        const senhaEstaCorreta = Senha.comparar(senha, this.usuarios[i]?.senha)
        return senhaEstaCorreta;
    }
}