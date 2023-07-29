import { tabs } from "../../constants/tabs";
import { Accordion } from "./Accordion";

export const Tabs = ({
  faqList,
  changeTopic,
  handleFaqClick,
  activeFaqId,
}: TabProps): JSX.Element => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        {tabs.map((tab) => (
          <button key={tab.id} onClick={() => changeTopic(tab.id)}>
            {tab.title}
          </button>
        ))}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        {faqList.map((faq, index) => (
          <Accordion
            key={index}
            faq={faq}
            handleFaqClick={handleFaqClick}
            activeFaqId={activeFaqId}
          />
        ))}
      </div>
    </>
  );
};
