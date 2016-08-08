export type Coordinates = {
  lat: number,
  long: number,
}

export type TeePad = {
  par: number,
  location: Coordinates,
}

export type TeePads = {
  red: TeePad,
  white: TeePad,
  blue: TeePad,
}

export type Basket = {
  number: number,
  teePads: Array<TeePads>,
  location: Coordinates,
}

export type Course = {
  location: Coordinates,
  baskets: Array<Basket>,
}
