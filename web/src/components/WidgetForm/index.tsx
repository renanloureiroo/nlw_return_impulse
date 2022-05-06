import { useCallback, useState } from "react";

import bugImageUrl from "../../assets/bug.svg";
import ideaImageUrl from "../../assets/idea.svg";
import thoughtImageUrl from "../../assets/thought.svg";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSuccessStep } from "./Steps/FeedbackSuccessStep";

export const feedbackTypes = {
  BUG: {
    title: "Problema",
    image: {
      source: bugImageUrl,
      alt: "Imagem de um inseto",
    },
  },
  IDEA: {
    title: "Ideia",
    image: {
      source: ideaImageUrl,
      alt: "Imagem de uma lâmpada",
    },
  },
  OTHER: {
    title: "Outro",
    image: {
      source: thoughtImageUrl,
      alt: "Imagem de uma nuvem de pensamentos",
    },
  },
};

export type FeedbackType = keyof typeof feedbackTypes;

export const WidgetForm = () => {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
  const [feedbackSent, setFeedBackSent] = useState(false);

  const handleFeedbackTypeChange = useCallback((type: FeedbackType) => {
    setFeedbackType(type);
  }, []);

  const handleRestartFeedback = useCallback(() => {
    setFeedbackType(null);
    setFeedBackSent(false);
  }, []);

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      {feedbackSent ? (
        <FeedbackSuccessStep onReset={handleRestartFeedback} />
      ) : (
        <>
          {!feedbackType ? (
            <FeedbackTypeStep onFeedbackTypeChange={handleFeedbackTypeChange} />
          ) : (
            <FeedbackContentStep
              feedbackType={feedbackType}
              onGoBack={handleRestartFeedback}
              onFeedbackSent={() => setFeedBackSent(true)}
            />
          )}
        </>
      )}

      <footer className="text-xs leading- text-neutral-400">
        Feito com ♥ pela{" "}
        <a
          className="underline underline-offset-2"
          href="http://rocketseat.com.br"
        >
          Rocketseat
        </a>
      </footer>
    </div>
  );
};
