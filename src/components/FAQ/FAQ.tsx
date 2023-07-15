import { Tabs } from "../Tabs/Tabs";
import { useFaqs } from "../../hooks/useFaqs";
import { useState } from "react";

export const FAQComponent = () => {
  const [activeFaqId, setActiveFaqId] = useState<number | null>(null);

  const { faqList, changeTopic } = useFaqs();

  const handleFaqClick = (faqId: number) => {
    setActiveFaqId((prevFaqId) => (prevFaqId === faqId ? null : faqId));
  };

  return (
    <>
      <Tabs
        faqList={faqList}
        changeTopic={changeTopic}
        handleFaqClick={handleFaqClick}
        activeFaqId={activeFaqId}
      />
    </>
  );
};
