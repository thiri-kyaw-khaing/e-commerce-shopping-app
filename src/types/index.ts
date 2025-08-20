export interface NavItem {
  title: string;
  href?: string;
  description?: string;
}

export interface NavItemWithChildren extends NavItem {
  card?: NavItem[];
  menu?: NavItemWithChildren[];
}

export type MainNavItem = NavItemWithChildren;

type Image = {
  id: number; // Unique numeric ID for each image
  path: string; // Image URL or file path
};

export type ProductCategory = "Sports" | "Casual" | "Formal" | "Other";

export type ProductStatus = "active" | "inactive" | "archived";

export type Product = {
  id: string; // UUID or unique string
  name: string; // Product name (e.g., "Sneakers")
  description: string; // Short product description
  images: Image[]; // Array of image objects
  categoryId: string; // UUID for category
  categoryName: ProductCategory; // Display category name (e.g., "Sports")
  price: number; // Price value
  currency: string; // Currency code or label (e.g., "Kyats")
  discount: number; // Discount percentage (0 means no discount)
  rating: number; // Average rating (0–5)
  ratingCount: number; // Number of ratings/reviews
  inventory: number; // Stock quantity
  status: ProductStatus; // Current product status
  isNew?: boolean; // Optional: for "NEW" badge
};
