type Faq = {
  id: number;
  title: string;
  topicId: number;
  question: string;
  answer: string;
  sortOrder: number;
  category: string | null;
};

type AccordionProps = {
  faq: Faq;
  activeFaqId: number | null;
  handleFaqClick: (faqId: number) => void;
};

type AnswerProps = {
  faqId: number;
  answer: string;
  activeFaqId: number | null;
};

type QuestionProps = {
  faqId: number;
  faq: Faq;
  handleFaqClick: (faqId: number) => void;
};

type TabProps = {
  faqList: Faq[];
  changeTopic: (topicId: number) => void;
  handleFaqClick: (faqId: number) => void;
  activeFaqId: number | null;
};
