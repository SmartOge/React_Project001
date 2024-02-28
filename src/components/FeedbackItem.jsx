import Card from "./shared/Card";
import { BsPencilSquare, BsXOctagon } from "react-icons/bs";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

function FeedbackItem({ feedback }) {
const {deleteHandler, feedbackEdit} = useContext(FeedbackContext)
const [state, dispatch] = useAuth

const isAuthenticated = state.accessToken !== null

const prop = <>
<button className="close" onClick={()=> deleteHandler(feed._id)}>
<BsXOctagon />
</button>
<button className="edit" onClick={() => feedbackEdit(feedback)}>
<BsPencilSquare />
</button>
</>

  return (
    <Card>
      {isAuthenticated && prop}
     <div className="text-display">{feedback.rating}</div>
     <div className="text-display">{feedback.text}</div>
     {/* <div className="text-display">{feedback.genre}</div> */}
    </Card>
  );
}

export default FeedbackItem;
