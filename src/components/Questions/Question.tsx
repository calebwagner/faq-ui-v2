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
  faqId: number;
  faq: Faq;
  handleFaqClick: (faqId: number) => void;
};

export const Question = ({
  faqId,
  faq,
  handleFaqClick,
}: FaqProps): JSX.Element => {
  return (
    <>
      <div>
        <div key={faqId}>
          <h3 onClick={() => handleFaqClick(faqId)}>{faq.question}</h3>
        </div>
      </div>
    </>
  );
};
