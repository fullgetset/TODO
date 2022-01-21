import s from './header.module.scss'

function Header() {
  const str = 'Hello to TODO!'
  return (
    <div className={s.header}>
      <p>{str}</p>
    </div>
  );
}

export default Header;