import Link from 'next/link'

function Menu(props) {

  return (
    <div className="menu">
      <ul>
      <li>
        <Link href="/">
          <a >Головна</a>
        </Link>
        <Link href="/station">
          <a >Зупинки</a>
        </Link>
        <Link href="/route">
          <a >Маршрути</a>
        </Link>
      </li>
      </ul>
    </div>
  );
}

export default Menu;