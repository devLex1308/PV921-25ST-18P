import Link from 'next/link'

function Menu(props) {

  return (
    <div className="menu">
      <ul>
      <li>
        <Link href="/24/example/ButtonClickHandler">
          <a >ButtonClickHandler</a>
        </Link>
      </li>
      <li>
        <Link href="/24/example/ClassDateTime">
          <a >ClassDateTime</a>
        </Link>
      </li>
      <li>
        <Link href="/24/example/CurrentTime">
          <a >CurrentTime</a>
        </Link>
      </li>
      <li>
        <Link href="/24/example/DateAndTime">
          <a >DateAndTime</a>
        </Link>
      </li>
      <li>
        <Link href="/24/example/FirstClassComponent">
          <a >FirstClassComponent</a>
        </Link>
      </li>
      <li>
        <Link href="/24/example/FirstClassComponent">
          <a >FirstClassComponent</a>
        </Link>
      </li>
      <li>
        <Link href="/24/example/">
          <a >index</a>
        </Link>
      </li>
      <li>
        <Link  href="/24/example/notUseJsx">
          <a >notUseJsx</a>
        </Link>
      </li>
      <li>
        <Link href="/24/example/Quote">
          <a >Quote</a>
        </Link>
      </li>
      <li>
        <Link href="/24/example/clock">
          <a >clock</a>
        </Link>
      </li>
      </ul>
    </div>
  );
}

export default Menu;