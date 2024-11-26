import AboutUsComponent from '@/components/comments/about-us';
import FeaturesComponent from '@/components/features/features';
import HomeComponent from '@/components/home/home';

export default function Home() {
  return (
    <main>
      <section>
        <HomeComponent />
      </section>
      <section>
        <FeaturesComponent />
      </section>
      <section>
        <AboutUsComponent />
      </section>
    </main>
  );
}
