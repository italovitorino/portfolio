'use client'

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useForm } from 'react-hook-form';
import { FaGithub, FaInstagram, FaLinkedin, FaLinkedinIn } from 'react-icons/fa';
import { BotaoRedeSocial } from './BotaoRedeSocial';
import { GITHUB_URL, LINKEDIN_URL } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import { bebasNeue } from '../[locale]/fonts';
import { useTranslations } from 'next-intl';
import emailjs from '@emailjs/browser';

export default function Contato() {
    const form = useForm();

    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const userID = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
    
    const t = useTranslations("Contato");

    const handleSubmit = (data: any) => {
        emailjs.send(
            serviceID ?? "",
            templateID ?? "",
            {
                name: data.name,
                email: data.email,
                message: data.message
            },
            userID ?? ""
        )
        .then(() => {
            alert('Mensagem enviada com sucesso!');
            form.reset();
        })
        .catch((err) => {
            console.error(err);
            alert('Erro ao enviar mensagem.');
        });
    };
    
    return (
        <div id='contato' className="flex flex-col md:flex-row w-full justify-between px-10 md:px-8 py-10 gap-8">
            <div className="text-wrap w-full h-full md:w-1/2 align-top md:text-left flex flex-col gap-y-8">
                <h1 className={`${bebasNeue.className} text-6xl`}>{t("titulo")}</h1>
                <p>muriloandrademachado@gmail.com</p>
                <div className='flex gap-x-2'>
                    <BotaoRedeSocial link={LINKEDIN_URL} rotulo="Linkedin">
                        <FaLinkedinIn size={20}/>
                    </BotaoRedeSocial>

                    <BotaoRedeSocial link={GITHUB_URL} rotulo="GitHub">
                        <FaGithub size={20}/>
                    </BotaoRedeSocial>

                    <BotaoRedeSocial link={GITHUB_URL} rotulo="GitHub">
                        <FaInstagram size={20}/>
                    </BotaoRedeSocial>
                </div>
            </div>
            <div className="w-full md:w-1/2 flex justify-center items-center">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-5 flex flex-col w-full">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Nome</FormLabel>
                            <FormControl>
                                <Input
                                    value={String(field.value || '')}
                                    onChange={(val) => field.onChange(val)}
                                    placeholder="Seu nome"
                                />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>E-mail</FormLabel>
                            <FormControl>
                                <Input
                                    value={String(field.value || '')}
                                    onChange={(val) => field.onChange(val)}
                                    placeholder="Seu e-mail"
                                />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Assunto</FormLabel>
                            <FormControl>
                                <Input
                                    value={String(field.value || '')}
                                    onChange={(val) => field.onChange(val)}
                                    placeholder="Assunto"
                                />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="mensagem"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Mennsagem</FormLabel>
                            <FormControl>
                                <Textarea
                                    value={String(field.value || '')}
                                    onChange={(val) => field.onChange(val)}
                                    placeholder="Sua mensagem"
                                    className='rounded-2xl'
                                />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button
                        className='bg-secondary w-min rounded-4xl px-8 py-6'
                        size={"lg"}
                    >
                        ENVIAR
                    </Button>
                    </form>
                </Form>
            </div>

            {/* Texto depois no mobile */}
            
        </div>
    );
}
