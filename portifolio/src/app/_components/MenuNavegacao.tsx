"use client"

import * as React from "react"
import Link from "next/link"
import { CircleCheckIcon, CircleHelpIcon, CircleIcon, Menu } from "lucide-react"
import { useTranslations } from 'next-intl';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { AUTOR } from "@/lib/constants"
import { DialogTitle } from "@/components/ui/dialog"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"
import AlternadorIdioma from "./AlternadorIdioma"
import { bebasNeue } from "../[locale]/fonts";
import { useScrollSpy } from "@/hooks/use-scroll-spy"
import messages from "../../../messages/pt-BR.json"

export function MenuNavegacaoDesktop({ vertical = false }: { vertical?: boolean }) {
  
  const activeId = useScrollSpy();

  const t = useTranslations('Secoes');
  
  return (
    <NavigationMenu
      viewport={false}
      orientation={ vertical ? "vertical" : "horizontal"}
      className={`w-full ${vertical ? "items-start justify-start" : "justify-end"}`}
    >
      <NavigationMenuList className={`${vertical ? "flex-col gap-4 items-start justify-start" : ""}`}>
        {messages.Secoes.map(({id, label}) => (
          <NavigationMenuItem key={id}>
            <NavigationMenuLink asChild>
                <Link
                  href={`#${id}`}
                  className={`${navigationMenuTriggerStyle()} ${
                    activeId === id ? "text-primary font-bold" : ""
                  }`}
                >
                  {label}
                </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}

export function MenuNavegacao() {
  const [open, setOpen] = React.useState(false)

  return (
    <header className="w-full px-16 py-5 flex justify-between items-center bg-background">
      <div className="text-xl font-bold flex gap-5 items-center">
        <span className={`${bebasNeue.className} text-3xl`}>{AUTOR}</span>
        <AlternadorIdioma />
      </div>

      {/* Menu Desktop */}
      <div className="hidden md:flex">
        <MenuNavegacaoDesktop />
      </div>

      {/* Menu Mobile */}
      <div className="flex md:hidden">
        <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
            <button aria-label="Abrir menu">
            <Menu className="w-6 h-6" />
            </button>
        </SheetTrigger>
        <SheetContent side="right" className="p-4">
            <VisuallyHidden>
            <DialogTitle>Menu de Navegação</DialogTitle>
            </VisuallyHidden>
            <MenuNavegacaoDesktop vertical={true} />
        </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}