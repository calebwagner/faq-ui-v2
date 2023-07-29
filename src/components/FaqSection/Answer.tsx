export const Answer = ({
  faqId,
  answer,
  activeFaqId,
}: AnswerProps): JSX.Element => {
  return (
    <>
      {activeFaqId === faqId && (
        <div dangerouslySetInnerHTML={{ __html: `${answer}` }} />
      )}
    </>
  );
};
