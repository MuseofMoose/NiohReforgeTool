<template>
  <div>
    <img class="splash-image" src="../assets/nioh_logo.png">
    <h1 v-html="msg"></h1>
  </div>
</template>

<script>
export default {
  name: 'news',
  data () {
    return {
      msg: 'Welcome to the equipment reforging tool.'
    }
  },
  mounted () {
    // init functions
  },
  methods: {
    // function here
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../main.scss';

h1, h2 {
  font-size: 64px;
  font-weight: normal;
  color: rgb(210,210,210);

  @include sm-with-landscape {
    font-size: 32px;
  }
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.splash-image {
  margin-top: 20px;
  max-width: 80vw;
  max-height: 80vh;

  @include sm-with-landscape {
    max-width: 60vw;
    max-height: 60vh;
  }
}
</style>
