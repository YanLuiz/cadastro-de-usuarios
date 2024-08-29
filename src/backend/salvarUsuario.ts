'use server'

import { Usuario } from "../core/model/Usuario";

export default async function salvarUsuario(usuario: Usuario) {
    const novoUsuario = {
        ...usuario, 
    }
}