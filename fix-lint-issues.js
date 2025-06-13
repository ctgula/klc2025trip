const fs = require('fs');
const path = require('path');

// Directories to scan
const directories = [
  path.join(__dirname, 'app'),
  path.join(__dirname, 'components')
];

// Function to fix unescaped entities
function fixUnescapedEntities(content) {
  // Replace unescaped ampersands in JSX
  content = content.replace(/(\s|>)&(\s|<)/g, '$1&amp;$2');
  
  // Replace unescaped apostrophes in JSX strings
  content = content.replace(/'s/g, '&apos;s');
  content = content.replace(/'t/g, '&apos;t');
  content = content.replace(/'re/g, '&apos;re');
  content = content.replace(/'ll/g, '&apos;ll');
  content = content.replace(/'ve/g, '&apos;ve');
  
  // Replace unescaped quotes in JSX strings
  content = content.replace(/"([^"]*)"/g, '&quot;$1&quot;');
  
  return content;
}

// Function to remove unused imports
function removeUnusedImports(content, filePath) {
  console.log(`Processing: ${filePath}`);
  
  // List of imports to check for usage
  const importsToCheck = [
    'useState', 'useEffect', 'useRef', 'useCallback', 'useMemo',
    'FaShoppingBag', 'FaUserFriends', 'Image', 'FaUtensils', 'FaStore'
  ];
  
  importsToCheck.forEach(importName => {
    // Check if import exists
    const importRegex = new RegExp(`import\\s+{[^}]*${importName}[^}]*}\\s+from\\s+['"][^'"]+['"]`, 'g');
    const importMatch = content.match(importRegex);
    
    if (importMatch) {
      // Check if the import is used elsewhere in the file
      const usageRegex = new RegExp(`\\b${importName}\\b(?!.*?from)`, 'g');
      const usageMatch = content.match(usageRegex);
      
      if (!usageMatch) {
        console.log(`Removing unused import: ${importName} from ${filePath}`);
        
        // Remove the import if it's the only one in the statement
        const singleImportRegex = new RegExp(`import\\s+{\\s*${importName}\\s*}\\s+from\\s+['"][^'"]+['"];?\\n?`, 'g');
        if (content.match(singleImportRegex)) {
          content = content.replace(singleImportRegex, '');
        } else {
          // Remove from multiple imports
          const multiImportRegex = new RegExp(`({[^}]*),\\s*${importName}([^}]*})`, 'g');
          content = content.replace(multiImportRegex, '$1$2');
          
          // Also try the other way around
          const multiImportRegex2 = new RegExp(`({[^}]*)${importName},\\s*([^}]*})`, 'g');
          content = content.replace(multiImportRegex2, '$1$2');
        }
      }
    }
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
    
    // Fix unescaped entities
    content = fixUnescapedEntities(content);
    
    // Remove unused imports
    content = removeUnusedImports(content, filePath);
    
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
