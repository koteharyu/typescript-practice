export const Practice3 = () => {
  const getTotalFee = (num: number): number => {
    const total = num * 1.1;
    return total;
    // return total.toString()
  };
  const onClickPractice3 = () => {
    let total: number = 0;
    // 変数の型を指定することで、上のようなtoStringを検知できる
    total = getTotalFee(1000);
    console.log(total);
  };
  return (
    <div>
      <p>Practice3: 返却値の型指定</p>
      <button onClick={onClickPractice3}>do Practice3</button>
    </div>
  );
};
