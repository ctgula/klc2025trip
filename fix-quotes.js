const fs = require('fs');
const path = require('path');

// Directories to scan
const directories = [
  path.join(__dirname, 'app'),
  path.join(__dirname, 'components')
];

// Function to fix incorrectly escaped quotes in import statements
function fixImportQuotes(content) {
  // Fix quotes in import statements
  // This regex looks for import statements and fixes the quotes
  return content.replace(/(import\s+(?:{[^}]*}\s+from\s+|[^;]*\s+from\s+|)[&quot;'])([^;]*?)([&quot;'])/g, 
    (match, prefix, middle, suffix) => {
      // Replace &quot; with actual quotes
      const fixedPrefix = prefix.replace(/&quot;/g, '"');
      const fixedSuffix = suffix.replace(/&quot;/g, '"');
      return `${fixedPrefix}${middle}${fixedSuffix}`;
    });
}

// Function to process a file
function processFile(filePath) {
  if (!['.js', '.jsx', '.ts', '.tsx'].includes(path.extname(filePath))) {
    return;
  }
  
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Fix incorrectly escaped quotes in import statements
    content = fixImportQuotes(content);
    
    // Only write if content changed
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Updated: ${filePath}`);
    }
  } catch (err) {
    console.error(`Error processing ${filePath}:`, err);
  }
}

// Function to scan directories
function scanDirectory(dir) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      scanDirectory(filePath);
    } else {
      processFile(filePath);
    }
  });
}

// Start processing
directories.forEach(scanDirectory);
console.log('Finished processing all files.');
