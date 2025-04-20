import Header from "./components/Header/Header";

export default function Home() {
  return (
    <>
      <div className="border-2 border-amber-500 container mx-auto">
        <Header />
      </div>
      <div className="border-2 border-blue-500">Área conteúdo</div>
      <div className="border-2 border-purple-500">Rodapé</div>
    </>
  );
}
