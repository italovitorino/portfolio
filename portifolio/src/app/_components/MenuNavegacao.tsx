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

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
]

export function MenuNavegacaoDesktop({ vertical = false }: { vertical?: boolean }) {
  const t = useTranslations('Secoes');
  
  return (
    <NavigationMenu
      viewport={false}
      orientation={ vertical ? "vertical" : "horizontal"}
      className={`w-full ${vertical ? "items-start justify-start" : "justify-end"}`}
    >
      <NavigationMenuList className={`${vertical ? "flex-col gap-4 items-start justify-start" : ""}`}>
        {/* <NavigationMenuItem>
          <NavigationMenuTrigger className="items-start">Components</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem> */}
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/docs" className="text-[var(--cinza-claro)]">{t("experiencias")}</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/docs" className="text-[var(--cinza-claro)]">{t("projetos")}</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/docs" className="text-[var(--cinza-claro)]">{t("contatos")}</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
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
