<template>
  <div class="container">
    <h2>Update Survey</h2>
    <!-- Step 1: Input for fetching survey by ID -->
    <div class="form-group">
      <label for="id">Enter Survey ID</label>
      <input type="number" id="id" v-model="surveyId" required />
      <button @click="fetchSurvey" type="button">Fetch Survey</button>
    </div>

    <!-- Step 2: Prefilled Form (hidden until survey is fetched) -->
    <form v-if="form.id" @submit.prevent="updateSurvey">
      <div class="form-group">
        <label for="firstName">First Name</label>
        <input type="text" id="firstName" v-model="form.firstName" required />
      </div>

      <div class="form-group">
        <label for="lastName">Last Name</label>
        <input type="text" id="lastName" v-model="form.lastName" required />
      </div>

      <div class="form-group">
        <label for="streetAddress">Street Address</label>
        <input
          type="text"
          id="streetAddress"
          v-model="form.streetAddress"
          required
        />
      </div>

      <div class="form-group">
        <label for="city">City</label>
        <input type="text" id="city" v-model="form.city" required />
      </div>

      <div class="form-group">
        <label for="state">State</label>
        <input type="text" id="state" v-model="form.state" required />
      </div>

      <div class="form-group">
        <label for="zip">ZIP Code</label>
        <input type="text" id="zip" v-model="form.zip" required />
      </div>

      <div class="form-group">
        <label for="telephoneNumber">Telephone Number</label>
        <input
          type="tel"
          id="telephoneNumber"
          v-model="form.telephoneNumber"
          required
        />
      </div>

      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" v-model="form.email" required />
      </div>

      <div class="form-group">
        <label for="dateOfSurvey">Date of Survey</label>
        <input
          type="date"
          id="dateOfSurvey"
          v-model="form.dateOfSurvey"
          required
        />
      </div>

      <div class="form-group">
        <label>What did you like most about the campus?</label>
        <div>
          <label>
            <input type="checkbox" value="Students" v-model="form.likes" />
            Students
          </label>
          <label>
            <input type="checkbox" value="Location" v-model="form.likes" />
            Location
          </label>
          <label>
            <input type="checkbox" value="Campus" v-model="form.likes" /> Campus
          </label>
          <label>
            <input type="checkbox" value="Atmosphere" v-model="form.likes" />
            Atmosphere
          </label>
          <label>
            <input type="checkbox" value="Dorm Rooms" v-model="form.likes" />
            Dorm Rooms
          </label>
          <label>
            <input type="checkbox" value="Sports" v-model="form.likes" /> Sports
          </label>
        </div>
      </div>

      <div class="form-group">
        <label>How did you become interested in the university?</label>
        <div>
          <label>
            <input type="radio" value="Friends" v-model="form.interested" />
            Friends
          </label>
          <label>
            <input type="radio" value="Television" v-model="form.interested" />
            Television
          </label>
          <label>
            <input type="radio" value="Internet" v-model="form.interested" />
            Internet
          </label>
          <label>
            <input type="radio" value="Other" v-model="form.interested" /> Other
          </label>
        </div>
      </div>

      <div class="form-group">
        <label>Likelihood of recommending this school to others</label>
        <select v-model="form.likelihood" required>
          <option value="Very Likely">Very Likely</option>
          <option value="Likely">Likely</option>
          <option value="Unlikely">Unlikely</option>
        </select>
      </div>

      <div class="form-group">
        <label for="raffle">
          Raffle (Enter at least 10 comma-separated numbers from 1 to 100):
        </label>
        <input type="text" id="raffle" v-model="form.raffle" required />
      </div>

      <div class="form-group">
        <label for="comments">Additional Comments:</label>
        <textarea id="comments" v-model="form.comments"></textarea>
      </div>

      <button type="submit">Update Survey</button>
    </form>
  </div>
</template>

<script>
import api from "@/api";

export default {
  data() {
    return {
      surveyId: null, // ID input for fetching survey
      form: {
        likes: [], // Initialize likes as an array for checkboxes
      },
    };
  },
  methods: {
    // Fetch survey by ID
    async fetchSurvey() {
      if (!this.surveyId) {
        alert("Please enter a Survey ID.");
        return;
      }
      try {
        const response = await api.methods.getSurveyById(this.surveyId);
        if (response) {
          // Parse likes into an array for checkboxes
          response.likes = response.likes ? response.likes.split(",") : [];
          this.form = response; // Populate the form with survey data
        } else {
          alert("No survey found with the given ID.");
        }
      } catch (error) {
        alert("Error fetching survey. Please try again.");
        console.error(error);
      }
    },
    // Update survey
    async updateSurvey() {
      try {
        // Join likes into a comma-separated string for the backend
        this.form.likes = this.form.likes.join(",");
        await api.methods.updateSurvey(this.form);
        alert("Survey updated successfully!");
      } catch (error) {
        alert("Failed to update survey.");
        console.error(error);
      }
    },
  },
};
</script>

<style src="../styles.css"></style>
