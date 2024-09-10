function check()
{
    let age= document.getElementById("usergiven").value;
    age=parseInt(age);
    let result;

    if (age >= 18)
    {
        result= "You are elgible for voting";
    }
    else if (age < 18 && age >= 0 ){
        result= "You are not elgible for voting";
    }
    else {
        result= "Enter a valid age";
    }

    document.getElementById("result").innerText = result;
}