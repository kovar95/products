import Header from "@/components/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import { Stack } from "@mui/material";
import Providers from "@/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Zdravi Proizvodi",
  description: "Proizvodi za visetruku namenu",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Header />
          <Stack
            paddingTop="80px"
            width="100vw"
            height="100vh"
            alignItems="center"
          >
            {children}
          </Stack>
        </Providers>
      </body>
    </html>
  );
}
