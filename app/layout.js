import "./globals.css";

export const metadata = {
  title: "Aura Live",
  description: "Aura Live",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}