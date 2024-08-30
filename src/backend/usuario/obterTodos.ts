'use server'

import Id from "@/core/utils/Id";
import { Usuario } from "../../core/model/Usuario";
import RepositorioUsuario from "./RepositorioUsuario";

export default async function obterTodos() {
    return RepositorioUsuario.obterTodos()
}