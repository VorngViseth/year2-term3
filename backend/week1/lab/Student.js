import fs from "fs";

async function readWriteFile(fileContent, filePath) {
    // const fs = require("fs").promises;
    try {
        // Write to a file (asynchronously)
        await fs.promises.writeFile(filePath, fileContent);

        // Read the file (asynchronously)
        const content = await fs.promises.readFile(filePath, "utf8");
        console.log("File content:", content);

    } catch (error) {
        console.error("Error:", error);
    }
}

// const filePath = "./hello.txt";
// // Write to a file (synchronously)
// fs.writeFileSync(filePath, "Hello, Node.js beginner!");
// // Read the file (synchronously)
// const content = fs.readFileSync(filePath, "utf8");
// console.log("File content:", content);

readWriteFile("Hello, Node.js not beginner!", "./hello.txt");