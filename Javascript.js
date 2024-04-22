document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById("form");
    var submitButton = document.getElementById("submit");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); 

        
        var formData = new FormData(form);
        var name = formData.get("name");
        var email = formData.get("email");
        var message = formData.get("message");

        
        if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
            alert("Please fill out all fields.");
            return;
        }

        
        var successMessage = document.createElement("p");
        successMessage.textContent = "Form submitted successfully!";
        form.appendChild(successMessage);

        
        form.reset();
    });
});
