---
title: async/await
date: 2020-08-13
sidebar: 'auto'
categories:
 - 笔记
tags:
 - Node
publish: true
---
##  async/await：使用同步的方式去写异步代码
使用 promise.then 也是相当复杂，虽然整个请求流程已经线性化了，但是代码里面包含了大量的 then 函数，使得代码依然不是太容易阅读。**基于这个原因，ES7 引入了 async/await，这是 JavaScript 异步编程的一个重大改进，提供了在不阻塞主线程的情况下使用同步代码实现异步访问资源的能力，并且使得代码逻辑更加清晰。**

### 生成器 VS 协程

Generator(生成器) 的底层实现机制——协程（Coroutine）
async/await 使用了 Generator 和 Promise 两种技术

- **生成器函数是一个带星号函数，而且是可以暂停执行和恢复执行的。**
- **协程是一种比线程更加轻量级的存在。**
  - 可以把协程看成是跑在线程上的任务，一个线程上可以存在多个协程，但是在线程上同时只能执行一个协程，比如当前执行的是 A 协程，要启动 B 协程，那么 A 协程就需要将主线程的控制权交给 B 协程，这就体现在 A 协程暂停执行，B 协程恢复执行
- **如果从 A 协程启动 B 协程，我们就把 A 协程称为 B 协程的父协程。**

#### 协程

不是被操作系统内核所管理， 而完全是由程序所控制的。

性能提升，减少资源浪费。

#### 生成器函数的特性

可以暂停执行，也可以恢复执行。

#### 生成器函数的具体使用方式

1. 在生成器函数内部执行一段代码，如果遇到 yield 关键字，那么 JavaScript 引擎将返回关键字后面的内容给外部，并暂停该函数的执行。

   ```
   .next() 方法返回一个对象，有 value 和 done 两个属性
   value 表示函数内返回的内容
   done 是个布尔值 表示是否完成
   ```

2. 外部函数可以通过 next 方法恢复函数的执行。

### async/await

### async
- async 是一个通过异步执行并隐式返回 Promise 作为结果的函数。
重点: (异步执行和隐式返回 Promise。)

### await
async 函数返回的是一个 Promise 对象

await 返回 Promise 对象的处理结果。如果等待的不是 Promise 对象，则返回该值本身。

### async 的一些讨论

### async 会取代 Generator 吗？

在异步方面， async 可以取代 Generator  ， 但是 async 和 Generator  两个语法本身是用来解决不同的问题的。

### async 会取代 Promise 吗 ？

1. async 函数也会返回一个 Promise 对象
2. 面对复杂的异步流程， Promise 提供的 all 和 race 会更加好用
3. Promise 本身是一个对象， 所以可以在代码中任意传递
4. async 支持率目前还很低。

### async 的一些讨论

使用 async/await 可以实现用同步代码的风格来编写异步代码，这是因为 async/await 的基础技术使用了生成器和 Promise，生成器是协程的实现，利用生成器能实现生成器函数的暂停和恢复。
