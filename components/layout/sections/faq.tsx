import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: 'Do you offer free estimates?',
    answer: 'Yes, we offer free estimates! Contact us.',
    value: 'item-1',
  },
  {
    question: 'What services do you offer?',
    answer:
      'We offer a wide range of electrical services including residential, commercial and industrial wiring, lighting installations, electrical repairs, panel upgrades, and more. For a full list of services, please see our Services page.',
    value: 'item-2',
  },
  {
    question: 'Are you licensed and insured?',
    answer:
      'Yes, we are fully licensed and insured. Our team adheres to all local and national electrical codes and standards to ensure the highest quality of work and safety.',
    value: 'item-3',
  },
  {
    question: 'How long will my project take?',
    answer:
      'The duration of your project depends on its complexity and scope. We will provide you with an estimated timeline when we discuss your project.',
    value: 'item-4',
  },
];

export const FAQSection = () => {
  return (
    <section id="faq" className="container md:w-[700px] py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">FAQ</h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold">Common Questions</h2>
      </div>

      <Accordion type="single" collapsible className="AccordionRoot">
        {FAQList.map(({ question, answer, value }) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left">{question}</AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
