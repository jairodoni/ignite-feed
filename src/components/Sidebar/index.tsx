import { PencilLine } from 'phosphor-react'

import styles from './styles.module.css';
import { Avatar } from '../Avatar';

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        alt=""
      />

      <div className={styles.profile}>
        <Avatar hasBorder photo="https://github.com/jairodoni.png" />

        <strong>Jairo Doni</strong>
        <span>Desenvolvedor frontend</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}