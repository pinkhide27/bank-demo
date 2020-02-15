<template>
  <div class="home">
    <page-header :title="'共克时艰：招商银行陕西分行与您携手同行！'" :timestr="'2020-02-14'" :author="'招商银行陕西分行'"></page-header>
    <section class="home-banner">
      <img src="@/assets/images/home_banner.png" alt="banner">
    </section>
    <section class="padding">
      <cross-square>
        <div slot="content">
          <p style="font-size: .3rem;font-weight: bold;text-align: center;">非常时期，招行伴您同行</p>
          <p>招行资深客户经理为坚守家中的您提供线上综合金融服务、疫情实时播报及科普知识。</p>
        </div>
      </cross-square>
    </section>
    <section class="padding home-slogans">
      <div><span class="home-slash">///</span>疫情当前，服务不变<span class="home-slash">///</span></div>
      <div><span class="home-slash">///</span>在线上班，排忧解难<span class="home-slash">///</span></div>
      <div><span class="home-slash">///</span>远程服务，贴心专业<span class="home-slash">///</span></div>
    </section>
    <section class="padding" style="margin-top: .5rem;">
      <bg-square title="联系我们">
        <div slot="content">
          <div class="home-buttons">
            <div class="home-btn" @click="goManager">咸阳地区</div>
            <div class="home-btn" @click="goManager">宝鸡地区</div>
          </div>
          <div class="home-buttons">
            <div class="home-btn" @click="goManager">延安地区</div>
            <div class="home-btn" @click="goManager">榆林地区</div>
          </div>
        </div>
      </bg-square>
    </section>
    <section class="padding" style="margin-top:.6rem;">
      <bg-square title="西安地区">
        <div slot="content">
          <div class="home-buttons">
            <div class="home-btn" @click="goManager">长安区支行</div>
            <div class="home-btn" @click="goManager">兴庆路支行</div>
          </div>
          <div class="home-buttons">
            <div class="home-btn" @click="goManager">莲湖路支行</div>
            <div class="home-btn" @click="goManager">劳动路支行</div>
          </div>
          <div class="home-buttons">
            <div class="home-btn" @click="goManager">高新区支行</div>
            <div class="home-btn" @click="goManager">经开区支行</div>
          </div>
          <div class="home-buttons">
            <div class="home-btn" @click="goManager">新城支行</div>
            <div class="home-btn" @click="goManager">南大街支行</div>
          </div>
        </div>
      </bg-square>
    </section>
  </div>
</template>

<script>
import pageHeader from './common/PageHeader'
import crossSquare from './common/CrossSquare'
import bgSquare from './common/BgSquare'

export default {
  components: { pageHeader, crossSquare, bgSquare },
  beforeRouteEnter (to, from, next) {
    document.title = '共克时艰：招行与您携手同行！'
    next()
  },
  methods: {
    goManager () {
      this.$router.push({ name: 'Manager' })
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  padding-bottom: .3rem;
  &-banner {
    padding: 0 .3rem;
    & > img {
      width: 100%;
    }
  }
  &-slogans {
    font-size: .3rem;
    font-weight: bolder;
    text-align: center;
  }
  &-slash {
    display: inline-block;
    color: #d32f2f;
    &:nth-child(2n) {
      margin-left: .3rem;
    }
    &:nth-child(2n+1) {
      margin-right: .3rem;
    }
  }
  &-buttons {
    display: flex;
    justify-content: space-around;
    margin-bottom: .1rem;
    & > div {
      width: 42%;
      text-align: center;
    }
  }
  &-btn {
    height: .8rem;
    line-height: .8rem;
    margin-bottom: .2rem;
    color: #fff;
    font-size: .3rem;
    font-weight: bold;
    background-color: #2d8cf0;
    border-radius: .1rem;
    cursor: pointer;
    &:hover {
      opacity: .85;
    }
  }
  .padding {
    padding: .3rem .3rem 0;
  }
  .txt-center {
    text-align: center;
  }
}
</style>
