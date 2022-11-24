<template>
  <div>
    <header>
      <br />
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/board/list">게시판</router-link> |
        <router-link to="/login" v-if="!this.$store.state.isLogin"
          >로그인</router-link
        >
        <a v-if="this.$store.state.isLogin" @click="fnLogout">로그아웃</a>
      </div>
    </header>
    <hr />
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {}
  },
  setup() {},
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {},
  beforeUpdate() {},
  updated() {},
  beforeUnmount() {},
  unmounted() {},
  methods: {
    fnLogout() {
      localStorage.removeItem('user_token')
      localStorage.removeItem('user_role')
      location.reload()
    }
  }
}
</script>
<style scoped></style>
