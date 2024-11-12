import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { Usuario } from "./Usuario";


@Resolver(Usuario)

export class UsuarioResolver {

    private usuarios: Usuario[] = [];

    @Query(() => [Usuario]) 
    obtenerUsuarios(): Usuario[] {
        return this.usuarios;
    }

    @Mutation(() => Usuario)
    crearUsuario(
        @Arg('nombre') nombre: string,
        @Arg('email') email: string,
    ): Usuario {

        const nuevoUser = { id: this.usuarios.length + 1, nombre, email }
        this.usuarios.push(nuevoUser);
        return nuevoUser;
    }


}