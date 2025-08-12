@echo off
echo Building React app...
npm run build

echo Copying built files to root directory...
if exist static rmdir /s /q static
xcopy "build\static" "static" /E /I /H /Y
copy "build\favicon.ico" "." /Y
copy "build\logo192.png" "." /Y
copy "build\logo512.png" "." /Y
copy "build\manifest.json" "." /Y

echo Adding files to git...
git add .

echo Committing changes...
git commit -m "Update site files for GitHub Pages"

echo Pushing to GitHub...
git push origin main

echo Deployment complete! Your site should update in a few minutes.
echo Visit: https://gildinh.github.io/react-redux-ts
pause
