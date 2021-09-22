export const Practice1 = () => {
  const culcTotalFee = (num: number) => {
    const total = num * 1.1;
    console.log(total);
  };
  const onClickPractice1 = () => culcTotalFee(1000);
  return (
    <div>
      <p>Practice1: 引数の型指定</p>
      <button onClick={onClickPractice1}>do Practice1</button>
    </div>
  );
};
