import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "rolandaanwar7x7",
    location: "United States",
    rating: 5,
    text: "Abdul Salam truly impressed with his exceptional expertise in website development, delivering work that exceeded expectations with unmatched professionalism. Collaborating with him was a breeze thanks to his politeness and deep understanding. Highly recommended! 🙌",
    platform: "Fiverr",
  },
  {
    name: "yinka871",
    location: "United States",
    rating: 5,
    text: "Absolutely amazing work! The work exceeded my expectations everything was done 100% perfectly. Great communication, fast delivery, and pure professionalism. I highly recommend this seller and will definitely work with them again Great seller",
    platform: "Fiverr",
  },
  {
    name: "mgnitltd",
    location: "United Kingdom",
    rating: 5,
    text: "Good developer, works well and pays attention to detail. The developer is also very helpful in coming up with ideas and suggestions. Great to work with and will hopefully work with them again.",
    platform: "Fiverr",
  },
    {
    name: "gregadkins126",
    location: "United States",
    rating: 5,
    text: "Very strong developer and solid inter-personal communication skills, and commitment to the work.",
    platform: "Fiverr",
  },
  {
    name: "gregadkins126",
    location: "United States",
    rating: 5,
    text: "Awesome partner and technical lead.",
    platform: "Fiverr",
  },
  {
    name: "amanuelgirma186",
    location: "United States",
    rating: 5,
    text: "he made my website he went above and beyond. Thank you",
    platform: "Fiverr",
  },
  {
    name: "rolandaanwar7x7",
    location: "United States",
    rating: 5,
    text: "Absolutely wonderful seller… Talented.",
    platform: "Fiverr",
  },
  {
    name: "amanuelgirma186",
    location: "United States",
    rating: 5,
    text: "perfect man I am glad I choose you",
    platform: "Fiverr",
  },
  {
    name: "amanuelgirma186",
    location: "United States",
    rating: 5,
    text: "I love it we have one more to go.",
    platform: "Fiverr",
  },
  {
    name: "kailsay",
    location: "China",
    rating: 5,
    text: "Unmatched professionalism and can communicate with me in a friendly manner",
    platform: "Fiverr",
  },
  {
    name: "sergisanchezll",
    location: "Spain",
    rating: 5,
    text: "Very good work and very professional",
    platform: "Fiverr",
  },
  {
    name: "gregadkins126",
    location: "United States",
    rating: 5,
    text: "Awesome work! Thanks for the speed and quality!",
    platform: "Fiverr",
  },
  {
    name: "gregadkins126",
    location: "United States",
    rating: 5,
    text: "Solid work and communications.",
    platform: "Fiverr",
  },
  {
    name: "kailsay",
    location: "China",
    rating: 5,
    text: "Great developer, great communication, Successful delivery",
    platform: "Fiverr",
  },
];

const TestimonialCard = ({ testimonial, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative bg-white dark:bg-neutral-800 rounded-lg p-6 shadow-lg border border-neutral-200 dark:border-neutral-700 hover:shadow-xl transition-shadow duration-300"
    >
      {/* Quote Icon */}
      <div className="absolute top-4 right-4 text-neutral-300 dark:text-neutral-600">
        <Quote className="w-6 h-6" />
      </div>

      {/* Rating */}
      <div className="flex items-center gap-1 mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
        ))}
      </div>

      {/* Testimonial Text */}
      <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed mb-6 text-sm lg:text-base">
        &quot;{testimonial.text}&quot;
      </p>

      {/* Client Info */}
      <div className="flex items-center justify-between">
        <div>
          <h4 className="font-medium text-neutral-900 dark:text-neutral-100">
            {testimonial.name}
          </h4>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            {testimonial.location}
          </p>
        </div>
        <div className="text-xs text-neutral-400 dark:text-neutral-500 bg-neutral-100 dark:bg-neutral-700 px-2 py-1 rounded">
          {testimonial.platform}
        </div>
      </div>
    </motion.div>
  );
};

TestimonialCard.propTypes = {
  testimonial: PropTypes.shape({
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    platform: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

const Testimonials = () => {
  return (
    <div className="font-mono relative py-20 mt-20">
      {/* Background Pattern - Similar to Hero */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-50 via-white to-neutral-100 dark:from-neutral-900 dark:via-neutral-900 dark:to-neutral-800" />
        <div className="absolute top-0 left-0 w-full h-full opacity-30 dark:opacity-10">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-neutral-200 dark:bg-neutral-700 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-neutral-300 dark:bg-neutral-600 rounded-full blur-3xl" />
        </div>
      </div>

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
            What Clients Say
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto ">
            Trusted by clients worldwide for delivering exceptional development
            solutions
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
