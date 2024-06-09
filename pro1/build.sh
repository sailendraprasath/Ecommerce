const fs = require('fs');
const { exec } = require('child_process');

// Check if package.json exists
if (!fs.existsSync('package.json')) {
  console.error('Error: package.json file not found!');
  process.exit(1);
}

// Run the build command
exec('npm run build', (err, stdout, stderr) => {
  if (err) {
    console.error(`Error: ${stderr}`);
    process.exit(1);
  }
  console.log(stdout);
});
