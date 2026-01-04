<template>
  <div class="container">
    <h2>All Surveys</h2>
    <div class="table-container">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Address</th>
            <th>City</th>
            <th>State</th>
            <th>ZIP</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Date</th>
            <th>Likes</th>
            <th>Interested</th>
            <th>Likelihood</th>
            <th>Raffle</th>
            <th>Comments</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="survey in surveys" :key="survey.id">
            <td>{{ survey.id }}</td>
            <td>{{ survey.firstName }}</td>
            <td>{{ survey.lastName }}</td>
            <td>{{ survey.streetAddress }}</td>
            <td>{{ survey.city }}</td>
            <td>{{ survey.state }}</td>
            <td>{{ survey.zip }}</td>
            <td>{{ survey.telephoneNumber }}</td>
            <td>{{ survey.email }}</td>
            <td>{{ formatDate(survey.dateOfSurvey) }}</td>
            <td>{{ survey.likes || "N/A" }}</td>
            <td>{{ survey.interested || "N/A" }}</td>
            <td>{{ survey.likelihood || "N/A" }}</td>
            <td>{{ survey.raffle || "N/A" }}</td>
            <td>{{ survey.comments || "N/A" }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import api from "@/api";

export default {
  data() {
    return {
      surveys: [],
    };
  },
  async created() {
    try {
      this.surveys = await api.methods.getAllSurveys();
    } catch (error) {
      alert("Failed to fetch surveys.");
    }
  },
  methods: {
    formatDate(date) {
      if (!date) return "N/A";
      const d = new Date(date);
      return d.toLocaleDateString();
    },
  },
};
</script>

<style src="../styles.css"></style>
<style>
.table-container {
  overflow-x: auto; /* Enables horizontal scrolling only if absolutely necessary */
  margin-top: 20px;
}

table {
  width: 100%; /* Makes table fit the container */
  border-collapse: collapse;
}

th,
td {
  padding: 8px;
  text-align: left;
  border: 1px solid #ddd;
  font-size: 0.9em; /* Adjust font size for better fit */
  word-wrap: break-word; /* Ensures long text wraps within the cell */
}

th {
  background-color: #3498db;
  color: white;
  font-weight: bold;
}

tr:nth-child(even) {
  background-color: #f9f9f9;
}

tr:hover {
  background-color: #f1f1f1;
}

/* Responsive font size for smaller screens */
@media screen and (max-width: 768px) {
  th,
  td {
    font-size: 0.8em;
    padding: 6px;
  }
}
</style>
