import "./CompanyData.css";
import { RecoilValue, useRecoilState } from "recoil";
import { companyState } from "@/app/recoil/atoms";

type Company = {
  id: number;
  name: string;
  address: string;
  postcode: string;
  company_registration_number: string;
  utr: number;
  vat_reg_no: string;
  sort_code: string;
  account_number: number;
};

const CompanyData = () => {
  const [company, setCompany] = useRecoilState<Company>(companyState);
  return (
    <div className="subcontractor-data">
      <p className="plain-text">SUBCONTRACTOR</p>
      <p className="company-name">{company.name}</p>
      <p className="address">
        {company.address}, {company.postcode}
      </p>
      <p className="address">
        Company registration number: {company.company_registration_number}
      </p>
      <p className="address">UTR: {company.utr}</p>
      <p className="address">VAT registration number: {company.vat_reg_no}</p>
      <p className="address">Sort code: {company.sort_code}</p>
      <p className="address">Account number: {company.account_number}</p>
    </div>
  );
};

export default CompanyData;
