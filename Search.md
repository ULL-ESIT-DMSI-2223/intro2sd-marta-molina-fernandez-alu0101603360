---
layout: default 
permalink: /Search/
title: Search
---

{% capture initSearch %}

<h1>Search</h1>

<form id="Search-form" action="">
  <label class="label" for="Search">Search term (accepts a regex):</label>
  <br/>
  <input class="input" id="Search" type="text" name="Search" 
        autofocus 
        placeholder="e.g. Promise" 
        autocomplete="off">
  
  <ul class="list  list--results" id="list">
  </ul>
</form>

<script type="text/javascript" src="/intro2sd-marta-molina-fernandez-alu0101603360/assets/src/fetch.js"></script> 
<script type="text/javascript" src="/intro2sd-marta-molina-fernandez-alu0101603360/assets/src/Search.js"></script>


<script type="text/javascript">

  const Search = new JekyllSearch(
    '{{site.url}}/assets/src/Search.json',
    '#Search',
    '#list',
    '{{site.baseurl}}'
  );
  Search.init(); 
  
</script>

<noscript>Please enable JavaScript to use the Search form.</noscript>

{% endcapture %}

{{ initSearch | lstrip }}