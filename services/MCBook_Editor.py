import tkinter as tk
import tkinter.font as tkFont
import tkinter.filedialog as tkFile

from localization import LocalString

class GUI:
    def __init__(self) -> None:
        self.root = tk.Tk()
        self.editor = tk.Frame(self.root)
        self.displayer = tk.Frame(self.root)
        self.root.mainloop()

class StyleEditor(object):
    color = {
        "black": "#000000",
        "dark_blue": "#0000AA",
        "dark_green": "#00AA00",
        "dark_aqua": "#00AAAA",
        "dark_red": "#AA0000",
        "dark_purple": "#AA00AA",
        "gold": "#FFAA00",
        "gray": "#AAAAAA",
        "dark_gray": "#555555",
        "blue": "#5555FF",
        "green": "#55FF55",
        "aqua": "#55FFFF",
        "red": "#FF5555",
        "light_purple": "#FF55FF",
        "yellow": "#FFFF55",
        "white": "#FFFFFF",
        "minecoin_gold": "#DDD605"
    }
    format = {
        "normal":tkFont.Font(family="Unifont", size=14),
        "random_c":tkFont.Font(family=""),
        "bold":tkFont.Font(weight=tkFont.BOLD),
        "italic":tkFont.Font(slant=tkFont.ITALIC),
        "underline":tkFont.Font(underline=1),
        "overstrike":tkFont.Font(overstrike=1),
    }
    def __init__(self):
        pass


class Book(object):
    COMMAND = r"""/give {bookHolder} minecraft:written_book{pages:{page},
    title:{title},author:{author}, generation:{generation}, display:{Lore:["{description}"]}}"""
    def __init__(self, ):
        self.pages = []

    def generate(self) -> str:
        pass

    def page_add(self) -> int:
        self.pages.append()

    def modify(self, selection: str, fulltext: str) -> None:
        """selection: designate by tk.SEL"""

if __name__ == "__main__":
    GUI()