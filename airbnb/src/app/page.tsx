import SearchBar from "@/widgets/SearchBar/SearchBar";
import TopBar from "@/widgets/TopBar/TopBar";

export default function Home() {
  return (
    <>
      <div className="border-amber-500 container mx-auto">
        <TopBar />
        <SearchBar />
      </div>
      <hr className="mt-3" />
      <div className="mt-5 border-2 border-blue-500">Área conteúdo</div>
      <div className="border-2 border-purple-500">Rodapé</div>
    </>
  );
}
