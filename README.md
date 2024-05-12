# Touch n Heart  - front

4 screens are availables : Match, Playground, Messages and Me.

- **Easy to use** 🤘
- **Made with Expo** ⚡
- **TypeScript supported** 🌞

## Installation and usage

Be sure, you have installed all dependencies and applications to run Expo project on your computer : [Getting Started with Expo](https://docs.expo.io/get-started/installation/).

This project works fine on iOS and Android.

### Running the project

Clone this repository :

```
git clone https://github.com/Touch-n-Heart/front.git
```

Install packages :

```
yarn
```

When installation is complete, run it :

```
yarn start
```

## Dev Intro
### 目录结构介绍
***├── src                        // 源码目录 ***           
***│   ├── components             // 一些可复用的组件 ***          
***│   ├── navigation             // 导航 ***       
***│   ├── screens                // 页面（容器） ***        
***│   ├── reducers               // reducers ***          
***│   ├── utils                  // utils ***           
***├── App.tsc                    // 程序入口文件 ***         
### 新增页面时
1. /src/screens：创建对应的Screen文件夹
2. /src/navigation/StoneNavigator.tsx：**create Navigator**
3. /src/navigation/AppNavigator.tsx：修改**isFirstOpen**的值并导入创建的Navigator可临时查看效果