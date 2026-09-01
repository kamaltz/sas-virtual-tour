import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollToTop from '@/components/layout/ScrollToTop';
import WhatsAppButton from '@/components/WhatsAppButton';
import Home from '@/pages/Home';
import VirtualTour from '@/pages/VirtualTour';
import HouseTypes from '@/pages/HouseTypes';
import Facilities from '@/pages/Facilities';
import Location from '@/pages/Location';
import About from '@/pages/About';

function AppLayout() {
  const { pathname } = useLocation();
  const isTourPage = pathname === '/virtual-tour';

  return (
    <>
      <ScrollToTop />
      {!isTourPage && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/virtual-tour" element={<VirtualTour />} />
        <Route path="/tipe-rumah" element={<HouseTypes />} />
        <Route path="/fasilitas" element={<Facilities />} />
        <Route path="/lokasi" element={<Location />} />
        <Route path="/tentang" element={<About />} />
      </Routes>
      {!isTourPage && <Footer />}
      {!isTourPage && <WhatsAppButton variant="fixed" />}
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}
