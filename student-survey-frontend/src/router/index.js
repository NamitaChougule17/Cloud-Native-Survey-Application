import { createRouter, createWebHistory } from "vue-router";
import SubmitSurvey from "@/components/SubmitSurvey.vue";
import GetAllSurveys from "@/components/GetAllSurveys.vue";
import DeleteSurvey from "@/components/DeleteSurvey.vue";
import UpdateSurvey from "@/components/UpdateSurvey.vue";
import HomePage from "@/components/HomePage";

const routes = [
  { path: "/", component: HomePage },
  { path: "/submit-survey", component: SubmitSurvey },
  { path: "/get-all-surveys", component: GetAllSurveys },
  { path: "/delete-survey", component: DeleteSurvey },
  { path: "/update-survey", component: UpdateSurvey },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
