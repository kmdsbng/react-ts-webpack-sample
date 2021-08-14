


```
npm install
# 開発サーバーを起動
npm run start
# ビルドする。dist ディレクトリに出力される。
npm run build
# テスト実行
npm run test

# ビルドしたファイルを動作確認
npm install -g http-server
http-server dist
```


docker経由でnpmを操作する手順

```
# bashを開くとき
docker-compose run --rm --service-ports nod_dev_env
npm install
npm run start
npm run build
npm run test

# 直接npmコマンドを実行するとき
docker-compose run --rm --service-ports nod_dev_env -c "npm install"
docker-compose run --rm --service-ports nod_dev_env -c "npm run start"
docker-compose run --rm --service-ports nod_dev_env -c "npm run build"
docker-compose run --rm --service-ports nod_dev_env -c "npm run test"

# dockerがrootしか許可されてないときはsudoをつける。
# 上記コマンドでpermission errorがでるとき、UIDをホストのUIDと揃えて実行する。以下のコマンド。
sudo docker-compose run -u$UID -e HOME=/home/app --rm --service-ports nod_dev_env
sudo docker-compose run -u$UID -e HOME=/home/app --rm --service-ports nod_dev_env -c "npm install"
sudo docker-compose run -u$UID -e HOME=/home/app --rm --service-ports nod_dev_env -c "npm run start"
sudo docker-compose run -u$UID -e HOME=/home/app --rm --service-ports nod_dev_env -c "npm run build"
sudo docker-compose run -u$UID -e HOME=/home/app --rm --service-ports nod_dev_env -c "npm run test"



```




