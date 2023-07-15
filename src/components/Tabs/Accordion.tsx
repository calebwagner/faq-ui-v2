import { Answer } from "../Answers/Answer";
import { Question } from "../Questions/Question";

type Faq = {
  id: number;
  title: string;
  topicId: number;
  question: string;
  answer: string;
  sortOrder: number;
  category: string | null;
};

type FaqProps = {
  faq: Faq;
  activeFaqId: number | null;
  handleFaqClick: (faqId: number) => void;
};

export const Accordion = ({
  faq,
  activeFaqId,
  handleFaqClick,
}: FaqProps): JSX.Element => {
  return (
    <>
      <div>
        <Question faqId={faq.id} faq={faq} handleFaqClick={handleFaqClick} />
        <Answer faqId={faq.id} answer={faq.answer} activeFaqId={activeFaqId} />
      </div>
    </>
  );
};
