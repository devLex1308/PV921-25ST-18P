

function Header(props) {

  console.log(props);
  const {name, age} = props;

  return (
    <div>Тут буде меню <br/>
      Ім'я - {name} <br/>
      Вік - {age} <br/>
    </div>);
}

export default Header;