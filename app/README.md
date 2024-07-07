# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

## Install & Run

In the project directory, you can run:

```PowerShell
if ("$(Get-Location)" -NOTLIKE "*/made_by_madison/app") { Set-Location ./app };
@('./node_modules','./package-lock.json') | ForEach-Object { Remove-Item ($_) -Recurse -Force -ErrorAction SilentlyContinue } ;
npm install ;
Write-Output("`ninstalled ./app/package.json dependencies, stand-by 30 seconds") ;
Start-Sleep(30) ;
Write-Output("running 'react-scripts start'") ;
npm start ;
```

## Push code to repo

### Create new branch

```PowerShell
[Hashtable]$_git = @{ msg="Added main app components, nav bar, google auth, updated some webdev dependencies cause why not, wanted to see what'd break"; todo="finish auth component, finish stripes api, finish knowledge graphs (offline, on-paper)" } ;
git add . ;
git commit -m "COMPLETED: $($_git.msg) | TODO: $($_git.todo)" ;
git push ;
```

### Push code to new branch

```PowerShell
[Hashtable]$_git = @{ msg="Added main app components, nav bar, google auth, updated some webdev dependencies cause why not, wanted to see what'd break"; todo="finish auth component, finish stripes api, finish knowledge graphs (offline, on-paper)" } ;
git add . ;
git commit -m "COMPLETED: $($_git.msg) | TODO: $($_git.todo)" ;
git push ;
```
