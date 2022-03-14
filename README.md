# vue3_basic_template

项目创建选择

```js
? Please pick a preset: Manually select features
? Check the features needed for your project: Choose Vue version, Babel, TS, CSS Pre-processors, Linter
? Choose a version of Vue.js that you want to start the project with 3.x
? Use class-style component syntax? No
? Use Babel alongside TypeScript (required for modern mode, auto-detected polyfills, transpiling JSX)? Yes
? Pick a CSS pre-processor (PostCSS, Autoprefixer and CSS Modules are supported by default): Less
? Pick a linter / formatter config: Prettier
? Pick additional lint features: Lint on save
? Where do you prefer placing config for Babel, ESLint, etc.? In dedicated config files
```

## 代码规范配置

集成 editorconfig 配置（一个项目可能是由多人来开发的，不同的操作系统，不同编辑器，都有可能会产生不同的效果，editorconfig 来统一风格）

会默认读取这个文件（**.editorconfig**）的，当前会以这个来编辑我们的代码

vscode 中需要安装 EditorConfig for VS Code 插件，

```
# https://editorconfig.org

root = true

[*]
charset = utf-8
indent_style = space
indent_size = 2
end_of_line = lf
insert_final_newline = true
trim_trailing_whitespace = true

[*.md]
insert_final_newline = false
trim_trailing_whitespace = false
```

### 使用 prettier

将代码进行格式化

```json
 // npm i prettier -D

// .prettierrc 中配置格式化内容
{
  "useTabs": false,
  "tabWidth": 2,
  "printWidth": 80,
  "singleQuote": true,
  "trailingComma": "none",
  "semi": false
}
// .prettierignore 配置忽略文件
    /dist/*
    .local
    .output.js
    /node_modules/**

    **/*.svg
    **/*.sh

    /public/*

```

## 使用Husky

husky是一个git hook工具，可以帮助我们触发git提交的各个阶段，

```js
npx husky-init && npm install

npm install commitizen -D

npx commitizen init cz-conventional-changelog --save-dev --save-exact
```

![cd536010a43ad1e7aa45c62639cc050.png](https://s2.loli.net/2022/03/14/NvOGUAu56J1LiIR.png)

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
