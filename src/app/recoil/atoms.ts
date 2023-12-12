import { atom } from "recoil";
import clients from "../clients.json";

type Client = {
  id: number;
  name: string;
  address: string;
};
export const clientsState = atom<Client[]>({
  key: "clientsState",
  default: clients.clients,
});

export const searchState = atom<string>({ key: "searchState", default: "" });
