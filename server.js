const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.post('/submit-lead', (req, res) => {
  const lead = req.body;
  console.log('New lead submission:', lead);
  res.send(`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Thank You | Lex Ventured & Co</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <main class="thank-you-page">
      <section class="section-hero section-soft">
        <div class="container page-hero">
          <h1>Thank you.</h1>
          <p class="lede">We received your property information and will reach out shortly to discuss the next step.</p>
          <a class="button button-primary" href="index.html">Return to Home</a>
        </div>
      </section>
    </main>
  </body>
</html>`);
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
