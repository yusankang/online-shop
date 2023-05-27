<template>
  <router-view/>
</template>

<style lang="scss">
// Custom.scss
// Option A: Include all of Bootstrap

// Include any default variable overrides here (though functions won't be available)

@import "./assets/all.scss";

// fonts
@import url('https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap');

@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600&display=swap');

// Then add additional custom code here
html, body{
  font-family: 'Source Sans Pro', sans-serif;
}

.permanent-marker {
  font-family: 'Permanent Marker', cursive;
}
</style>
