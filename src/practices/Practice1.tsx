export const Practice1 = () => {
  const onClickPractice1 = () => alert("practice1");
  return (
    <div>
      <p>Practice1: 引数の型指定</p>
      <button onClick={onClickPractice1}>do Practice1</button>
    </div>
  );
};
