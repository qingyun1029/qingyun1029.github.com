---
layout: detail
title: Hello World!
categories: [javascript, asp_net, csharp]
tags: [tag3]
author: 青云
---

<span>字数：{{ page.content | number_of_words }}</span>

<ul>文章分类
　　{% for c in page.categories %}
　　　　<li>{{c}}</li>
　　{% endfor %}
</ul>

<!--more-->

<ul>标签
　　{% for t in page.tags %}
　　　　<li>{{t}}</li>
　　{% endfor %}
</ul>

<h4>{{ page.tags | array_to_sentence_string }}</h4>


<h2>{{ page.title }}</h2>
<p>我的第一篇文章</p>
<p>{{ page.date | date_to_string }}</p>



