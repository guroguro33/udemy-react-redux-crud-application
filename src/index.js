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
