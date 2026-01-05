import { useState, useEffect } from "react";

export default function Testimonials() {
const testimonial = [ { id:1, img: "/images/test1.webp", content:"my MBA experience in MSSM has been a journey of personal and professional growth. It has equipped me with the knowledge, skills, and network to navigate the complexities of the corporate world. More importantly, it has instilled in me a lifelong learning mindset and the drive to pursue excellence in whatever I do", name :"Avinash A", batch:"Batch 2021-2023", role:"Procurement Executive, IBM", }, 
  { id:2, img: "/images/test2.webp", content:"“MSSM provided me with immense exposure that shaped both personal and professional growth. The Happy Class allowed us to explore new ideas, shared perspectives, learn from each other and embrace creativity”", name :"Harini S", batch:"Batch 2022-2024", role:"Process Associate, IBM", }, 
  { id:3, img: "/images/test3.webp", content:"“from MSSM, I not only got a deep dive of the business concepts but also tools that are used in the real-life situations. The faculty members were incredibly supportive, always encouraging us to think creatively and solve problems from different perspectives”", name :"Afifah", batch:"Batch 2022-2024", role:"Business Support Executive, Lennox", },
   { id:4, img: "/images/test4.webp", content:"“our knowledge is not only limited to books but we learned practical exposure to solving complex business problems, MSSM also provided us soft skills that have made me a much more confident person in the workplace environment”", name :"Harini S", batch:"Batch 2022-2024", role:"Financial Adviser, Motilal Oswal", },
  { id:5, img: "/images/test5.webp", content:"“MBA in MSSM is a wider platform to learn and understand the practical aspects of the Business world, while also offering an opportunity to mold ourselves into professionals. All the faculty showing their support throughout my academic career and even after”", name :"Varshini V", batch:"Batch 2021-2023", role:"Financial Analyst, Hexaware", }, 
  { id:6, img: "/images/test6.webp", content:"“MSSM offers an environment that pushes you to perform better. The knowledge I gain will not only prepare me for success but will also inspire me to work hard towards excellence.”", name :"Harini Mohan", batch:"Batch 2021-2023", role:"Accounts Officer, National Hub for Health Instrumentation", }, ]

  const [index, setIndex] = useState(0);

  // autoplay with safe interval usage
  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonial.length);
    }, 5000);
    return () => clearInterval(id);
  }, [testimonial.length]);

  const nextSlide = () => setIndex((prev) => (prev + 1) % testimonial.length);
  const prevSlide = () => setIndex((prev) => (prev - 1 + testimonial.length) % testimonial.length);

  return (
    <div className="w-full max-w-3xl mx-auto bg-white md:p-7 text-center overflow-hidden">
      <h3 className="text-2xl font-semibold mb-6">Alumni Testimonial</h3>

      {/* slider viewport */}
      <div className="relative w-full overflow-hidden">
        {/* slides wrapper: width = number of slides * 100% achieved by flex */}
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {testimonial.map((item) => (
            // each slide must be full width of viewport
            <div
              key={item.id}
              className="w-full flex-shrink-0 flex flex-col md:flex-row items-center gap-6 px-6 py-8"
            >
              <div className="relative flex-shrink-0">
                {/* decorative circle behind image */}
                <div className="bg-mssmclr rounded-full w-20 h-20 md:w-44 md:h-44"></div>

                <img
                  src={item.img}
                  alt={item.name}
                  className="absolute  top-0 left-0 rounded-full md:w-44 md:h-44 w-24 h-24 object-cover border-4 border-mssmclr shadow-lg"
                />
              </div>

              <div className="text-left max-w-xl md:pl-6">
                <p className="italic mb-4 mt-4 md:mt-0">"{item.content}"</p>
                <h3 className="font-semibold text-mssmclr">{item.name}</h3>
                <p className="text-sm">{item.batch}</p>
                <p className="text-sm text-gray-600">{item.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* controls */}
        <button
          onClick={prevSlide}
          aria-label="Previous testimonial"
          className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-mssmclr text-white px-3 py-1 rounded-full"
        >
          ‹
        </button>

        <button
          onClick={nextSlide}
          aria-label="Next testimonial"
          className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-mssmclr text-white px-3 py-1 rounded-full"
        >
          ›
        </button>
      </div>
    </div>
  );
}
