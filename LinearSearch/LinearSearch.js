function startSearching() {
    let myGift = checkValidInput();
    if(myGift === 1)
    {
        alert("Kindly fill both the required fields");
        return;
    }
    else if(myGift === 2)
    {
        alert("Oops! you forgot the array, please fill it");
        return;
    }
    else if(myGift === 3)
    {
        alert("Oops! you forgot the key, please fill it");
        return;
    }

    let inputArray = document.getElementsByClassName("array")[0].value;
    console.log(inputArray[0] + 1);
    var mainarr = inputArray.split(" ");
    for (let i = 0; i < mainarr.length; i++) {
        mainarr[i] = parseInt(mainarr[i], 10);
    }
    // document.querySelector(".show").innerHTML =mainarr;
    mainarr.forEach(function (i) {
        let box = document.createElement('div');
        box.style.display = "inline-flex";
        box.className = 'box';
        box.style.height = '4rem';
        box.style.width = '5rem';
        box.style.border = "2px solid black";
        box.style.backgroundColor = "white";
        box.style.color = "black";
        // box.style.textAlign="center";
        box.style.justifyContent = "center";
        box.style.alignItems = "center";
        box.style.fontSize = "32px"; // Set your desired font size here
        box.innerHTML = i;
        document.querySelector(".show").appendChild(box);
    });
}

function searcharr() {
    var k = document.querySelector(".key").value; // Fetching the value of the key input
    let boxes = document.querySelectorAll(".box");
    async function updateBox(box) {
        await new Promise(resolve => setTimeout(resolve, 2000));
        let isFound = false;
        if (k === box.innerHTML) {
            box.style.transition = "transform 0.5s ease, background-color 1.0s ease";
            box.style.transform = "scale(1.5)";
            box.style.backgroundColor = "green";
            isFound = true;
        } else {
            box.style.transition = "transform 0.5s ease, background-color 1.0s ease";
            box.style.transform = "scale(1.2)";
            box.style.backgroundColor = "black";
            box.style.color = "white";
        }
        return isFound;
    }

    async function processBoxes() {
        
        let flag = false;

        for (let i = 0; i < boxes.length; i++) {
            let box = boxes[i];
            let found = await updateBox(box);

            if (found) {
                let resultDiv = document.createElement('div');
                resultDiv.className = "found";
                resultDiv.style.textAlign = "center";
                resultDiv.style.fontSize = "48px";
                resultDiv.style.color = "white";
                resultDiv.innerHTML = Element `${box.innerHTML} found successfully at location ${i + 1}`;
                document.querySelector(".show").appendChild(resultDiv);
                flag = true;
                break;
            }
        }

        if (!flag) {
            let resultDiv = document.createElement('div');
            resultDiv.className = "found";
            resultDiv.style.textAlign = "center";
            resultDiv.style.fontSize = "48px";
            resultDiv.style.color = "red";
            resultDiv.innerHTML = Element `${k} is not present in the array`;
            document.querySelector(".show").appendChild(resultDiv);
        }
    }

    setTimeout(processBoxes, 1000);
}

function checkValidInput()
{
    myItms = document.getElementById('utensil').value;
    myKey = document.getElementById('value').value;

    if(myItms.length === 0 && myKey.length === 0)
    {
        return 1;
    }
    if(myItms.length === 0)
    {
        return 2;
    }
    else if(myKey.length === 0)
    {
        return 3;
    }
}