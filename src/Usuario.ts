import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
export class Usuario {

    constructor(id: number, nombre: string, email: string) {
        this.id = id;
        this.nombre = nombre;
        this.email = email;
    }

    @Field(() => ID) 
    id: number;
  
    @Field() 
    nombre: string;
  
    @Field() 
    email: string;

}