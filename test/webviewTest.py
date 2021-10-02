from tkinter import *
from tkinterie import tkinterIE
from os.path import abspath
r = Tk()
r.geometry("1920x1080")

# 这玩意只认绝对路径，因为算是交给了IE的URL地址栏来搜索的，所以得收拾一下
url = abspath("resources\webview\helloworld.html")

w = tkinterIE.WebView(r, 800, 600, url)

w.pack()

r.mainloop()