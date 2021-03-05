search.addEventListener('click', (e) => {
    var csv_path = document.getElementById("csv_name").value;
    var csv_name = csv_path.replace("C:\\fakepath\\","");
    if(search_word.value == ""){
        // イベントのデフォルト操作停止
        e.preventDefault();
        alert("検索ワードは必須です");
    }if (csv_name == "") {
        // イベントのデフォルト操作停止
        e.preventDefault();
        alert("CSVファイル名は必須です");        
    }else{
        eel.kimetsu_search(search_word.value, csv_name)
        eel.expose(view_log_js)
            function view_log_js(text){
                result.value += text + "\n"
            }
    }
})

