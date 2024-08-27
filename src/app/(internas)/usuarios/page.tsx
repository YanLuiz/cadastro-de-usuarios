'use client'
import { Pagina } from "@/app/components/template/Pagina"
import Titulo from "@/app/components/template/Titulo";
import FormularioUsuario from "@/app/components/usuario/FormularioUsuario";
import ListaUsuario from "@/app/components/usuario/ListaUsuario";
import usuarios from "@/app/data/constants/usuarios";
import { IconUser } from "@tabler/icons-react";
import React from 'react';


export default function Page() {
    return (
        <Pagina className="flex flex-col gap-10">
            <Titulo icone={IconUser} principal="Usuários" secundario="Cadastro de Usuários"/>
            {/*<ListaUsuario/>*/}
            <FormularioUsuario usuario={usuarios[0]}/>
        </Pagina>
    )
}