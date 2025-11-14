import './globals.css'

export const metadata = {
  title: "MLA Rikesh Sen - Vaishali Nagar, Bhilai",
  description: "Official Page of MLA Rikesh Sen",
};

export default function RootLayout({ children }) {
  return (
    <html lang="hi">
      <body className="scroll-smooth bg-gray-50">{children}</body>
    </html>
  );
}
