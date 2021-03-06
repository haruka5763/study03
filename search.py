import pandas as pd
import eel
import os.path

### デスクトップアプリ作成課題
def kimetsu_search(word, csv):
    # 検索対象取得
    df = pd.read_csv("./{}".format(csv))
    source=list(df["name"])
    #csvにブランクが追加されるのを防ぐために
    if word != "":
        # 検索
        if word in source:
            print("『{}』はあります".format(word))
            eel.view_log_js("『{}』はいます".format(word))
        else:
            print("『{}』はありません".format(word))
            eel.view_log_js("『{}』はいません".format(word))
            eel.view_log_js("『{}』を追加します".format(word))

            # 追加
            #add_flg=input("追加登録しますか？(0:しない 1:する)　＞＞　")
            #if add_flg=="1":
            source.append(word)
        
        csv_path = os.path.abspath("./{}".format(csv))
        # CSV書き込み
        df=pd.DataFrame(source,columns=["name"])
        df.to_csv("{}".format(csv_path),encoding="utf_8-sig")
        print(source)
