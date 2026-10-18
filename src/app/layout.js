import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'; // Footer import kiya

export const metadata = {
  title: 'LeadsEdge - Next-Gen BPO & Telemarketing',
  description: 'AI-powered outsourcing, lead generation, and sales solutions.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer /> {/* Children (main page) ke neechay footer lagaya */}
      </body>
    </html>
  );
}