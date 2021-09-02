// 하나의 componet 파일에 여러개 component 작성
// map 함수 사용

function ListItem() {
  return <li>list item</li>;
}

function HookMap() {
  const car = [{ name: 'Fiat' }, { name: 'kia' }];
  return (
    <>
      <br />
      <br />
      <br />
      <ul>
        <ListItem />
      </ul>
    </>
  );
}

export default HookMap;
