# デスクトップアプリ作成課題
検索課題で作った検索ツールをデスクトップアプリとして
操作性を高め、より価値の高いものにするための課題です。
これを習得すると＋月２万円ほどの収入増加が見込めます。

view.pyがメインの実行ファイルです。これを実行するとデスクトップアプリが
表示されます。

説明：https://youtu.be/UsgiZGYkZrY<br>
参考サイト：https://qiita.com/inoory/items/f431c581332c8d500a3b<br>
完成形：https://youtu.be/wBi6_DcfRGQ<br>

# 1
HTML使い検索ワード入力と検索ボタンを作ってください
htmlフォルダ内のindex.htmlに対してHTMLタグを用いて追加してください

# 2
検索ワード入力が空だったらアラートを表示させ、検索はしないようにしてください

# 3
検索結果をデスクトップアプリの画面に表示できるようにtextareaタグを使って
ログ表示領域を作成してください。

# 4
作成したログ表示領域にkimetsu_searchの結果を表示できるようにしてください

# 5
ログ表示領域が小さいので大きく表示できるようにclassを定義して、style.cssに処理を記述してください

# 6
CSVファイルの保存先をHTML画面から指定できるようにしてください

# 7
Pyinstallerを使って、１つの実行可能ファイルにパッケージ化してみよう。  
pipでインストール後に以下コマンドを実行してみよう。
distフォルダに実行可能フィイルが格納されます。
顧客提供時は、このファイルを提供することでpythonのインストールは不要になります。
`python -m eel <はじめに起動するpyファイル> <htmlのフォルダ名> --onefile`



【自分メモ】
javascriptyが処理を呼んだり呼ばれたりする流れがごちゃごちゃになっていたので整理してみた。
ポイントは、ユーザーの操作からの処理を考えることと、それに伴い処理情報がどう流れるかということ。
①ユーザーがアプリを起動⇒view.pyが実行ファイル
②view.pyにより、htmlがデスクトップアプリとして呼び出される
③ユーザーが検索エリアに文字を入力し検索をクリック
④検索エリアの情報が発信される⇒html上の検索ボタンクリックを契機にjavascriptが実行＝入力情報がjavascriptへ
⑤空白の場合はevent表示、そうでなければ受け取った情報を元に"検索”という処理を実行したいのでpythonへ渡す⇒実行元のview.pyへ
⑥view.pyがその情報を元にsearch.pyを実行
⑦search.pyは受け取った情報を元に、CSVファイル内の情報と突合し、結果を表示する。
　更にここで、その結果をユーザーへ（htmlのtextarea）見せるために、javascriptを呼び出す（view_log_js）
⑧search.pyは結果をcsvへ追記し、javascriptは結果をhtmlへ表示させる


【参考サイト】
form属性について　⇒　https://qiita.com/mikuhonda/items/f3126380d3340f3d8a2b 　
pythonとのやりとりについて　⇒　https://qiita.com/maec_lamar/items/42162640cd8819fab663
csvファイル名を取得　⇒　http://write-remember.com/program/javascript/input_type_file/
pyinstaller　⇒　https://office54.net/python/python-pyinstaller
<!-- csv保存先の指定　⇒　https://wynn-blog.com/file-operation-with-python-gui -->