  
var feedbackLink = document.querySelector(".btn-modal-feedback");
var feedbackPopup = document.querySelector(".modal-feedback");
var feedbackClose = document.querySelector(".modal-feedback-close");

var feedbackForm = feedbackPopup.querySelector(".feedback-form");
var feedbackUser = feedbackPopup.querySelector("[name=user-name]");
var feedbackEmail = feedbackPopup.querySelector("[name=email]");

var isFeedbackStorageSupport = true;
var feedbackStorage = "";

  try {
    feedbackStorage = localStorage.getItem("feedbackUser");
  } catch (err) {
    isFeedbackStorageSupport = false;
  }

feedbackLink.addEventListener("click", function  (evt) {
  evt.preventDefault(); 
  feedbackPopup.classList.add("modal-feedback-show");
 if(feedbackStorage) {
  feedbackUser.value=feedbackStorage;
  feedbackEmail.focus();
 } else {
   feedbackUser.focus();
 }
});
  
feedbackClose.addEventListener("click", function  (evt) {
	evt.preventDefault(); 
	feedbackPopup.classList.remove("modal-feedback-show");
	feedbackPopup.classList.remove("modal-error");
});

feedbackForm.addEventListener("submit", function (evt) {
 if (!feedbackUser.value || !feedbackEmail.value) {
 evt.preventDefault();
 feedbackPopup.classList.remove("modal-error");
 feedbackPopup.offsetWidth = feedbackPopup.offsetWidth;
 feedbackPopup.classList.add("modal-error");
} else {
		localStorage.setItem("feedbackUser", feedbackUser.value);
}
 }); 
 
 window.addEventListener("keydown", function (evt) {
 if (evt.keyCode === 27) {
 evt.preventDefault();
 if (feedbackPopup.classList.contains("modal-feedback-show")) {
	feedbackPopup.classList.remove("modal-feedback-show");
	feedbackPopup.classList.remove("modal-error");
 }
 }
 });
