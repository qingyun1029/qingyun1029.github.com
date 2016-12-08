---
layout: detail
title: angularjs教程首页
categories: [angularjs]
tags: [tag1]
author: 青云
---

<span>字数：{{ page.content | number_of_words }}</span>

<!--more-->

<ul>文章分类
　　{% for c in page.categories %}
　　　　<li>{{c}}</li>
　　{% endfor %}
</ul>

<ul>标签
　　{% for t in page.tags %}
　　　　<li>{{t}}</li>
　　{% endfor %}
</ul>

<h4>{{ page.tags | array_to_sentence_string }}</h4>

angularjs