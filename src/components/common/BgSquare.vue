<template>
  <div class="bg-square">
    <slot name="title">
      <p class="bg-square-title">{{title}}</p>
    </slot>
    <slot name="content"></slot>
  </div>
</template>

<script>
export default {
  props: {
    title: { default: '' }
  }
}
</script>

<style lang="scss" scoped>
.bg-square {
  position: relative;
  padding: .2rem;
  background-color: #CFEAFF; // #BBDFFB; // #BBDEFB; //#FFCDD2;
  border-radius: .08rem;

  &::before,
  &::after {
    content: '';
    display: block;
    position: absolute;
    background-color: #d32f2f; //#FF5252;
    opacity: .9;
    z-index: -1;
    border-radius: .04rem;
  }

  &::before {
    top: -.2rem;
    left: .2rem;
    width: .8rem;
    height: .4rem;
  }
  &::after {
    bottom: -.1rem;
    right: .3rem;
    width: .6rem;
    height: .2rem;
  }
  &-title {
    position: relative;
    padding-left: .3rem;
    font-size: .36rem;
    font-weight: bold;
    margin-bottom: .3rem;
    &::before {
      content: '';
      display: block;
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      width: .1rem;
      height: .5rem;
      background-color: #d32f2f;
    }
  }
}
</style>
