---
id: rajh6okb
title: Source of data
file_version: 1.1.3
app_version: 1.18.2
---

<div align="center"><img src="https://firebasestorage.googleapis.com/v0/b/swimmio.appspot.com/o/repositories%2FZ2l0aHViJTNBJTNBVnVlM3BsYXlncm91bmQlM0ElM0FtaWNrc3A%3D%2F12802939-69bb-4439-b5dc-3631083754a1.png?alt=media&token=a813c9e5-e61b-46e5-b67c-42c41914c9e3" style="width:'50%'"/></div>

<br/>

Getting the source data:

<br/>

Use the composable `📄 src/composables/useData.js` to get the data from a central point. This way we don't care what the actual source of the data is
<!-- NOTE-swimm-snippet: the lines below link your snippet to Swimm -->
### 📄 src/components/SearchResults.vue
```vue
12     import useData from "../composables/useData";
13     const { filteredTitles } = useData();
```

<br/>

What the data looks like:

<br/>

You can find the data in the public directory
<!-- NOTE-swimm-snippet: the lines below link your snippet to Swimm -->
### 📄 src/assets/data/data.json
```json
2        {
3          "Name": "Setting Up your First Vue3 Project - Vue 3.0 Release",
4          "Page": "https://learnvue.co/2020/09/setting-up-your-first-vue3-project-vue-3-0-release/"
5        },
```

<br/>

Setting up the composable

<br/>

get the data any way you want and expose it for users (usually you would want this to be reactive).
<!-- NOTE-swimm-snippet: the lines below link your snippet to Swimm -->
### 📄 src/composables/useData.js
```javascript
2      import titles from "@/assets/data/data.json";
```

<br/>

This uses `filteredTitles`<swm-token data-swm-token=":src/composables/useData.js:11:3:3:`    const filteredTitles = computed(() =&gt; {`"/> computed to get the filtered list of titles
<!-- NOTE-swimm-snippet: the lines below link your snippet to Swimm -->
### 📄 src/composables/useData.js
```javascript
11         const filteredTitles = computed(() => {
12             return titles.filter(t => t.Name.toLowerCase().includes(query.value.toLowerCase()));
13         });
14     
15         return { filteredTitles, query, resetQuery };
16     }
```

<br/>

* * *

<br/>

This file was generated by Swimm. [Click here to view it in the app](https://app.swimm.io/repos/Z2l0aHViJTNBJTNBVnVlM3BsYXlncm91bmQlM0ElM0FtaWNrc3A=/docs/rajh6okb).
