import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

export default function Understanding() {
  const feedback = useSelector((store) => store.feedback);
  const dispatch = useDispatch();
  const history = useHistory();
  const [understanding, setUnderstanding] = useState(feedback.understanding);

  useEffect(() => {
    const buttons = document.getElementsByClassName('understanding-btn');
    if (understanding) {
      for (const button of buttons) {
        if (Number(button.value) === Number(understanding)) {
          button.classList.add('active');
        }
      }
    } else {
      buttons[0].classList.add('active');
    }
  }, []);

  const handleClick = (e) => {
    setUnderstanding(e.target.value);
    console.log(understanding);
    const buttons = document.getElementsByClassName('understanding-btn');
    for (const button of buttons) {
      button.classList.remove('active');
    }
    e.target.classList.add('active');
  };

  const handleSubmit = () => {
    dispatch({ type: 'ADD_FEEDBACK', payload: { ...feedback, understanding } });
    history.push('/Support');
  };

  return (
    <>
      <h2 style={{ marginBottom: '32px' }}>
        How well are you understanding the content?
      </h2>
      <svg
        className='back-btn'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 -960 960 960'
        width='48px'
        fill='#AAC1F0'
        style={{ position: 'absolute', top: 135, left: 100 }}
        onClick={() => {
          history.push('/');
        }}
      >
        <path d='m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z' />
      </svg>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 -960 960 960'
        width='36px'
        fill='#AAC1F0'
      >
        <path d='m298-456 143-104-143-104-36 48 77 56-77 56 36 48Zm364 0 36-48-77-56 77-56-36-48-143 104 143 104ZM420-278l60-60 60 60 60-60 39 39 42-42-81-81-60 60-60-60-60 60-60-60-81 81 42 42 39-39 60 60Zm60 198q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 320q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Z' />
      </svg>
      <ButtonGroup style={{ marginRight: 8, marginLeft: 8 }}>
        <Button
          className='understanding-btn'
          data-testid='input'
          variant='outline-primary'
          value={1}
          style={{ margin: '0 4px', borderRadius: '50%' }}
          onClick={(e) => handleClick(e)}
        >
          1
        </Button>
        <Button
          className='understanding-btn'
          data-testid='input'
          variant='outline-primary'
          style={{ margin: '0 4px', borderRadius: '50%' }}
          value={2}
          onClick={(e) => handleClick(e)}
        >
          2
        </Button>
        <Button
          className='understanding-btn'
          data-testid='input'
          variant='outline-primary'
          style={{ margin: '0 4px', borderRadius: '50%' }}
          value={3}
          onClick={(e) => handleClick(e)}
        >
          3
        </Button>
        <Button
          className='understanding-btn'
          data-testid='input'
          variant='outline-primary'
          style={{ margin: '0 4px', borderRadius: '50%' }}
          value={4}
          onClick={(e) => handleClick(e)}
        >
          4
        </Button>
        <Button
          className='understanding-btn'
          data-testid='input'
          variant='outline-primary'
          style={{ margin: '0 4px', borderRadius: '50%' }}
          value={5}
          onClick={(e) => handleClick(e)}
        >
          5
        </Button>
      </ButtonGroup>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 -960 960 960'
        width='36px'
        fill='#AAC1F0'
        style={{ marginRight: 16 }}
      >
        <path d='M480-260q68 0 123.5-38.5T684-400H276q25 63 80.5 101.5T480-260ZM312-520l44-42 42 42 42-42-84-86-86 86 42 42Zm250 0 42-42 44 42 42-42-86-86-84 86 42 42ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 320q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Z' />
      </svg>

      <Button
        data-testid='next'
        type='submit'
        onClick={handleSubmit}
      >
        NEXT
      </Button>
    </>
  );
}
