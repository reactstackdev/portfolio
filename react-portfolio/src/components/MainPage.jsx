import { ThemeToggleButton } from '../assets/buttons.jsx';

export default function MainPage() {
  return (
    <div className="bg-slate-300 dark:bg-slate-900 min-h-screen">
      <div className="absolute top-4 right-4">
        <ThemeToggleButton />
      </div>
    </div>
  );
}
