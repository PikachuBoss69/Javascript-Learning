Node.js Commands Cheatsheet (Ubuntu)

🔹 Basic Node

node -v             # Check Node.js version
npm -v              # Check npm version
npx -v              # Check npx version
node filename.js    # Run a JS file
node                # Start Node REPL (interactive console)
.exit               # Exit REPL (or Ctrl + D)

🔹 NPM (Node Package Manager)

npm init -y             # Create default package.json
npm install <pkg>       # Install package locally
npm install -g <pkg>    # Install package globally
npm uninstall <pkg>     # Remove a package
npm update <pkg>        # Update a package
npm list                # List installed packages
npm outdated            # Check outdated packages
npm run <script>        # Run script from package.json

🔹 NPX (Run Packages Without Installing)

npx cowsay "Hello"          # Example: run cowsay
npx create-react-app myApp  # Create React project

🔹 Node REPL Commands

Inside node REPL:

.help           # Show REPL help
.editor         # Multi-line editor mode
.clear          # Reset REPL context
.save file.js   # Save session to file
.load file.js   # Load file into REPL

🔹 Debugging & Running

node inspect app.js           # Debug an app
node --watch app.js           # Auto-reload on changes (Node 18+)
node --trace-warnings app.js  # Show detailed warnings

🔹 Useful Global Tools

npm install -g nodemon     # Auto-restart server on changes
npm install -g pm2         # Keep Node apps running
npm install -g http-server # Quick static server


Usage:

nodemon app.js             # Run with auto-reload
pm2 start app.js           # Run & manage app
http-server .              # Start static server in current dir