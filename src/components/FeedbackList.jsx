import FeedbackItem from "./FeedbackItem";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackList({handleDelete }) {
const {feedback} = useContext(FeedbackContext)

  if (!feedback || feedback.length === 0) {
    return <p>No Feedback Yet</p>;
  }
  return (
    <div>
      {feedback.map((item) => (
        <FeedbackItem
          key={item.id}
          feedback={item}
          deleteFeedback={handleDelete}
        />
      ))}
    </div>
  );
}

export default FeedbackList;
