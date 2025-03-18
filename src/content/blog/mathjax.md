---
date: 2024-03-24
title: mathjax
description: More new features specific to this theme.
mermaid: true
mathjax: true
category: [astro, feature]
tags: [astro, feature]
ogImage: https://astro-yi.obs.cn-east-3.myhuaweicloud.com/avatar.png
---

### Support mathjax

+ set markdown frontmatter `mathjax: true`.

#### Block Mode

```yaml title="Mathjax.md"
---
mathjax: true
---
hello!
$$ \sum_{i=0}^N\int_{a}^{b}g(t,i)\text{d}t $$
hello!
```

hello!
$$ \sum_{i=0}^N\int_{a}^{b}g(t,i)\text{d}t $$
hello!

#### Inline Mode

```yaml title="Mathjax.md"
---
mathjax: true
---
hello! $ \sum_{i=0}^N\int_{a}^{b}g(t,i)\text{d}t $ hello!
```

hello! $ \sum_{i=0}^N\int_{a}^{b}g(t,i)\text{d}t $ hello!