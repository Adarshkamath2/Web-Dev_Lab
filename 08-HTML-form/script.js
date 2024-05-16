
        submitButton = document.getElementById("btn");
        submitButton.addEventListener("click", function validateFormAndCalc(event){
            event.preventDefault();
            var usn = document.getElementById("regno").value;
            var code = document.getElementById("subcode").value;
            var m1 = parseInt(document.getElementById("marks-1").value);
            var m2 = parseInt(document.getElementById("marks-2").value);
            var m3 = parseInt(document.getElementById("marks-3").value);
            var info = document.getElementById("res");
            
            
            
            
            if(m1 > 20 || m2 > 20 || m3 > 20){
                alert("Enter Valid Marks");
                return
            }
            
            var information = "USN : "+usn+"<br/>"+"Subject Code : "+code+"<br/>"+"Marks-1 : "+m1+"<br/>"+"Marks-2 : "+m2+"<br/>"+"Marks-3 : "+m3+"<br/>Total Marks : "+(m1+m2+m3)+"<br/>";
            
            marks = [m1,m2,m3];
            marks.sort();
            var avg = (marks[1]+marks[2])/2;
            information += "Average : "+avg+"<br/>";
            console.log(information);
            res.innerHTML = information;
        })
