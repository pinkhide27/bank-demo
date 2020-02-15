<template>
  <div id="app">
    <transition :name="transitionName" >
      <router-view class="child-view" />
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  watch: {
    '$route' (to, from) {
      // window.scrollTo(0, 0)
      const toDepth = to.meta.level
      const fromDepth = from.meta.level
      this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
    }
  },
  data () {
    return {
      transitionName: 'slide-left'
    }
  }
}
</script>

<style lang="scss">
#app {
  max-width: 7.5rem;
  min-height: 100%;
  margin: 0 auto;
  font-size: 14px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.child-view {
  width: 100%;
  min-height: 100%;
  transition: all .4s cubic-bezier(.55,0,.1,1);
}
/* 设置持续时间和动画函数 */
.router-fade-enter-active {
  transition: all .3s ease;
}
.router-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.router-fade-enter, .router-fade-leave-active {
  transform: translateX(10px);
  opacity: 0;
}
.slide-left-enter, .slide-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(50px, 0);
  transform: translate(50px, 0);
}
.slide-left-leave-active, .slide-right-enter {
  opacity: 0;
  -webkit-transform: translate(-50px, 0);
  transform: translate(-50px, 0);
}
</style>
