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
