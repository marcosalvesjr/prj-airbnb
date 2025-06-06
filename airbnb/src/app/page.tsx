//widgates
import { fetchData } from "@/utils/api";
import Acomodations from "@/widgets/Accomodations/Accomodations";
import FooterWidget from "@/widgets/FooterWidget/FooterWidget";
import HorizontalTabbedNagivation from "@/widgets/HorizontalTabbedNavigation/HorizontalTabbedNagivation";
import SearchBar from "@/widgets/SearchBar/SearchBar";
import TopBar from "@/widgets/TopBar/TopBar";

export default async function Home() {
  const data = await fetchData();

  return (
    <>
      <header className="container mx-auto">
        <TopBar />
        <SearchBar />
      </header>
      <hr className="mt-4 border-gray-100 shadow-lg shadow-gray-300" />
      <main className="container mx-auto mt-5">
        <HorizontalTabbedNagivation icons={data.icons} />
        <Acomodations accommodation={data.accommodation} />
      </main>
      <footer className="bg-gray-200">
        <FooterWidget />
      </footer>
    </>
  );
}
