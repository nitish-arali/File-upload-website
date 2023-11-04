window.addEventListener("load", preventSubmit);

function preventSubmit() {
  let myForm = document.querySelectorAll("form");
  for (var i = 0; i < myForm.length; i++) {
    myForm[i].addEventListener("submit", function (e) {
      e.preventDefault();
      document.getElementById("submitButton").disabled = true;
      document.getElementById("submitButton").innerText = "Submitting...";
    });
  }
}

function getFormData(formObject) {
  // Replace 'https://your-google-apps-script-url' with your Google Apps Script URL
  fetch(
    "https://script.google.com/macros/s/AKfycbzU_HDxxz3yMxR1VC9aSBDf8ngnnLGqwp4r6xF2BPeZM9gB6VC0jZqICJ4xHC1BuWCR/exec",
    {
      method: "POST",
      body: new FormData(formObject),
    }
  )
    .then((response) => response.json())
    .then((result) => showSuccess())
    .catch((error) => console.error("Error:", error));
}

function showSuccess() {
  document.getElementById("submitButton").innerText = "Submit";
  document.getElementById("submitButton").disabled = false;

  document.getElementById("showAlert").innerHTML =
    '<div class="alert alert-success" role="alert">Data Successfully Submitted |</div>';
  document.getElementById("formdata").reset();
  setTimeout(clearAlert, 4000);
}

function clearAlert() {
  document.getElementById("showAlert").innerHTML = "";
}
