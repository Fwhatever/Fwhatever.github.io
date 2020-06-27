
//---------------shake email-------------------



  function shakeleft(){
    document.getElementById("q").style.position="relative";
    document.getElementById("q").style.left="0";
    setTimeout("shakeright()",60);
  }
  function shakeright(){
    document.getElementById("q").style.left="3px";
    setTimeout("shakeleft()",60);
  }
  function stopshake(){
    clearTimeout();
  }

//----------------roll pic-----------------------
  var rollbox=document.getElementById("rollbox");
  var left=rollbox.style.left;
  var speed=20;
  var leftstr;

  function rollleft(){
    left=left-speed;
    if(left<-240){
      left=0;
    }
    leftstr=left+"px";
    rollbox.style.left=leftstr;
  }

  //setInterval(this.rollleft, 200);

//-----------------change banner-------------------
  var mainpic=document.getElementById('pic');
  var prebtn=document.getElementById("pre");
  var nexbtn=document.getElementById('nex');
  var pots=document.getElementsByClassName('pot');
  var len=pots.length; //获取图片数量
  var active=0;
  pots[0].style.color="red";
  setInterval(this.nex, 1300);

  prebtn.onclick=this.pre;
  function pre(){
    /*  1.获取当前图片下标
        2.计算前一张图片下标
        3.显示前一张图片
        4。高亮前一张图片对应的圆点
    */
    active=active-1;
    if(active<0){
      active=len-1;
    }
    var dir="img/"+active+".png";
    mainpic.src=dir;
    setpot(active);
  }

  nexbtn.onclick=this.nex;
  function nex(){
    active=active+1;
    if(active>len-1){
      active=0;
    }
    var dir="img/"+active+".png";
    mainpic.src=dir;
    setpot(active);
  }

  function setpot(n){
    for(i=0;i<len;i++){
      pots[i].style.color="gray";
    }
    pots[n].style.color="white";
  }

  var catli=document.getElementsByClassName("exb-cat-li");
  var catlen=catli.length;
