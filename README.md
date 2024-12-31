# Node.js Server: Indefinite Connection and Memory Leak

This repository demonstrates a common error in Node.js server development: keeping a connection alive indefinitely without proper handling. This can lead to memory leaks and performance issues.

## Bug Description
The server simulates a long-running process that counts to 10.  However, it does not properly manage the response to the client, keeping the connection open much longer than needed.  This is problematic for scalability as the server will eventually run out of resources.

## Bug Solution
The solution involves properly handling the response by sending the data, closing the response, and ending the connection.  This prevents the indefinite connection and the associated resource exhaustion.

## How to reproduce the bug
1. Clone the repository
2. Run `node bug.js`
3. Observe the server's behavior

## How to test the solution
1. Clone the repository
2. Run `node bugSolution.js`
3. Compare its behavior with the bug version.