---
layout: page.11ty.cjs
title: <animated-sudoku> ⌲ Home
---

# &lt;animated-sudoku>

`<animated-sudoku>` is an awesome element. It's a great introduction to building web components with LitElement, with nice documentation site as well.

## As easy as HTML

<section class="columns">
  <div>

`<animated-sudoku>` is just an HTML element. You can it anywhere you can use HTML!

```html
<animated-sudoku></animated-sudoku>
```

  </div>
  <div>

<animated-sudoku></animated-sudoku>

  </div>
</section>

## Configure with attributes

<section class="columns">
  <div>

`<animated-sudoku>` can be configured with attributed in plain HTML.

```html
<animated-sudoku name="HTML"></animated-sudoku>
```

  </div>
  <div>

<animated-sudoku name="HTML"></animated-sudoku>

  </div>
</section>

## Declarative rendering

<section class="columns">
  <div>

`<animated-sudoku>` can be used with declarative rendering libraries like Angular, React, Vue, and lit-html

```js
import {html, render} from 'lit-html';

const name = 'lit-html';

render(
  html`
    <h2>This is a &lt;animated-sudoku&gt;</h2>
    <animated-sudoku .name=${name}></animated-sudoku>
  `,
  document.body
);
```

  </div>
  <div>

<h2>This is a &lt;animated-sudoku&gt;</h2>
<animated-sudoku name="lit-html"></animated-sudoku>

  </div>
</section>
