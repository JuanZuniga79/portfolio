import { esServices } from "@home/data/services.ts";

export default async function getServices(lang: string) {
  return lang === "en" ? esServices : esServices;
}