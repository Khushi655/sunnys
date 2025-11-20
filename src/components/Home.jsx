// import React, { useState,useEffect } from "react";
// import img1 from "../assets/home0.1.png";
// import img2 from "../assets/home1.jpg";
// import img3 from "../assets/home2.jpg";
// import img4 from "../assets/home3.jpg";
// import bottles from "../assets/bottles.png";
// import choose1 from "../assets/choose1.webp";
// import choose2 from "../assets/choose2.webp";
// import choose3 from "../assets/choose3.webp";
// import choose4 from "../assets/choose4.webp";
// import choose5 from "../assets/choose5.webp";
// import arrow from "../assets/arrow.png"
// import { FaArrowRight } from "react-icons/fa";
// import sliderArrow from "../assets/Slider.svg";



// const Home = () => {
//   const features = [
//     {
//       img: choose1,
//       title: "Fresh Ingredients",
//       desc: "We choose only the freshest and most authentic ingredients, sourced locally. Keeping the farm to fork time as minimal as possible. ",
//     },
//     {
//       img: choose2,
//       title: "GLUTEN FREE",
//       desc: "Our products are gluten free, if that's the choice you make.",
//     },
//     {
//       img: choose3,
//       title: "ALL NATURAL",
//       desc: "We use only the most authentic natural ingredients, with no artificial enhancers, colours or emulsifiers.  So your salads and other dishes taste clean, fresh and flavourful.",
//     },
//     {
//       img: choose4,
//       title: "NO PRESERVATIVES",
//       desc: "Our range has no artificial flavours, no preservatives. Ensuring they are what  they say they are.",
//     },
//     {
//       img: choose5,
//       title: "VEGAN",
//       desc: "All our products are vegan, including our Classic Ceasars dressings.So you can be sure you are eating right, eating healthy and eating your kind of food.",
//     },
//   ];

//   const [expandedIndex, setExpandedIndex] = useState(null);
//   const toggleExpand = (index) => {
//     setExpandedIndex(expandedIndex === index ? null : index);
//   };

//   const images = [img1, img2, img3, img4];
//   const [current, setCurrent] = useState(0);
//   const [showMore, setShowMore] = useState(false);

//   const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length);
//   const handleToggle = () => setShowMore(!showMore);


//  const [profile, setProfile] = useState({});
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     const accessToken = "YOUR_LONG_LIVED_ACCESS_TOKEN"; // Replace with your real token

//     // Fetch profile info
//     fetch(`https://graph.instagram.com/me?fields=id,username,profile_picture_url&access_token=${accessToken}`)
//       .then((res) => res.json())
//       .then((data) => setProfile(data))
//       .catch((err) => console.error("Error fetching profile:", err));

//     // Fetch latest posts
//     fetch(`https://graph.instagram.com/me/media?fields=id,media_url,permalink,caption&limit=4&access_token=${accessToken}`)
//       .then((res) => res.json())
//       .then((data) => setPosts(data.data))
//       .catch((err) => console.error("Error fetching posts:", err));
//   }, []);

  

//   return (
//     <section className="w-full relative bg-[#FDF2D2] overflow-x-hidden">
//       {/* Carousel */}
//       <div className="w-full h-[60vh] sm:h-[70vh] md:h-auto relative overflow-hidden">
//         {/* "w-full h-[80vh] relative overflow-hidden" */}
//         <img
//           src={images[current]}
//           alt={`Slide ${current + 1}`}
//           className="w-full h-full object-cover md:object-cover transition-all duration-700"
//         />

//         {/* Single Right Button with >> */}
//         <button
//           onClick={nextSlide}
//           className="absolute top-1/2 right-2 transform -translate-y-1/2 "
//         >
//           {/* &gt;&gt; */}
//            <img src={sliderArrow} alt="next" className="w-6 h-6" />
//         </button>
//       </div>

