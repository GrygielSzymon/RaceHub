/**
 * Szachownica - Standalone Solution
 * 
 * Problem: Generate a chessboard pattern of 0s and 1s for input size n
 * Input: Integer n (1 ≤ n ≤ 200)
 * Output: n×n chessboard pattern starting with 0 in top-left corner
 * Memory limit: 32MB
 */

function szachownica(n) {
    // Validate input according to problem constraints
    if (!Number.isInteger(n) || n < 1 || n > 200) {
        throw new Error('Input must be an integer between 1 and 200');
    }

    // Generate and output the chessboard pattern
    for (let i = 0; i < n; i++) {
        let row = '';
        for (let j = 0; j < n; j++) {
            // Pattern: (i + j) % 2 determines the value
            // When (i + j) is even, output 0; when odd, output 1
            row += (i + j) % 2;
        }
        console.log(row);
    }
}

// Read input from command line or stdin
function main() {
    // Check if running in Node.js environment
    if (typeof process !== 'undefined' && process.argv) {
        // Get input from command line argument or prompt for input
        const args = process.argv.slice(2);
        
        if (args.length > 0) {
            const n = parseInt(args[0]);
            szachownica(n);
        } else {
            // Read from stdin if no command line argument provided
            const readline = require('readline');
            const rl = readline.createInterface({
                input: process.stdin,
                output: process.stdout
            });
            
            rl.question('', (input) => {
                const n = parseInt(input.trim());
                szachownica(n);
                rl.close();
            });
        }
    }
}

// Export for testing in other environments
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { szachownica };
}

// Run if this file is executed directly
if (typeof require !== 'undefined' && require.main === module) {
    main();
}