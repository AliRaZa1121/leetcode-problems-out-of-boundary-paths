function findPaths(m: number, n: number, maxMove: number, startRow: number, startColumn: number): number {

    const MOD = 1000000007;

    const dp = Array.from({ length: m }, () =>
        Array.from({ length: n }, () => Array(maxMove + 1).fill(0))
    );
    dp[startRow][startColumn][0] = 1; // Base case

    const moves = [[0, 1], [0, -1], [1, 0], [-1, 0]];

    for (let k = 1; k <= maxMove; k++) {
        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                for (const move of moves) {
                    const ni = i + move[0];
                    const nj = j + move[1];
                    if (ni >= 0 && ni < m && nj >= 0 && nj < n) {
                        dp[i][j][k] = (dp[i][j][k] + dp[ni][nj][k - 1]) % MOD;
                    }
                }
            }
        }
    }

    let result = 0;
    for (let k = 1; k <= maxMove; k++) {
        result = (result + dp[0][0][k] + dp[m - 1][n - 1][k] + dp[0][n - 1][k] + dp[m - 1][0][k]) % MOD;
    }

    return result;
}
