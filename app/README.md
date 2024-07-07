# Getting Started / Available Scripts

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).<br>
One can view the available `react-scripts` cmnds there, below are _'custom'_

## Install & Run

In the project directory, you can run:

```PowerShell
if ("$(Get-Location)" -NOTLIKE "*/made_by_madison/app") {
    Set-Location ./app
} ; @('./node_modules','./package-lock.json') | ForEach-Object {
    Remove-Item ($_) -Recurse -Force -ErrorAction SilentlyContinue
} ; npm install ; Start-Sleep -Seconds 10 ; npm start ;
```

## Push code to repo

### Create new branch / Switch to new branch

```PowerShell
git branch $_YOUR_BRANCH_NAME_ ;
git checkout $_YOUR_BRANCH_NAME_ ;
git add .; git commit -m "init new branch" ;
git status ;
git push -u origin $_YOUR_BRANCH_NAME ;
git status ;
```

### Push code to branch / push to Dev,Stage,Prod,Test,etc. branch

```PowerShell
[Hashtable]$_git = @{ msg=("main components, nav bar, google auth, and styling."); todo=("finish stripes api, knowledge graphs (offline, on-paper)")} ;
git add . ; git commit -m "COMPLETED: $($_git.msg) | TODO: $($_git.todo)" ; git push ;
git checkout $_YOUR_BRANCH_NAME_ ;
git pull origin $_ACTIVE_BRANCH_NAME_ ;
git add . ; git commit -m "COMPLETED: $($_git.msg) | TODO: $($_git.todo)" ; git push ;
```

### Fix: 'Unable to create ./git/HEAD.lock'

```PowerShell
<# Option 1 #>
@('COMMIT_EDITMSG','index.lock','.HEAD.lock') | ForEach-Object { rm -f ./git/$_ };
<# Option 1 #>
rm .git/COMMIT_EDITMSG
rm -f .git/index.lock
rm -f .git/HEAD.lock
```
