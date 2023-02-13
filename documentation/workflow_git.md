# How to use GIT in this project

## Git clone 

 - Open your Terminal
 - Go in the directory where you want to add the repository.
 - On Github, copy the link in HTTPS or SSH (if you use SSH, you have to add a SSH key : Git protocol.
 - Then in your terminal enter

```
git clone [link]
```

## Branch
When you will contribute on this project by a feature, patch or documentation you have to create a new branch with the following convention to name it : 

|Why do you create a branch | Name of your branch         |
|     :-----:               |        :----:               |
| feature                   | feature/name-of-your-branch |
| fix a bug                 | bug/name-of-your-branch     |
| documentation             | devops/name-of-your-branch  |

Add only modifications corresponding to the subject of your branch. 
If you have made a new branch to fix a bug donc make a new feature in this same branch. 

## Commit 
When you have finished some modifications in your branch, don't forget to commit and name it. 
It will be easier to find the commit if you want to go back on it. 

```
git commit -m "your comment or name of your commit"
```

## Pull Request

Then when you have commited your work don't forget to push your work on the distant repository.
```
git push
```
But if it's the first time that you push your work git will ask you to enter another command : 
```
git push --set-upstream origin nameofyourbranch
```
Do it, like this your branch will be create on Github.
Then go on the link that Git display to make a pull request (PR). 
Explain your work and ask a review. 
Attach your PR with an appropriate issue.

## Issue
Create your issue and named it with an explicit title. 
Assign it to yourself, assign the correct label and put in the board at the correct step (Todo, In progress, done, ...)

![screenshot issue](../assets/documentations/screen_create_issue.png)

When you will create this issue you will can't link the branch yet and link the step in the board. 
First save your issue then apply the modifications. 
