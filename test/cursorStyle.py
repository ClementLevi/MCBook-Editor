# 参考文献：“tkinter中的cursor鼠标样式 | Python笔记” https://www.pynote.net/archives/1135
# 本文档未给出具体的样式示意图，特此录制，以供学习。

import tkinter as tk

click = 0
styles = ["arrow", "man", "based_arrow_down", "middlebutton", "based_arrow_up", "mouse", "boat", "pencil", "bogosity", 'pirate', "bottom_left_corner",
          "plus", 'bottom_right_corner', 'question_arrow', "bottom_side", 'right_ptr', 'bottom_tee', "right_side", "box_spiral", "right_tee",
          "center_ptr", 'rightbutton', 'circle', "rtl_logo", 'clock', 'sailboat', 'coffee_mug', 'sb_down_arrow', 'cross', 'sb_h_double_arrow',
          'cross_reverse', 'sb_left_arrow', 'crosshair', 'sb_right_arrow', 'diamond_cross', 'sb_up_arrow', 'dot', 'sb_v_double_arrow', 'dotbox', 'shuttle',
          'double_arrow', 'sizing', 'draft_large', 'spider', 'draft_small', 'spraycan', 'draped_box', 'star', 'exchange', 'target', 'fleur', 'tcross',
          'gumby', 'top_left_corner', 'hand1', 'top_right_corner', 'hand2', 'top_side', 'heart', 'gobbler', 'top_left_arrow', 'top_tee', 'icon', 'trek',
          'iron_cross', 'ul_angle', 'left_ptr', 'umbrella', 'left_side', 'ur_angle', 'left_tee', 'watch', 'leftbutton', 'xterm', 'll_angle', 'X_cursor', 'lr_angle'
          ]

def change():
    global click
    try:
        click += 1
        b.config(cursor=styles[click])
        name.set(styles[click])
    except IndexError:
        click = -1
        change()
    return click

r = tk.Tk()
r.geometry("480x360")

b = tk.Button(r, text="\n\n", command=change,
              cursor=styles[click], height=480, width=10, relief="groove", bg="green")

name = tk.StringVar()
name.set(styles[click])
l = tk.Label(r, textvariable=name, font=("Minecraft_Unifont", 20))

l.pack()
b.pack(pady=80)
r.mainloop()