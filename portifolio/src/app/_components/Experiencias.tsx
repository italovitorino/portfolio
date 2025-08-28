import { useTranslations } from "next-intl";
import { bebasNeue } from "../[locale]/fonts";
import { CardExperiencia } from "./CardExperiencia";
import { Cargo } from "@/lib/constants";

export default function Experiencias() {
  const t = useTranslations("Experiencias");

  const experiencias: Cargo[] = [
  {
    "cargo": "Desenvolvedor full-stack",
    "periodo": "Jan. 2025 - Atual",
    "empresa": "90 Tecnologia da Informação",
    "descricao": "Desenvolvedor full-stack, atuando no desenvolvimento de sistemas e na definição de soluções arquiteturais dos projetos."
  },
  {
    "cargo": "Suporte Técnico",
    "periodo": "Abr 2024 - Dez 2024",
    "empresa": "90 Tecnologia da Informação",
    "descricao": "Atendimento aos usuários do sistema, abertura de tickets de erro para o setor de desenvolvimento e criação de relatórios personalizados."
  },
  {
    "cargo": "Suporte Técnico",
    "periodo": "Dez 2023 - Abr 2024",
    "empresa": "RECIVIL",
    "descricao": "Atendimento aos usuários do sistema, abertura de tickets de erro para o setor de desenvolvimento."
  }
];

  return (
    <div id="experiencias" className="flex justify-between w-full items-start px-10 md:px-8 py-10 gap-10">
      <h1 className={`${bebasNeue.className} text-6xl`}>{t("experiencias")}</h1>

      <div className="flex flex-col gap-12">
        {
          experiencias.map((e, index)=> (
             <CardExperiencia 
              key={index} 
              cargo={e.cargo} 
              periodo={e.periodo} 
              empresa={e.empresa} 
              descricao={e.descricao}
            />
          ))
        }
      </div>
    </div>
  );
}
