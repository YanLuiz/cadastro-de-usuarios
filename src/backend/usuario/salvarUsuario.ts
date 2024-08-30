'use server'

import Id from "@/core/utils/Id";
import { Usuario } from "../../core/model/Usuario";
import RepositorioUsuario from "./RepositorioUsuario";

export default async function salvarUsuario(usuario: Partial<Usuario>) {
    const novoUsuario = {
        ...usuario, 
        id: usuario.id ?? Id.novo,
    }


    return RepositorioUsuario.salvar(novoUsuario as Usuario)
}