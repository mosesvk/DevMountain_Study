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
const NoteOperations = ({ getSingleNote }) => {

  const [isInputVisible, setInputVisible] = useState(false);
  const [noteTitle, setNoteTitle] = useState('');
  const [noteDesc, setNoteDesc] = useState('');
  const [date, setDate] = useState('');
  const [notesArray, setNotesArray] = useState([]);

  const inputToggleHandler = () => {
    setInputVisible(!isInputVisible);
  };

  const addDescHandler = (value) => {
    setNoteDesc(value);
  };

  const saveNoteHandler = () => {
    addDoc(dbInstance, {
      date: date,
      noteTitle: noteTitle,
      noteDesc: noteDesc,
    }).then(() => {
      setNoteTitle('');
      setNoteDesc('');
      setDate('');
      getNotes();
      inputToggleHandler();
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
    getNotes();
  }, []);

  // console.log(notesArray);

  return (
    <>
      <div className={styles.btnContainer}>
        <button onClick={inputToggleHandler} className={styles.button}>
          Add a New Note
        </button>
      </div>

      {isInputVisible ? (
        <div className={styles.inputContainer}>
          <input type='date' value={date} onChange={(e) => setDate(e.target.value)} />
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

      <div className={styles.notesDisplay}>
        {notesArray.map((note) => {
          return (
            <div
              className={styles.notesInner}
              onClick={() => getSingleNote(note.id)}
            >
              <h4>{note.noteTitle}</h4>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default NoteOperations;
