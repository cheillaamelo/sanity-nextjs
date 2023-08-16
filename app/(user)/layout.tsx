import { Header } from "../../components/layout/Header";
import "../../styles/globals.css";
import Banner from "../../components/layout/Banner";
import Head from "../head";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <Head />
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
