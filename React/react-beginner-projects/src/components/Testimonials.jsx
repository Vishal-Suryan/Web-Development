import { useState } from "react";
import "../test.css";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = [
    {
      quote:
        "This product completely changed the way I work. Highly recommended!",
      author: "Alex Morgan",
    },
    {
      quote: "Outstanding service and top-notch support. Five stars!",
      author: "Jamie Lee",
    },
    {
      quote:
        "I've never experienced such an intuitive and well-designed solution.",
      author: "Chris Walker",
    },
    {
      quote:
        "Reliable, efficient, and easy to use. What more could you ask for?",
      author: "Taylor Kim",
    },
    {
      quote: "From start to finish, the experience was seamless.",
      author: "Jordan Patel",
    },
    {
      quote: "Customer support was quick, friendly, and very helpful.",
      author: "Morgan Blake",
    },
    {
      quote: "A must-have tool for any modern business.",
      author: "Casey Nguyen",
    },
    {
      quote: "Incredible value for the price. I’m genuinely impressed.",
      author: "Riley Chen",
    },
    {
      quote: "Helped streamline our workflow and boosted productivity.",
      author: "Drew Alvarez",
    },
    {
      quote: "I recommend this to all my colleagues—it's that good.",
      author: "Peyton Rivera",
    },
  ];
  const handlePrevClick = () => {
    setCurrentIndex(
      (currentIndex + testimonials.length - 1) % testimonials.length
    );
  };
  const handleNextClick = () => {
    setCurrentIndex((currentIndex + 1) % testimonials.length);
  };
  return (
    <div className="testimonials">
      <div className="testimonials-quote">
        {testimonials[currentIndex].quote}
      </div>
      <div className="testimonials-author">
        - {testimonials[currentIndex].author}
      </div>
      <div className="testimonials-nav">
        <button onClick={handlePrevClick}>Prev</button>
        <button onClick={handleNextClick}>Next</button>
      </div>
    </div>
  );
};

export default Testimonials;
