import Link from 'next/link';
import Navbar from '../components/Navbar';
import Head from 'next/head'

function Contact() {
	return (
		<>
			<Head>
			  <title>Contact</title>
			</Head>

			<Navbar />

			<section className="hero">
			  <div className="container">
			    <div className="text-wrapper w-full">
			      <h1 className="title">Contact</h1>
			      <p className="description">
			      	If got any problem or want to know more detail stuff about me can contact me by:
			      </p>
			      <ul className="contact-links">
			      	<li className="contact-item">Email: dan071201@gmail.com</li>
			      	<li className="contact-item">Phone: +60164653887</li>
					  <li className="contact-item">Github: https://github.com/Li-He3887</li>
			      </ul>
		      </div>
	      </div>
			</section>
		</>
	);
}

export default Contact;