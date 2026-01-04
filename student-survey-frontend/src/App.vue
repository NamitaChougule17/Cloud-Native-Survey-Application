<template>
  <div>
    <nav class="navbar">
      <ul>
        <li><router-link to="/submit-survey">Submit Survey</router-link></li>
        <li>
          <router-link to="/get-all-surveys">Get All Surveys</router-link>
        </li>
        <li><router-link to="/delete-survey">Delete Survey</router-link></li>
        <li><router-link to="/update-survey">Update Survey</router-link></li>
      </ul>
    </nav>
    <router-view />
  </div>
</template>

<style>
/* Navigation Bar Styles */
.navbar {
  background-color: #3498db; /* Light blue background */
  padding: 10px 20px;
  box-shadow: 0 2px 4px rgba(16, 4, 4, 0.2); /* Adds a subtle shadow */
}

.navbar ul {
  list-style: none;
  display: flex;
  justify-content: center; /* Centers the links horizontally */
  margin: 0;
  padding: 0;
}

.navbar li {
  margin: 0 15px;
}

.navbar a {
  text-decoration: none; /* Removes underline from links */
  color: white; /* White text color */
  font-size: 1.1em;
  font-weight: bold;
  transition: color 0.3s; /* Smooth transition for hover effect */
}

.navbar a:hover {
  color: #f1c40f; /* Change to yellow on hover */
}
</style>
