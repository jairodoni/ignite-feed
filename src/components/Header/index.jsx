import styles from './styles.module.css'

import igniteLogo from '../../assets/imgs/ignite-logo.svg'

export function Header() {
  return (
    <div className={styles.header}>
      <img src={igniteLogo} alt="" />
    </div>
  );
}