function addNumbers(){
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    //let a = alert("Sum of Both Numbers is: " + (num1 + num2))
    let a = "Sum of Both Numbers is: " + (num1 + num2)
    document.getElementById('title').innerHTML = a;
    return a;
    };
    
    // //var old = document.querySelector(".card-header");
    
    // // document.querySelector(".card-header").addEventListener('mouseenter',function(){
    // //    this.style.background = "skyblue";
    // //     this.innerHTML = "<h5 class = 'text-center'>"+ 'Student Registration Form' + "<h5>";
    // // });
    
    
    // var element = document.querySelector("#title").innerHTML = "<h6 class = 'text-center'>Calculator</h6>";
    // //console.log(element);
    
    // function validateForm(){
    // let x = document.forms[0]["fname"].value;
    // if (x == ""){
    //     alert("Name Must be Entered");
    // }
    // }