
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
