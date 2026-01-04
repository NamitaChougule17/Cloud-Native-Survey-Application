import axios from "axios";

// Set the BASE_URL for all API requests
const BASE_URL = "http://localhost:9090"; // Change this to your server's base URL when needed

export default {
  methods: {
    async submitForm(form) {
      try {
        const url = `${BASE_URL}/submit/survey`;

        const formCopy = { ...form };
        formCopy.likes = formCopy.likes.join(",");

        console.log("Modified Form:", formCopy);

        const response = await axios.post(url, formCopy);
        console.log("Response:", response.data);

        // Return actual response data
        return response.data;
      } catch (error) {
        console.error("Error submitting form:", error.response || error);
        throw new Error("An error occurred while submitting the form.");
      }
    },

    async getAllSurveys() {
      try {
        const url = `${BASE_URL}/get/all/survey`;
        const response = await axios.get(url);
        return response.data;
      } catch (error) {
        console.error("Error fetching all surveys:", error);
        throw error;
      }
    },

    async deleteSurvey(id) {
      try {
        const url = `${BASE_URL}/delete/survey`;
        const response = await axios.delete(url, { params: { id } });
        return response.data;
      } catch (error) {
        console.error("Error deleting survey:", error);
        throw error;
      }
    },

    async updateSurvey(surveyForm) {
      try {
        const url = `${BASE_URL}/update/survey`;
        const response = await axios.post(url, surveyForm);
        return response.data;
      } catch (error) {
        console.error("Error updating survey:", error);
        throw error;
      }
    },

    async getSurveyById(id) {
      try {
        const url = `${BASE_URL}/get/survey`;
        const response = await axios.get(url, { params: { id } });
        return response.data; // Return survey data
      } catch (error) {
        console.error("Error fetching survey:", error);
        throw error;
      }
    },
  },
};
