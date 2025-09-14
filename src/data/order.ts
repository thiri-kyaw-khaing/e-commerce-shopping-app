import type { Order } from "@/types";

export const exampleOrders: Order[] = [
  {
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
  },

  {
    orderId: "order124",
    user: {
      id: "user2",
      fullName: "Aung Myo Min",
      phone: "+66 987654321",
      address: "456 Mae Fah Luang Avenue, Wiang District",
      city: "Chiang Rai",
      postalCode: "57110",
      country: "Thailand",
    },
    items: [
      {
        id: "ci2",
        name: "Adidas Samba",
        price: 220_000,
        quantity: 1,
        image: {
          id: "img2",
          name: "ultraboost.jpg",
          url: "/images/samba.webp",
        },
        category: "Footwear",
      },
    ],
    totalAmount: 220_000,
    createdAt: new Date(),
    status: "paid",
  },
];
