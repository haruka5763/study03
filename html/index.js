search.addEventListener('click', (e) => {
    if(search_word.value == ""){
        // イベントのデフォルト操作停止
        e.preventDefault();
        alert("検索ワードは必須です");
    }else{
        eel.kimetsu_search(search_word.value, csv_name.value)
    }
})

eel.expose(view_log_js)
    function view_log_js(text){
        result.value += text + "\n"
    }
