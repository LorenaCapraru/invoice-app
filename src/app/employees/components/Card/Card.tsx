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
  // Generate a DiceBear Ring avatar URL based on the email address
  // const avatarUrl = `https://avatars.dicebear.com/api/rings/${el.email}.svg`;

  return (
    <div className="card-container">
      <div className="image-container">
        <Image
          src="/icons/construction1.svg"
          alt="close navbar"
          width={90}
          height={90}
        />
      </div>
      <p>{el.name}</p>
      {/* Add other details like date of birth, address, etc. here */}
    </div>
  );
};

export default Card;
