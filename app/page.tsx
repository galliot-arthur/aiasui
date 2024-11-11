import { ArtistList } from "@artists/ui";
import { Chat } from "@chat/ui";
import { i18n } from "@commons/ui";
import { LocationList } from "@locations/ui";

export default function Home() {
  return (
    <div className="p-4">
      <div className="grid grid-cols-1 sm:grid-cols-5 lg:grid-cols-7 gap-4">
        <aside className="lg:col-span-1 hidden lg:block">
          <section className="h-[calc(100vh-6rem)] flex flex-col gap-4">
            <div className="p-4 rounded-lg bg-white shadow shadow-green-100">
              <h2 className="text-xs text-gray-600 mb-1">
                {i18n.descriptionLong.title}
              </h2>
              <p className="text-xs text-gray-500">
                {i18n.descriptionLong.description}
              </p>
            </div>
          </section>
        </aside>
        <main className="col-span-2 sm:col-span-3 lg:col-span-4">
          <Chat />
        </main>
        <aside className="col-span-2 hidden sm:flex flex-col gap-1 max-h-[calc(100vh-6rem)] overflow-y-auto rounded-lg bg-white shadow shadow-blue-100">
          <section>
            <ArtistList />
          </section>
          <hr />
          <section>
            <LocationList />
          </section>
        </aside>
      </div>
    </div>
  );
}
