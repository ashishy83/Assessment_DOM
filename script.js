// let x = document.getElementById("text");
// console.log(x.innerText);


// let y = document.getElementsByTagName("h1")
// console.log(y[0,1].innerText);

// let hello = document.getElementById("t1");
// hello.innerText="Hello World";


// Clock
    let btn = document.getElementById("button");
    let timer = document.getElementById("clock");


    function timerfn(){
        let time = new Date();
        let hr = time.getHours();
        let min = time.getMinutes();
        let sec = time.getSeconds();
        console.log(hr, min, sec);
        // timer.innerText = `${hr}":"${min}":"${sec}`;
        return `${hr}:${min}:${sec}`
    };

    btn.addEventListener("click",function(){
        timer.innerText = timerfn();
        setInterval(function(){
            timer.innerText = timerfn();
        },1000)
    })
   


    // document.getElementById("clock").innerHTML= hr+":"+min+":"+sec;

    // setInterval(timer, 1000);  // when inside the function it will start on click
    // setTimeout(timer, 1000);


// setInterval(timer, 1000); // when outside the function the clock will run w/o click.


//Flex direction

let fb = document.getElementById("cards");
let btncol = document.getElementById("btn-col");


    btncol.addEventListener("click",function(){
        fb.style.flexDirection="column";
        fb.style.alignItems="center";
    })


let heading = document.getElementById("heading");
heading.style.color="red";


let hello = document.getElementById("hello");
let hellobtn = document.getElementById("hello_btn");

hellobtn.addEventListener("click",function(){
    hello.innerText="Welcome to Elevation academy";
});


let year = document.getElementById("years");
year.addEventListener("click",function(){
    console.log(year.options[year.selectedIndex].innerHTML);
});



