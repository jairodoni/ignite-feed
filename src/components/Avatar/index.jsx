import styles from './styles.module.css';

{/* eslint-disable-next-line */ }
export function Avatar({ photo, hasBorder = true }) {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      src={photo}
      alt=""
    />
  )
}