let html=document.querySelector('#html')  //通过CSS选择器找到这个html
let style=document.querySelector("#style") //放css
let string=`/* 你好，我是一名学习前端的新人
 * 我叫徐磊
 * 接下来我要演示一遍我学到的前端知识
 **/
#div1 {
  border:1px solid black;
  width:200px;
  height:200px;
}
/* 接下来我要把这个div变成一个八卦图
 * 首先，把div变成一个圆
 **/
#div1{
  border-radius:50%;
  box-shadow:0 0 3px rgba(0,0,0,0.5);
  border:none;
}
/* 八卦是阴和阳形成的
 * 一黑一白
 * 
 **/
#div1{
  background:linear-gradient(90deg,rgba(255,255,255,1) 0%,rgba(255,255,255,1) 50%,rgba(0,0,0,1) 50%,rgba(0,0,0,1) 100%);
}
/* 再加两个神秘的小球
 **/
#div1::before{
  width:100px;
  height:100px;
  top:0;
  left:50%;
  transform:translateX(-50%);
  background:#000;
  border-radius:50%;
  background:radial-gradient(circle,rgba(255,255,255,1) 0%,rgba(255,255,255,1) 25%,rgba(0,0,0,1) 25%,rgba(0,0,0,1) 100%);
}
#div1::after{
  width:100px;
  height:100px;
  bottom:0;
  left:50%;
  transform:translateX(-50%);
  background:#fff;
  border-radius:50%;
  background:radial-gradient(circle,rgba(0,0,0,1) 0%,rgba(0,0,0,1) 25%,rgba(255,255,255,1) 25%,rgba(255,255,255,1) 100%,rgba(0,0,0,1) 100%);
}
`
let string2=""
//string=string.replace(/\n/g,"<br>")  //把所有的回车变成了换行 不可用
let n=0  
let step=()=>{                //声明一个函数 step
  setTimeout(()=>{
    if(string[n]==="\n"){   //如果是回车  就把字符串+br
      string2=string2+"<br>"
    }else if(string[n]===" "){  //如果是空格 就把字符串+&nbsp;
      string2=string2+"&nbsp;"
    }else{
      string2=string2+string[n]  //如果不是回车 就把每次的字符串照搬过来
    }
    
    html.innerHTML=string2
    style.innerHTML=string.substring(0,n)
    window.scrollTo(0,99999); //网页端 每次用户都可以不用拖拽的看到上半段最后一行
    html.scrollTo(0,99999);   //手机端 每次用户都可以不用拖拽的看到上半段最后一行
    if(n<string.length-1){  //不是最后一个
      n=n+1
      step() //迭代显示
    }else {
      return   
    }
  },10)
}
step()
