import Link from 'next/link'

function Menu(props) {

  return (
    <div className="menu">
      <ul>
      <li>
        <Link href="/">
          <a >Головна</a>
        </Link>
      </li>
      </ul>
    </div>
  );
}

export default Menu;