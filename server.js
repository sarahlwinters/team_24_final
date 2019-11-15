const express = require('express');
const fetch = require('node-fetch');

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/api', (req, res) => {
  const baseURL = 'https://data.princegeorgescountymd.gov/resource/9hyf-46qb.json';
  fetch(baseURL)
    .then((r) => r.json())
    .then((course) => {course.filter(c => c.dept_id === "INST")})
    .then((course) => course.map(c => c.course_id + ": " + c.name))
    .then((result) => {
    console.log(result);
      res.send({ data: result });
    })
    .catch((err) => {
      console.log(err);
      res.redirect('/error');
    });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));