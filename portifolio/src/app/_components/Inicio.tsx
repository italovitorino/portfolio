import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { bebasNeue } from '../[locale]/fonts';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BotaoRedeSocial } from './BotaoRedeSocial';
import { GITHUB_URL, LINKEDIN_URL } from '@/lib/constants';

export default function Inicio() {
    const t = useTranslations('SobreMim');
    return (
        <div className="flex flex-col md:flex-row w-full items-center justify-between px-10 md:px-8 py-10 gap-10">
            
            {/* Imagem primeiro no mobile */}
            <div className="w-full md:w-1/2 flex justify-center items-center order-1 md:order-2">
                <Image 
                    src="/Eu.jpg"
                    alt="Minha foto de perfil"
                    width={562}
                    height={562}
                    className="rounded-3xl"
                />
            </div>

            {/* Texto depois no mobile */}
            <div className="flex flex-col gap-10 text-wrap w-full md:w-1/2 text-center md:text-left order-2 md:order-1">
                <div>
                    <h1 className={`text-9xl md:text-6xl mb-6 ${bebasNeue.className}`}>{t("apresentacao")}</h1>
                    <p className="break-words max-w-full text-[var(--cinza-claro)] whitespace-pre-line text-justify">{t("descricao")}</p>
                </div>
                
                <div className="flex gap-3 items-center">
                    <a href="/CV - Ítalo Vitorino.pdf" download>
                        <Button className="bg-[var(--primaria)] text-black rounded-full flex items-center gap-2 hover:bg-[var(--primaria-hover)] w-44 cursor-pointer">
                            DOWNLOAD CV
                            <Download />
                        </Button>
                    </a>


                    <BotaoRedeSocial link={LINKEDIN_URL} rotulo="Linkedin">
                        <FaLinkedinIn size={20}/>
                    </BotaoRedeSocial>

                    <BotaoRedeSocial link={GITHUB_URL} rotulo="GitHub">
                        <FaGithub size={20}/>
                    </BotaoRedeSocial>
                </div>
            </div>
        </div>
    );
}
