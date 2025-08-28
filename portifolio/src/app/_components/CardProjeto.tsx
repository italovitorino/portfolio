"use client"

import Image from 'next/image';
import { useTranslations } from "next-intl"
import { Badge } from "@/components/ui/badge";
import { FaGithub } from "react-icons/fa";

interface ProjetoProps {
  titulo: string,
  descricao: string,
  ano: number,
  tecnologias: string[]
  urlCodigoFonte: string
}

export function CardProjeto({ titulo, descricao, ano, tecnologias, urlCodigoFonte }: ProjetoProps) {
  const t = useTranslations("Projetos")
  
  return (
    <div 
      className="flex w-full gap-5 rounded-2xl border border-[var(--cinza-escuro)] 
                 p-6 shadow-sm transition-all duration-300 
                 bg-white/5"
    >
      <div>
        <Image 
          src="/file.svg"
          alt="Minha foto de perfil"
          width={300}
          height={200}
          className="rounded-2xl object-cover"
        />
      </div>

      {/* Conteúdo */}
      <div className="flex flex-col justify-between w-full">
        {/* Título e descrição */}
        <div className="flex flex-col gap-3">
          <h1 className="text-3xl font-semibold">{titulo}</h1>
          <p className="text-[var(--cinza-claro)] text-nowrap truncate">{descricao}</p>
        </div>

        {/* Sobre o projeto */}
        <div className="mt-6">
          <h2 className="text-sm font-bold uppercase tracking-wide mb-3">Sobre o projeto</h2>
          
          <div className="border-t border-[var(--cinza-escuro)] py-2 flex justify-between text-sm">
            <span className="text-[var(--cinza-claro)]">Ano</span>
            <span>{ano}</span>
          </div>

          <div className="border-t border-[var(--cinza-escuro)] py-2 flex justify-between text-sm">
            <span className="text-[var(--cinza-claro)]">Tecnologias</span>
            <div className="flex gap-2 flex-wrap">
              {tecnologias.map((tec, i) => (
                <Badge 
                  key={i} 
                  className="bg-[var(--primaria)] text-black px-3 py-1 rounded-2xl shadow-sm"
                >
                  {tec}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        <a 
          className="mt-6 flex items-center gap-2 text-[var(--primaria)] font-bold uppercase text-sm hover:underline"
          href={urlCodigoFonte} 
          target="_blank"
        >
          {t("codigoFonte")} <FaGithub size={18}/>
        </a>
      </div>
    </div>
  )
}
