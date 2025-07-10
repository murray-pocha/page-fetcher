# 📥 Page Fetcher

A simple Node.js script that fetches the contents of a given URL and saves it to a specified local file path. If the destination directory doesn't exist, it will be created automatically.

---

## ✨ Features

- Accepts URL and file path as command-line arguments
- Makes HTTP GET requests using `needle`
- Saves response body to the file system
- Automatically creates missing directories
- Provides helpful status and error messages

---

## 🚀 Example Usage

```bash
node fetcher.js https://jsonplaceholder.typicode.com/todos/1 ./output/todo.json
This will:

Fetch JSON data from the URL

Create the output/ folder if it doesn't exist

Write the data into todo.json in that folder

⚙️ Setup
Clone the repository


git clone https://github.com/your-username/page-fetcher.git
cd page-fetcher
Install dependencies

npm install needle
Run the script

node fetcher.js <URL> <file-path>
❗ Do not include angle brackets (< >). Example:


node fetcher.js https://example.com ./data/site.html

📁 File Structure

page-fetcher/
├── fetcher.js       # Main script
├── output/          # Example output directory
└── README.md        # Project documentation

📦 Dependencies
needle — HTTP client for making requests

fs/promises — Node.js built-in for file system operations

📝 Notes
Ensure both the URL and file path are provided or the script will exit with usage instructions.

The script only treats HTTP status 200 as a success.