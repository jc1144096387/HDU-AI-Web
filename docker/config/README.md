cd /etc/docker/nginx/config
docker cp default.conf b076://etc/nginx/conf.d
docker stop b076
docker start b076

# 运行nginx
sudo docker run --name nginx -d -p 443:443 -p 80:80 -v /etc/docker/nginx/html:/usr/share/nginx/html docker.io/nginx



# docker安装nginx部署前端项目
## 安装docker
centos见电子书P49
## 运行nginx
sudo docker run --name nginx -d -p 443:443 -p 80:80 -v /etc/docker/nginx/html:/usr/share/nginx/html docker.io/nginx

-v /etc/docker/nginx/html:/usr/share/nginx/html
表示把/etc/docker/nginx/html目录映射到docker中nginx镜像的/usr/share/nginx/html目录
后面将前端打包生成的文件拖入/etc/docker/nginx/html目录中即可
目录可以你自己考虑建在哪里都行，只要对应即可

## 覆盖容器中nginx的配置文件
容器运行完毕后会得到一个容器的id，如22b2d5d95cc99f02eacaeed3808de89b09b376934f4135612961889ced65b196
```
# 进入/etc/docker/nginx/config目录
cd /etc/docker/nginx/config
# 将/etc/docker/nginx/config目录中的default.conf复制到id为{{id}}的容器的/etc/nginx/conf.d目录
docker cp default.conf {{id}}://etc/nginx/conf.d
# 重启容器
docker stop {{id}}
docker start {{id}}
```
{{id}}替换成你自己的容器id，截取前几个字符即可，如22b2

## 上传文件
用xftp等软件连接服务器，将文件拖入对应目录即可

