$(function(){

    const mediaQueryList = window.matchMedia('(max-width:632px)');
    //初期化
    classChange(mediaQueryList)

    mediaQueryList.addEventListener("change",classChange);
    //mediaquery用関数
    function classChange(mq){
        if(mq.matches){
            $('#fight-wrapper,#escape-wrapper').removeClass().addClass('ui eight wide column');
            $('#comment-wrapper').removeClass().addClass('ui sixteen wide column');
            $('#decide-wrapper,#skip-wrapper').removeClass().addClass('ui six wide column');
            $('#name-wrapper').removeClass().addClass('ui twelve wide column');
            console.log('小さい画面');
        }else{
            $('#decide-wrapper,#skip-wrapper,#fight-wrapper,#escape-wrapper').removeClass().addClass('ui five wide column');
            $('#name-wrapper,#comment-wrapper').removeClass().addClass('ui ten wide column');
            console.log('大きい画面');
        }
    }

    //ボタンおしたら画面をけして名前を保存する処理
    let name;

    function encount(n){
        new Typed('.encount',{
            strings:[n + 'があらわれた!'],
                typeSpeed:30,
                startDelay:300,
                backDelay:500,
                backSpeed:30,
                loop:false,            
                contentType:'html',
                showCursor:false,
        });
    };

    //okボタンの処理
    $('#decide-button').on('click',function(){
        name = $('#namein').val();
        console.log(name);
        $('.name-enter').addClass('completed');
        click_flg = false;
        encount(name);
        
    });

    //skipボタンの処理
    $('#skip-button').on('click',function(){
        name = 'にーと';
        console.log('skipしました');
        $('.name-enter').addClass('completed');
        click_flg = false;
        encount(name);
    });


    //コメントをクリックしたら次のメッセージを表示する関数
    function nextMessage(comment){

        let mes = $('.mes');
        //クリックした要素のactive要素を取得
        let currentMes = $(comment).find('.mes.active');
        //activeのインデックスを取得し次のインデックスを返す
        let nextIndex = mes.index(currentMes) + 1;
        //次の要素をかえす
        let nextMes = mes.eq(nextIndex);
        //active要素のつけ外し
        if(nextMes.length > 0){
            currentMes.removeClass('active');
            nextMes.addClass('active');
        };

        return nextIndex;
    };
    
    //clickの連打を防ぐ
    let click_flg = true;
    //animeの設定
    const setting = {
        animation : 'pulse',
        duration : '0.5s',
    };

    //逃げるボタンの処理
    $('#escape-wrapper').on('click',function(){
        //ボタン非表示
        $('#fight-wrapper').addClass('display-none');
        $('#escape-wrapper').addClass('display-none');
        console.log('非表示にしたよ');

        $('#escape-message').removeClass('display-none');
        $('#start-mes').removeClass('active');
        $('.encount-mes').addClass('display-none');

        //逃げる押したときメッセージ
        let escape = new Typed('.escape',{
            strings:["逃げてもいいけど社会の中で生きる限りいつかは向き合うときがくる","今はゆっくり休んでニートの期間を楽しもうぜ!!!","じゃあな...",""],
            typeSpeed:60,
            startDelay:300,
            backDelay:500,
            backSpeed:30,
            loop:false,            
            contentType:'html',
            showCursor:false,
            onComplete:()=>{
                click_flg = true;
                location.reload();
            }
        });

    });

    //たたかうボタンの処理
    $('#fight-wrapper').on('click',function(){
        //ボタン消す
        $('#fight-wrapper').addClass('display-none');
        $('#escape-wrapper').addClass('display-none');
        console.log('非表示にしたよ');

        
        $('.encount-mes').addClass('display-none');
        $('#start-mes').addClass('active');
        let type1 = new Typed('.mes1' ,{
            strings:["・・・・!?"],
            typeSpeed:30,
            startDelay:300,
            backDelay:500,
            backSpeed:30,
            loop:false,                
            contentType:'html',
            showCursor:false,
            onComplete:()=>{
                click_flg = true;
            }
        });
    });
    
        //コメントをクリックしたら次を表示
    $('.comment').on('click',function(){
           
        //連打防止
        if(click_flg){
            click_flg = false;

            let nextIndex =  nextMessage(this);

            switch(nextIndex){
                case 1:
                    let type2 = new Typed('.mes2',{
                        strings:["あれ、やるきになったの・・・？","なら僕も着替えようかな","...おや!? \n" + name + "の様子が...!"],
                        typeSpeed:30,
                        startDelay:300,
                        backDelay:500,
                        backSpeed:30,
                        loop:false,            
                        contentType:'html',
                        showCursor:false,
                        onComplete:()=>{
                            $('#neetimg').transition(setting)
                            .transition(setting)
                            .transition(setting)
                            .transition(setting)
                            .transition({
                                animation : 'pulse',
                                duration : '0.5s',
                                onComplete : function(){
                                    $('#neetimg').attr('src','./images/business_man_macho.png');
                                    click_flg = true;
                                    
                                },
                            });
                        }       
                    });
                    break;
                case 2:
                    let type3 = new Typed('.mes3' ,{
                        strings:["ぱわーーーー!!!",name + "は就職した!"],
                        typeSpeed:30,
                        startDelay:300,
                        backDelay:500,
                        backSpeed:30,
                        loop:false,                
                        contentType:'html',
                        showCursor:false,
                        onComplete:()=>{
                            click_flg = true;
                        }
                    });
                    break;
                case 3:
                    let type4 = new Typed('.mes4' ,{
                        strings:["たたかうことを選んだキミは偉いよ","何もしてない期間が長ければ長いほどたたかうのは難しくなっちゃうから・・・"],
                        typeSpeed:30,
                        startDelay:300,
                        backDelay:500,
                        backSpeed:30,
                        loop:false,                
                        contentType:'html',
                        showCursor:false,
                        onComplete:()=>{
                            click_flg = true;
                        }
                    });
                    break;
                case 4:
                    let type5 = new Typed('.mes5' ,{
                        strings:["また社会に出ることでつらいことがあるかもしれないけど","今のキミならきっと乗り越えられるよ","しばらくここにはこないことを祈ってる","じゃあな・・・"],
                        typeSpeed:30,
                        startDelay:300,
                        backDelay:500,
                        backSpeed:30,
                        loop:false,                
                        contentType:'html',
                        showCursor:false,
                        onComplete:()=>{
                            click_flg = true;
                            location.reload();
                        }
                    });
                    break;
                default:
                    console.log('返事がない。ただの屍のようだ...');
                    click_flg = true;
                    
            };

        }else{
            console.log('連打しました');
        };
        
    });

});



