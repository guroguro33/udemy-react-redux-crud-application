import React from 'react'
import ReactDOM from 'react-dom'

// store使用のため、createStoreとProviderをimportする
// redux-thunkはミドルウエアのため、applyMiddlewareをimportする
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

// redux thunkはactionの代わりに関数を返すことができる
import thunk from 'redux-thunk'

import './index.css'
// 作成したreducerをimport
import reducer from './reducers'
// EventsIndex.jsをcomponentsディレクトリに入れて、見通しをよくする
import EventsIndex from './components/events_index'
import reportWebVitals from './reportWebVitals'

// reducerをstoreに入れる
// applyMiddlewareの引数にthunkを入れて、createStoreを呼び出す
const store = createStore(reducer, applyMiddleware(thunk))
// console.log(store)

ReactDOM.render(
  <React.StrictMode>
    {/* Providerを呼んで、storeを渡す。これでProvider内の全コンポーネントで使用可能 */}
    <Provider store={store}>
      <EventsIndex />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
