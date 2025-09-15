/**
 * Szachownica - Chessboard Pattern Generator
 * Generates a chessboard pattern of 0s and 1s for a given size n
 * 
 * Input: Integer n (1 ≤ n ≤ 200)
 * Output: n×n chessboard pattern starting with 0 in top-left corner
 */

function generateSzachownica(n) {
    // Validate input
    if (!Number.isInteger(n) || n < 1 || n > 200) {
        throw new Error('Input must be an integer between 1 and 200');
    }

    const result = [];
    
    for (let i = 0; i < n; i++) {
        let row = '';
        for (let j = 0; j < n; j++) {
            // The pattern alternates: (i + j) % 2 determines if we start with 0 or 1
            // When (i + j) is even, we use 0; when odd, we use 1
            row += (i + j) % 2;
        }
        result.push(row);
    }
    
    return result;
}

function displaySzachownica(n) {
    try {
        const pattern = generateSzachownica(n);
        return pattern.join('\n');
    } catch (error) {
        return `Error: ${error.message}`;
    }
}

// Interactive function for the website
function runSzachownicaDemo() {
    const input = document.getElementById('szachownicaInput');
    const output = document.getElementById('szachownicaOutput');
    
    if (!input || !output) return;
    
    const n = parseInt(input.value);
    
    if (isNaN(n)) {
        output.textContent = 'Proszę wprowadzić poprawną liczbę.';
        output.className = 'error';
        return;
    }
    
    try {
        const pattern = generateSzachownica(n);
        output.innerHTML = pattern.map(row => `<div class="chessboard-row">${row}</div>`).join('');
        output.className = 'success';
    } catch (error) {
        output.textContent = error.message;
        output.className = 'error';
    }
}

// Event listener for interactive demo
if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', function() {
        const runButton = document.getElementById('runSzachownica');
        const input = document.getElementById('szachownicaInput');
        
        if (runButton) {
            runButton.addEventListener('click', runSzachownicaDemo);
        }
        
        if (input) {
            input.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    runSzachownicaDemo();
                }
            });
        }
    });
}

// For testing purposes (Node.js environment)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { generateSzachownica, displaySzachownica };
}