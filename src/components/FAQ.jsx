import { useState } from "react";
import { motion } from "framer-motion";

const FAQData = [
  {
    question: "¿Cuánto cuesta el curso?",
    answer:
      'El curso es completamente gratuito. Sin embargo, si deseas apoyar el curso y su continuo desarrollo, puedes invitarnos a un café en <a href="https://buymeacoffee.com/matiasfha">BuyMeACoffee</a>',
  },
  {
    question: "¿Este curso es para principiantes?",
    answer:
      "Sí, este curso es ideal para desarrolladores web de cualquier nivel de experiencia que quieran fortalecer sus habilidades en Javascript y aplicarlas efectivamente en el desarrollo de aplicaciones web con React.",
  },
  {
    question: "¿Cuánto tiempo tomará terminar el curso?",
    answer:
      "El curso consta de una serie de correos electrónicos que se adaptan a tu tiempo disponible para invertir en tu formación. Puedes tomar tanto o tan poco tiempo como necesites para completar el curso.",
  },
  {
    question: "¿Necesito algún software especial para tomar este curso?",
    answer:
      "No, solo necesitas acceso a un navegador web y una dirección de correo válida para inscribirte en el curso.",
  },
  {
    question: "¿Este curso cubre solo Javascript o también abarca otros temas?",
    answer:
      "Este curso se enfoca en los conceptos esenciales de Javascript para aplicarlos de manera efectiva en el desarrollo de aplicaciones web con React. No cubre otros temas específicos.",
  },
];

export const FAQ = () => (
  <section className="relative pt-16 pb-16 bg-gradient-to-b from-spaceCadet to-caribben overflow-hidden">
    <div className="absolute -top-10" id="FAQ" />
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="relative z-10 container px-2 sm:px-8 lg:px-4 mx-auto w-11/12 sm:w-full">
        <div className="md:max-w-4xl mx-auto">
          <p className="mb-7 custom-block-subtitle text-center">
            ¿Tienes preguntas?
          </p>
          <h2 className="mb-16 custom-block-big-title text-center">
            Preguntas frecuentes
          </h2>
          <div className="mb-11 flex flex-wrap -m-1">
            {FAQData.map((item, index) => (
              <div
                className="w-full p-1"
                key={`${item.question}-${item.answer}`}
              >
                <FAQBox
                  title={item.question}
                  content={item.answer}
                  defaultOpen={index === 0}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  </section>
);

const FAQBox = ({ defaultOpen, title, content }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div
      className="pt-2 sm:pt-6 pb-2 px-3 sm:px-8  rounded-3xl bg-revolver-800 custom-border-gray-darker mb-4 relative hover:bg-revolver-900 cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex flex-col p-2  justify-center items-start">
        <h3 className=" custom-content-title pt-3 sm:pt-0 pr-8 sm:pr-0">
          {title}
        </h3>
        <p
          className={`text-customGrayText pt-4 transition-all duration-300 overflow-hidden ${isOpen ? "max-h-96" : "max-h-0"
            }`}
          dangerouslySetInnerHTML={{ __html: content }}
        ></p>
      </div>
      <div className="absolute top-6 right-4 sm:top-8 sm:right-8">
        <svg
          width="28px"
          height="30px"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`transition-all duration-500  ${isOpen ? "rotate-[180deg]" : "rotate-[270deg]"
            }`}
        >
          <path
            d="M4.16732 12.5L10.0007 6.66667L15.834 12.5"
            stroke="#4F46E5"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </div>
    </div>
  );
};
