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
