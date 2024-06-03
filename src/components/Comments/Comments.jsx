import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';

export default function Comments() {
  const feedback = useSelector((store) => store.feedback);
  const dispatch = useDispatch();
  const history = useHistory();
  const [comments, setComments] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'ADD_FEEDBACK', payload: { ...feedback, comments } });
    setComments('');
    history.push('/Review');
  };

  return (
    <>
      <h2 style={{ marginBottom: '32px' }}>Any comments you want to leave?</h2>
      <svg
        className='back-btn'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 -960 960 960'
        width='48px'
        fill='#AAC1F0'
        style={{ position: 'absolute', top: 135, left: 100 }}
        onClick={() => {
          history.push('/Support');
        }}
      >
        <path d='m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z' />
      </svg>
      <form onSubmit={handleSubmit}>
        <label htmlFor='comments'>Additional Comments:</label>
        <input
          data-testid='input'
          type='text'
          id='comments'
          name='comments'
          value={comments}
          onChange={(e) => {
            setComments(e.target.value);
          }}
          style={{ marginLeft: 8, marginRight: 8, lineHeight: 1.75 }}
        />
        <Button
          size=''
          style={{ padding: '4px 18px ' }}
          data-testid='next'
          type='submit'
        >
          NEXT
        </Button>
      </form>
    </>
  );
}
