# How to install bootstrap in local
## Download

First you need to download the directory which conatins CSS and JS of the framework. 
To do this go on [Bootstrap site](https://getbootstrap.com/docs/5.3/getting-started/download/ "link to download").

Then click on

![Where I click to download Bootstrap](../assets/documentations/install_bootstrap/link_to_download.png)

Now you will have a zip file. 

## Install Bootstrap in the project

Extract the zip file and put the two directory (CSS and JS) in your project. 

For example : 

![Ceci est un exemple d’image](../assets/documentations/install_bootstrap/extract_files.png)

Here in my project, I created a directory assets then another directory named bootstrap, finally I placed my two files extract from the zip file.

Finally you need to add the link in your HTML between tag `<head></head>` enter the code below to add the CSS:
```
<link href="../assets/bootstrap-5.3.0-alpha1-dist/css/bootstrap.css" rel="stylesheet">
```
And you need to add after the tag `</body>` a tag `<script>` like this :
```
<script src="../assets/bootstrap-5.3.0-alpha1-dist/js/bootstrap.js"></script>
```

That's it !