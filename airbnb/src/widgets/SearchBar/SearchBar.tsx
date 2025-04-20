import { IconSearch } from "@/assets/icons";

const SearchBar = () => {
  return (
    <>
      <div className="rounded-full border-1 container mx-auto px-3 py-2 flex items-center shadow-md shadow-gray-200 w-full max-w-2xl">
        <input
          className="w-full focus:outline-0"
          type="text"
          placeholder="Digite sua pesquisa..."
        />
        <button className=" bg-red-500 rounded-full p-2">
          <IconSearch size={20} aria-label="Botão de pesquisa" />
        </button>
      </div>
    </>
  );
};

export default SearchBar;
