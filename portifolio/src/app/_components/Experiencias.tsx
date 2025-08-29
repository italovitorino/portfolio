import { useTranslations } from "next-intl";
import { bebasNeue } from "../[locale]/fonts";
import { CardExperiencia } from "./CardExperiencia";
import Experiencia from "../../../messages/pt-BR.json"

export default function Experiencias() {
  const t = useTranslations("Experiencias");

  return (
    <div id="experiencias" className="flex justify-between w-full items-start px-10 md:px-8 py-10 gap-10">
      <h1 className={`${bebasNeue.className} text-6xl`}>{t("experiencias")}</h1>

      <div className="flex flex-col gap-12">
        {
          Experiencia.Experiencias.data.map((e, index)=> (
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
