export const Question = ({
  faqId,
  faq,
  handleFaqClick,
}: QuestionProps): JSX.Element => {
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
