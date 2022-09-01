import { useState, useEffect } from 'react';
import styles from '../../styles/Evernote.module.scss';
import { app, database } from '../../firebaseConfig';
// collection to create a collection, and addDoc will add our data to that collection.
import { collection, addDoc, getDocs } from 'firebase/firestore';
// import ReactQuill from 'react-quill'; // this does not work, so the below code is a workaround
const ReactQuill =
  typeof window === 'object' ? require('react-quill') : () => false;
import 'react-quill/dist/quill.snow.css';

const dbInstance = collection(database, 'notes');
const NoteOperations = () => {
  const [isInputVisible, setInputVisible] = useState(false);
  const [noteTitle, setNoteTitle] = useState('');
  const [noteDesc, setNoteDesc] = useState('');
  const [notesArray, setNotesArray] = useState([])

  const inputToggleHandler = () => {
    setInputVisible(!isInputVisible);
  };

  const addDescHandler = (value) => {
    setNoteDesc(value);
  };

  const saveNoteHandler = () => {
    addDoc(dbInstance, {
      noteTitle: noteTitle,
      noteDesc: noteDesc,
    }).then(() => {
      setNoteTitle('');
      setNoteDesc('');
    });
  };

  const getNotes = () => {
    getDocs(dbInstance).then((data) => {
      setNotesArray(
        data.docs.map((item) => {
          return { ...item.data(), id: item.id };
        })
      );
      // console.log(data.docs)
    });
  };

  useEffect(() => {
    getNotes()
  }, [])

  console.log(notesArray)

  return (
    <>
      <div className={styles.btnContainer}>
        <button onClick={inputToggleHandler} className={styles.button}>
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
          <div className={styles.ReactQuill}>
            <ReactQuill onChange={addDescHandler} value={noteDesc} />
          </div>
          <button className={styles.saveBtn} onClick={saveNoteHandler}>
            Save Note
          </button>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default NoteOperations;
