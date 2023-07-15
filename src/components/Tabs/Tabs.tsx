import { tabs } from "../../constants/tabs";
import { Questions } from "../Questions/Questions";

type Faq = {
  id: number;
  title: string;
  topicId: number;
  question: string;
  answer: string;
  sortOrder: number;
  category: string | null;
};

type TabProps = {
  faqList: Faq[];
  changeTopic: (topicId: number) => void;
  handleFaqClick: (faqId: number) => void;
  activeFaqId: number | null;
};

export const Tabs = ({
  faqList,
  changeTopic,
  handleFaqClick,
  activeFaqId,
}: TabProps): JSX.Element => {
  return (
    <>
      <div>
        {tabs.map((tab) => (
          <button key={tab.id} onClick={() => changeTopic(tab.id)}>
            {tab.title}
          </button>
        ))}
      </div>
      <Questions
        faqList={faqList}
        handleFaqClick={handleFaqClick}
        activeFaqId={activeFaqId}
      />
    </>
  );
};
