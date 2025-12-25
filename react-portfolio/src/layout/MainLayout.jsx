import { ThemeToggleButton } from "../components/buttons/Buttons.jsx";
import CardNav from "../components/navbar/CardNav.jsx";

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-slate-300 dark:bg-slate-900">
      <CardNav />

      <main className="pt-20">
        {children}
      </main>

      <div className="fixed z-50 top-6 right-6">
        <ThemeToggleButton />
      </div>
    </div>
  );
}
