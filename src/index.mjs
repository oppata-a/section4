/**
 * const、let等の変数宣言
 */

//let変数
let val2 = "let変数";
console.log(val2);

//letは上書き可能(再作成不可)
val2 = "let変数を上書き";
console.log(val2);

//const変数（上書き・再作成不可）
const val3 = "const変数";
console.log(val3);

// constで定義したオブジェクトはプロパティの変更が可能
const val4 = {
  name: "じゃけぇ",
  age: 28,
};
val4.name = "jak";
console.log(val4);

//constで定義した配列はプロパティの変更が可能
const val5 = ["dog", "cat"];
val5[0] = "bird";
val5.push("monkey");
console.log(val5);

/**
 * テンプレート文字列
 */

const name = "じゃけぇテンプレ";
const age = 28;
//テンプレート文字列を用いた方法
const message2 = `私の名前は${name}です。年齢は${age}です。`;
console.log(message2);

/**
 * アロー関数
 */

//アロー関数
const func2 = (str) => {
  return str;
};
console.log(func2("func2です"));

const func3 = (num1, num2) => num1 + num2;
console.log(func3(10, 20));

/**
 * 分割代入
 */

const myProfile = {
  name1: "じゃけぇ分割",
  age1: 28,
};
const { name1, age1 } = myProfile;
const message3 = `私の名前は${name1}です。年齢は${age1}です。`;
console.log(message3);

const myProfile2 = ["じゃけぇ分割2", 28];
const [name2, age2] = myProfile2;
const message4 = `私の名前は${name2}です。年齢は${age2}です。`;
console.log(message4);

/**
 * デフォルト変数、引数など
 */

const sayHello = (name3 = "ゲスト") => console.log(`こんにちは${name3}さん！`);
sayHello("じゃけぇデフォルト");

/**
 * スプレッド構文...
 */

//配列の展開
const arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1);

const sumFunc = (num1, num2) => console.log(num1 + num2);
sumFunc(arr1[0], arr1[1]);
sumFunc(...arr1);

//まとめる
const arr2 = [1, 2, 3, 4, 5];
const [num01, num02, ...arr3] = arr2;
console.log(num01);
console.log(num02);
console.log(arr3);

//配列のコピー、結合
const arr4 = [10, 20];
const arr5 = [30, 40];

const arr6 = [...arr4];
console.log(arr6);

const arr7 = [...arr4, ...arr5];
console.log(arr7);

const arr8 = [...arr4];
arr8[0] = 100;
console.log(`arr4:${arr4}`);
console.log(`arr8:${arr8}`);

//...で設定しないと同じ場所を参照してしまい値が同じになってしまう
const arr9 = arr4;
arr9[0] = 100;
console.log(`arr4:${arr4}`); //値が変わってしまう
console.log(`arr9:${arr9}`);

/**
 * mapやfilterを使った配列の処理
 */

const nameArr = ["田中", "山田", "じゃけぇ"];

//新しい配列を生成
const nameArr2 = nameArr.map((name) => name);
console.log(nameArr2);

// //配列のループ呼び出し
nameArr.map((name) => console.log(`ループ呼出し${name}`));

//indexを使う方法
nameArr.map((name, index) => console.log(`${index + 1}番目は${name}`));

const numArr = [1, 2, 3, 4, 5];

//filter 条件抽出して新しい配列を生成
const newnumArr2 = numArr.filter((num) => num % 2 === 0);
console.log(newnumArr2);

const newNameArr = nameArr.map((name) => {
  if (name === "じゃけぇ") {
    return name;
  } else {
    return `${name}さん`;
  }
});
console.log(newNameArr);

/**
 * 三項演算子
 */

//ある条件 ? 条件がtrueの時 : 条件がfalseの時
const val1 = 1 > 0 ? `trueです` : `falseです`;
console.log(val1);

const num10 = 1300;
const formattedNum =
  typeof num10 === `number` ? num10.toLocaleString() : `数値を入力してください`;
console.log(formattedNum);

const checkSum = (num1, num2) => {
  return num1 + num2 > 100 ? `100を超えています！！` : `許容範囲内です`;
};
console.log(checkSum(50, 40));

/**
 * 論理演算氏の本当の意味を知ろう && ||
 */

//左側がfalseなら右側を返す
const num = null;
const fee = num || "金額未設定です";
console.log(fee);

//左側がtrueなら右側を返す
const num2 = 100;
const fee2 = num2 && "何か設定されました";
console.log(fee2);
