
export interface ProductPackage {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  savings: string;
  description: string;
  isPopular?: boolean;
  gift?: string;
}

export interface Testimonial {
  id: number;
  name: string;
  age: number;
  rating: number;
  comment: string;
  image: string;
}
