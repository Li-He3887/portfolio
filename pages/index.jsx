import Link from 'next/link';
import Navbar from '../components/Navbar';
import Head from 'next/head'


function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="text-wrapper">
            <h1 className="title">Halo, I am Thean Li He</h1>
            <p className="description">I am a student that study at Forward School and now almost gruaduated.</p>

            <Link href="/contact"><a className="cta">Contact Me</a></Link>
          </div>

          <div className="image-wrapper">
            <img src="/my-picture.jpg" className="my-image"/>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;