import { useState } from 'react';
import styles from '../../styles/Evernote.module.scss';

const NoteOperations = () => {
  const [isInputVisible, setInputVisible] = useState(false);
  const [noteTitle, setNoteTitle] = useState('');

  const inputToggle = () => {
    setInputVisible(!isInputVisible);
  };

  return (
    <>
      <div className={styles.btnContainer}>
        <button onClick={inputToggle} className={styles.button}>
          Add a New Note
        </button>
      </div>

      {isInputVisible ? (
        <div className={styles.inputContainer}>
          <input
            placeholder='Enter the Title..'
            className={styles.input}
            onChange={(e) => setNoteTitle(e.target.value)}
          />
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default NoteOperations;
