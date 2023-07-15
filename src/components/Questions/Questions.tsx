import React from "react";
import { Answer } from "../Answers/Answer";

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
  faqList: Faq[];
  handleFaqClick: (faqId: number) => void;
  activeFaqId: number | null;
};

export const Questions = ({
  faqList,
  handleFaqClick,
  activeFaqId,
}: FaqProps): JSX.Element => {
  return (
    <>
      <div>
        {faqList.map((faq) => (
          <div key={faq.id}>
            <h3 onClick={() => handleFaqClick(faq.id)}>{faq.question}</h3>
            <Answer
              faqId={faq.id}
              answer={faq.answer}
              activeFaqId={activeFaqId}
            />
          </div>
        ))}
      </div>
    </>
  );
};
