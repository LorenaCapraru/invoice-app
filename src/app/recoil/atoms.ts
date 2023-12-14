import { atom } from "recoil";
import clients from "../clients.json";
import sites from "../site.json";
import employees from "../employees.json";
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
export const clientsState = atom<Client[]>({
  key: "clientsState",
  default: clients.clients,
});
export const siteState = atom<Site[]>({
  key: "siteState",
  default: sites.sites,
});
export const employeeState = atom<Employee[]>({
  key: "employeeState",
  default: employees.employees,
});
export const searchState = atom<string>({ key: "searchState", default: "" });
