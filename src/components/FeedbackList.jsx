import FeedbackItem from "./FeedbackItem";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackList() {
const {feedback} = useContext(FeedbackContext)

  if (!feedback || feedback.length === 0) {
    return <p>No Feedback Yet</p>;
  }
  return (
    <div>
      {feedback.map((item) => (
        <FeedbackItem
          key={item._id}
          feedback={item} deleteFeedback={handleDelete}
        />
      ))}
    </div>
  );
}

export default FeedbackList;
