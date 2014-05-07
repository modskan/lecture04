var endFlipFoxkeh = function(){
	var foxkeh = document.querySelector("#slidein-foxkeh img");
	foxkeh.removeEventListener("animationend", endFlipFoxkeh);

	foxkeh.setAttribute("class", "");
};
//documentでslidein-foxkeh imgを指定。endFlipFoxkehの動作完了後、クリックされれば再びstartSlideFoxehの動きが始まるようになる。

var endSlideinFoxkehAndStartFlipFoxkeh = function(){
	var foxkeh = document.querySelector("#slidein-foxkeh img");

	foxkeh.removeEventListener("animationend", endSlideinFoxkehAndStartFlipFoxkeh);
	foxkeh.addEventListener("animationend", endFlipFoxkeh);

	foxkeh.setAttribute("class", "flip");
};
//documentでslidein-foxeh imgを指定する。指定された画像が回り、動作完了後にendFlipFoxkehへ。

var startSlideinFoxkeh = function(){
	var foxkeh = document.querySelector("#slidein-foxkeh img");
	foxkeh.setAttribute("class", "slidein");

	foxkeh.addEventListener("animationend", endSlideinFoxkehAndStartFlipFoxkeh);
};
//documentでslidein-foxeh imgを指定する。また指定された画像がスライドし始める。スライドの終了後、endSlideinFoxkehAndStartFlipFoxkehへ。


var slideinFoxkehButton = document.querySelector("#slidein-foxkeh button");
slideinFoxkehButton.addEventListener("click", startSlideinFoxkeh);
//documentでslide-foxkeh buttonを指定。クリックするととstartSlideinFoxehに