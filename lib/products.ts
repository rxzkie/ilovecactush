export type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
};

export const catalog: Product[] = [
  {
    id: "1",
    name: "Cactus San Pedro Crestado",
    price: 22000,
    image: "/products/product-1.png",
  },
  {
    id: "2",
    name: "Pack Suculentas Variadas",
    price: 9500,
    image: "/products/product-2.png",
  },
  {
    id: "3",
    name: "Cactus Crestado San Pedro",
    price: 18000,
    image: "/products/product-3.png",
  },
  {
    id: "4",
    name: "Mammillaria Flores Amarillas",
    price: 12000,
    image: "/products/product-4.png",
  },
  {
    id: "5",
    name: "Euphorbia Anoplia",
    price: 10000,
    image: "/products/product-5.png",
  },
  {
    id: "6",
    name: "Cactus Epifilo Flor Naranja",
    price: 15000,
    image: "/products/product-6.png",
  },
  {
    id: "7",
    name: "Cactus Rebutia Flor Naranja",
    price: 8500,
    image: "/products/product-7.png",
  },
  {
    id: "8",
    name: "Suculenta Medusa",
    price: 14000,
    image: "/products/product-8.png",
  },
  {
    id: "9",
    name: "Sempervivum Telaraña",
    price: 7500,
    image: "/products/product-9.png",
  },
];

export function formatPrice(price: number) {
  return new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
    maximumFractionDigits: 0,
  }).format(price);
}
