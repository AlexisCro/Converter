# Converter
Tool 100% front to convert 


# Goal

Create a tool 100% front-end to convert different money. 

# Technologies
    - HTML
    - CSS / Bootstrap
    - JS 
    
# Get the repo
Open your Terminal 

Go in the directory where you want to add the repository. 

On Github, copy the link in HTTPS or SSH (if you to use SSH, you have to add a SSH key : [Git protocol](https://docs.github.com/fr/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account). 

Then in your terminal enter

```
git clone [link]
```

# Tools
The application being 100% front-end it is advisable to use the Live server extension of VSCode. 

# GIT
If you want to create some aliases to use with git and work fastly, here is some example :
```
git config --global alias.br branch
git config --global alias.co checkout
git config --global alias.com commit
git config --global alias.pl pull
git config --global alias.st status
```
As you can see you can create some global aliases editing the GIT's config file 

When you finish a step in your work you have to commit (don't forget the comment with the option -m) then you will make a push 

```
git push
```
But sometimes it's possible that git push isn't enough, in this case git will ask you to make :
```
git push --set-upstream origin nameofyourbranch
```
Do it, by this way you will create the branch on github.
Finally you have to make a pull request. 
The manager will review the pull request and if everything is ok so the branch will be merge. 

# Creation of a new branch 
To create a new branch use this regexp :

if you need to modify a documentation file name your branch as "devops/*nameofyourbranch*". 

if you need to create a new feature a new otpion in the app name your branch as "feature/*nameofyourbranch*"

if you need to add a fix about an issue use this syntax : "issue/*nameofyourbranch*"

For instance :
I want modify the readMe after the add of an API, so I create a new branch on my local repositorie name "devops/update-readMe-abour-API"
