import "reflect-metadata";
import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";
import { UsuarioResolver } from "./UsuarioResolver";

async function iniciarServidor() {
    
    const schema = await buildSchema({
        resolvers: [UsuarioResolver],  
    });

    
    const server = new ApolloServer({ schema });

    
    server.listen({ port: 4000 }, () =>
        console.log("Servidor de GraphQL ejecutándose en http://localhost:4000/graphql")
    );
}

iniciarServidor();