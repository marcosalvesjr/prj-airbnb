import { fetchDataBySlug } from "@/utils/api";
import AccomodationDetails from "@/widgets/AccomodationDetails/AccomodationDetails";
import AccomodationTestemunials from "@/widgets/AccomodationTestemunials/AccomodationTesteminials";
import FooterWidget from "@/widgets/FooterWidget/FooterWidget";
import Gallery from "@/widgets/Gallery/Gallery";
import SearchBar from "@/widgets/SearchBar/SearchBar";
import TopBar from "@/widgets/TopBar/TopBar";
import { notFound } from "next/navigation";

type PageProps = {
  id: string;
};

export default async function Page({ params }: { params: Promise<PageProps> }) {
  const { id } = await params;
  const acomodacao = await fetchDataBySlug(id);

  if (!acomodacao) {
    notFound();
  }

  return (
    <div>
      <header className="container mx-auto">
        <TopBar />
        <SearchBar />
      </header>
      <main className="container mx-auto py-6">
        <h1 className="text-3xl">{acomodacao.title}</h1>
        <Gallery photos={acomodacao.photos} />
        <div className="flex flex-col md:flex-row">
          <AccomodationDetails accommodation={acomodacao} />
          <AccomodationTestemunials />
        </div>
      </main>
      <footer className="bg-gray-200">
        <FooterWidget />
      </footer>
    </div>
  );
}
