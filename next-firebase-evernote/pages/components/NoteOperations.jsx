import {useState} from 'react'
import styles from '../../styles/Evernote.module.scss';

const NoteOperations = () => {
  const [isInputVisible, setInputVisible] = useState(false);


  return (
    <>
      <div className={styles.btnContainer}>
        <button className={styles.button}>Add a New Note</button>
      </div>

      <div className={styles.inputContainer}>
        <input placeholder='Enter the Title..' className={styles.input} />
      </div>
    </>
  );
};

export default NoteOperations;
