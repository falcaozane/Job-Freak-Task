// jQuery code to handle click events and display corresponding content

$(document).ready(function() {
  // Get the content container element
  const contentContainer = $('#content');

  // Get the links
  const homeLink = $('#home-link');
  const contactLink = $('#contact-link');
  const infoLink = $('#info-link');
  const guideLink = $('#guide-link');

  // Add click event listeners to the links
  homeLink.on('click', function(event) {
    event.preventDefault();
    contentContainer.html(`
      <h1>Home</h1>
      <p>This is the Home content.</p>
    `);
  });

  contactLink.on('click', function(event) {
    event.preventDefault();
    contentContainer.html(`
      <h1>Contact</h1>
      <p>This is the Contact information.</p>
    `);
  });

  infoLink.on('click', function(event) {
    event.preventDefault();
    contentContainer.html(`
      <h1>Information</h1>
      <p>This is some Information.</p>
    `);
  });

  guideLink.on('click', function(event) {
    event.preventDefault();
    contentContainer.html(`
      <h1>Guide</h1>
      <p>This is a Guide.</p>
    `);
  });
});

$(document).ready(function() {
  // Get the left panel element
  const leftPanel = $('.left-panel');

  // Toggle the left panel on click
  $('.toggle-panel').on('click', function() {
    leftPanel.toggleClass('expanded');
  });
});
