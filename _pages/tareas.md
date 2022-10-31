---
title: Tareas
layout: collection
permalink: /tareas/
collection: tareas
entries_layout: grid
classes: wide
---

{% for tareas in site.tareas %}
  <h2>{{ tareas.name }} - {{ tareas.position }}</h2>
  <p>{{ tareas.content | markdownify }}</p>
{% endfor %}