<template>
  <header class="page-header">
    <h1 class="page-header-title">{{title}}</h1>
    <p class="page-header-info">
      <span>{{timestr}}</span>&nbsp;&nbsp;&nbsp;
      <span class="page-header-name">{{author}}</span>
    </p>
  </header>
</template>
<script>
export default {
  props: {
    title: { type: String, default: '' },
    timestr: { type: String, default: '' },
    author: { type: String, default: '' }
  }
}
</script>
<style lang="scss" scoped>
.page-header {
  padding: .3rem;
  &-title {
    font-size: .4rem;
    line-height: 1.2;
  }
  &-name {
    color: #7F0000; // #2d8cf0;
  }
  &-info {
    &::after {
      display: block;
      content: '';
      width: 96%;
      height: 1px;
      background: #ccc;
      margin: .08rem auto;
    }
  }
}
</style>
