"use client";
import "./Card.css";
import Image from "next/image";
import { useState } from "react";
import { useRecoilValue } from "recoil";
import { isSliderClickedState } from "@/app/recoil/atoms";
type Employee = {
  id: number;
  name: string;
  dob?: string;
  email?: string;
  UTR?: string;
  NINO?: string;
  address?: string;
  phone_no?: string;
};

const Card = ({ el }: { el: Employee }) => {
  const [ellipsisClick, setEllipsisClick] = useState<boolean>(false);
  const isSliderClicked = useRecoilValue<boolean>(isSliderClickedState);

  const handleCopyClick = () => {
    const detailsToCopy = `Name: ${el.name}\nDOB: ${el.dob}\nEmail: ${el.email}\nUTR: ${el.UTR}\nNINO: ${el.NINO}\nAddress: ${el.address}\nPhone: ${el.phone_no}`;
    navigator.clipboard.writeText(detailsToCopy).then(() => {
      alert("Details copied to clipboard!");
    });
  };

  const handleEllipsisClick = () => {
    setEllipsisClick(!ellipsisClick);
  };
  return (
    <div
      className={`card-container ${
        isSliderClicked ? "dark-component" : "light-component"
      }`}
    >
      <div className={`image-container ${isSliderClicked ? "dark" : "light"}`}>
        <div className="copy">
          <Image
            src="/icons/copy.svg"
            alt="copy"
            width={25}
            height={25}
            onClick={handleCopyClick}
          />
        </div>
        <div className="ellipsis">
          <Image
            src="/icons/ellipsis.svg"
            alt="ellipsis"
            width={25}
            height={25}
            onClick={handleEllipsisClick}
          />
        </div>
        {ellipsisClick === true && (
          <div className="ellipsis-pop-up">
            <span>
              edit
              <Image
                src="/icons/edit.svg"
                alt="close navbar"
                width={15}
                height={15}
              />
            </span>
            <span>
              delete{" "}
              <Image
                src="/icons/trash.svg"
                alt="close navbar"
                width={15}
                height={15}
              />
            </span>
          </div>
        )}
        <Image
          src="/icons/construction1.svg"
          alt="close navbar"
          width={90}
          height={90}
        />
        <span className="card-name">{el?.name}</span>
      </div>

      <div className="employee-details">
        {el.dob && (
          <span>
            <Image
              src="/icons/dob.svg"
              alt="close navbar"
              width={20}
              height={20}
            />
            <span className="db-data">{el?.dob}</span>
          </span>
        )}
        {el.email && (
          <span>
            <Image
              src="/icons/email.svg"
              alt="close navbar"
              width={20}
              height={20}
            />
            <span className="db-data">{el?.email}</span>
          </span>
        )}
        {el.UTR && (
          <span>
            <Image
              src="/icons/nino.svg"
              alt="close navbar"
              width={20}
              height={20}
            />
            <span className="db-data"> {el?.UTR}</span>
          </span>
        )}
        {el.NINO && (
          <span>
            <Image
              src="/icons/utr.svg"
              alt="close navbar"
              width={20}
              height={20}
            />
            <span className="db-data"> {el?.NINO}</span>
          </span>
        )}
        {el.address && (
          <span>
            <Image
              src="/icons/address.svg"
              alt="close navbar"
              width={20}
              height={20}
            />
            <span className="db-data">{el?.address}</span>
          </span>
        )}
        {el.phone_no && (
          <span>
            <Image
              src="/icons/phone.svg"
              alt="close navbar"
              width={20}
              height={20}
            />
            <span className="db-data">{el.phone_no}</span>
          </span>
        )}
      </div>
    </div>
  );
};

export default Card;
