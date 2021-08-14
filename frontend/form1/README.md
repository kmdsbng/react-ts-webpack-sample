


```
npm install
# 開発サーバーを起動
npm run start
# ビルドする。dist ディレクトリに出力される。
npm run build

# ビルドしたファイルを動作確認
npm install -g http-server
http-server dist
```


docker経由でnpmを操作する手順

```
docker-compose run --rm --service-ports nod_dev_env

npm install
npm run start
npm run build
```




