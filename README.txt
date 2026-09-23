DOTS CONNECTED — COMING SOON SITE
==================================

FILES
  index.html      the page
  style.css       styling
  script.js       background animation, footer year, form handling
  favicon.svg     browser tab icon
  assets/logo.jpg your logo

UPLOAD TO GODADDY
  1. Log in to GoDaddy > My Products > Web Hosting > Manage.
  2. Open File Manager (or connect via FTP).
  3. Go into the public_html folder (this is your site's root).
  4. Upload all files/folders from this package directly into public_html,
     keeping the "assets" folder intact.
  5. Visit your domain — the site should load immediately, no build step needed.

EMAIL SIGNUP FORM (OPTIONAL)
  The "Notify me" form posts to Formspree, a free service for handling
  form submissions on static sites (no backend needed).
    1. Go to formspree.io and create a free account.
    2. Create a new form, copy the endpoint it gives you
       (looks like https://formspree.io/f/xxxxxxx).
    3. Open index.html, find this line:
         action="https://formspree.io/f/your-form-id"
       and replace it with your real endpoint.
  If you'd rather skip the signup form entirely, just delete the
  <section class="notify"> ... </section> block in index.html.

CUSTOMISING
  - Colors: all defined at the top of style.css under :root — change
    --orange, --ink, --ground to restyle the whole site in one place.
  - Copy: edit the text directly in index.html.
  - Launch date / countdown: not included by default; ask if you'd like
    one added.
