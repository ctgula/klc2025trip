const fs = require('fs');
const path = require('path');

// Directories to scan
const directories = [
  path.join(__dirname, 'app'),
  path.join(__dirname, 'components')
];

// Function to fix incorrectly escaped quotes in import statements and JSX
function fixImportQuotes(content) {
  // Step 1: Fix quotes in import statements
  content = content.replace(/(import\s+(?:{[^}]*}\s+from\s+|[^;]*\s+from\s+|)[&quot;'])([^;]*?)([&quot;'])/g, 
    (match, prefix, middle, suffix) => {
      // Replace &quot; with actual quotes
      const fixedPrefix = prefix.replace(/&quot;/g, '"');
      const fixedSuffix = suffix.replace(/&quot;/g, '"');
      return `${fixedPrefix}${middle}${fixedSuffix}`;
    });
  
  // Step 2: Fix quotes in JSX attributes
  content = content.replace(/([\s<>])([a-zA-Z0-9-]+)=&quot;([^"]*?)&quot;/g, 
    (match, prefix, attrName, attrValue) => {
      return `${prefix}${attrName}="${attrValue}"`;
    });
    
  // Step 3: Fix quotes in object literals and other places
  content = content.replace(/([{,\s]\s*)([a-zA-Z0-9_]+):\s*&quot;([^"]*?)&quot;/g, 
    (match, prefix, key, value) => {
      return `${prefix}${key}: "${value}"`;
    });
    
  return content;
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
