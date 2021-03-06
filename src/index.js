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
// EventsNewを用意し、入力ページのコンポーネントを作成
import EventsNew from './components/events_new'
// EventsShowを用意し、編集ページのコンポーネントを作成
import EventsShow from './components/events_show'

import reportWebVitals from './reportWebVitals'
// routerを使う場合に必要
import { BrowserRouter, Route, Switch } from 'react-router-dom'
// reduxのデバッグツール
import { composeWithDevTools } from 'redux-devtools-extension'
// material-ui
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

// reducerをstoreに入れる
// applyMiddlewareの引数にthunkを入れて、createStoreを呼び出す
const enhancer =
  process.env.NODE_ENV === 'development' ? composeWithDevTools(applyMiddleware(thunk)) : applyMiddleware(thunk)
const store = createStore(reducer, enhancer)
// console.log(store)

ReactDOM.render(
  <MuiThemeProvider>
    <React.StrictMode>
      {/* Providerを呼んで、storeを渡す。これでProvider内の全コンポーネントで使用可能 */}
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            {/* exactは完全一致の条件をつけるもので、より厳しくなる */}
            {/* 動的な変数には:をつける */}
            <Route path="/events/new" component={EventsNew} />
            <Route path="/events/:id" component={EventsShow} />
            <Route exact path="/" component={EventsIndex} />
            <Route exact path="/events" component={EventsIndex} />
          </Switch>
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
  </MuiThemeProvider>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
