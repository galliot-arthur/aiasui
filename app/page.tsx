import { Chat } from "@/libs/chat/ui";
import { i18n } from "@/libs/commons/ui";

export default function Home() {
  return (
    <main className="p-4">
      <div className="grid grid-cols-1 sm:grid-cols-5 lg:grid-cols-7 gap-4">
        <div className="col-span-1 lg:col-span-2 hidden sm:block">
          <aside className="p-4 h-[calc(100vh-6rem)] flex flex-col gap-4">
            <div>
              <h2 className="text-xs text-gray-600 mb-1">
                {i18n.descriptionLong.title}
              </h2>
              <p className="text-xs text-gray-500">
                {i18n.descriptionLong.description}
              </p>
            </div>
          </aside>
        </div>
        <main className="col-span-3">
          <Chat />
        </main>
        <div className="col-span-1 lg:col-span-2 hidden sm:block"></div>
      </div>
    </main>
  );
}
