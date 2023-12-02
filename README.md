## create virtual env:

```
nour@nour-ASUS:~$ mkdir dev
nour@nour-ASUS:~$ cd dev/
nour@nour-ASUS:~/dev$ python3 -m venv env
nour@nour-ASUS:~/dev$ source env/bin/activate
```
## install django
```
pip install django
```
## Creat a new django project
```
(env) nour@nour-ASUS:~/dev$ django-admin startproject blogs
```
## Mouve env folder in blogs/
``` 
(env) nour@nour-ASUS:~/dev$ mv env blogs/
```

## Create a new app
```
(env) nour@nour-ASUS:~/dev/blogs$ python3 manage.py startapp myapp
```
