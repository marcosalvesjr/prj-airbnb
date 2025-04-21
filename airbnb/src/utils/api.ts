import { Accommodation, AirBnbApi } from "@/types/AirBnbDates";



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

export async function fetchDataBySlug(id: string): Promise<Accommodation|undefined> {
  try {
    const data = await fetchData();
    const accommodation = data.accommodation.find((item: Accommodation) => {
      return item.slug === id;
    })
    return accommodation;
  } catch (e) {
    console.error(e);
    throw e;
  }
}
