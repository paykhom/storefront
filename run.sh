echo "************ Run for Dear Life! ************"
#bun update && bun --watch run index.ts

# Check if an argument was provided
if [ -z "$1" ]; then
  echo "Error: Port number is required. Please run the script with a port number (e.g., sh bun-run.sh 8080)"
  exit 1
fi


# Update Bun (optional, but good practice)
bun update



# Run index.ts and pass the first command-line argument as a parameter
bun --watch run index.ts "$1"
