---
layout: detail
title: javascript教程首页
category: angularjs
tags: [tag1, tag2, tag3]
author: 青云
---

<span>字数：{{ page.content | number_of_words }}</span>
上面都是摘要部分
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


{% highlight ruby linenos %}

def show
  @widget = Widget(params[:id])
  respond_to do |format|
    format.html # show.html.erb
    format.json { render json: @widget }
  end
end

{% endhighlight %}

![有帮助的截图]({{ site.url }}/assets/images/header.jpg)
[下载次图片]({{ site.url }}/assets/images/header.jpg).

javascript 教程


