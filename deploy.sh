#!/bin/bash

# Build the React app
echo "Building React app..."
npm run build

# Copy built files to root directory for GitHub Pages
echo "Copying built files to root directory..."
cp -r build/static ./
cp build/favicon.ico ./
cp build/logo192.png ./
cp build/logo512.png ./
cp build/manifest.json ./

# Add all files to git
echo "Adding files to git..."
git add .

# Commit changes
echo "Committing changes..."
git commit -m "Update site files for GitHub Pages"

# Push to GitHub
echo "Pushing to GitHub..."
git push origin main

echo "Deployment complete! Your site should update in a few minutes."
echo "Visit: https://gildinh.github.io/react-redux-ts"
