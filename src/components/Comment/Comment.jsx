import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from '../Avatar/Avatar';
import styles from './Comment.module.css';

export function Comment({ content, onDeleteComment }) {
  function handleDeleteComment() {
    onDeleteComment(content);
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/leohb07.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Leonardo Barrocal</strong>
              <time title="13 de setembro 2022" dateTime="2022-09-13 08:10:54">Cerca de 2h atrás</time>
            </div>

            <button 
              onClick={handleDeleteComment}
              title="Deletar comentário"
            >
              <Trash size={20}/>
            </button>
          </header>

          <p>{content}</p>
        </div>
        
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}