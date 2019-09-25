#!/bin/bash

function runApp() {
echo "LOADING..."
cd cliente-app/ 
echo "Initializing APP" 
dotnet run start -p ../API/ | npm run start
echo "DONE"
}
