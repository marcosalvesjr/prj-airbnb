//widgates
import Acomodations from "@/widgets/Accomodations/Accomodations";
import HorizontalTabbedNagivation from "@/widgets/HorizontalTabbedNavigation/HorizontalTabbedNagivation";
import SearchBar from "@/widgets/SearchBar/SearchBar";
import TopBar from "@/widgets/TopBar/TopBar";

export default function Home() {
  return (
    <>
      <header className="container mx-auto">
        <TopBar />
        <SearchBar />
      </header>
      <hr className="mt-3" />
      <main className="container mx-auto mt-5">
        <HorizontalTabbedNagivation />
        <Acomodations />
      </main>
      <footer className="container mx-auto border-2 border-purple-500">
        Rodapé
      </footer>
    </>
  );
}
