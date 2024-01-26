import Card from "./shared/Card";
import Button from "./shared/Button";
import { useEffect, useState } from "react";
import RatingSelect from "./RatingSelect";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackForm() {
  const {postHandler, editFeedback, updateFeedback} = useContext(FeedbackContext)
  const [text, setText] = useState("");
  const [rating, setRating] = useState(10)
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");

  useEffect(()=>{
    if (editFeedback.edit === true) {
      setBtnDisabled(false)
      setText(editFeedback.item.text)
      setRating(editFeedback.item.rating)
    };
  }, [editFeedback])

  const handleTextChange = (e) => {
    if (text === "") {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text !== "" && text.trim().length <= 10) {
      setBtnDisabled(true);
      setMessage("Feedback must be atleast 10 characters long");
    } else {
      setBtnDisabled(false);
      setMessage(null);
    }

    setText(e.target.value);
  };

  const handleSubmit = (e)=>{
    e.preventDefault()
    if (text.trim().length > 10) {
      const newFeedBack = {
        text: text,
        rating: rating
      }

      if (editFeedback.edit === true) {
        updateFeedback(editFeedback.item.id, newFeedBack)
      }else{
        postHandler(newFeedBack)
      }
      
      setText("")
    }
  }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h3 className="how">How would you like to rate our service?</h3>
        <RatingSelect select={(rating) => setRating(rating)}/>
        <div className="input-group">
          <input
            type="text"
            placeholder="Write a Review"
            value={text}
            onChange={handleTextChange}
          />
          <Button type="submit" isDisabled={btnDisabled} version={"tertiary"}>
            Submit
          </Button>
          {message && <div>{message}</div>}
        </div>
      </form>
    </Card>
  );
}

export default FeedbackForm;
