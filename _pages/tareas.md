---
title: Tareas
layout: collection
permalink: /tareas/
collection: tareas
entries_layout: grid
classes: wide
---

{% for tarea in site.tareas %}
  <h2>{{ tarea.title }} - {{ tarea.excerpt }}</h2>
{% endfor %}