import { ArrowLeft, Camera } from "phosphor-react";
import { FormEvent, useCallback, useRef, useState } from "react";
import { FeedbackType, feedbackTypes } from "..";
import { api } from "../../../services/api";
import { CloseButton } from "../../CloseButton";
import { Loading } from "../../Loading";
import { ScreenshotButton } from "../ScreenshotButton";

interface FeedbackContentStepProps {
  feedbackType: FeedbackType;
  onGoBack: () => void;
  onFeedbackSent: () => void;
}

export const FeedbackContentStep = ({
  feedbackType,
  onGoBack,
  onFeedbackSent,
}: FeedbackContentStepProps) => {
  const [screenshot, setScreenshot] = useState<string | null>(null);
  const [comment, setComment] = useState("");
  const [isSendingFeedback, setIsSendingFeedback] = useState(false);

  const handleTakeScreenShot = useCallback((screenshot: string) => {
    setScreenshot(screenshot);
  }, []);

  const handleDeleteScreenshot = useCallback(() => {
    setScreenshot(null);
  }, []);

  const handleSubmitFeedback = async (e: FormEvent) => {
    e.preventDefault();
    setIsSendingFeedback(true);
    try {
      await api.post("/feedbacks", {
        type: feedbackType,
        screenshot,
        comment,
      });
      onFeedbackSent();
    } catch (err) {
      console.log(err);
    } finally {
      setIsSendingFeedback(false);
    }
  };

  const feedbackTypeInfo = feedbackTypes[feedbackType];
  return (
    <>
      <header>
        <button
          onClick={onGoBack}
          type="button"
          className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100"
        >
          <ArrowLeft weight="bold" className="w-4 h-4" />
        </button>
        <span className="text-xl leading-6 flex items-center gap-2">
          <img
            className="w-6 h-6"
            src={feedbackTypeInfo.image.source}
            alt={feedbackTypeInfo.image.alt}
          />
          {feedbackTypeInfo.title}
        </span>

        <CloseButton />
      </header>

      <form className="my-4 w-full" onSubmit={handleSubmitFeedback}>
        <textarea
          onChange={(e) => setComment(e.target.value)}
          className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 resize-none focus:outline-none scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
          placeholder="Conte com detalhes o que está acontecendo..."
        />
        <footer className="flex gap-2 mt-2">
          <ScreenshotButton
            screenshot={screenshot}
            onTakeScreenshot={handleTakeScreenShot}
            onDeleteScreenshot={handleDeleteScreenshot}
          />
          <button
            type="submit"
            disabled={!comment || isSendingFeedback}
            className="p-2 bg-brand-500 rounded-[4px] border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 disabled:opacity-50 disabled:hover:bg-brand-500 transition-colors duration-300"
          >
            {isSendingFeedback ? <Loading /> : "Enviar feedback"}
          </button>
        </footer>
      </form>
    </>
  );
};
