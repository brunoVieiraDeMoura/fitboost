import AboutUsComponent from '@/components/comments/about-us';
import ContactComponent from '@/components/contact/contact-component';
import FeaturesComponent from '@/components/features/features';
import HomeComponent from '@/components/home/home';
import PriceComponent from '@/components/price/price-components';

export default function Home() {
  return (
    <main style={{ width: '100%' }}>
      <HomeComponent />
      <FeaturesComponent />
      <AboutUsComponent />
      <PriceComponent />
      <ContactComponent />
    </main>
  );
}
