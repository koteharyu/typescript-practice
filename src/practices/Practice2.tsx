export const Practice2 = () => {
  const getTotalFee = (num: number): number => {
    const total = num * 1.1;
    return total;
  };
  const onClickPractice1 = () => {
    console.log(getTotalFee(2000));
  };
  return (
    <div>
      <p>Practice2: 返却値の型指定</p>
      <button onClick={onClickPractice1}>do Practice2</button>
    </div>
  );
};
