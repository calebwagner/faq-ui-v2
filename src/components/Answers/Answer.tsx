type FaqProps = {
  faqId: number;
  answer: string;
  activeFaqId: number | null;
};

export const Answer = ({
  faqId,
  answer,
  activeFaqId,
}: FaqProps): JSX.Element => {
  return (
    <>
      <div>
        {activeFaqId === faqId && (
          <div dangerouslySetInnerHTML={{ __html: `${answer}` }} />
        )}
      </div>
    </>
  );
};
