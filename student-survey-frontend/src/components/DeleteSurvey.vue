<template>
  <div class="container">
    <h2>Delete Survey</h2>
    <form @submit.prevent="deleteSurvey">
      <div class="form-group">
        <label for="id">Survey ID</label>
        <input type="number" id="id" v-model="id" required />
      </div>
      <button type="submit">Delete</button>
    </form>
  </div>
</template>

<script>
import api from "@/api";

export default {
  data() {
    return {
      id: null,
    };
  },
  methods: {
    async deleteSurvey() {
      try {
        const response = await api.methods.deleteSurvey(this.id);
        alert(response);
      } catch (error) {
        alert("Failed to delete survey.");
      }
    },
  },
};
</script>

<style src="../styles.css"></style>
