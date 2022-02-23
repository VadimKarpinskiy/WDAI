export interface Dish {
  name: string;
  cuisine: string;
  type: string;
  category: string;
  ingredients: string[];
  maxQuantity: number;
  price: number;
  info: string;
  mainImg: string;
  secondaryImgs: string[];
  $key?: string;
}
