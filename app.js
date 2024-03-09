// document.write("Hi all")
// document.getElementById("head").innerHTML = "<li>HTML</li>";
// // document.getElementById("head").innerText = "<li>HTML</li>";
// document.getElementById("head").style = "color:red";
// document.getElementById("head").className = "bg-primary";

// // var a = 100;
// // a = 200;
// // {
// //     console.log(a);
// // }

// // let b = 200;
// // b = 300;

// // {
// //     console.log(b);
// // }

// // const c = 300;
// // {
// //     console.log(c);
// // }



// // function demo() {
// //     var a = 100;
// //     console.log(a)
// // }
// // // console.log(a);
// // demo();
// // console.log(a);


// // function other() {
// //     console.log(a);
// // }
// // other();


// let a = 1000;
// let firstName = "1000";

// console.log(a, firstName);

// let secondName;
// console.log(secondName);

// // let ab = null;
// console.log(typeof (null));

// let arr = [10, "murali", true]

// console.log(typeof (arr));


// let itemlist = [];
// function addItem() {
//     let stockItems = document.getElementById("item").value;
//     itemlist.push(stockItems);
//     console.log(itemlist);
//     document.getElementById("divid").innerHTML = itemlist;
//     document.getElementById("item").value = "";
// }
// document.getElementById("btnid").addEventListener('click', addItem);

// OBJECT
// let additem = () => {
//     let obj = {
//         firstName: document.getElementById("fname").value,
//         age: document.getElementById("age").value,
//         Degree: document.getElementById("degree").value,
//         data: function () {
//             console.log("This is a data function");
//         }
//     }
//     console.log(obj.firstName);
//     console.log(obj.age);
//     console.log(obj.Degree);
//     obj.data();
//     console.log(10 % 20);
//     document.getElementById("fname").value = "";
//     document.getElementById("age").value = "";
//     document.getElementById("degree").value = "";
// }

// document.getElementById("btnid").addEventListener("click", additem)


// SALARY
let salary = () => {
    let basicpay = parseInt(document.getElementById("basic").value);
    // console.log(basicpay);
    let hra = document.getElementById("hra").value = basicpay * (10 / 100);
    let da = document.getElementById("da").value = basicpay * (5 / 100);
    let travel = document.getElementById("travel").value = basicpay * (15 / 100);
    let pf = document.getElementById("pf").value = basicpay * (15 / 100);
    hra = parseInt(hra);
    da = parseInt(da);
    travel = parseInt(travel);
    pf = parseInt(pf)
    let gross = parseInt(document.getElementById("gross").value = basicpay + hra + da + travel + pf)
    parseInt(document.getElementById("netpay").value = gross - pf)
}
document.getElementById("basic").addEventListener("keyup", salary)

let printtable = () => {
    let basicpay = document.getElementById("basic").value
    let hra = document.getElementById("hra").value
    let da = document.getElementById("da").value
    let travel = document.getElementById("travel").value
    let pf = document.getElementById("pf").value
    let gross = document.getElementById("gross").value
    let netpay = document.getElementById("netpay").value
    document.getElementById("tablebody").innerHTML += `<tr><td>${basicpay}</td><td>${hra}</td><td>${da}</td><td>${travel}</td><td>${pf}</td><td>${gross}</td><td>${netpay}</td></tr>`
    document.getElementById("basic").value = ""
    document.getElementById("hra").value = ""
    document.getElementById("da").value = ""
    document.getElementById("travel").value = ""
    document.getElementById("pf").value = ""
    document.getElementById("gross").value = ""
    document.getElementById("netpay").value = ""
}

document.getElementById("btnid").addEventListener("click", printtable)