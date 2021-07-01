# React

## yarn で global 環境に create-react-app をインストール

- facebook 社公式の React プロジェクト生成ツール

```
yarn global add create-react-app
```

## react プロジェクトを生成

```
create-react-app ディレクトリ名
```

## プロジェクト起動

```
yarn run start
```

## JSX

### React.Fragment

- return dom の dom 内は１つのタグという制約があり、不要な div タグなどが発生するが、
  <React.Fragment>タグで囲むとそれが不要になる

## トランスパイラー

- React の場合、jsx を babel がトランスパイルしている

## Function Component と Class component

- 違いは Class Component では state、ライフサイクルが使え、function component ではそれらが使えない
- しかし現在は function component が推奨されている
- 理由：React Hooks 導入により function component でも usesState、useEffect などを使い、ライフサイクルに相当するものが使えるようになってきている。

## props

- 親コンポーネントから子コンポーネントに変数を渡す
- User.defaultProps で、デフォルト値を指定できる

```javascript
// Functionコンポーネント
function App() {
  const profiles = [
    {
      name: 'Taro',
      age: 10,
    },
    {
      name: 'Hanako',
      age: 5,
    },
    {
      name: 'Noname', // ageがないが、defaultPropsで指定
    },
  ];
  const dom = (
    <React.Fragment>
      {/* 親コンポーネントで変数propsの中身 profile, indexを渡す */}
      {profiles.map((profile, index) => {
        return <User name={profile.name} age={profile.age} key={index} />;
      })}
    </React.Fragment>
  );
  return dom;
}

// 子コンポーネント propsで親の変数を受け取る
const User = (props) => {
  return (
    <div>
      Hi!, I am {props.name}, and {props.age} years old!
    </div>
  );
};

// 子コンポーネントのデフォルト値を設定する
User.defaultProps = {
  age: 1,
};
```

## propTypes

- 型判定を行う。コンパイルエラーにはならないが、コンソールエラーを出力する

```javascript
// importする
import PropTypes from 'prop-types';

// propsTypesを用いた型チェックを設定
User.propTypes = {
  // 文字列型
  name: PropTypes.string,
  // 数値型、かつ必須
  age: PropTypes.number.isRequired,
};
```

## state

- コンポーネント内部の状態
- props と違って変更が可能
- constructor 内で state を定義し、変更するときは setState()で行う

```javascript
import React, { Component } from 'react';
import './App.css';

// Functionコンポーネント
function App() {
  // Counterインスタンスを生成
  const dom = <Counter></Counter>;
  return dom;
}

// コンポーネントクラスを継承したCounterクラスを生成
class Counter extends Component {
  // propsを受け取り、コンストラクターを実行
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  handlePlusButton = () => {
    this.setState({ count: this.state.count + 1 });
  };
  handleMinusButton = () => {
    this.setState({ count: this.state.count - 1 });
  };
  render() {
    return (
      <React.Fragment>
        <div>count: {this.state.count}</div>
        <button onClick={this.handlePlusButton}>+1</button>
        <button onClick={this.handleMinusButton}>-1</button>
      </React.Fragment>
    );
  }
}

export default App;
```

## redux

### インストール

```javascript
yarn add redux react-redux
```

### action

- ソース内に src/actions ディレクトリ生成
- その中に index.js を作成
- action 内は type インデックスを持ったユニークな値を持つインデックス
```javascript
// action createrを生成してexportする
export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

export const increment = () => ({
  type: 'INCREMENT',
})

export const decrement = () => ({
  type: 'DECREMENT',
})
```
