import * as React from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { CaretDownIcon } from "@radix-ui/react-icons";
import classNames from "classnames";

export default function CardNav() {
  return (
    <NavigationMenu.Root className="fixed z-50 -translate-x-1/2 top-6 left-1/2">
      <NavigationMenu.List
        className="flex items-center gap-2 px-4 py-2 border shadow-xl rounded-2xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-slate-200/60 dark:border-slate-700/60"
      >
        <NavItem label="Sobre mí">
          <MenuItem title="Quién soy">Conóceme mejor</MenuItem>
          <MenuItem title="Skills">Tecnologías y stack</MenuItem>
        </NavItem>

        <NavItem label="Experiencia">
          <MenuItem title="Experiencia laboral">Mi recorrido profesional</MenuItem>
          <MenuItem title="Proyectos">Trabajos destacados</MenuItem>
        </NavItem>

        <NavItem label="Estudios">
          <MenuItem title="Formación">Estudios y cursos</MenuItem>
          <MenuItem title="Certificaciones">Certificaciones obtenidas</MenuItem>
        </NavItem>

        <NavigationMenu.Item>
          <NavigationMenu.Link
            href="https://github.com/tuusuario"
            className="px-4 py-2 text-sm font-medium transition-colors rounded-xl text-slate-800 dark:text-slate-100 hover:bg-slate-200/60 dark:hover:bg-slate-700/60"
          >
            GitHub
          </NavigationMenu.Link>
        </NavigationMenu.Item>
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
}

function NavItem({ label, children }) {
  return (
    <NavigationMenu.Item className="relative">
      <NavigationMenu.Trigger
        className="flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors rounded-xl text-slate-800 dark:text-slate-100 hover:bg-slate-200/60 dark:hover:bg-slate-700/60"
      >
        {label}
        <CaretDownIcon className="h-4 w-4 transition-transform group-data-[state=open]:rotate-180" />
      </NavigationMenu.Trigger>

      <NavigationMenu.Content
        className="
          absolute left-0 top-full mt-3
          w-[260px]
          rounded-2xl
          bg-white dark:bg-slate-900
          shadow-xl
          border border-slate-200 dark:border-slate-700
          p-2
          data-[motion=from-start]:animate-in
          data-[motion=from-start]:fade-in
          data-[motion=from-start]:slide-in-from-top-2
        "
      >
        <ul className="space-y-1">{children}</ul>
      </NavigationMenu.Content>
    </NavigationMenu.Item>
  );
}

function MenuItem({ title, children }) {
  return (
    <li>
      <NavigationMenu.Link asChild>
        <a
          href="#"
          className="block px-4 py-3 transition-colors rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800"
        >
          <div className="text-sm font-medium text-slate-900 dark:text-slate-100">
            {title}
          </div>
          <p className="text-xs text-slate-600 dark:text-slate-400">
            {children}
          </p>
        </a>
      </NavigationMenu.Link>
    </li>
  );
}
