import { AirBnbApi } from "@/types/AirBnbDates";

export async function fetchData(): Promise<AirBnbApi> {
  try {
    const response = await fetch("https://web.codans.com.br/airbnb");
    const data = response.json();
    return data;
  } catch (e) {
    console.error(e);
    throw e;
  }
}
