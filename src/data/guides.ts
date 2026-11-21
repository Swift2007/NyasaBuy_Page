// The Help centre's guides, in one place: the hub, the "keep reading" cards
// and the footer all read from this list, so a new guide is added here once.
export interface Guide {
  slug: string;
  title: string;
  blurb: string;
  icon: "bag" | "store" | "shield" | "truck" | "person" | "help";
}

export const guides: Guide[] = [
  {
    slug: "buying",
    title: "Buying on NyasaBuy",
    blurb: "Find something, check it is available, and pay for it safely.",
    icon: "bag",
  },
  {
    slug: "selling",
    title: "Selling on NyasaBuy",
    blurb: "Open your shop, list items, confirm sales and get paid.",
    icon: "store",
  },
  {
    slug: "payments-and-safety",
    title: "Payments and staying safe",
    blurb: "How your money is protected, and what to watch out for.",
    icon: "shield",
  },
  {
    slug: "delivery-and-orders",
    title: "Delivery and your orders",
    blurb: "Pickup or delivery, tracking an order, and what to do if it is late.",
    icon: "truck",
  },
  {
    slug: "your-account",
    title: "Your account and privacy",
    blurb: "Signing in, your profile, notifications and who can see what.",
    icon: "person",
  },
  {
    slug: "faq",
    title: "Common questions",
    blurb: "Quick answers to what people ask most.",
    icon: "help",
  },
];
