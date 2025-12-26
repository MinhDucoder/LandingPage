
import { ProductPackage, Testimonial } from '/types';

export const PACKAGES: ProductPackage[] = [
  {
    id: 'trial',
    name: 'Standard Bottle (60 Tablets)',
    price: 25,
    originalPrice: 39,
    savings: '$14',
    description: '1-Month Supply of Strawberry Glow.',
  },
  {
    id: 'best-seller',
    name: 'Value Pair (120 Tablets)',
    price: 45,
    originalPrice: 78,
    savings: '$33',
    description: '2-Month Intensive Glow Program.',
    isPopular: true,
    gift: 'FREE Vitamin C Mist'
  },
  {
    id: 'premium',
    name: 'Family Pack (240 Tablets)',
    price: 79,
    originalPrice: 156,
    savings: '$77',
    description: 'Best for long-term skin maintenance.',
    gift: 'FREE Glow Pouch + Mist'
  }
];

export interface ShopeeTestimonial extends Testimonial {
  variation: string;
  location: string;
  images: string[];
  date: string;
}

export const TESTIMONIALS: ShopeeTestimonial[] = [
  {
    id: 1,
    name: 'k***y',
    age: 26,
    rating: 5,
    comment: 'Omg the strawberry flavor is so good! It is like eating candy but it makes my skin glow. My nails are also getting stronger thanks to the Biotin. Fast shipping!',
    image: '/assets/fb.jpg',
    variation: 'Value Pair (120 Tablets)',
    location: 'Manila',
    date: '2024-03-20',
    images: [
      '/assets/fb5.jpg',
      '/assets/fb.jpg'
    ]
  },
  {
    id: 2,
    name: 'r***a',
    age: 31,
    rating: 5,
    comment: 'Legit Healthmate product. FR number verified. I love that it has Omega-3 too, I feel less tired during the day. Skin looks much brighter after 2 weeks.',
    image: '/assets/fb1.jpg',
    variation: 'Standard Bottle (60 Tablets)',
    location: 'Cebu City',
    date: '2024-03-18',
    images: [
      '/assets/fb3.jpg'
    ]
  },
  {
    id: 3,
    name: 'a***n',
    age: 29,
    rating: 5,
    comment: 'Perfect for someone like me who hates swallowing big pills. These chewables are tasty and effective. My hair fall has significantly reduced!',
    image: '/assets/fb2.jpg',
    variation: 'Value Pair (120 Tablets)',
    location: 'Quezon City',
    date: '2024-03-15',
    images: [
      '/assets/fb2.jpg',
      '/assets/fb1.png'
    ]
  }
];
