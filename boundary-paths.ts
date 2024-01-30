function findPaths(m: number, n: number, maxMove: number, startRow: number, startColumn: number): number {
    const MOD = 1000000007;

    // dp[i][j] represents the number of paths to cell (i, j) at the current move count
    let dp: number[][] = Array.from({ length: m }, () => Array(n).fill(0));
    dp[startRow][startColumn] = 1; // Base case

    const moves = [[0, 1], [0, -1], [1, 0], [-1, 0]];

    let result = 0;

    for (let k = 1; k <= maxMove; k++) {
        let temp: number[][] = Array.from({ length: m }, () => Array(n).fill(0));

        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                for (const move of moves) {
                    const ni = i + move[0];
                    const nj = j + move[1];
                    if (ni >= 0 && ni < m && nj >= 0 && nj < n) {
                        temp[ni][nj] = (temp[ni][nj] + dp[i][j]) % MOD;
                    } else {
                        result = (result + dp[i][j]) % MOD;
                    }
                }
            }
        }

        dp = temp;
    }

    return result;
}