//       {/* Content Section */}
//       <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between mt-12 gap-8">
//         {/* Left */}
//         <div className="max-w-lg space-y-6">
//           <h1 className="text-5xl text-gray-800">
//             <span className="font-medium inter text-[64px]" >Fresh. Bold.</span>
//             <br />
//             <span className=" inter font-bold text-[64px]">Sunny’s</span>
//           </h1>
//           <p className="text-gray-700">
//             What started out as a small bistro in 1995, grew into one of
//             Bengaluru's finest restaurants - Sunny’s - a one of a kind place
//             with traditional, tried and tested sauces, salad dressings and
//             marinades, that added a special flavour and taste to its dining
//             offerings.
//           </p>
//           {showMore && (
//             <div className="space-y-4 text-gray-700">
//               <p>
//                 This legendary taste is now available in bottles, on shelves of
//                 premium supermarkets like Nature's Basket. Brought to you by
//                 Sunny’s Legendary chef Arjun Sajnani.
//               </p>
//               <p>
//                 What followed was the natural progression into products that one
//                 could take home and enjoy at one's own table - SUNNY'S IN A
//                 BOTTLE.
//               </p>
//               <p className="font-semibold">What makes us different?</p>
//               <p>
//                 Our range of products are made with superior oils, flavourful
//                 and light, we use only fresh authentic ingredients that are
//                 sourced locally, as much as possible. They are emulsified
//                 naturally, no artificial thickeners, blended to ensure maximum
//                 taste.
//               </p>
//             </div>
//           )}
//           <button
//             onClick={handleToggle}
//             className="mt-4 px-6 py-2 border-2 border-[#FF5203] text-[#FF5203] rounded-2xl hover:bg-[#FF5203] hover:text-white transition flex items-center gap-2"
//           >
//             {showMore ? "Show Less" : "Read More"} <FaArrowRight />
//           </button>
//         </div>

//         {/* Right */}
//         <div className="relative flex">
//           <img
//             src={bottles}
//             alt="Food"
//             className="w-[300px] h-[300px] sm:w-[380px] sm:h-[450] object-cover rounded-xl"
//           />
//           <img
//             src={arrow}
//             alt="arrow"
//             className="w-[93px] h-[136px] rotate-30 relative -left-4 sm:[left-2] top-10"
//             />
//         </div>
//       </div>

//       {/* Why Choose us */}
//       <div className="text-center max-w-2xl mx-auto mb-12 mt-16">
//         <h2 className=" inter text-3xl font-medium text-gray-800 mb-4">
//           WHY CHOOSE US ?
//         </h2>
//         <p className="text-gray-600 max-w-lg mx-auto">
//           Dive into our wide range of culinary categories, each offering a
//           delectable selection of dishes to satisfy every craving.
//         </p>
//       </div>

//       {/* Features Grid */}
//       <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-0 lg:px-20">
//         {features.map((item, index) => {
//           const words = item.desc.split(" ");
//           const shortDesc =
//             words.slice(0, 10).join(" ") + (words.length > 10 ? "..." : "");

//           return (
//             <div
//               key={index}
//               className="flex flex-col justify-between items-center text-center"
//             >
//               <img
//                 src={item.img}
//                 alt={item.title}
//                 className="h-40 w-40 object-contain mx-auto"
//               />
//               <h3 className="font-semibold text-gray-800 mb-2">{item.title}</h3>
//               <p className="text-sm text-gray-600 ">
//                 {expandedIndex === index ? item.desc : shortDesc}
//               </p>
//               <button
//                 onClick={() => toggleExpand(index)}
//                 className="mt-3 text-[#FF5203] font-medium flex items-center gap-1 hover:underline"
//               >
//                 {expandedIndex === index ? "Show less" : "Read more"}{" "}
//                 <FaArrowRight />
//               </button>
//             </div>
//           );
//         })}
//       </div>

//       {/* Instagram Section */}
//       <div className="max-w-6xl mx-auto px-6 py-20">
//         {/* <h2 className="text-lg font-semibold text-gray-700 mb-6">
//           @sunnys_in_a_bottle
//         </h2> */}

//         {/* Instagram Feed (first 4 posts) */}
//         <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 gap-2 ">
//           {/* <iframe
//             src="https://www.instagram.com/p/POST_ID_2/embed"
//             className="w-full h-96 rounded-lg"
//             frameBorder="0"
//           ></iframe> */}

//           {/* <iframe
//             src="https://www.instagram.com/p/POST_ID_2/embed"
//             className="w-full h-96 rounded-lg"
//             frameBorder="0"
//           ></iframe> */}

//           {/* <iframe
//             src="https://www.instagram.com/p/POST_ID_3/embed"
//             className="w-full h-96 rounded-lg"
//             frameBorder="0"
//           ></iframe> */}
// {/* 
//           <iframe
//             src="https://www.instagram.com/p/POST_ID_4/embed"
//             className="w-full h-96 rounded-lg"
//             frameBorder="0"
//           ></iframe> */}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Home;

import React, { useState, } from "react";

import img1 from "../assets/home0.1.png";
import img2 from "../assets/home01.jpg";
import img3 from "../assets/home02.jpg";
import img4 from "../assets/home03.jpg";

import bottles from "../assets/bottles.png";

import choose1 from "../assets/choose1.webp";
import choose2 from "../assets/choose2.webp";
import choose3 from "../assets/choose3.webp";
import choose4 from "../assets/choose4.webp";
import choose5 from "../assets/choose5.webp";

