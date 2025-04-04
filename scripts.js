<script>
  // Function to handle the loading screen and redirection
  function addLoadingEffect(event) {
    event.preventDefault(); // Prevent the immediate redirection
    const targetURL = event.target.href;

    // Show the loading screen
    document.getElementById("loadingOverlay").style.display = "flex";

    // Set a timeout to simulate loading, then redirect after 2-3 seconds
    setTimeout(function() {
      window.location.href = targetURL;
    }, 3000); // Redirect after 3 seconds
  }

  // Add event listeners to all links
  const links = document.querySelectorAll('a');
  links.forEach(link => {
    link.addEventListener('click', addLoadingEffect);
  });
</script>
