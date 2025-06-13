const fs = require('fs');
const path = require('path');

// Directories to scan
const directories = [
  path.join(__dirname, 'app'),
  path.join(__dirname, 'components')
];

// Function to fix HTML entities in string literals but preserve them in JSX
function fixEntities(content) {
  let result = content;
  
  // Step 1: Fix entities in import statements
  result = result.replace(/import\s+.*?from\s+['"].*?['"]/g, match => {
    return match
      .replace(/&apos;/g, "'")
      .replace(/&quot;/g, '"');
  });
  
  // Step 2: Fix entities in string literals (single and double quotes)
  result = result.replace(/(['"`])(?:(?!\1).)*?\1/g, match => {
    // Only replace if it's not inside JSX
    if (!isLikelyJSX(match)) {
      return match
        .replace(/&apos;/g, "'")
        .replace(/&quot;/g, '"');
    }
    return match;
  });
  
  // Step 3: Fix entities in template literals
  result = result.replace(/`[^`]*`/g, match => {
    return match
      .replace(/&apos;/g, "'")
      .replace(/&quot;/g, '"');
  });
  
  return result;
}

// Helper function to determine if a string is likely part of JSX
function isLikelyJSX(str) {
  // If the string contains JSX attribute patterns, it's likely JSX
  return /className=|href=|src=|alt=|id=|style=|onClick=|onChange=/.test(str);
}

// Function to process a file
function processFile(filePath) {
  if (!['.js', '.jsx', '.ts', '.tsx'].includes(path.extname(filePath))) {
    return;
  }
  
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Fix HTML entities in string literals but preserve them in JSX
    content = fixEntities(content);
    
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
