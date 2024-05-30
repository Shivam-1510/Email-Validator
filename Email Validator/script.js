console.log("This is my script");

let result = {
    "tag": "",
    "free": false,
    "role": false,
    "user": "akshaykumar",
    "email": "akshaykumar@codewithharry.com",
    "score": 0.64,
    "state": "undeliverable",
    "domain": "codewithharry.com",
    "reason": "invalid_mailbox",
    "mx_found": true,
    "catch_all": null,
    "disposable": false,
    "smtp_check": false,
    "did_you_mean": "",
    "format_valid": true
};

submitBtn.addEventListener("click", async (e) => {
    e.preventDefault();
    console.log("Clicked!");
    let key = "ema_live_LvoCIDBvNcMZT8miQ93JNF8evoZdpkRhxtr9auwS";
    let email = document.getElementById("username").value; 
    let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`;

    try {
        let res = await fetch(url);
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        let result = await res.json();
        let str = ``;
        for (let key of Object.keys(result)) {
            if (result[key] !== "" && result[key] !== " ") { 
                str = str + `<div>${key}: ${result[key]}</div>`;
            }
        }

        console.log(str);
        document.getElementById("resultCont").innerHTML = str;
    } catch (error) {
        console.error("Error fetching email validation data:", error);
    }
});
