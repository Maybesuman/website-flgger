
export interface Plan {
  id: string;
  name: string;
  ram: number;
  price: number;
  cpu: string;
  slots: string;
}

export interface Coupon {
  code: string;
  discountPercent: number;
  enabled: boolean;
}

export interface Order {
  id: string;
  planName: string;
  originalPrice: number;
  discountApplied: number; // Percentage
  couponCode?: string;
  finalPrice: number;
  date: string;
  status: 'Active' | 'Pending' | 'Cancelled';
  specs?: string; // For custom plans
}

export interface User {
  username: string;
  email: string;
  password?: string;
  isAdmin: boolean;
  orders: Order[];
  deletionScheduled?: number;
}
