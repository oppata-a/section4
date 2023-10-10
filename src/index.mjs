/**
 * const、let等の変数宣言
 */

//  //let変数
// let val2 = "let変数";
// console.log(val2);

// //letは上書き可能(再作成不可)
// val2 = "let変数を上書き";
// console.log(val2);

// //const変数（上書き・再作成不可）
// const val3 = "const変数";
// console.log(val3);

// // constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name:"じゃけぇ",
//   age:28
// };
// val4.name = "jak";
// console.log(val4);

// //constで定義した配列はプロパティの変更が可能
// const val5 = ['dog','cat'];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

/**
 * テンプレート文字列
 */

//  const name = "じゃけぇ";
//  const age = 28;
//  //テンプレート文字列を用いた方法
//  const message2 = `私の名前は${name}です。年齢は${age}です。`;
//  console.log(message2);

/**
 * アロー関数
 */

//  //アロー関数
//  const func2 = str => {
//    return str;
//  };
//  console.log(func2("func2です"));

// const func3 = (num1,num2) => num1 + num2;
// console.log(func3(10,20));

/**
 * 分割代入
 */

// const myProfile = {
//   name: "じゃけぇ",
//   age: 28
// };
// const {name ,age} = myProfile;
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

// const myProfile = ["じゃけぇ", 28];
// const[name , age] = myProfile;
// const message3 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message3);

/**
 * デフォルト変数、引数など
 */

// const sayHello = (name = "ゲスト") => console.log(`こんにちは${name}さん！`);
// sayHello("じゃけぇ");

/**
 * スプレッド構文...
 */

//配列の展開
// const arr1 = [1, 2];
// // console.log(arr1);
// // console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

//まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

//配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// console.log(arr6);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// const arr8 = [...arr4];
// arr8[0] = 100;
// console.log(`arr4:${arr4}`);
// console.log(`arr8:${arr8}`);

// //...で設定しないと同じ場所を参照してしまい値が同じになってしまう
// const arr9 = arr4;
// arr9[0] = 100;
// console.log(`arr4:${arr4}`); //値が変わってしまう
// console.log(`arr9:${arr9}`);
