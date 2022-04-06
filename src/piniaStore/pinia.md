# Pinia

pina没有了**mutations**。不再有模块的嵌套结构，可以在另一个store中导入和使用store来隐式嵌套store，pinia通过设计了扁平的结构。更好的支持**typescript**

### 优点

1、直观，stores和组件一样熟悉

2、类型安全，类型是推断出来的，

3、pinia支持开发者工具，与vuedevtools挂钩，提供增强的vue2和vue3开发体验

4、可扩展，响应存储，本地存储同步等扩展

5、模块化设计、构建多个stores并让打包层序代码自动拆分

6、极轻：1kb

