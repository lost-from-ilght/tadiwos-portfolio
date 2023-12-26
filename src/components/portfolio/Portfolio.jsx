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
    title: "Blog-site",
    img: "/blog.png",
    link:"https://bloghub-lcpx.onrender.com/",
    desc: "Stay up-to-date with the latest trends, gain valuable knowledge, and indulge in captivating narratives. Join our vibrant community of readers and let our blog be your go-to source for information, entertainment, and discovery.",
  },
  {
    id: 5,
    title: "Portfolio-Website Automation",
    img: "/porti.png",
    link:"https://beletedesigngallery.onrender.com/",
    desc: "I helped a client with backend(email function) and hosting",
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
            <button className=" text-white"><a href={item.link}>See live</a></button>
          </motion.div>
        </div>
      </div>
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
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
