<template>
  <div class="container">
    <h2>STUDENT SURVEY FORM</h2>
    <form @submit.prevent="handleSubmit">
      <!-- Personal Information Section -->
      <div
        class="form-group"
        v-for="(field, index) in personalFields"
        :key="index"
      >
        <label :for="field.id" :class="{ required: field.required }">
          {{ field.label }}
        </label>
        <input
          v-if="field.type !== 'textarea'"
          :type="field.type"
          :id="field.id"
          v-model="form[field.id]"
          :required="field.required"
          @blur="field.id === 'zip' ? fetchCityState() : null"
          @input="validateField(field.id)"
        />
        <textarea
          v-else
          :id="field.id"
          v-model="form[field.id]"
          :required="field.required"
        ></textarea>
        <p v-if="fieldErrors[field.id]" class="error">
          {{ fieldErrors[field.id] }}
        </p>
      </div>

      <!-- Campus Preferences Section -->
      <div class="form-group">
        <label>What did you like most about the campus?</label>
        <label v-for="option in likesOptions" :key="option">
          <input type="checkbox" :value="option" v-model="form.likes" />
          {{ option }}
        </label>
      </div>

      <!-- Interest Source Section -->
      <div class="form-group">
        <label class="required"
          >How did you become interested in the university?</label
        >
        <label v-for="(option, index) in interestedOptions" :key="index">
          <input type="radio" :value="option" v-model="form.interested" />
          {{ option }}
        </label>
      </div>

      <!-- Recommendation Likelihood Section -->
      <div class="form-group">
        <label for="likelihood" class="required">
          Likelihood of recommending this school to others:
        </label>
        <select id="likelihood" v-model="form.likelihood" required>
          <option
            v-for="(option, index) in likelihoodOptions"
            :key="index"
            :value="option"
          >
            {{ option }}
          </option>
        </select>
      </div>

      <!-- Raffle Entry Section -->
      <div class="form-group">
        <label for="raffle" class="required">
          Raffle (Enter at least 10 comma-separated numbers from 1 to 100):
        </label>
        <input
          type="text"
          id="raffle"
          v-model="form.raffle"
          required
          @input="validateRaffle"
        />
        <p v-if="fieldErrors.raffle" class="error">{{ fieldErrors.raffle }}</p>
      </div>

      <!-- Additional Comments Section -->
      <div class="form-group">
        <label for="comments">Additional Comments:</label>
        <textarea id="comments" v-model="form.comments"></textarea>
      </div>

      <!-- Submit and Cancel Buttons -->
      <div class="button-group">
        <button type="submit">Submit</button>
        <button type="button" @click="resetForm">Cancel</button>
      </div>

      <!-- Server Response -->
      <div v-if="serverResponse" class="server-response">
        <h3>Server Response:</h3>
        <p>{{ serverResponse }}</p>
      </div>
    </form>
  </div>
</template>

<script>
import api from "../api.js"; // Import API logic

export default {
  data() {
    return {
      personalFields: [
        { id: "firstName", label: "First Name", type: "text", required: true },
        { id: "lastName", label: "Last Name", type: "text", required: true },
        {
          id: "streetAddress",
          label: "Street Address",
          type: "text",
          required: true,
        },
        { id: "city", label: "City", type: "text", required: true },
        { id: "state", label: "State", type: "text", required: true },
        { id: "zip", label: "Zip Code", type: "text", required: true },
        {
          id: "telephoneNumber",
          label: "Telephone Number",
          type: "tel",
          required: true,
        },
        { id: "email", label: "E-mail", type: "email", required: true },
        {
          id: "dateOfSurvey",
          label: "Date of Survey",
          type: "date",
          required: true,
        },
      ],
      likesOptions: [
        "Students",
        "Location",
        "Campus",
        "Atmosphere",
        "Dorm Rooms",
        "Sports",
      ],
      interestedOptions: ["Friends", "Television", "Internet", "Other"],
      likelihoodOptions: ["Very Likely", "Likely", "Unlikely"],
      form: {
        firstName: "",
        lastName: "",
        streetAddress: "",
        city: "",
        state: "",
        zip: "",
        telephoneNumber: "",
        email: "",
        dateOfSurvey: "",
        likes: [],
        interested: "",
        likelihood: "",
        raffle: "",
        comments: "",
      },
      fieldErrors: {
        zip: "",
        raffle: "",
      },
      serverResponse: null,
    };
  },
  methods: {
    async handleSubmit() {
      if (!this.validateForm()) {
        alert("Please correct the highlighted fields.");
        return;
      }
      try {
        const response = await api.methods.submitForm(this.form);
        this.serverResponse = response;
        alert(response);
        this.resetForm();
      } catch (error) {
        alert(error.message);
      }
    },
    resetForm() {
      this.form = {
        firstName: "",
        lastName: "",
        streetAddress: "",
        city: "",
        state: "",
        zip: "",
        telephoneNumber: "",
        email: "",
        dateOfSurvey: "",
        likes: [],
        interested: "",
        likelihood: "",
        raffle: "",
        comments: "",
      };
      this.fieldErrors = {
        zip: "",
        raffle: "",
      };
      this.serverResponse = null;
    },
    validateForm() {
      return !Object.values(this.fieldErrors).some((error) => error);
    },
    validateField(fieldId) {
      if (fieldId === "zip" && !/^\d{5}$/.test(this.form.zip)) {
        this.fieldErrors.zip = "Zip code must be a 5-digit number.";
      } else {
        this.fieldErrors.zip = "";
      }
    },
    validateRaffle() {
      const numbers = this.form.raffle
        .split(",")
        .map((n) => parseInt(n.trim()));
      if (
        numbers.length < 10 ||
        numbers.some((n) => isNaN(n) || n < 1 || n > 100)
      ) {
        this.fieldErrors.raffle =
          "Please enter at least 10 numbers between 1 and 100, separated by commas.";
      } else {
        this.fieldErrors.raffle = "";
      }
    },
    async fetchCityState() {
      try {
        const response = await api.methods.getCityState(this.form.zip);
        if (response.city && response.state) {
          this.form.city = response.city;
          this.form.state = response.state;
        } else {
          this.fieldErrors.zip = "Invalid zip code.";
        }
      } catch (error) {
        this.fieldErrors.zip = "Failed to fetch city and state.";
      }
    },
  },
};
</script>

<style scoped src="../styles.css"></style>
