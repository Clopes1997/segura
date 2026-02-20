import { useState } from 'react';
import type { FAQContent } from '../../../content/types';

interface FAQSectionProps {
  content: FAQContent;
}

export default function FAQSection({ content }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-media font-base bg-safe-green text-almost-white py-60">
      <div className="content_container container mx-auto flex flex-col gap-8 w-full max-md:max-w-full justify-center">
        <div className="content items-start gap-10 w-full flex gap-14 justify-center items-center flex-col lg:flex-row flex-col lg:flex-col">
          <div className="content_header flex flex-col gap-3 w-full items-center">
            <h2 className="text-4xl font-semibold font-title">{content.title}</h2>
            <p className="w-full lg:w-5/6 text-lg text-start md:text-center lg-w-full"></p>
          </div>
          <div className="right__holder flex flex-col flex-1 w-full">
            <div className="faq__holder flex flex-col gap-8">
              {content.items.map((item, index) => (
                <div
                  key={index}
                  className="faq__item border-b-2 pb-8 border-almost-white"
                >
                  <button
                    type="button"
                    className="faq__question flex gap-2 cursor-pointer w-full text-left"
                    onClick={() => toggleItem(index)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        toggleItem(index);
                      }
                    }}
                    aria-expanded={openIndex === index}
                  >
                    <svg
                      className={`stroke-almost-white transition-transform duration-300 ${
                        openIndex === index ? 'rotate-90' : ''
                      }`}
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        d="M0 0L16 12.5L0 25"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <h4 className="text-xl font-normal font-title">
                      {item.question}
                    </h4>
                  </button>
                  <div
                    className={`faq__answer pl-6 pt-4 ${
                      openIndex === index ? '' : 'hidden'
                    }`}
                  >
                    <p className="text-base font-light" dangerouslySetInnerHTML={{ __html: item.answer }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
