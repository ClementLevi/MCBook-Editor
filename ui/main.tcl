#############################################################################
# Generated by PAGE version 6.0.1
#  in conjunction with Tcl version 8.6
#  Sep 25, 2021 09:43:00 PM CST  platform: Windows NT
set vTcl(timestamp) ""
if {![info exists vTcl(borrow)]} {
    tk_messageBox -title Error -message  "You must open project files from within PAGE."
    exit}


if {!$vTcl(borrow) && !$vTcl(template)} {

set vTcl(actual_gui_font_dft_desc)  TkDefaultFont
set vTcl(actual_gui_font_dft_name)  TkDefaultFont
set vTcl(actual_gui_font_text_desc)  TkTextFont
set vTcl(actual_gui_font_text_name)  TkTextFont
set vTcl(actual_gui_font_fixed_desc)  TkFixedFont
set vTcl(actual_gui_font_fixed_name)  TkFixedFont
set vTcl(actual_gui_font_menu_desc)  TkMenuFont
set vTcl(actual_gui_font_menu_name)  TkMenuFont
set vTcl(actual_gui_font_tooltip_desc)  TkDefaultFont
set vTcl(actual_gui_font_tooltip_name)  TkDefaultFont
set vTcl(actual_gui_font_treeview_desc)  TkDefaultFont
set vTcl(actual_gui_font_treeview_name)  TkDefaultFont
set vTcl(actual_gui_bg) #d9d9d9
set vTcl(actual_gui_fg) #000000
set vTcl(actual_gui_analog) #ececec
set vTcl(actual_gui_menu_analog) #ececec
set vTcl(actual_gui_menu_bg) #d9d9d9
set vTcl(actual_gui_menu_fg) #000000
set vTcl(complement_color) #d9d9d9
set vTcl(analog_color_p) #d9d9d9
set vTcl(analog_color_m) #ececec
set vTcl(active_fg) #000000
set vTcl(actual_gui_menu_active_bg)  #ececec
set vTcl(actual_gui_menu_active_fg)  #000000
set vTcl(pr,autoalias) 1
set vTcl(pr,relative_placement) 1
set vTcl(mode) Relative
}




