async function createBars(arr) {
    const barsContainer = document.getElementById('bars-container');
    barsContainer.innerHTML = '';

    arr.forEach((value, index) => {
        const bar = document.createElement('div');
        bar.className = 'bar';
        bar.style.height = `${value * 3}px`;
        bar.style.border='2px solid black';
        bar.style.backgroundColor='Violet';  // Adjust the height scaling as needed
        barsContainer.appendChild(bar);
    });
}

async function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

async function bubbleSort(arr) {
    const n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                await new Promise(resolve => setTimeout(resolve, 200)); // Delay for visualization
                await swap(arr, j, j + 1);
                await createBars(arr);
            }
        }
    }
}

function startSorting() {
    const numElements = parseInt(prompt('Enter the number of elements:'));
    const elements = [];

    for (let i = 0; i < numElements; i++) {
        const element = parseInt(prompt(`Enter element ${i + 1}:`));
        elements.push(element);
    }

    createBars(elements);
    bubbleSort(elements);
}
