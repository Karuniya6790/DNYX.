document.addEventListener("DOMContentLoaded", () => {
  const updatePasswordForm = document.getElementById("updatePasswordForm");
  const newPassword = document.getElementById("newPassword");
  const confirmPassword = document.getElementById("confirmPassword");
  const newPasswordErrMsg = document.getElementById("newPasswordErrMsg");
  const confirmPasswordErrMsg = document.getElementById(
    "confirmPasswordErrMsg"
  );

  const validatePassword = (input, errMsgElement, errorMessage) => {
    if (input.value.trim() === "") {
      errMsgElement.textContent = errorMessage;
    } else {
      errMsgElement.textContent = "";
    }
  };

  newPassword.addEventListener("blur", () => {
    validatePassword(
      newPassword,
      newPasswordErrMsg,
      "New password cannot be empty"
    );
  });

  confirmPassword.addEventListener("blur", () => {
    validatePassword(
      confirmPassword,
      confirmPasswordErrMsg,
      "Confirm password cannot be empty"
    );
  });

  updatePasswordForm.addEventListener("submit", (event) => {
    event.preventDefault();
    validatePassword(
      newPassword,
      newPasswordErrMsg,
      "New password cannot be empty"
    );
    validatePassword(
      confirmPassword,
      confirmPasswordErrMsg,
      "Confirm password cannot be empty"
    );

    if (
      newPassword.value.trim() !== "" &&
      confirmPassword.value.trim() !== ""
    ) {
      // Add further validation or form submission logic here
      alert("Password updated successfully!");
    }
  });
});