import arrow from "../assets/arrow.png";
import sliderArrow from "../assets/Slider.svg";

import { FaArrowRight } from "react-icons/fa";

const Home = () => {
  const features = [
    {
      img: choose1,
      title: "Fresh Ingredients",
      desc: "We choose only the freshest and most authentic ingredients, sourced locally. Keeping the farm to fork time as minimal as possible.",
    },
    {
      img: choose2,
      title: "GLUTEN FREE",
      desc: "Our products are gluten free, if that's the choice you make.",
    },
    {
      img: choose3,
      title: "ALL NATURAL",
      desc: "We use only the most authentic natural ingredients, with no artificial enhancers, colours or emulsifiers.",
    },
    {
      img: choose4,
      title: "NO PRESERVATIVES",
      desc: "Our range has no artificial flavours, no preservatives. Ensuring they are what they say they are.",
    },
    {
      img: choose5,
      title: "VEGAN",
      desc: "All our products are vegan, including our Classic Ceasars dressings.",
    },
  ];

  const [expandedIndex, setExpandedIndex] = useState(null);
  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const images = [img1, img2, img3, img4];
  const [current, setCurrent] = useState(0);
  const [showMore, setShowMore] = useState(false);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length);
  const handleToggle = () => setShowMore(!showMore);

  return (
    <section className="w-full bg-[#FDF2D2] overflow-hidden">

      {/* Hero Carousel */}
      <div className="relative w-full h-[45vh] sm:h-[60vh] md:h-[80vh] overflow-hidden">
        <img
          src={images[current]}
          alt="slide"
          className="w-full h-full object-cover transition duration-700"
        />

        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/40 p-2 rounded-full"
        >
          <img src={sliderArrow} className="w-6 h-6" />
        </button>
      </div>

      {/* Text + Bottle Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mt-14 flex flex-col md:flex-row items-center gap-12">

        {/* Left */}
        <div className="flex-1 space-y-5">
          <h1 className="text-4xl sm:text-5xl md:text-6xl text-gray-800 leading-tight">
            <span className="font-medium">Fresh. Bold.</span>
            <br />
            <span className="font-bold">Sunny’s</span>
          </h1>

          <p className="text-gray-700 text-base sm:text-lg">
            What started out as a small bistro in 1995, grew into one of
            Bengaluru's finest restaurants.
          </p>

          {showMore && (
            <div className="text-gray-700 space-y-3 text-sm sm:text-base">
              <p>This legendary taste is now available in bottles.</p>
              <p>Products that one could take home and enjoy.</p>
              <p className="font-semibold">What makes us different?</p>
              <p>Our range is made with superior oils and fresh authentic ingredients.</p>
            </div>
          )}

          <button
            onClick={handleToggle}
            className="mt-2 px-5 py-2 border border-[#FF5203] text-[#FF5203] rounded-xl 
            hover:bg-[#FF5203] hover:text-white transition flex items-center gap-2 
            text-sm sm:text-base"
          >
            {showMore ? "Show Less" : "Read More"} <FaArrowRight />
          </button>
        </div>

        {/* Right: Bottle Section */}
        <div className="flex-1 flex justify-center relative">
          <img
            src={bottles}
            className="w-60 sm:w-72 md:w-96 object-contain"
            alt="bottles"
          />
          <img
            src={arrow}
            className="absolute -right-5 sm:-right-10 top-10 w-16 sm:w-24 rotate-12"
            alt="arrow"
          />
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="text-center mt-20">
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800">
          WHY CHOOSE US?
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto mt-3 px-4 text-sm sm:text-base">
          Dive into our wide range of culinary categories.
        </p>
      </div>

      {/* Feature Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 px-4 sm:px-10 mt-12 pb-20">
        {features.map((item, index) => {
          const shortDesc =
            item.desc.split(" ").slice(0, 10).join(" ") +
            (item.desc.split(" ").length > 10 ? "..." : "");

          return (
            <div key={index} className="text-center space-y-3">
              <img
                src={item.img}
                className="w-28 h-28 sm:w-32 sm:h-32 mx-auto object-contain"
                alt={item.title}
              />

              <h3 className="font-semibold text-gray-800 text-sm sm:text-base">
                {item.title}
              </h3>

              <p className="text-gray-600 text-xs sm:text-sm px-2">
                {expandedIndex === index ? item.desc : shortDesc}
              </p>

              <button
                onClick={() => toggleExpand(index)}
                className="text-[#FF5203] flex items-center justify-center gap-1 text-xs sm:text-sm"
              >
                {expandedIndex === index ? "Show less" : "Read more"}{" "}
                <FaArrowRight />
              </button>
            </div>
          );
        })}
      </div>

    </section>
  );
};

export default Home;

