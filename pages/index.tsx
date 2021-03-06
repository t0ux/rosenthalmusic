//native
import type { NextPage } from 'next';
//components
import Navbar from '@components/navbar.component';
import Hero from '@components/hero/hero.component';
import NavbarMobile from '@components/navbar_mobile/navbar_mobile.component';
import Footer from '@components/footer/footer.component';
import SEO from '@components/SEO/seo.component';
//styles + icons
import styles from '@styles/index_page.module.scss';
import { useQueryDataCollection } from '@hooks/useQueryData';
import Head from 'next/head';

const Home: NextPage = () => {
  const { data } = useQueryDataCollection<'homepage'>('homepage');
  // const imageAbout = `https:${data?.items[0]?.fields.image.fields.file.url}`;

  return (
    <div className={styles.index}>
      <SEO
        title="Rosenthal Music"
        description="Music producer, mixing & mastering engineer based in Estonia."
        image=""
      />
      <section className={styles.bodyWrapper}>
        <Navbar />
        <NavbarMobile />
        <Hero />
        <Footer />
      </section>
    </div>
  );
};

export default Home;
