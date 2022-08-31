import { useState } from 'react';
import styles from '../../styles/Evernote.module.scss';
import { app, database } from '../../firebaseConfig';
// collection to create a collection, and addDoc will add our data to that collection.
import { collection, addDoc } from 'firebase/firestore';

const NoteOperations = () => {
  const [isInputVisible, setInputVisible] = useState(false);
  const [noteTitle, setNoteTitle] = useState('');

  const dbInstance = collection(database, 'notes');

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
          <button className={styles.saveBtn}>Save Note</button>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default NoteOperations;
