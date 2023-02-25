import { axiosInstance } from "../libs/axios";

export type ResourceDestination = {
  id?: string;
  createdAt?: string;
  updatedAt?: string;

  name: string;
  description: string;
  shortDescription: string;
  image: string;
  price: number;
  rating: number;

  city: string;
  location?: string;
  latitude: number;
  longitude: number;
};

export type ResourceDestinations = ResourceDestination[];

export async function apiGetDestinations() {
  const response = await axiosInstance.get("/destinations");
  return response.data as ResourceDestinations;
}

export async function apiSearchDestinations(q: string) {
  const response = await axiosInstance.get(`/destinations/search?q=${q}`);
  return response.data as ResourceDestinations;
}

export async function apiGetDestinationById(
  destinationId: ResourceDestination["id"]
) {
  const response = await axiosInstance.get(`/destinations/${destinationId}`);
  return response.data as ResourceDestination;
}

export async function apiAddDestination(destinationData: ResourceDestination) {
  const response = await axiosInstance.post("/destinations", destinationData);
  return response.data as ResourceDestination;
}
