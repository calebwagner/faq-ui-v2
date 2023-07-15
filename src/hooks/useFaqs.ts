import { useState } from "react";
import { GENERAL_QUESTIONS_TOPIC_ID } from "../constants/Constants";
import data from "../data/faqs.json";

type Faq = {
  id: number;
  title: string;
  topicId: number;
  question: string;
  answer: string;
  sortOrder: number;
  category: string | null;
};

export const useFaqs = (
  defaultTopicId: number = GENERAL_QUESTIONS_TOPIC_ID
) => {
  const FaqList = data as Faq[];
  const [faqList] = useState<Faq[]>(FaqList);
  const [activeTopicId, setActiveTopicId] = useState<number>(defaultTopicId);

  const filteredFaqList = faqList.filter(
    (faq) => faq.topicId === activeTopicId
  );

  const changeTopic = (topicId: number) => {
    setActiveTopicId(topicId);
  };

  return { faqList: filteredFaqList, changeTopic };
};
