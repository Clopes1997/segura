import { useState } from 'react';
import type { WhySeguraContent } from '../../../content/types';

interface WhySeguraSectionProps {
  content: WhySeguraContent;
}

export default function WhySeguraSection({ content }: WhySeguraSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-media font-base bg-safe-green text-almost-white py-60">
      <div className="content_container container mx-auto flex flex-col gap-8 w-full max-md:max-w-full justify-center">
        <div className="content_header flex flex-col gap-3 items-center">
          <h2 className="text-4xl font-semibold font-title">{content.title}</h2>
        </div>
        <div className="content items-start gap-10 w-full flex gap-14 justify-center items-center flex-col lg:flex-row flex-row lg:flex-row">
          <div className="media__holder flex-1 rounded-10 place-items-center">
            <img
              src="/images/dashboard.webp"
              alt="Comparison Segura® with competitors"
              className="img rounded-10"
              width="500"
              height="500"
              loading="lazy"
              decoding="async"
            />
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
                    <p className="text-base font-light">{item.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="btns__holder flex md:flex-row flex-col gap-8 justify-center items-center">
          <a href={content.ctaPrimaryLink} className="demo-btn hovered">
            {content.ctaPrimary}
          </a>
          <a href={content.ctaSecondaryLink} className="outlined-password-btn">
            {content.ctaSecondary}
          </a>
        </div>
      </div>
    </section>
  );
}
