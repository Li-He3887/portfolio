import Link from 'next/link';
import Navbar from '../components/Navbar';
import Head from 'next/head'

function About() {
	return (
		<>
			<Head>
			  <title>About</title>
			</Head>

			<Navbar />

			<section className="hero">
			  <div className="container">
			    <div className="text-wrapper w-full">
			      <h1 className="title">About</h1>
			      <p className="description">
			      	Hi, My Name is Thean Li He. I am born at 7 December 2001. I am from Sungai Petani in Kedah, 
					Malaysia. My hobby is playing badminton, game(mostly RPG games), and also like to watch 
					movie or tv series. But some time also will read some book. 
			      </p>
		      </div>
	      </div>
			</section>
		</>
	);
}

export default About;