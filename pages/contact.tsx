import React from 'react';
import styles from '@styles/contact_page.module.scss';
import NavbarMobile from '@components/navbar_mobile/navbar_mobile.component';
import Footer from '@components/footer/footer.component';
import Navbar from '@components/navbar.component';
import { ChatAltIcon } from '@heroicons/react/outline';
import { motion } from 'framer-motion';
import Head from 'next/head';

const ContactPage = () => {
  return (
    <>
      <Head>
        <title>Rosenthal Music | Contact</title>
      </Head>
      <div className={styles.bodyWrapper}>
        <Navbar />
        <NavbarMobile />
        <div className={styles.contact_container}>
          <motion.div
            className={styles.contact_container_hero}
            initial={{ opacity: 0, x: -150, scale: 0.98 }}
            animate={{
              opacity: 1,
              x: 0,
              scale: 1,
              transition: {
                duration: 0.25,
                type: 'tween',
              },
            }}
          >
            <h1>Contact Me</h1>
            <p>Want to work together? Just get in touch below!</p>
          </motion.div>
          <div className={styles.contact_container_body}>
            <motion.p
              className={styles.contact_container_body_email}
              initial={{ opacity: 0, x: 150, scale: 0.98 }}
              animate={{
                opacity: 1,
                x: 0,
                scale: 1,
                transition: {
                  duration: 0.25,
                  type: 'tween',
                },
              }}
            >
              <span>
                <ChatAltIcon className={styles.atsymbol} />{' '}
                <a href="mailto: rosenthalmusic@gmail.com">Email me</a>
              </span>
            </motion.p>
            <motion.div
              className={styles.contact_container_body_alt}
              initial={{ opacity: 0, x: -150, scale: 0.98 }}
              animate={{
                opacity: 1,
                x: 0,
                scale: 1,
                transition: {
                  duration: 0.25,
                  type: 'tween',
                },
              }}
            >
              <p>or you can find me on... </p>
              <div>
                <a href="https://www.instagram.com/rosenthal.sander">
                  Instagram
                </a>
                <a href="https://linkedin.com">LinkedIn</a>
              </div>
            </motion.div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ContactPage;
