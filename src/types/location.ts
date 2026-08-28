export interface Coordinates {
  latitude: number;
  longitude: number;
}

export interface DeliveryAddress {
  id: string;
  label: string;
  address: string;
  coordinates: Coordinates;
}