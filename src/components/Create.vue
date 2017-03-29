<template>
  <div>
  </div>
</template>

<script>
export default {
  name: 'news',
  data () {
    return {
      weaponAttributes: []
    }
  },
  mounted () {
    this.getAllWeaponAttributes()
  },
  methods: {
    getAllWeaponAttributes () {
      this.$http.get('http://localhost:3000/api/v1/weapon_attributes/get_all').then(
        response => {
          this.weaponAttributes = response.body.result_data.data
        },
        response => {
          console.log('error')
        }
      )
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h1, h2 {
  font-weight: normal;
  color: rgb(210,210,210);
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
  max-width: 60vw;
  max-height: 60vh;
}
</style>
