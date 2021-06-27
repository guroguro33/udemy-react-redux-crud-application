import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
      name: 'jiro',
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

// propsTypesを用いた型チェックを設定
User.propTypes = {
  name: PropTypes.string,
  // 数値型、かつ必須
  age: PropTypes.number.isRequired,
};

export default App;
