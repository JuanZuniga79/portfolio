import {esServices} from "@home/data/services.tsx";

export default async function getServices(lang: string) {
  return lang === "en" ? esServices : esServices;
}