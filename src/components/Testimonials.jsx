import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { Star, Quote } from "lucide-react";

const testimonials = [
  { name: "rolandaanwar7x7", location: "United States", rating: 5, text: "Abdul Salam truly impressed with his exceptional expertise in website development, delivering work that exceeded expectations with unmatched professionalism. Collaborating with him was a breeze thanks to his politeness and deep understanding. Highly recommended!" },
  { name: "guusesbir", location: "Netherlands", rating: 5, text: "Abdul Salam was the best coder for our platform! We recommend everyone to have a coder in their team like Abdul. Thank you brother!" },
  { name: "smithediron20", location: "Bulgaria", rating: 5, text: "Really talented dev. He is excellent at communication especially with how fast and responsive he is. If you're looking for the right developer for your project trust me you've come to the right place." },
  { name: "guusesbir", location: "Netherlands", rating: 5, text: "Excellent experience working with Abdul. The communication was clear, the delivery was fast, and the final result looks very professional. All requested changes were handled quickly and with great attention to detail." },
  { name: "yinka871", location: "United States", rating: 5, text: "Absolutely amazing work! Everything was done 100% perfectly. Great communication, fast delivery, and pure professionalism. I highly recommend this seller and will definitely work with them again." },
  { name: "mgnitltd", location: "United Kingdom", rating: 5, text: "Good developer, works well and pays attention to detail. The developer is also very helpful in coming up with ideas and suggestions. Great to work with." },
  { name: "gregadkins126", location: "United States", rating: 5, text: "He's the 'A' team. A highly skilled and on time delivery leader." },
  { name: "irontjennsz", location: "Netherlands", rating: 5, text: "Salam did very well on perfecting our webdesign and functionalities! Communication was clear and very kind. Great to work with Salam and we would recommend everyone!" },
  { name: "smithediron20", location: "Bulgaria", rating: 5, text: "Abdul has built an entire web app for our SaaS and the experience has been flawless. He is never behind the deadline and an absolute delight to work with." },
  { name: "smithediron20", location: "Bulgaria", rating: 5, text: "Almost done with our big project and Abdul has been incredible throughout from the first phase to the last. Definitely recommend him for his expertise, flexibility and willingness to understand your project." },
  { name: "guusesbir", location: "Netherlands", rating: 5, text: "Very good development! Our CTO is happy with the coding help of Abdul Salam." },
  { name: "gregadkins126", location: "United States", rating: 5, text: "Awesome partner and technical lead." },
  { name: "amanuelgirma186", location: "United States", rating: 5, text: "He made my website — he went above and beyond. Thank you." },
  { name: "gregadkins126", location: "United States", rating: 5, text: "Very strong developer and solid inter-personal communication skills, and commitment to the work." },
  { name: "rolandaanwar7x7", location: "United States", rating: 5, text: "Absolutely wonderful seller… Talented." },
  { name: "kailsay", location: "China", rating: 5, text: "Unmatched professionalism and can communicate in a friendly manner." },
  { name: "sergisanchezll", location: "Spain", rating: 5, text: "Very good work and very professional." },
  { name: "gregadkins126", location: "United States", rating: 5, text: "Awesome work! Thanks for the speed and quality!" },
  { name: "kailsay", location: "China", rating: 5, text: "Great developer, great communication, successful delivery." },
  { name: "guusesbir", location: "Netherlands", rating: 5, text: "Everything went perfectly! Briefing was clear for Abdul and changes were done fast and correctly. Very nice to work with Abdul!" },
  { name: "guusesbir", location: "Netherlands", rating: 5, text: "Fast and good development — jobs are finished by Abdul Salam, thank you!" },
  { name: "guusesbir", location: "Netherlands", rating: 5, text: "The best coder so far from Fiverr who has worked on our projects!" },
  { name: "rolandaanwar7x7", location: "United States", rating: 5, text: "Despite personal circumstances, Abdul remained committed to the success and progress of the project. His professionalism, communication, dedication, and technical expertise were truly outstanding." },
  { name: "gregadkins126", location: "United States", rating: 5, text: "Another great delivery. Consistent quality and always on time." },
  { name: "amanuelgirma186", location: "United States", rating: 5, text: "Perfect man — I am glad I chose you." },
  { name: "guusesbir", location: "Netherlands", rating: 5, text: "The results look very professional and we will keep working with Abdul on future projects." },
  { name: "gregadkins126", location: "United States", rating: 5, text: "Solid work and communications. Reliable every time." },
];

const half = Math.ceil(testimonials.length / 2);
const row1 = testimonials.slice(0, half);
const row2 = testimonials.slice(half);

const TestimonialCard = ({ testimonial }) => (
  <div className="flex-shrink-0 w-[300px] sm:w-[340px] bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl p-5">
    <div className="flex items-center justify-between mb-3">
      <div className="flex gap-0.5">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
        ))}
      </div>
      <Quote className="w-4 h-4 text-neutral-300 dark:text-neutral-600" />
    </div>
    <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed mb-4 line-clamp-3">
      &ldquo;{testimonial.text}&rdquo;
    </p>
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">{testimonial.name}</p>
        <p className="text-xs text-neutral-400 dark:text-neutral-500 mt-0.5">{testimonial.location}</p>
      </div>
      <span className="text-[10px] font-medium text-neutral-500 dark:text-neutral-500 bg-neutral-100 dark:bg-neutral-800 px-2 py-0.5 rounded">
        Fiverr
      </span>
    </div>
  </div>
);

TestimonialCard.propTypes = {
  testimonial: PropTypes.shape({
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
};

const Testimonials = () => {
  return (
    <section className="relative py-24 lg:py-32 border-t border-neutral-100 dark:border-neutral-900 overflow-hidden">
      {/* Header */}
      <div className="container mx-auto px-6 lg:px-8 mb-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6"
        >
          <div>
            <p className="text-sm font-semibold text-violet-600 dark:text-violet-400 uppercase tracking-widest mb-3">
              Client Reviews
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white">
              What Clients Say
            </h2>
          </div>
          <div className="flex gap-8 sm:gap-12 flex-shrink-0">
            {[
              { value: "27+", label: "Reviews" },
              { value: "5.0★", label: "Rating" },
            ].map((s, i) => (
              <div key={i}>
                <div className="text-2xl font-bold text-neutral-900 dark:text-white">{s.value}</div>
                <div className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Marquee */}
      <div className="marquee-container space-y-4">
        <div className="flex gap-4 animate-marquee w-max">
          {[...row1, ...row1].map((t, i) => <TestimonialCard key={i} testimonial={t} />)}
        </div>
        <div className="flex gap-4 animate-marquee-reverse w-max">
          {[...row2, ...row2].map((t, i) => <TestimonialCard key={i} testimonial={t} />)}
        </div>
      </div>

      {/* Edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white dark:from-neutral-950 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white dark:from-neutral-950 to-transparent" />
    </section>
  );
};

export default Testimonials;
