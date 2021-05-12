---
sidebar_position: 1
---

# Code Docs 介绍

欢迎来到这里 ，  **Docusaurus in less than 1 minutes**.

## 现在开始

Get started by **creating a new site**.

Or **try Docusaurus immediately** with **[new.docusaurus.io](https://new.docusaurus.io)**.

## 代码块




import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
defaultValue="js"
values={[
{ label: 'JavaScript', value: 'js', },
{ label: 'Python', value: 'py', },
{ label: 'Java', value: 'java', },
]
}>
<TabItem value="js">

```js
function helloWorld() {
  console.log('Hello, world!');
}
```

</TabItem>
<TabItem value="py">

```py
def hello_world():
  print 'Hello, world!'
```

</TabItem>
<TabItem value="java">

```java
class HelloWorld {
  public static void main(String args[]) {
    System.out.println("Hello, World");
  }
}
```

</TabItem>
</Tabs>



以上是一些语言的‘Hello World’

JS**:
```jsx title="/src/components/HelloCodeTitle.js"
function HelloCodeTitle(props) {
  return <h1>Hello, {props.name}</h1>;
}
```


shell**:

```shell
npx @docusaurus/init@latest init my-website classic
```

## 开启Code-Docs服务

Run the development server:

Your site starts at `http://localhost:3000`.



## 行公式 TeX(KaTeX)

公式：
https://github.com/remarkjs/remark-math .


语法：
https://katex.org/ .


**Fundamental Theorem of Calculus**  
Let $f:[a,b] \to \R$ be Riemann integrable. Let $F:[a,b]\to\R$ be $F(x)=
\int_{a}^{x}f(t)dt$.
Then $$F$$ is continuous, and at all $x$ such that $f$ is continuous at $x$,
$F$ is differentiable at $x$ with $F'(x)=f(x)$.

### 科学公式 TeX(KaTeX)

$$E=mc^2$$

行内的公式$$E=mc^2$$行内的公式，行内的$$E=mc^2$$公式。

$$\(\sqrt{3x-1}+(1+x)^2\)$$

$$\sin(\alpha)^{\theta}=\sum_{i=0}^{n}(x^i + \cos(f))$$

Text

$$
\int_0^\infty f(x)dx
$$

More Text

MEISHI
