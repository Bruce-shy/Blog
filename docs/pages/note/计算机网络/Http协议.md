###                                 OSI七层模型

```
应用层：文件传输，常用协议HTTP，snmp, FTP ,

表示层：数据格式化，代码转换，数据加密，

会话层：建立，解除会话

传输层：提供端对端的接口，TCP, UDP

网络层：为数据包选择路由，IP，icmp

数据链路层：传输有地址的帧

物理层：二进制的数据形式在物理媒体上传输数据
```

### CDN 原理

```
CDN叫做内容分发网络，它的基本原理是广泛采用各种缓存服务器，将这些缓存服务器分布到用户访问相对集中的地区或网络中，在用户访问网站时，利用全局负载技术将用户的访问指向距离最近的工作正常的缓存服务器上，由缓存服务器直接响应。
```

### TCP建立连接的三次握手过程(三次握手)

```
第一次握手：起初两端都处于CLOSED关闭状态，Client将标志位SYN置为1，随机产生一个值seq=x，并将该数据包发送给Server，Client进入SYN-SENT(请求连接)状态，等待Server确认；

第二次握手：Server收到数据包后由标志位SYN=1得知Client请求建立连接，Server将标志位SYN和ACK都置为1，ack=x+1，随机产生一个值seq=y，并将该数据包发送给Client以确认连接请求，Server进入SYN-RCVD状态，此时操作系统为该TCP连接分配TCP缓存和变量；

第三次握手：Client收到确认后，检查ack是否为x+1，ACK是否为1，如果正确则将标志位ACK置为1，ack=y+1，并且此时操作系统为该TCP连接分配TCP缓存和变量，并将该数据包发送给Server，Server检查ack是否为y+1，ACK是否为1，如果正确则连接建立成功，Client和Server进入ESTABLISHED状态，完成三次握手，随后Client和Server就可以开始传输数据。
```

### 说一下用户从输入url到显示页面这个过程发生了什么

```
1. DNS 解析
2. TCP 连接
3. 发送 HTTP 请求
4. 服务器处理 HTTP 请求并返回HTTP报文
5. 浏览器解析渲染页面
6. 连接结束
```

### 常见的请求方法

```
GET、POST、HEAD、PUT、DELETE、OPTIONS

GET 请求数据，把参数包含在URL中。
POST 提交数据，通过request body (请求体) 传递参数 

从协议本身来说， 并没有限制 GET 传递参数不能放到request body, POST 传递参数也可以放到 query_string。
相对于来说 POST 比 GET 更安全一些，但是两种本质上来说都是不安全的，因为http是j基于明文传输的，我们应该使用https。

重大区别：GET产生一个TCP数据包；POST产生两个TCP数据包。

对于GET方式的请求，浏览器会把http header和data一并发送出去，服务器响应200（返回数据）；
而对于POST，浏览器先发送header，服务器响应100 continue，浏览器再发送data，服务器响应200 ok（返回数据）。
```

### HTTP 状态码，301和302有什么具体区别，200和304 的区别

```
1xx 表示信息响应类，
2xx 表示成功响应类，
3xx 表示重定向响应类，
4xx 表示客户端错误，
5xx 表示服务器错误

常见的状态码有101切换协议，200成功，301永久重定向，302临时重定向，304未修改,401未授权,403 拒绝访问,404 未找到                           

301和302的区别：301：永久移动，请求的网页已永久移动到新的位置，服务器返回此响应，会自动将请求者转到新位置，302：临时移动，服务器目前从不同位置的网页响应请求，但请求者应继续使用原有位置来继续以后的请求。

200和304：

200表示成功，服务器已成功处理了请求，通常表示为服务器提供了请求的网页，304表示未修改，自从上次请求后，请求的网页未修改过，服务器返回此响应时不会返回网页内容
```

### TCP和UDP的区别，为什么三次握手四次挥手

```
1. UDP（用户数据包协议）无连接的，数据包易丢失，而且UDP不知道如何组装这些数据包(应用：qq 语音 视频 流媒体 实时游戏比如 CS)

2. TCP（传输控制协议）面向连接的，保证数据包传输的不可丢失性，TCP提供重传功能。TCP头提供用于排序的序列号，用来保证把乱序的数据包组合成一个完整的文件(电子邮件 万维网)
```

### 为什么TCP要进行四次挥手？

```
因为是双方彼此都建立了连接，因此双方都要释放自己的连接，A向B发出一个释放连接请求，他要释放链接表明不再向B发送数据了，此时B收到了A发送的释放链接请求之后，给A发送一个确认，A不能再向B发送数据了，它处于FIN-WAIT-2的状态，但是此时B还可以向A进行数据的传送。此时B向A 发送一个断开连接的请求，A收到之后给B发送一个确认。此时B关闭连接。A也关闭连接。

为什么要有TIME-WAIT这个状态呢，这是因为有可能最后一次确认丢失，如果B此时继续向A发送一个我要断开连接的请求等待A发送确认，但此时A已经关闭连接了，那么B永远也关不掉了，所以我们要有TIME-WAIT这个状态。

当然TCP也并不是100%可靠的。
```

### 3. http 和 https 的区别 为什么https 就更安全呢？

```
http 协议是明文传输数据，在传输过程中容易被窃取或者篡改，容易遭受中间人攻击。

所以为了访问更加安全，我们引入了加密方案，在 TCP 和 HTTP 之间插入了一个安全层。安全层有两个职责，对发起 http 请求的数据进行加密操作和对接收到http的内容进行解密操作。

- 第一版 对称加密 加密和解密使用的都是相同的密钥 （速度快 安全性低）
- 第二版 非对称加密 有A、B两把密钥，如果你使用 A密钥来加密，那么只能使用B密钥来解密；反过来，如果你要用B密钥加密，那么只能使用A密钥来解密。(速度慢 安全性比较高)
- 第三版 对称加密和非对称加密搭配使用 (黑客可以通过dns劫持，这样访问的就是黑客的服务器了。)
- 第四版 添加数字证书 （更安全的做法）
```

