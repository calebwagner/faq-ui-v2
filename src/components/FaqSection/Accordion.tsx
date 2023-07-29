import { Answer } from "./Answer";
import { Question } from "./Question";

export const Accordion = ({
  faq,
  activeFaqId,
  handleFaqClick,
}: AccordionProps): JSX.Element => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        width: "60%",
      }}
    >
      <Question faqId={faq.id} faq={faq} handleFaqClick={handleFaqClick} />
      <Answer faqId={faq.id} answer={faq.answer} activeFaqId={activeFaqId} />
    </div>
  );
};
