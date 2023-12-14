import { atom } from "recoil";
import clients from "../clients.json";
import site from "../site.json";

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
export const clientsState = atom<Client[]>({
  key: "clientsState",
  default: clients.clients,
});
export const siteState = atom<Site[]>({
  key: "siteState",
  default: site.sites,
});
export const searchState = atom<string>({ key: "searchState", default: "" });
