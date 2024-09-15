import { i18n } from "@/libs/commons/ui";

export default function Home() {
  return (
    <main className="p-4">
      <h1 className="text-2xl">{i18n.title}</h1>
      <p>{i18n.description}</p>
    </main>
  );
}
