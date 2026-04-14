import type { Metadata } from "next";
import { ThankYouClient } from "./ThankYouClient";
import { siteBrand } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Thank you",
  description: `Your message was received by ${siteBrand.name}.`,
};

export default function ThankYouPage() {
  return <ThankYouClient />;
}
