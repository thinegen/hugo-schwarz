---
title: "{{ replace .Name "-" " " | title }}"
publishDate: {{ now.Format "2006-01-02" }}
tags: []
draft: true
translationKey: "{{ sha256 .Name }}"
---

