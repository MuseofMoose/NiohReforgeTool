<template>
  <div>
    <nav>
      <div class="icon-container" v-on:click="showNav = !showNav">
        <icon v-show="!showNav" class="icon" name="chevron-down" scale="4"></icon>
        <icon v-show="showNav" class="icon" name="chevron-up" scale="4"></icon>
      </div>
      <transition name="slide-down">
        <ul v-show="showNav">
          <li v-for="link in links" v-bind:class="{ selected: link.path === currentPath }">
            <router-link :to="link.path">
              <div>
                <span>{{link.label}}</span>
              </div>
            </router-link>
          </li>
        </ul>
      </transition>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'navbar',
  data () {
    return {
      links: [
        {path: '/news', label: 'News'},
        {path: '/create/melee', label: 'Melee'},
        {path: '/create/ranged', label: 'Ranged'},
        {path: '/create/head', label: 'Head'},
        {path: '/create/torso', label: 'Torso'},
        {path: '/create/arms', label: 'Arms'},
        {path: '/create/legs', label: 'Legs'},
        {path: '/create/feet', label: 'Feet'}
      ],
      currentPath: this.$route.path,
      showNav: true
    }
  },
  watch: {
    '$route' (to, from) {
      this.currentPath = this.$route.path
    }
  },
  mounted () {
    window.addEventListener('orientationchange', this.handleOrientationChange)
  },
  beforeDestroy: function () {
    window.removeEventListener('orientationchange')
  },
  methods: {
    handleOrientationChange (event) {
      this.showNav = true
    }
  }
}
</script>

<style scoped lang="scss">
@import '../main.scss';
$backgroundColor: rgb(40,80,120);

nav {
  width: 100%;
  background-color: $backgroundColor;

  .icon-container{
    height: 100px;
    display: block;

    @include sm-with-landscape {
      display: none;
    }

   .icon {
      margin: 15px 0 0;
      color: rgb(224,224,224);
    }
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    height: 550px;
    max-height: 550px;
    overflow: hidden;

    @include sm-with-landscape {
      height: auto;
      max-height: none;
    }

    li {
      display: inline-block;
      width: 50vw;

      @include sm-with-landscape {
        width: auto;
      }

      div {
        color: white;
        font-size: 7vw;
        padding: calc(1.2vw + 7px);

        @include sm-with-landscape {
          font-size: calc(1vw + 18px);
        }
      }

      &.selected {
        $selectedBackgroundColor: rgb(64,150,111);

        background-color: $selectedBackgroundColor;

        &:hover {
          background-color: $selectedBackgroundColor;
        }
      }

      &:hover {
        background-color: lighten($backgroundColor, 10%);
      }
    }
  }
}

a {
  display: block;
  height: 100%;
}

</style>
