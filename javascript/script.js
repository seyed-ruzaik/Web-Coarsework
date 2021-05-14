function validate(){
    var name = document.forms['commentForm']['name'].value;
    var nameField = document.getElementById("name");
    var selectOption = document.getElementById("rate");
    var comment = document.getElementById("comment").value;
    var message;

    if (name == ""){

        alert("Fill the Name Field")
        nameField.focus();
        return false;

    }

    if(selectOption.value == "default"){

        alert("Please Rate Our Website.")
        selectOption.focus();
        return false;

    }

    message = "Dear " + name + ", Thank you very much for your feedback.\ You have rated our sited as " + 
    selectOption.value + " and your comment was "+ comment + ".";
    

    alert(message)

    
}