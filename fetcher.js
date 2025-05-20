const needle = require('needle'); // making HTTP request
const fs = require('fs').promises;         // writing to the file system

const [url, filePath] = process.argv.slice(2);  // grab command line args (URL, filePath)

if (!url || !filePath) {                        // Checking that both args are provided
  console.log('Usage: node fetcher.js <URL> <file-path>');
  process.exit(1);
}

console.log(`Grabbing data from ${url}`);

const fetchSave = async function() {
  try {

    const response = await needle('get', url);

    if (response.statusCode !== 200) {                        // checking status (200)
      console.error(`Request failed, status code: ${response.statusCode}`);
      return;
    }

    const dir = filePath.substring(0, filePath.lastIndexOf('/'));
    if (dir && dir.length > 0) {
      await fs.mkdir(dir, { recursive: true });     //create directory if it doesnt exist
    }

    const dataToWrite = JSON.stringify(response.body, null, 2);   // converting the data to a string.

    await fs.writeFile(filePath, dataToWrite);
    console.log(`Data written to ${filePath} successfully.`);
  } catch (error) {
    console.error(`Error:`, error.message);
  }
};

fetchSave();
const needle = require('needle'); // making HTTP request
const fs = require('fs').promises;         // writing to the file system

const [url, filePath] = process.argv.slice(2);  // grab command line args (URL, filePath)

if (!url || !filePath) {                        // Checking that both args are provided
  console.log('Usage: node fetcher.js <URL> <file-path>');
  process.exit(1);
}

console.log(`Grabbing data from ${url}`);

const fetchSave = async function() {
  try {

    const response = await needle('get', url);

    if (response.statusCode !== 200) {                        // checking status (200)
      console.error(`Request failed, status code: ${response.statusCode}`);
      return;
    }

    const dir = filePath.substring(0, filePath.lastIndexOf('/'));
    if (dir && dir.length > 0) {
      await fs.mkdir(dir, { recursive: true });     //create directory if it doesnt exist
    }

    const dataToWrite = JSON.stringify(response.body, null, 2);   // converting the data to a string.

    await fs.writeFile(filePath, dataToWrite);
    console.log(`Data written to ${filePath} succesfully.`);
  } catch (error) {
    console.error(`Error:`, error.message);
  }
};

fetchSave();