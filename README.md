# vuepress-plugin-env-define

### 使用方法

1. 安装
   npm install vuepress-plugin-env-define

2. package.json 文件中配置

```json
{
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "build:dev": "vuepress build docs",
    "build:test": "vuepress build docs",
    "build:prod": "vuepress build docs"
  }
}
```

3. 在 docs 目录下新增.env 文件
   例如： .env.dev、.env.test、.env.prod 并在文件中配置环境变量

```sh
.env                # 在所有的环境中被载入
.env.local          # 在所有的环境中被载入，但会被 git 忽略
.env.[mode]         # 只在指定的模式中被载入
.env.[mode].local   # 只在指定的模式中被载入，但会被 git 忽略
```

4. 在 config.js 文件中配置插件

```js
module.exports = {
  plugins: ["env-define"],
};
```
