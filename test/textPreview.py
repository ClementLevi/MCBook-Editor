import tkinter as tk
import tkinter.font as ft

r = tk.Tk()
t = tk.Text(r)
b = tk.Button(r, text="cursorTest", cursor="hand2")

t.insert("0.0", """ABCDEFGHIJKLMNOPQRSTUVWXYZ\nabcdefghijklmnopqrstuvwxyz\n1234567890\n!@#$%^&*()_+[]{}中国智造 惠及全球""")
t.tag_add("default", "0.0", tk.END)
t.tag_config("default", font=ft.Font(family="Minecraft_Unifont", size=32))

print(t.tag_cget("default", "font"))


t.pack()
b.pack()

r.mainloop()



