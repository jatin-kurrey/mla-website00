import './globals.css'
import BackToTop from './components/BackToTop'

export const metadata = {
  title: "MLA Rikesh Sen - Vaishali Nagar, Bhilai",
  description: "Official Page of MLA Rikesh Sen",
};

export default function RootLayout({ children }) {
  return (
    <html lang="hi" style={{ scrollBehavior: 'smooth' }}>
      <body className="bg-gray-50">
        {children}
        <BackToTop />
      </body>
    </html>
  );
}
