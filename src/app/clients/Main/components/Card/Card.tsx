import "./Card.css";
import Image from "next/image";
import { useRecoilState, useRecoilValue } from "recoil";
import { siteState, isSliderClickedState } from "@/app/recoilData/atoms";

type Client = {
  id: number;
  name: string;
  address: string;
};
type Site = {
  id: number;
  client_id: number;
  site: string;
};

const Card = ({ el }: { el: Client }) => {
  const takeInitials = (input: string): string => {
    const initials = input.split(" ");
    return initials[0][0] + (initials[1] ? initials[1][0] : "");
  };
  const [site, SetSite] = useRecoilState<Site[]>(siteState);

  const isSliderClicked = useRecoilValue<boolean>(isSliderClickedState);
  return (
    <div
      className={`card-main ${
        isSliderClicked ? "dark-components" : "light-components"
      }`}
    >
      <div className="card-details">
        <p className="initials-client">{takeInitials(el.name)}</p>
        <div className="card-info">
          <div className="card-name-client">{el.name}</div>
          <div className="card-address">{el.address}</div>
          <div className="card-site">
            <span>Jobs: </span>
            {site
              .filter((site) => site.client_id === el.id)
              .map((siteEl, index, site) => (
                <span key={siteEl.id}>
                  {siteEl.site}
                  {index < site.length - 1 ? ", " : ""}
                </span>
              ))}
          </div>
        </div>
      </div>
      <div className="icon-wrapper">
        <Image src="/icons/bin.svg" alt="close navbar" width={30} height={30} />
        <Image
          src="/icons/edit.svg"
          alt="close navbar"
          width={30}
          height={30}
        />
      </div>
    </div>
  );
};

export default Card;
