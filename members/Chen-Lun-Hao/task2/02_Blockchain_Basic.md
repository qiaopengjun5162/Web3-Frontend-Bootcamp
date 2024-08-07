# Task2 Blockchain Basic

本任务分为简答题、分析题和选择题，以此为模板，在下方填写你的答案即可。

选择题，请在你选中的项目中，将 `[ ]` 改为 `[x]` 即可

## [单选题] 如果你莫名奇妙收到了一个 NFT，那么

- [ ] 天上掉米，我应该马上点开他的链接
- [X] 这可能是在对我进行诈骗！

## [单选题] 群里大哥给我发的网站，说能赚大米，我应该

- [ ] 赶紧冲啊，待会米被人抢了
- [X] 谨慎判断，不在不信任的网站链接钱包

## [单选题] 下列说法正确的是

- [X] 一个私钥对应一个地址
- [ ] 一个私钥对应多个地址
- [ ] 多个私钥对应一个地址
- [ ] 多个私钥对应多个地址

## [单选题] 下列哪个是以太坊虚拟机的简称

- [ ] CLR
- [X] EVM
- [ ] JVM

## [单选题] 以下哪个是以太坊上正确的地址格式？

- [ ] 1A4BHoT2sXFuHsyL6bnTcD1m6AP9C5uyT1
- [ ] TEEuMMSc6zPJD36gfjBAR2GmqT6Tu1Rcut
- [ ] 0x997fd71a4cf5d214009619808176b947aec122890a7fcee02e78e329596c94ba
- [X] 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266

## [多选题] 有一天某个大哥说要按市场价的 80% 出油给你，有可能

- [X] 他在洗米
- [ ] 他良心发现
- [X] 要给我黒米
- [X] 给我下套呢

## [多选题] 以下哪些是以太坊的二层扩容方案？

- [ ] Lightning Network（闪电网络）
- [X] Optimsitic Rollup
- [X] Zk Rollup

## [简答题] 简述区块链的网络结构

```
- 节点：全节点、轻节点、矿工节点
- 点对点网络：去中心化、冗余和可靠性
- 共识机制：工作量证明、权益证明、委托权益证明
- 交易：交易广播、交易验证
- 区块：区块头和区块体
- 区块链：链式结构和分布式账本
- 智能合约：自动化、不可篡改
---
区块链的网络结构是一个复杂的去中心化系统，由多个节点通过点对点网络连接，使用共识机制来确保数据一致性，交易通过验证后被打包成区块，区块按顺序链接形成区块链，智能合约在链上自动执行。所有这些要素共同构成了一个安全、透明和高效的分布式账本系统。

```

## [简答题] 智能合约是什么，有何作用？

```
- 它是运行在区块链上的自动执行的程序，满足一定的规则和条件时，就会自动执行。它的代码会在区块链上公开，所以是公开透明不可篡改的。
- 作用：自动化和自执行，不可篡改和透明，降低成本和提高效率，安全性和可编程性。
- 应用场景：去中心化的金融应用、供应链管理、简化房地产交易过程、投票系统的自动收集和计数、去中心化的数字身份系统、自动管理知识产权和版税。
```

## [简答题] 怎么理解大家常说的 `EVM` 这个词汇？

```
- 以太坊虚拟机，一个运行智能合约的去中心化虚拟机。
- 执行用 solidity 编写的智能合约代码。先编译成机器码，然后再执行。
- 保证所有节点执行智能合约的结果一致性。
- 是一个图灵完备的虚拟机，只要资源足够，可以执行任何计算业务。
- 提供了安全隔离的运行环境，智能合约在执行时不影响其它区块链的其它部分，防止了恶意代码搞破坏。
```

## [分析题] 你对去中心化的理解

```
- 将权力和控制分散到多个节点，而不是单一的权威和控制点。
- 无单点控制、分布式账本、共识机制、抗审查或控制、透明公开、安全可靠。
- 效率和性能比中心化的应用差，上手成本稍高，治理和决策过程稍慢从而无法快速应对变化。
- 在区块链和加密货币领域有着显著的优势。
```

## [分析题] 比较区块链与传统数据库，你的看法？

```
- 区块链的数据以区块的形式存储，区块按照时间顺序链接，每个区块包含上一个区块的hash，形成一个不可篡改的链式结构。
- 传统数据库的数据存到表格、文件中，分为关系型数据库和非关系型数据库，它们的数据结构非常灵活，数据可以通过SQL进行增删改查。
---

- 区块链中数据的一致性是通过共识机制（工作量证明和权益证明）来保证的，所有的数据和交易都是透明的，所有人都能够查看和验证。
- 传统数据库的一致性是通过事务来保证，依赖数据库管理系统来处理并发和一致性。数据一般是私有的，必须经过授权才能查看和修改。
---

- 区块链的去中心化设计，不会出现单点故障，多个节点共同维护账本。数据写入区块链后，不能篡改，数据安全性高。
- 传统数据库的中心化的，会存在单点故障风险，依赖备份和容灾机制。数据可以被管理员篡改。
---

- 区块链由于去中心化和共识机制的缘故，所以扩展性和性能相对较差，吞吐量有限，解决方案不是非常完善。
- 传统数据库性能优越，可以处理大规模的数据和高吞吐量的场景。可以通过水平拓展和垂直拓展来提高性能和容量。
---

- 区块链适用于高安全性、高透明性、高防篡改性的场景，比如去中性化应用 dApps、加密货币、供应链管理、数字身份、去中心化金融 DeFi ...
- 传统数据库适合高性能、灵活数据管理、复杂查询的场景，比如企业应用、电子商务、内容管理系统、客户关系系统、金融系统 ...
---

区块链和传统数据库并不是互斥的，可以是互补互融的，因为它们各自有各自的优点和适用领域，可以根据具体的业务需求和优先级来选择合适的技术方案。

- 区块链
    - 优势：去中心化、高安全性、防篡改、透明性。
    - 局限：性能较低、扩展性差、存储效率低。
    - 适用场景：需要信任、透明性和安全性高的应用，如金融交易、智能合约、供应链追踪等。
- 传统数据库
    - 优势：高性能、高扩展性、灵活的数据管理和复杂查询能力。
    - 局限：集中化管理，存在单点故障和数据篡改风险。
    - 适用场景：传统企业应用、需要高吞吐量和复杂数据处理的应用，如电子商务、ERP 系统等。
```

## 操作题

安装一个 WEB3 钱包，创建账户后与 [openbuild.xyz](https://openbuild.xyz/profile) 进行绑定，截图后文件命名为 `./bind-wallet.jpg`.
