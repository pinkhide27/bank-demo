<template>
  <div class="manager">
    <page-header :title="'共克时艰：招行资深客户经理为您贴心服务！'" :timestr="'2020-02-14'" :author="'招商银行陕西分行'"></page-header>
    <section class="manager-banner">
      <img src="@/assets/images/manager_banner.png" alt="banner">
    </section>
    <section class="padding">
      <cross-square>
        <div slot="content">
          <p class="center" style="font-size: .3rem;font-weight: bold;">共克时艰，招夕相伴</p>
          <p class="center">及时关注疫情进展，了解最新金融产品资讯</p>
          <p class="center">喜欢 TA ，就 call TA</p>
        </div>
      </cross-square>
    </section>
    <section class="padding">
      <person v-for="item in users" :key="item.id" :userInfo="item" class="manager-person"></person>
    </section>
  </div>
</template>

<script>
import pageHeader from './common/PageHeader'
import crossSquare from './common/CrossSquare'
import Person from './common/Person'

export default {
  components: { pageHeader, crossSquare, Person },
  beforeRouteEnter (to, from, next) {
    document.title = '共克时艰：招行资深客户经理为您贴心服务！'
    next()
  },
  data () {
    return {
      users: [
        {
          id: '1_1',
          name: '张三',
          sex: 'male',
          slogan: '风里雨里，我在等你',
          title: '客户经理',
          certificates: ['fund'],
          imgSrc: require('@/assets/images/user_1.jpg'),
          location: 'XXX分行',
          tel: 17801024227
        },
        {
          id: '1_2',
          name: '李四',
          sex: 'female',
          slogan: '爱岗敬业每一天',
          title: '客户经理',
          certificates: ['financial', 'fund'],
          imgSrc: require('@/assets/images/user_2.jpg'),
          location: 'XX路XXX支行',
          tel: 17801024227
        },
        {
          id: '1_3',
          name: '王五',
          sex: 'male',
          slogan: '投资是长期与短期的平衡，也是自己与市场间的平衡',
          title: '客户经理',
          certificates: ['fund'],
          imgSrc: require('@/assets/images/user_3.jpg'),
          location: 'XXX分行',
          tel: 17801024227
        },
        {
          id: '1_4',
          name: '赵六',
          sex: 'female',
          slogan: '真诚服务，客户至上',
          title: '客户经理',
          certificates: ['financial', 'fund'],
          imgSrc: require('@/assets/images/user_4.jpg'),
          location: 'XX路XXX支行',
          tel: 17801024227
        }
      ]
    }
  },
  methods: {
    goHome () {
      this.$router.go(-1)
    }
  }
}
</script>
<style lang="scss" scoped>
.manager {
  padding-bottom: .3rem;
  &-banner {
    padding: 0 .3rem;
    & > img {
      width: 100%;
    }
  }
  &-person {
    &:last-child {
      border-bottom: none;
      margin-bottom: 0;
    }
  }
  .padding {
    padding: .3rem .3rem 0;
  }
  .center {
    text-align: center;
  }
}
</style>
