import * as React from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { CaretDownIcon } from "@radix-ui/react-icons";
import { navigation } from "../../data/navigation";
import logo from "../../assets/images/profile.png";
import { Link } from "react-router-dom";



export default function CardNav() {
  return (
    <NavigationMenu.Root className="fixed z-50 -translate-x-1/2 top-6 left-1/2">
      <NavigationMenu.List className="flex items-center gap-2 px-4 py-2 min-h-[56px] border shadow-xl rounded-2xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-slate-200/60 dark:border-slate-700/60">
        
        {navigation.map((nav) => (
          <NavItem key={nav.label} label={nav.label}>
            {nav.items.map((item) => (
              <MenuItem
                key={item.title}
                title={item.title}
                href={item.href}
              >
                {item.description}
              </MenuItem>
            ))}
          </NavItem>
        ))}

        <NavigationMenu.Item>
          <NavigationMenu.Link
            href="https://github.com/reactstackdev"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-sm font-medium transition-colors rounded-xl text-slate-800 dark:text-slate-100 hover:bg-slate-200/60 dark:hover:bg-slate-700/60"
          >
            GitHub
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Link
            href="../../../public/AltaCV_Template.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-sm font-medium transition-colors rounded-xl text-slate-800 dark:text-slate-100 hover:bg-slate-200/60 dark:hover:bg-slate-700/60"
          >
            CV
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
        <NavigationMenu.Link asChild>
          <Link
            to="/"
            className="flex items-center justify-center w-10 h-10 overflow-hidden transition rounded-full hover:ring-2 hover:ring-indigo-500"
            aria-label="Inicio"
          >
            <img
              src={logo}
              alt="Inicio"
              className="object-cover w-full h-full"
            />
          </Link>
        </NavigationMenu.Link>
      </NavigationMenu.Item>


      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
}

function NavItem({ label, children }) {
  return (
    <NavigationMenu.Item className="relative">
      <NavigationMenu.Trigger className="flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors cursor-pointer rounded-xl text-slate-800 dark:text-slate-100 hover:bg-slate-200/60 dark:hover:bg-slate-700/60">
        {label}
        <CaretDownIcon className="h-4 w-4 transition-transform data-[state=open]:rotate-180" />
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

function MenuItem({ title, children, href }) {
  return (
    <li>
      <NavigationMenu.Link asChild>
        <Link
          to={href}
          className="block px-4 py-3 transition-colors rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800"
        >
          <div className="text-sm font-medium text-slate-900 dark:text-slate-100">
            {title}
          </div>
          <p className="text-xs text-slate-600 dark:text-slate-400">
            {children}
          </p>
        </Link>
      </NavigationMenu.Link>
    </li>
  );
}

