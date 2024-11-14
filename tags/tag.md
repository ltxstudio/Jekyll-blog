---
layout: default
title: "Posts Tagged: {{ page.tag }}"
---

<h1>Posts Tagged: {{ page.tag }}</h1>
<ul>
  {% for post in site.posts %}
    {% if post.tags contains page.tag %}
      <li><a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endif %}
  {% endfor %}
</ul>