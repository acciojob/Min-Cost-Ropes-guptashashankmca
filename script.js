// function mincost(arr)
// { 
// //write your code here
// // return the min cost
  
// }

// module.exports=mincost;

function mincost(arr) {
    // Create a Min-Heap using a priority queue
    const heap = arr.sort((a, b) => a - b); // Sort array to simulate a min-heap
    let totalCost = 0;

    while (heap.length > 1) {
        // Remove the two smallest elements
        const first = heap.shift();
        const second = heap.shift();

        // Combine the ropes
        const cost = first + second;
        totalCost += cost;

        // Add the new combined rope back into the heap
        heap.push(cost);

        // Re-sort the heap (to maintain min-heap order)
        heap.sort((a, b) => a - b);
    }

    return totalCost;
}

// Function to handle button click
function calculateMinCost() {
    const input = document.getElementById("ropeLengths").value;
    const output = document.getElementById("output");

    if (!input.trim()) {
        output.textContent = "Please enter valid rope lengths.";
        return;
    }

    // Convert input into an array of integers
    const ropeLengths = input.split(",").map(Number);

    // Validate input
    if (ropeLengths.some(isNaN) || ropeLengths.length < 1) {
        output.textContent = "Invalid input. Please enter a list of numbers.";
        return;
    }

    // Calculate the minimum cost
    const result = mincost(ropeLengths);

    // Display the result
    output.textContent = `Minimum cost to connect ropes: ${result}`;
}

module.exports=mincost;
