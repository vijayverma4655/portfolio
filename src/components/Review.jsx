import React from "react";
import ReviewCard from "./ReviewCard";


const reviews = [
  {
    content:
      "Successfully completed an internship focused on web application development , Demonstrated proficiency in HTML, CSS, and JavaScript. , Recognized for being sincere, diligent, and highly productive throughout the internship. , Contributed to various web development projects, enhancing user interface and functionality   May2023   - July 2023",
    name: "PiZone Infotech Solution Pvt. Ltd., [Sri Ganganagar]",
    imgSrc: "/images/pizone.png",
    company: "Internships ",
  },
 
];
const Review = () => {
  

  return (
    <section className="section overflow-hidden" id="reviews">
      <div className="container">
        <h2 className="headline-2 mb-8">Professional Experience</h2>
          
        <div className="flex items-stretch gap-3 w-fit">
          

          {reviews.map(({ content, name, imgSrc, company }, key) => (
            <ReviewCard
              key={key}
              name={name}
              imgSrc={imgSrc}
              company={company}
              content={content}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Review;
