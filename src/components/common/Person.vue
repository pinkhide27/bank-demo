<template>
  <section class="users">
    <div class="users-item">
      <div class="users-left">
        <div class="users-avatar"><img :src="userInfo.imgSrc || ''" alt=""></div>
      </div>
      <div class="users-right">
        <div class="users-tipsline">
          <p style="display: flex;align-items: end;"><span class="users-male" v-if="userInfo.sex === 'male'"></span><span class="users-female" v-else></span><span style="margin-left: .1rem;font-size: .24rem;font-weight: bold;">{{userInfo.name}}</span></p>
          <p>
            <span v-for="item in userInfo.certificates" :key="item">
              <span v-if="item == 'financial'" class="users-tag tag-blue">理财</span>
              <span v-if="item == 'fund'" class="users-tag tag-red">基金</span>
            </span>
          </p>
        </div>
        <div class="users-tipsline users-slogan">
          {{userInfo.slogan}}
        </div>
        <div class="users-tipsline">
          <span>{{userInfo.location}}</span>
          <span class="users-tel" @click="callPerson(userInfo.tel)"></span>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  props: {
    userInfo: { type: Object, default: () => ({}) }
  },
  methods: {
    callPerson (phone) {
      window.location.href = `tel:${phone}`
    }
  }
}
</script>
<style lang="scss" scoped>
.users {
  margin-bottom: .3rem;
  padding-bottom: .2rem;
  border-bottom: 2px solid #eee;

  &-item {
    display: flex;
    justify-content: space-between;
  }
  &-left {
    width: 2.1rem;
  }
  &-avatar {
    width: 100%;
    height: 1.6rem;
    overflow: hidden;
    border-radius: .1rem;
    box-shadow: 0px 1px 2px 1px #ddd;

    & > img {
      width: 100%;
    }
  }
  &-right {
    width: calc(100% - 2.1rem - .15rem);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  &-tipsline {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &-slogan {
    color: #898989;
    line-height: 1.15;
  }
  &-male,
  &-female {
    display: inline-block;
    width: .36rem;
    height: .36rem;
    background-size: 100%;
    background-repeat: no-repeat;
  }
  &-male {
    background-image: url('~@/assets/images/male.png');
  }
  &-female {
    background-image: url('~@/assets/images/female.png');
  }
  &-tel {
    position: relative;
    width: .6rem;
    height: .6rem;
    background-size: 80% 80%;
    background-repeat: no-repeat;
    background-image: url('~@/assets/images/tel.png');
    background-position: 50%;
    border-radius: 50%;
    border: .02rem solid #d81e06;
    cursor: pointer;
    &:hover {
      opacity: .8;
    }
  }
  &-tag {
    padding: .06rem .08rem;
    text-align: center;
    color: #fff;
    font-weight: bold;
    font-size: .12rem;
    border-radius: .06rem;
  }
  .tag {
    &-red {
      background: #ff9900
    }
    &-blue {
      background: #2c8df0;
    }
  }
}
</style>
