export const Practice4 = () => {
  const culcTotalFee = (num: number) => {
    const total = num * 1.1;
    console.log(total);
  };
  const onClickPractice4 = () => culcTotalFee(1000);
  return (
    <div>
      <p>Practice4: 設定ファイルを触ってみる</p>
      <button onClick={onClickPractice4}>do Practice4</button>
    </div>
  );
};

// tsconfig.jsonの`strict: true`を設定することで、型指定がない変数を検知してくれる
