import "src/app/components/Header/Header.css";
import { useRecoilState } from "recoil";
import { searchState } from "@/app/recoilData/atoms";
import Image from "next/image";
import { ChangeEvent } from "react";

const Search = () => {
  const [search, setSearch] = useRecoilState(searchState);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  return (
    <form action="" className="search-bar">
      <input type="search" required value={search} onChange={handleSearch} />
      <Image
        src="/icons/search.svg"
        alt="user icon"
        width={20}
        height={20}
        className="search-icon"
      />
      <a href="javascript:void(0)" id="clear-btn"></a>
    </form>
  );
};

export default Search;
