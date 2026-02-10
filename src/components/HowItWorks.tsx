const steps = [
  {
    number: "1",
    title: "Kontakta oss",
    description: "Ring eller skicka en förfrågan. Vi svarar snabbt och hjälper dig att hitta rätt städning.",
  },
  {
    number: "2",
    title: "Vi planerar städningen",
    description: "Tillsammans bestämmer vi datum, omfattning och pris. Inga överraskningar.",
  },
  {
    number: "3",
    title: "Njut av ett skinande rent hem",
    description: "Vår personal kommer i rätt tid och levererar kvalitet. Du behöver bara vara nöjd.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-brand-blue text-center mb-4">
          Så fungerar det
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          Tre enkla steg från första kontakt till färdigstädad bostad eller arbetsplats.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
          {steps.map((step, i) => (
            <div key={step.number} className="relative text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-brand-green text-white font-bold text-xl sm:text-2xl shadow-soft">
                {step.number}
              </div>
              <h3 className="mt-4 text-xl font-semibold text-brand-blue">{step.title}</h3>
              <p className="mt-2 text-gray-600 text-sm sm:text-base max-w-xs mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