proc vTclWindow.top44 {base} {
    global vTcl
    if {$base == ""} {
        set base .top44
    }
    if {[winfo exists $base]} {
        wm deiconify $base; return
    }
    set top $base
    ###################
    # CREATING WIDGETS
    ###################
    vTcl::widgets::core::toplevel::createCmd $top -class Toplevel \
        -background $vTcl(actual_gui_bg) \
        -highlightbackground $vTcl(actual_gui_bg) -highlightcolor black 
    wm focusmodel $top passive
    wm geometry $top 1400x800+463+260
    update
    # set in toplevel.wgt.
    global vTcl
    global img_list
    set vTcl(save,dflt,origin) 0
    wm maxsize $top 4484 1421
    wm minsize $top 120 1
    wm overrideredirect $top 0
    wm resizable $top 1 1
    wm deiconify $top
    wm title $top "MCBook-Editor"
    vTcl:DefineAlias "$top" "Main" vTcl:Toplevel:WidgetProc "" 1
    set vTcl(real_top) {}
    vTcl:withBusyCursor {
    frame $top.fra45 \
        -borderwidth 2 -relief groove -background $vTcl(actual_gui_bg) \
        -height 675 -highlightbackground $vTcl(actual_gui_bg) \
        -highlightcolor black -width 600 
    vTcl:DefineAlias "$top.fra45" "EditorFrame" vTcl:WidgetProc "Main" 1
    set site_3_0 $top.fra45
    vTcl::widgets::ttk::scrolledtext::CreateCmd $site_3_0.scr48 \
        -borderwidth 2 -relief groove -background $vTcl(actual_gui_bg) \
        -height 560 -highlightbackground $vTcl(actual_gui_bg) \
        -highlightcolor black -width 540 
    vTcl:DefineAlias "$site_3_0.scr48" "Scrolledtext1" vTcl:WidgetProc "Main" 1

    $site_3_0.scr48.01 configure -background white \
        -font TkTextFont \
        -foreground black \
        -height 3 \
        -highlightbackground #d9d9d9 \
        -highlightcolor black \
        -insertbackground black \
        -insertborderwidth 3 \
        -selectbackground blue \
        -selectforeground white \
        -width 10 \
        -wrap none
    frame $site_3_0.fra46 \
        -borderwidth 1 -relief raised -background $vTcl(actual_gui_bg) \
        -height 45 -highlightbackground $vTcl(actual_gui_bg) \
        -highlightcolor black -width 535 
    vTcl:DefineAlias "$site_3_0.fra46" "PageToolBar" vTcl:WidgetProc "Main" 1
    set site_4_0 $site_3_0.fra46
    button $site_4_0.but47 \
        -activebackground $vTcl(analog_color_m) -activeforeground #000000 \
        -background $vTcl(actual_gui_bg) -borderwidth 1 \
        -disabledforeground #a3a3a3 \
        -font {-family {等线 Light} -size 14 -weight normal -slant roman -underline 0 -overstrike 0} \
        -foreground $vTcl(actual_gui_fg) \
        -highlightbackground $vTcl(actual_gui_bg) -highlightcolor black \
        -pady 0 -text 预览 
    vTcl:DefineAlias "$site_4_0.but47" "Render" vTcl:WidgetProc "Main" 1
    button $site_4_0.but48 \
        -activebackground $vTcl(analog_color_m) -activeforeground #000000 \
        -background $vTcl(actual_gui_bg) -disabledforeground #a3a3a3 \
        -font TkDefaultFont -foreground $vTcl(actual_gui_fg) \
        -highlightbackground $vTcl(actual_gui_bg) -highlightcolor black \
        -pady 0 -text 保存 
    vTcl:DefineAlias "$site_4_0.but48" "Save" vTcl:WidgetProc "Main" 1
    button $site_4_0.but50 \
        -activebackground $vTcl(analog_color_m) -activeforeground #000000 \
        -background $vTcl(actual_gui_bg) -disabledforeground #a3a3a3 \
        -font TkDefaultFont -foreground $vTcl(actual_gui_fg) \
        -highlightbackground $vTcl(actual_gui_bg) -highlightcolor black \
        -pady 0 -text 打开 
    vTcl:DefineAlias "$site_4_0.but50" "Open" vTcl:WidgetProc "Main" 1
    button $site_4_0.but51 \
        -activebackground $vTcl(analog_color_m) -activeforeground #000000 \
        -background $vTcl(actual_gui_bg) -disabledforeground #a3a3a3 \
        -font TkDefaultFont -foreground $vTcl(actual_gui_fg) \
        -highlightbackground $vTcl(actual_gui_bg) -highlightcolor black \
        -pady 0 -text 生成指令 
    vTcl:DefineAlias "$site_4_0.but51" "GenerateCommand" vTcl:WidgetProc "Main" 1
    ttk::separator $site_4_0.tSe52 \
        -orient vertical 
    vTcl:DefineAlias "$site_4_0.tSe52" "TSeparator1" vTcl:WidgetProc "Main" 1
    place $site_4_0.but47 \
        -in $site_4_0 -x 0 -relx 0.579 -y 0 -rely 0.222 -width 61 -relwidth 0 \
        -height 29 -relheight 0 -anchor nw -bordermode ignore 
    place $site_4_0.but48 \
        -in $site_4_0 -x 0 -relx 0.093 -y 0 -rely 0.217 -width 35 -relwidth 0 \
        -height 28 -relheight 0 -anchor nw -bordermode ignore 
    place $site_4_0.but50 \
        -in $site_4_0 -x 0 -relx 0.336 -y 0 -rely 0.217 -width 49 -relwidth 0 \
        -height 28 -relheight 0 -anchor nw -bordermode ignore 
    place $site_4_0.but51 \
        -in $site_4_0 -x 0 -relx 0.729 -y 0 -rely 0.222 -anchor nw \
        -bordermode ignore 
    place $site_4_0.tSe52 \
        -in $site_4_0 -x 0 -relx 0.469 -y 0 -rely -0.196 -width 0 \
        -relwidth 0.004 -height 0 -relheight 4.783 -anchor nw \
        -bordermode inside 
    label $site_3_0.lab46 \
        -background $vTcl(actual_gui_bg) -disabledforeground #a3a3a3 \
        -font TkDefaultFont -foreground $vTcl(actual_gui_fg) -relief groove \
        -text Label 
    vTcl:DefineAlias "$site_3_0.lab46" "PageNum" vTcl:WidgetProc "Main" 1
    frame $site_3_0.fra47 \
        -borderwidth 2 -relief groove -background $vTcl(actual_gui_bg) \
        -height 43 -width 475 
    vTcl:DefineAlias "$site_3_0.fra47" "TextToolBar" vTcl:WidgetProc "Main" 1
    place $site_3_0.scr48 \
        -in $site_3_0 -x 0 -relx 0.05 -y 0 -rely 0.059 -width 0 -relwidth 0.9 \
        -height 0 -relheight 0.83 -anchor nw -bordermode ignore 
    place $site_3_0.fra46 \
        -in $site_3_0 -x 0 -relx 0.067 -y 0 -rely 0.919 -width 0 \
        -relwidth 0.892 -height 0 -relheight 0.068 -anchor nw \
        -bordermode ignore 
    place $site_3_0.lab46 \
        -in $site_3_0 -x 0 -relx 0.05 -y 0 -width 0 -relwidth 0.078 -height 0 \
        -relheight 0.064 -anchor nw -bordermode ignore 
    place $site_3_0.fra47 \
        -in $site_3_0 -x 0 -relx 0.15 -y 0 -width 0 -relwidth 0.792 -height 0 \
        -relheight 0.064 -anchor nw -bordermode ignore 
    frame $top.fra46 \
        -borderwidth 2 -relief groove -background $vTcl(actual_gui_bg) \
        -height 675 -highlightbackground $vTcl(actual_gui_bg) \
        -highlightcolor black -width 600 
    vTcl:DefineAlias "$top.fra46" "DisplayFrame" vTcl:WidgetProc "Main" 1
    label $top.lab49 \
        -activebackground #f9f9f9 -activeforeground black \
        -background $vTcl(actual_gui_bg) -disabledforeground #a3a3a3 \
        -font TkDefaultFont -foreground $vTcl(actual_gui_fg) \
        -highlightbackground $vTcl(actual_gui_bg) -highlightcolor black \
        -text Label 
    vTcl:DefineAlias "$top.lab49" "Title" vTcl:WidgetProc "Main" 1
    ###################
    # SETTING GEOMETRY
    ###################
    place $top.fra45 \
        -in $top -x 0 -relx 0.007 -y 0 -rely 0.15 -width 0 -relwidth 0.429 \
        -height 0 -relheight 0.844 -anchor nw -bordermode ignore 
    place $top.fra46 \
        -in $top -x 0 -relx 0.564 -y 0 -rely 0.15 -width 0 -relwidth 0.429 \
        -height 0 -relheight 0.844 -anchor nw -bordermode ignore 
    place $top.lab49 \
        -in $top -x 0 -relx 0.45 -y 0 -rely 0.05 -width 0 -relwidth 0.099 \
        -height 0 -relheight 0.066 -anchor nw -bordermode ignore 
    } ;# end vTcl:withBusyCursor 

    vTcl:FireEvent $base <<Ready>>
}

set btop ""
if {$vTcl(borrow)} {
    set btop .bor[expr int([expr rand() * 100])]
    while {[lsearch $btop $vTcl(tops)] != -1} {
        set btop .bor[expr int([expr rand() * 100])]
    }
}
set vTcl(btop) $btop
Window show .
Window show .top44 $btop
if {$vTcl(borrow)} {
    $btop configure -background plum
}
