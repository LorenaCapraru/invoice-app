import "/Users/lorenacapraru/Documents/GitHub/invoice-app/src/app/overview/components/Header/Header.css";
import { useRecoilState } from "recoil";
import { searchState } from "@/app/recoil/atoms";
import Image from "next/image";
import { ChangeEvent } from "react";
import { isSliderClickedState } from "@/app/recoil/atoms";

const Search = () => {
  const [search, setSearch] = useRecoilState(searchState);
  const [isSliderClicked, setIsSliderClicked] =
    useRecoilState<boolean>(isSliderClickedState);
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  return (
    <form
      className={` ${isSliderClicked ? "search-bar-dark" : "search-bar-light"}`}
    >
      <input
        type="search"
        required
        value={search}
        onChange={handleSearch}
        placeholder="Search an item"
      />
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
