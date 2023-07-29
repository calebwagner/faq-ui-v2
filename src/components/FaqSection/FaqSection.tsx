import { Tabs } from "./Tabs";
import { useFaqs } from "../../hooks/useFaqs";
import { useState } from "react";

export const FaqSection = () => {
  const [activeFaqId, setActiveFaqId] = useState<number | null>(null);

  const { faqList, changeTopic } = useFaqs();

  const handleFaqClick = (faqId: number) => {
    setActiveFaqId((prevFaqId) => (prevFaqId === faqId ? null : faqId));
  };

  return (
    <Tabs
      faqList={faqList}
      changeTopic={changeTopic}
      handleFaqClick={handleFaqClick}
      activeFaqId={activeFaqId}
    />
  );
};
