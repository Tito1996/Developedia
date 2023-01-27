<script setup>

let jsonData = new Array();

function hitApi(url, callback) {
  var req = new XMLHttpRequest();

  req.addEventListener('load', onLoad);
  req.addEventListener('error', onFail);
  req.addEventListener('abort', onFail);

  req.open('GET', url);
  req.send();

  function onLoad(event) {
    if (req.status >= 400) {
      onFail(event);
    } else {
      var json = JSON.parse(this.responseText);      
      var json_str = JSON.stringify(json);
      console.log(json_str);
      callback(null, json);
    }
  }

  function onFail(event) {
    callback(new Error('...'));    
  }
}


hitApi('https://tito1996.github.io/developedia/post.json', function(error, data) {
  if (error) {
    console.log('there was an error', error);
  } else {
    console.log('data is', data);
    jsonData = data;
  }
});

</script>

<template>
    <div>{{ jsonData }}</div>
</template>

<style scoped></style>