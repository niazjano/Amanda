"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Vad kostar städning?",
    answer:
      "Priset beror på storlek på bostaden eller lokalen, typ av städning och hur ofta du vill ha oss. Vi ger alltid en tydlig offert innan vi börjar – inga dolda avgifter. Du kan också dra nytta av RUT-avdraget om du är privatperson.",
  },
  {
    question: "Hur fungerar RUT-avdraget?",
    answer:
      "RUT-avdraget gör att du som privatperson kan få skattereduktion för hushållsnära tjänster, till exempel städning. Du betalar oss som vanligt, och sedan anger du utgifterna i din deklaration och får avdrag. Vi hjälper gärna till med kvitto och information du behöver.",
  },
  {
    question: "Är personalen försäkrad?",
    answer:
      "Ja. All vår personal är försäkrad och utbildad. Vi tar ansvar för vårt arbete och du kan känna dig trygg med oss i ditt hem eller på arbetsplatsen.",
  },
  {
    question: "Kan jag avboka?",
    answer:
      "Ja. Vi har inga bindningstider. Om du behöver avboka eller flytta en tid, kontakta oss så snart du kan så ordnar vi det. Vi vill att det ska vara enkelt och flexibelt för dig.",
  },
];

export function FAQ() {
  const [openId, setOpenId] = useState<string | null>(faqs[0]?.question ?? null);

  return (
    <section id="faq" className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-brand-blue text-center mb-4">
          Vanliga frågor
        </h2>
        <p className="text-gray-600 text-center mb-12">
          Här finns svar på det vi ofta får frågor om. Saknar du något – hör av dig.
        </p>

        <div className="space-y-3">
          {faqs.map((faq) => {
            const isOpen = openId === faq.question;
            return (
              <div
                key={faq.question}
                className="rounded-2xl bg-white border border-gray-100 shadow-soft overflow-hidden"
              >
                <button
                  type="button"
                  className="w-full flex items-center justify-between gap-3 px-6 py-4 sm:py-5 text-left font-semibold text-brand-blue hover:bg-gray-50/80 transition-colors flex-nowrap"
                  onClick={() => setOpenId(isOpen ? null : faq.question)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faqs.indexOf(faq)}`}
                  id={`faq-question-${faqs.indexOf(faq)}`}
                >
                  <span className="min-w-0 flex-1">{faq.question}</span>
                  <span
                    className={`flex-shrink-0 inline-flex items-center justify-center w-8 h-8 rounded-lg bg-transparent text-brand-green transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                    aria-hidden
                  >
                    <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>
                <div
                  id={`faq-answer-${faqs.indexOf(faq)}`}
                  role="region"
                  aria-labelledby={`faq-question-${faqs.indexOf(faq)}`}
                  className={`overflow-hidden transition-all duration-200 ${isOpen ? "max-h-96" : "max-h-0"}`}
                >
                  <div className={`px-6 pb-4 sm:pb-5 pt-0 text-gray-600 text-sm sm:text-base leading-relaxed ${isOpen ? "border-t border-gray-100" : ""}`}>
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
