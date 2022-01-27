import s from './header.module.scss'

function Header() {
  return (
    <header className={s.header}>
      <p>{'Hello to TODO!'}</p>
    </header>
  );
}

export default Header;