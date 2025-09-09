import type { Order } from "@/types";

export const exampleOrder: Order = {
  orderId: "order123",
  user: {
    id: "user1",
    fullName: "Thiri Kyaw Khaing",
    phone: "+66 912345678",
    address: "123 Chiang Rai Road, Mueang District",
    city: "Chiang Rai",
    postalCode: "57100",
    country: "Thailand",
  },
  items: [
    {
      id: "ci1",
      name: "Sneakers",
      price: 199_999,
      quantity: 1,
      image: {
        id: "img1",
        name: "sneakers.jpg",
        url: "/images/nikedunklow.jpg",
      },
      category: "Footwear",
    },
  ],
  totalAmount: 199999,
  createdAt: new Date(),
  status: "pending",
};
