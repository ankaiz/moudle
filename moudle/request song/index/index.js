function search_song() {
    window.open(`file:///C:/Users/qqq/Desktop/code/moudle/request%20song/search/search.html`);//open at the new page
    // location.href=`file:///C:/Users/qqq/Desktop/code/moudle/request%20song/search/search.html`;open at the original page
    var x = document.getElementById("myid").value;
    document.getElementById("demo").innerHTML = x;
}

