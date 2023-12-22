// Load preferences from Local Storage
document.addEventListener("DOMContentLoaded", function () {
  // Active page
  var currentPage = window.location.pathname;
  console.log("currentPage: ", currentPage);

  const menu = document.querySelectorAll(".path-name");
  console.log("menu: ", menu);

  menu.forEach(function (link) {
    console.log("link: ", link);

    const attribute = link.getAttribute("href");
    console.log("attribute: ", attribute);

    if (currentPage.includes(attribute)) {
      link.classList.add("active-menu");
      //   console.log(true);
    } else {
      console.log(false);
    }
  });

  //   For responsiveness
  // Get the desktop menu items
  var desktopMenu = document.querySelectorAll(".nav-two .nav-link");

  // Get the mobile menu container
  var mobileMenu = document.getElementById("mobileMenu");

  // Clone and append each desktop menu item to the mobile menu
  desktopMenu.forEach(function (item) {
    var clone = item.cloneNode(true);
    mobileMenu.appendChild(clone);
  });

  loadPreferences();
});

function loadPreferences() {
  var fontSize = localStorage.getItem("fontSize");
  var bgColor = localStorage.getItem("bgColor");
  var textColor = localStorage.getItem("textColor");

  if (fontSize) {
    document.getElementById("fontSize").value = fontSize;
    changeFontSize();
  }

  if (bgColor) {
    document.getElementById("bgColor").value = bgColor;
    changeBackgroundColor();
  }

  if (textColor) {
    document.getElementById("textColor").value = textColor;
    changeTextColor();
  }
}

function changeFontSize() {
  var fontSizeValue = document.getElementById("fontSize").value;
  document.getElementById("websiteHeader").style.fontSize =
    fontSizeValue + "em";
  document.getElementById("websiteBody").style.fontSize = fontSizeValue + "em";
  document.getElementById("websiteFooter").style.fontSize =
    fontSizeValue + "em";

  // Update the font size for the footer
  //   var footerElements = document.querySelectorAll("#websiteFooter *");
  //   footerElements.forEach(function (element) {
  //     element.style.fontSize = fontSizeValue + "em";
  //   });

  // Save preferences to Local Storage
  localStorage.setItem("fontSize", fontSizeValue);
}

function changeBackgroundColor() {
  var bgColorValue = document.getElementById("bgColor").value;
  document.getElementById("websiteHeader").style.backgroundColor = bgColorValue;
  document.getElementById("websiteFooter").style.backgroundColor = bgColorValue;

  //   // Update the background color for the header
  //   var headerBackground = document.querySelectorAll("#websiteFooter *");
  //   footerElements.forEach(function (element) {
  //     element.style.backgroundColor = bgColorValue;
  //   });

  //   // Update the background color for the footer
  //   var footerBackground = document.querySelectorAll("#websiteFooter *");
  //   footerElements.forEach(function (element) {
  //     element.style.backgroundColor = bgColorValue;
  //   });

  // Save preferences to Local Storage
  localStorage.setItem("bgColor", bgColorValue);
}

function changeTextColor() {
  var textColorValue = document.getElementById("textColor").value;
  document.getElementById("websiteHeader").style.color = textColorValue;

  // Update the text color of the links in the navigation menu
  var navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach(function (link) {
    link.style.color = textColorValue;
  });

  // Update the text color for the footer
  // document.getElementById("websiteFooter").style.color = textColorValue;

  // Update the text color for the footer
  var footerElements = document.querySelectorAll("#websiteFooter *");
  // var footerElements = document.querySelectorAll('#websiteFooter .social-media-handle, #websiteFooter .details');
  footerElements.forEach(function (element) {
    element.style.color = textColorValue;
  });

  // Save preference to Local Storage
  localStorage.setItem("textColor", textColorValue);
}

function resetPreferences() {
  // Clear preferences from Local Storage
  localStorage.removeItem("fontSize");
  localStorage.removeItem("bgColor");
  localStorage.removeItem("textColor");

  // Reset Header styles to default
  document.getElementById("websiteHeader").style.fontSize = "1em";
  document.getElementById("websiteHeader").style.backgroundColor = "#EAE3C9";
  document.getElementById("websiteHeader").style.color = "#222222";

  // Reset Body style to default
  document.getElementById("websiteBody").style.fontSize = "1em";

  // Reset Footer styles to default
  document.getElementById("websiteFooter").style.fontSize = "1em";
  document.getElementById("websiteFooter").style.backgroundColor = "#EAE3C9";
  document.getElementById("websiteFooter").style.color = "#222222";

  // Reset input values
  document.getElementById("fontSize").value = 1;
  document.getElementById("bgColor").value = "#EAE3C9";
  document.getElementById("textColor").value = "#222222";
}
///////////////////////////////////////////////////////

//Toggle function for mobile view
function toggleMobileMenu() {
  var mobileMenu = document.getElementById("mobileMenu");
  var barsIcon = document.getElementById("barsIcon");
  var timesIcon = document.getElementById("timesIcon");

  if (mobileMenu.style.display === "flex") {
    mobileMenu.style.display = "none";
    barsIcon.style.display = "inline";
    timesIcon.style.display = "none";
  } else {
    mobileMenu.style.display = "flex";
    barsIcon.style.display = "none";
    timesIcon.style.display = "inline";
  }
}

// Validation
function validateForm() {
  var nameRegex = /^[A-Za-z ]+$/;
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  var nameInput = document.getElementById("name");
  var emailInput = document.getElementById("email");

  if (!nameRegex.test(nameInput.value)) {
    alert("Please enter a valid name (only letters and spaces allowed).");
    return;
  }

  if (!emailRegex.test(emailInput.value)) {
    alert("Please enter a valid email address.");
    return;
  }

  // Form is valid, you can proceed with further actions (e.g., submitting to server).
  alert("Form submitted successfully!");
}
