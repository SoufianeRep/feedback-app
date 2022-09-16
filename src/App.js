import { useState } from "react";
import FeedbackData from './data/FeedbackData';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';

export default function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  return (
    <>
      <Header text={'FeedBack UI'} />
      <div className='container'>
        <FeedbackList feedback={feedback} />
      </div>
    </>
  );
}
