<template>
  <div class="homepage">
    <div class="content">
      <h1>SWE 645 Assignment 3</h1>
      <p class="subtitle">Developed by:</p>
      <ul class="group-members">
        <li>Jashanveer Singh (G01477180)</li>
        <li>Namita Chougule (G01473740)</li>
        <li>Dhruvi Rathod (G01465151)</li>
      </ul>
      <div class="footer">
        <p>Welcome to our project homepage!</p>
        <router-link to="/submit-survey" class="btn">Get Started</router-link>
      </div>
    </div>
  </div>
</template>

<style>
/* Styling for the Homepage */
.homepage {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    120deg,
    #f6d365,
    #fda085
  ); /* Gradient background */
  font-family: "Arial", sans-serif;
  color: #2c3e50;
  text-align: center;
}

.content {
  background: white;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  width: 90%;
  max-width: 500px;
}

h1 {
  font-size: 2.5em;
  color: #3498db;
  margin-bottom: 10px;
}

.subtitle {
  font-size: 1.2em;
  margin-bottom: 20px;
  color: #34495e;
}

.group-members {
  list-style: none;
  padding: 0;
  margin: 0 0 20px;
}

.group-members li {
  font-size: 1.1em;
  margin: 5px 0;
  color: #555;
}

.footer {
  margin-top: 20px;
}

.footer p {
  font-size: 1em;
  margin-bottom: 10px;
  color: #7f8c8d;
}

.btn {
  display: inline-block;
  background-color: #3498db;
  color: white;
  text-decoration: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 1em;
  transition: background-color 0.3s ease;
}

.btn:hover {
  background-color: #2980b9;
}
</style>
