import { useSelector } from 'react-redux';
import Table from 'react-bootstrap/Table';
import FeedbackItem from './FeedbackItem';
import Container from 'react-bootstrap/Container';

export default function Admin({ fetchFeedback }) {
  const allFeedback = useSelector((store) => store.allFeedback);

  return (
    <Container>
      <Table variant='striped'>
        <thead>
          <tr>
            <th>Date Received</th>
            <th>Review Needed</th>
            <th>Feeling</th>
            <th>Understanding</th>
            <th>Support</th>
            <th>Additional Comments</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {allFeedback.map((feedbackItem, i) => (
            <FeedbackItem
              key={i}
              feedbackItem={feedbackItem}
              fetchFeedback={fetchFeedback}
            />
          ))}
        </tbody>
      </Table>
    </Container>
  );
}
