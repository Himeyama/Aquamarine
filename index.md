---
layout: default
title: テストページ
---

# インストール
```sh
git clone https://github.com/Himeyama/Aquamarine
dir=Aquamarine
cp -r $dir/_includes .
cp -r $dir/_layouts .
cp -r $dir/assets .
rm -rf $dir
```

**太字**, _斜体_, or ~~打ち消し~~.

[index](./).

# 見出し 1

## 見出し 2

> 引用1
> 引用2
> 引用3

### 見出し 3

```js
// Javascript code with syntax highlighting.
class Hoge{
    a
    constructor(x){
        this.x = x
    }
}
```

```ruby
# Ruby code with syntax highlighting
day = %w[日 月 火 水 木 金 土]
puts "今日は#{day[Time.new.wday]}曜日"
```

#### 見出し 4

*   箇条書き

##### 見出し 5

1.  箇条書き1
2.  箇条書き2
3.  箇条書き3

###### 見出し 6

| 名前         | 出身              | 
|:-------------|:------------------|
| 河豚         | 山口県            |     
| めんたいこ   | 福岡県            |     
| ちゃんぽん   | 長崎県            |    
| いきなり団子 | 熊本県            |     

### 水平線

* * *

### 小さい画像

![Octocat](https://github.githubassets.com/images/icons/emoji/octocat.png)

### 大きい画像

![Branching](https://guides.github.com/activities/hello-world/branching.png)


### Definition lists can be used with HTML syntax.

<dl>
<dt>Born</dt>
<dd>2019</dd>
<dt>Birthplace</dt>
<dd>Japan</dd>
</dl>

```
Long, single-line code blocks should not wrap. They should horizontally scroll if they are too long. This line should be long enough to demonstrate this.
```

```
The final element.
```

<button>ボタン</button>

<select><option>選択</option></select>

<input placeholder="入力">

<input type="button" value="クリック">

<input type="submit">