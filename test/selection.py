import tkinter as tk


def boldalize():
    entry.tag_add("b",tk.SEL_FIRST, tk.SEL_LAST)
    #"§l"+entry.selection_get()+"§r"

def italicize():
    try:
        entry.replace(tk.SEL_FIRST, tk.SEL_LAST, "§o"+entry.selection_get()+"§r")
    except tk.TclError:
        entry.insert("insert", "§o§r")

root = tk.Tk()

entry = tk.Text(root)
bold = tk.Button(root, command=italicize, text="italicize")

entry.pack()
bold.pack()

root.mainloop()