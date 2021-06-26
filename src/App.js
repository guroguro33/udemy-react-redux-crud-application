import React, { Component } from 'react';
import './App.css';

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
      name: 'Noname',
    },
  ];
  const dom = (
    <React.Fragment>
      {/* 親コンポーネントで変数propsを渡す */}
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

export default App;
