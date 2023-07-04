import { ImgHTMLAttributes } from 'react';
import styles from './styles.module.css';

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean;
  photo: string;
}

{/* eslint-disable-next-line */ }
export function Avatar({ photo, hasBorder = true, ...props }: AvatarProps) {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      src={photo}
      alt=""
      {...props}
    />
  )
}