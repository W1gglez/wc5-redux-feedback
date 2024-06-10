import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useState } from 'react';

export default function FeedbackItem({ feedbackItem, fetchFeedback }) {
  const date = new Date(feedbackItem.date);
  const [flagged, setFlagged] = useState(!feedbackItem.flagged);

  const deleteFeedback = async () => {
    try {
      await axios.delete(`/api/feedback/deletefeedback/${feedbackItem.id}`);
      fetchFeedback();
    } catch (err) {
      console.error(err);
    }
  };

  const flagFeedback = async () => {
    try {
      setFlagged(!flagged);
      await axios.put(
        `/api/feedback/flagfeedback/${feedbackItem.id}/${flagged}`
      );
      fetchFeedback();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <tr>
      <td>{date.toLocaleDateString()}</td>
      <td onClick={flagFeedback}>
        {feedbackItem.flagged === true ? (
          <img
            src='src/components/Admin/images/checked.png'
            alt='Flagged'
            width={24}
          />
        ) : (
          <img
            src='src/components/Admin/images/delete.png'
            alt='Not Flagged'
            width={24}
          />
        )}
      </td>
      <td>{feedbackItem.feeling}</td>
      <td>{feedbackItem.understanding}</td>
      <td>{feedbackItem.support}</td>
      <td>{feedbackItem.comments}</td>
      <td>
        <Button
          variant='danger'
          onClick={deleteFeedback}
        >
          Delete
        </Button>
      </td>
    </tr>
  );
}
