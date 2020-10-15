import VueRouter from "vue-router";
import Landing from "./views/Landing";

const routes = [
  {
    path: "/",
    name: "landing",
    component: Landing
  },
  {
    path: "/step-1",
    name: "StepOne",
    component: () =>
      import(/* webpackChunkName: "steps" */ "./views/steps/One")
  },
  {
    path: "/step-2",
    name: "StepTwo",
    component: () =>
      import(/* webpackChunkName: "steps" */ "./views/steps/Two")
  },
  {
    path: "/step-3",
    name: "StepThree",
    component: () =>
      import(/* webpackChunkName: "steps" */ "./views/steps/Three")
  },
  {
    path: "/step-4",
    name: "StepFour",
    component: () =>
      import(/* webpackChunkName: "steps" */ "./views/steps/Four")
  },
  {
    path: "/step-5",
    name: "StepFive",
    component: () =>
      import(/* webpackChunkName: "steps" */ "./views/steps/Five")
  },
  {
    path: "/step-6",
    name: "StepSix",
    component: () =>
      import(/* webpackChunkName: "steps" */ "./views/steps/Six")
  },
  {
    path: "/step-7",
    name: "StepSeven",
    component: () =>
      import(/* webpackChunkName: "steps" */ "./views/steps/Seven")
  },
  {
    path: "/step-8",
    name: "StepEight",
    component: () =>
      import(/* webpackChunkName: "steps" */ "./views/steps/Eight")
  },
  {
    path: "/step-9",
    name: "StepNine",
    component: () =>
      import(/* webpackChunkName: "steps" */ "./views/steps/Nine")
  },
  {
    path: "/step-10",
    name: "StepTen",
    component: () =>
      import(/* webpackChunkName: "steps" */ "./views/steps/Ten")
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;