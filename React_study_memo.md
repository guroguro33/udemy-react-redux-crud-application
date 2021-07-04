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
// reduxとreact-reduxの２つをインストール
yarn add redux react-redux
```

### action

- ソース内に src/actions ディレクトリ生成
- その中に index.js を作成
- action 内は type インデックスを持ったユニークな値を持つインデックス
```javascript
// action creatorを生成してexportする
export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

export const increment = () => ({
  type: 'INCREMENT',
})

export const decrement = () => ({
  type: 'DECREMENT',
})
```

### reducer
- ソース内にsrc/reducersディレクトリを作成
- ディレクト内にindex.jsと今回はcount.jsを作成
```javascript
// index.js
// action creatorを生成する
export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

export const increment = () => ({
  type: 'INCREMENT',
})

export const decrement = () => ({
  type: 'DECREMENT',
})
```
```javascript
// count.js
// 作成したactionをimportする
import { INCREMENT, DECREMENT } from '../actions'

// 初期値を定義
const initialState = { value: 0 }

// export defaultでaction.typeに応じた動きを記述
export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { value: state.value + 1 }
    case DECREMENT:
      return { value: state.value - 1 }
    default:
      return state
  }
}

```
### store
- index.jsに準備する
- コメント箇所が作成部分
```javascript
import React from 'react'
import ReactDOM from 'react-dom'

// store使用のため、createStoreとProviderをimportする
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import './index.css'
// 作成したreducerをimport
import reducer from './reducers'
// App.jsをcomponentsディレクトリに入れて、見通しをよくする
import App from './components/App'
import reportWebVitals from './reportWebVitals'

// reducerをstoreに入れる
const store = createStore(reducer)

ReactDOM.render(
  <React.StrictMode>
    {/* Providerを呼んで、storeを渡す */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()

```

### connectでstateとactionsとの関連を行う
- stateとactionをコンポーネントのpropsに関連づける
```javascript
import React, { Component } from 'react'
import './App.css'
// connect関数をimportする
import { connect } from 'react-redux'

// actionsをimportする
import { increment, decrement } from '../actions'

// コンポーネントクラスを継承したCounterクラスを生成
class App extends Component {
  render() {
    const props = this.props
    console.log(props)
    console.log(state)
    return (
      <React.Fragment>
        <div>value: {props.value}</div>
        <button onClick={props.increment}>+1</button>
        <button onClick={props.decrement}>-1</button>
      </React.Fragment>
    )
  }
}
// stateとactionをコンポーネントのpropsに関連づける
// stateから今回必要なvalueをキーにして返す
const mapStateToProps = (state) => ({ value: state.count.value })

// actionをpropsにdispatchする
// const mapDispatchToProps = (dispatch) => ({
//   // increment関数とdecrement関数に該当のactionをdispatchして実行できる
//   increment: () => dispatch(increment()),
//   decrement: () => dispatch(decrement()),
// })

// 省略記法
const mapDispatchToProps = { increment, decrement }

// connect関数で、以下２定数を引数のAppにコネクトする
export default connect(mapStateToProps, mapDispatchToProps)(App)

```