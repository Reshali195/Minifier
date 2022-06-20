var $tag=function(tag){
    return document.getElementsByTagName(tag);
}
//var inputs = document.getElementsByTagName("textarea");
function minify_css(type,input,output) {
    output.value=input.value
    .replace(/([^0-9a-zA-Z\.#])\s+/g, "$1")
    .replace(/\s([^0-9a-zA-Z\.#]+)/g, "$1")
    .replace(/;}/g, "}")
    .replace(/\/\*.*?\*\//g, "");
}

document.getElementById("cssMinify").addEventListener("click",function(){
    minify_css(this.innerHTML,$tag('textarea')[0],$tag('textarea')[1])
},false);

function minify_html(type,input,output){
    output.value=input.value
    .replace(/\<\!--\s*?[^\s?\[][\s\S]*?--\>/g,'')
    .replace(/\>\s*\</g,'><')
    .replace(/([^0-9a-zA-Z\.#])\s+/g, "$1")
    .replace(/\s([^0-9a-zA-Z\.#]+)/g, "$1")
    .replace(/;}/g, "}")
    .replace(/\/\*.*?\*\//g, "");
}
document.getElementById("htmlMinify").addEventListener("click",function(){
    minify_html(this.innerHTML,$tag('textarea')[0],$tag('textarea')[1])
},false);

const jsonMinify = document.getElementById("jsonMinify");
const format = document.getElementById("format");
const  outputArea = document.getElementById("output");
const inputArea = document.getElementById("input");

jsonMinify.addEventListener("click", () => {
  const minified = JSON.stringify(JSON.parse(inputArea.value));
  outputArea.value = minified;
});
format.addEventListener("click", () => {
    const formatted = JSON.stringify(JSON.parse(inputArea.value), null, 4);
    outputArea.value = formatted;
  });


// const  outputArea = document.getElementById("output");
// const inputArea = document.getElementById("input");

// function minify_json(type,input,output){
//     output.value = JSON.stringify(JSON.parse(input.value));
// }
//   document.getElementById("jsonMinify").addEventListener("click3",function(){
//     minify_json(this.innerHTML,$tag('textarea')[0],$tag('textarea')[1])
// },false);
