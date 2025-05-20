# Page Fetcher

A simple Node.js script that fetches the contents of a given URL and saves it to a specified local file path. If the destination directory doesn't exist, it will be created automatically.

## Features

- Accepts URL and file path as command-line arguments
- Makes HTTP GET requests using `needle`
- Saves response body to the file system
- Automatically creates missing directories
- Provides helpful status and error messages

## Example Usage

```bash
node fetcher.js https://jsonplaceholder.typicode.com/todos/1 ./output/todo.json
This command will:

Fetch the JSON data from the URL

Create the output/ folder (if it doesn’t exist)

Write the data into todo.json in that folder

Setup

Clone the repository

Install dependencies:

npm install needle
Run the script using Node.js (v14+ recommended)

File Structure


page-fetcher/
├── fetcher.js       # Main script file
├── output/          # Example output directory
└── README.md        # Project documentation


Dependencies
needle – HTTP client for making requests

Built-in fs/promises – File system operations

Notes

Ensure both URL and file path are provided or the script will exit with usage instructions.

The script only checks for status code 200 as a success.