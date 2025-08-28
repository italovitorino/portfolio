"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { bebasNeue } from "../[locale]/fonts";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { CardProjeto } from "./CardProjeto";

interface Repo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  created_at: string;
  language: string;
}

export default function Projetos() {
  const t = useTranslations("Projetos");
  const [repos, setRepos] = useState<Repo[]>([]);

  useEffect(() => {
    fetch("https://api.github.com/users/muriloAmachado/repos")
      .then((res) => res.json())
      .then((data) => {
        // Ordenar por data de criação decrescente
        const sorted = data.sort(
          (a: Repo, b: Repo) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
        );
        setRepos(sorted);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div id="projetos" className="px-10 md:px-8 py-10 gap-10 w-full">
      <h1 className={`${bebasNeue.className} text-6xl`}>{t("projetos")}</h1>
      <p className="mb-6 text-[var(--cinza-claro)]">{t("descricao")}</p>

      <Carousel>
        <CarouselContent>
          {repos.map((repo) => (
            <CarouselItem key={repo.id} className="basis-1/2">
              <CardProjeto
                titulo={repo.name}
                descricao={repo.description || "Sem descrição"}
                ano={new Date(repo.created_at).getFullYear()}
                tecnologias={[repo.language || "N/A"]}
                urlCodigoFonte={repo.html_url}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
