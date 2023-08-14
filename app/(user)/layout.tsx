import { Header } from "../../components/layout/Header";
import "../../styles/globals.css";
import Banner from "../../components/layout/Banner";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
