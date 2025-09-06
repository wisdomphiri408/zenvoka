import { ModeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <div>
      <p className="text-h1">Welcome</p>
      <p className="text-h2">Welcome second</p>
      <p className="text-h3">Welcome third</p>
      <p className="text-h4">Welcome fourth</p>
      <p className="text-h5">Welcome fith</p>
      <p className="text-h6">Welcome last</p>
      <ModeToggle />
    </div>
  );
}
