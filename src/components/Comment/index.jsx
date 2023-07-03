import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './styles.module.css';
import { Avatar } from '../Avatar';

export function Comment({ content }) {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} photo="https://github.com/jairodoni.png" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Jairo Doni</strong>
              <time
                title="02 de julho as 08:00"
                dateTime="2023-07-02 20:00:00"
              >
                Cerca de 1h atrás
              </time>
            </div>
            <button title="Deletar comentário">
              <Trash size={24} />
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
  );
}