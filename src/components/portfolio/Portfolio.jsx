import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
 
  {
    id: 1,
    title: "Real-State Website",
    img: "/realstate.png",
    link:"https://full-stack-real-estate-dusky.vercel.app/",
    desc: "Discover your perfect home on our real estate website. Search, buy, sell, or rent properties with ease. Detailed listings, high-quality images, and virtual tours available. Find your dream property today.",
  },
  {
    id: 2,
    title: "Yelp-Camp",
    img: "/yelpcamp.png",
    link:"https://yelpcamp-kecheste.onrender.com/",
    desc: "get best reviewed camps.",
  },
  {
    id: 3,
    title: "Gov-Assist",
    img: "/smallUi.png",
    link:"https://small-ui.vercel.app/",
    desc: "checks if peoples green card is valid or not",
  },
  {
    id: 4,
    title: "Mereja-Bet",
    img: "/mereja.png",
    link:"https://mereja-virid.vercel.app/",
    desc: "Mereja-Bet is a centralized platform that aggregates data from diverse Telegram channels, providing easy access to categorized information. Using Python, I developed an advanced data scraping mechanism to collect and categorize the data. Users can quickly find news articles or job postings by selecting the relevant category. This streamlined approach saves time and effort. The technology stack includes Python for data scraping, Firebase for storage, React for the user interface, and Node.js for data retrieval and delivery.",
  },
  {
    id: 5,
    title: "Portfolio-Website Automation",
    img: "/porti.png",
    link:"https://beletedesigngallery.onrender.com/",
    desc: "I helped a client with backend(email functionality) , admin page and  hosting",
  },
  {
    id: 6,
    title: "E-suk",
    img: "/esuk.png",
    link:"https://github.com/Tadi-san/E-suk",
    desc: "E-suk is a full MERN stack web app i made with all full functionalities working, using tailwind ",
  },
  {
    id: 7,
    title: "Selam Charity",
    img: "/selam.png",
    link:"",
    desc: "Selam is a form web site i did for a client, it has an admin page with full CRUD functionality ",
  },
  {
    id: 8,
    title: "This or That",
    img: "/1711522929546.jpg",
    link:"https://this-or-that-mrcha-za9t.vercel.app/",
    desc: "what it does is prompt you with two choices based on the category you choose and shows you the percentage of what other people chose.",
  },
  {
    id: 9,
    title: "2024 Startup Ethiopia Hackathon winner",
    img: "/togetha.jpg",
    link:"https://www.linkedin.com/posts/tadiwos-anegagergn-951b25256_alettechnologies-startupethiopiahackathon-activity-7194592861428797441-67KN?utm_source=share&utm_medium=member_desktop",
    desc: "Me and my team won first place at the Startup Ethiopia Hackathon. ",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img className=" rounded-md" src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button className=" text-white"><a 
            target="blank"
            type = "button"
            data-te-ripple-init
            data-te-ripple-color="light"
            href={item.link}>
              See live/code</a></button>
          </motion.div>
        </div>
      </div>
      {/* <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img className=" rounded-md" src={"/tindaa.png"} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{"Tindaa"}</h2>
            <p>{"a dating app made with flutter and firebase it has like, favorite, and view functionality"}</p>
            <button className=" text-white"><a 
            type = "button"
            data-te-ripple-init
            data-te-ripple-color="light"
            href="">
              See live/code</a></button>
          </motion.div>
        </div> */}
    
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Projects/Works done</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
