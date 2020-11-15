import Vue from "vue";
import Router from "vue-router";
import ContentDetail from "@/components/ContentDetail.vue";
import Home from "@/components/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/detail",
      name: "detailPage",
      component: ContentDetail,
      props: true,
    },
    {
      path: "/",
      name: "home",
      component: Home,
    },
  ],
});
