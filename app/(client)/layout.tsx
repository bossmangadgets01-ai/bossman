import type { Metadata } from "next";
import "../globals.css";
import ClientLayout from "@/components/ClientLayout";

export const metadata: Metadata = {
  title: "Bossman Gadgets & Acessories",
  description:
    "Bossman Gadgets & Accessories – Cameroon provides top-tier computers, gaming gear, and tech services, including internet setup and electrical installations. Quality products and expert solutions for homes and businesses across Cameroon.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
        <ClientLayout>
          {children}
        </ClientLayout>
  );
}
