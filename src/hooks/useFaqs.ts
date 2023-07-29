import { useState } from "react";
import { GENERAL_QUESTIONS_TOPIC_ID } from "../constants/Constants";
import data from "../data/faqs.json";

/**
 * useFaqs hook manages an array of FAQs filtered by their topic ID.
 * It returns the filtered FAQs based on the active topic, and a function
 * that allows changing the active topic ID.
 */

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
