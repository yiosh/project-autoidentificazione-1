<template>
  <v-app id="inspire">
    <v-container class="h-100">
      <v-row class="h-100 align-center">
        <v-col>
          <transition name="page" mode="out-in">
            <router-view></router-view>
          </transition>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  created() {
    this.$router.push("/");
  },
};
</script>

<style scoped>
.page-enter-active,
.page-leave-active {
  transition: opacity 1s, transform 0.5s;
}
.page-enter,
.page-leave-to {
  opacity: 0;
  transform: translateX(-10%);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>