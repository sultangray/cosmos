import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/home/HeroSection';
import CategorySection from '@/components/home/CategorySection';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import NewArrivals from '@/components/home/NewArrivals';
import AboutPreview from '@/components/home/AboutPreview';
import Testimonials from '@/pages/Testimonials';
import WhyChooseUs from '@/pages/WhyChooseUs';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <AboutPreview />
      <CategorySection />
      <FeaturedProducts />
      <NewArrivals />
      <WhyChooseUs />
      <Testimonials />
    </Layout>
  );
};

export default Index;