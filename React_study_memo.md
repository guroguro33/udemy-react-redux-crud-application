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
