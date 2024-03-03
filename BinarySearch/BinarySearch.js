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

    //The Array must be sorted for this
    for (let i = 0; i < mainarr.length - 1; i++) {
        for (let j = 0; j < mainarr.length - 1 - i; j++) {
            if (mainarr[j] > mainarr[j + 1]) {
                let temp = mainarr[j];
                mainarr[j] = mainarr[j + 1];
                mainarr[j + 1] = temp;
            }
        }
    }
    mainarr.forEach(function (i) {
        let box = document.createElement('div');
        box.style.display = "inline-flex";
        box.className = 'box';
        box.style.height = '4rem';
        box.style.width = '5rem';
        box.style.border = "2px solid black";
        box.style.backgroundColor = "white";
        box.style.color = "black";
        box.style.justifyContent = "center";
        box.style.alignItems = "center";
        box.style.fontSize = "32px";
        box.innerHTML = i;
        document.querySelector(".show").appendChild(box);
    });
}

function searcharr() {
    var k = parseInt(document.querySelector(".key").value, 10);
    let boxes = document.querySelectorAll(".box");

    async function updateBox(box) {
        await new Promise(resolve => setTimeout(resolve, 2000));
        let isFound = false;
        let value = parseInt(box.innerHTML, 10);

        if (k === value) {
            box.style.transition = "transform 0.5s ease, background-color 1.0s ease";
            box.style.transform = "scale(1.5)";
            box.style.backgroundColor = "green";
            isFound = true;
        } 
        else {
            box.style.transition = "transform 0.5s ease, background-color 1.0s ease";
            box.style.transform = "scale(1.2)";
            box.style.backgroundColor = "black";
            box.style.color = "white";          
        }
        return isFound;
    }

    async function binarySearch(low, high) {
        if (low <= high) {
            let mid = Math.floor((low + high) / 2);
            let box = boxes[mid];
            let found = await updateBox(box);

            if (found) {
                let resultDiv = document.createElement('div');
                resultDiv.className = "found";
                resultDiv.style.textAlign = "center";
                resultDiv.style.fontSize = "48px";
                resultDiv.style.color = "blue";
                // resultDiv.innerHTML = `Element ${box.innerHTML} found successfully at location ${mid + 1}`;
                document.querySelector(".show").appendChild(resultDiv);
            } 
            else {
                if (k < parseInt(box.innerHTML, 10)) {
                    binarySearch(low, mid - 1);
                } 
                else {
                    binarySearch(mid + 1, high);
                }
            }
        } 
        else {
            let resultDiv = document.createElement('div');
            resultDiv.className = "found";
            resultDiv.style.textAlign = "center";
            resultDiv.style.fontSize = "48px";
            resultDiv.style.color = "red";
            // resultDiv.innerHTML = `Element ${k} is not present in the array`;
            document.querySelector(".show").appendChild(resultDiv);
        }
    }

    binarySearch(0, boxes.length - 1);
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