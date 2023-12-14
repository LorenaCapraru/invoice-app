import "./Card.css";
import Image from "next/image";

type Employee = {
  id: number;
  name: string;
  dob: string;
  email: string;
  UTR: string;
  NINO: string;
  address: string;
  phone_no: string;
};

const Card = ({ el }: { el: Employee }) => {
  const handleCopyClick = () => {
    const detailsToCopy = `Name: ${el.name}\nDOB: ${el.dob}\nEmail: ${el.email}\nUTR: ${el.UTR}\nNINO: ${el.NINO}\nAddress: ${el.address}\nPhone: ${el.phone_no}`;

    // Use navigator.clipboard.writeText to copy details to the clipboard
    navigator.clipboard.writeText(detailsToCopy).then(() => {
      alert("Details copied to clipboard!");
    });
  };
  return (
    <div className="card-container">
      <div className="image-container">
        <div className="copy">
          <Image
            src="/icons/copy.svg"
            alt="copy"
            width={25}
            height={25}
            onClick={handleCopyClick}
          />
        </div>
        <Image
          src="/icons/construction1.svg"
          alt="close navbar"
          width={90}
          height={90}
        />
        <span className="card-name">{el.name}</span>
      </div>
      <div className="employee-details">
        <span>
          <Image
            src="/icons/dob.svg"
            alt="close navbar"
            width={20}
            height={20}
          />
          <span className="db-data">{el.dob}</span>
        </span>
        <span>
          <Image
            src="/icons/email.svg"
            alt="close navbar"
            width={20}
            height={20}
          />
          <span className="db-data">{el.email}</span>
        </span>
        <span>
          <Image
            src="/icons/nino.svg"
            alt="close navbar"
            width={20}
            height={20}
          />
          <span className="db-data"> {el.UTR}</span>
        </span>
        <span>
          <Image
            src="/icons/utr.svg"
            alt="close navbar"
            width={20}
            height={20}
          />
          <span className="db-data"> {el.NINO}</span>
        </span>
        <span>
          <Image
            src="/icons/address.svg"
            alt="close navbar"
            width={20}
            height={20}
          />
          <span className="db-data">{el.address}</span>
        </span>
        <span>
          <Image
            src="/icons/phone.svg"
            alt="close navbar"
            width={20}
            height={20}
          />
          <span className="db-data">{el.phone_no}</span>
        </span>
      </div>
      {/* <button className="copy-button" onClick={handleCopyClick}>
        Copy Details
      </button> */}
    </div>
  );
};

export default Card;
