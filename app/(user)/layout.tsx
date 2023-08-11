import Header from "@/components/Header";
import "./../../styles/globals.css";
import Head from "@/app/head";
import Banner from "@/components/Banner";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Header />
      <Banner />
      <body>{children}</body>
    </html>
  );
}
