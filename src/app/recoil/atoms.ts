import { atom } from "recoil";
import clients from "../clients.json";
import sites from "../site.json";
import employees from "../employees.json";
import company from "../company.json";
import price from "../price.json";

type Client = {
  id: number;
  name: string;
  address: string;
};
export type Price = {
  id: number;
  name: string;
  price: number;
  unit: string;
};

type Site = {
  id: number;
  client_id: number;
  site: string;
};
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
export const clientsState = atom<Client[]>({
  key: "clientsState",
  default: clients.clients,
});

export const pricesState = atom<Price[]>({
  key: "pricesState",
  default: price.price,
});
export const siteState = atom<Site[]>({
  key: "siteState",
  default: sites.sites,
});
export const employeeState = atom<Employee[]>({
  key: "employeeState",
  default: employees.employees,
});
export const companyState = atom<Company>({
  key: "companyState",
  default: company.company[0],
});
export const searchState = atom<string>({ key: "searchState", default: "" });

export const addEmployeeState = atom<boolean>({
  key: "addEmployeeState",
  default: false,
});
export const addClientState = atom<boolean>({
  key: "addClientState",
  default: false,
});
