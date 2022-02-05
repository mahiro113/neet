$(function(){

    //commentをクリックしたらpromiseを返す
    function commentClickPromise(){
        var myDefer = $.Deferred();
        $('.comment').on('click',function(){
            myDefer.resolve();
        });
        console.log('promiseできたよん');
        return myDefer.promise();
    };

    //promiseをただ返す
    function createPromise(){
        var myDefer = $.Deferred();
        myDefer.resolve();
        return myDefer.promise();
    };

    //ボタンおしたら画面をけして名前を保存する処理
    var name;

    $('#enter-button').on('click',function(){
        name = $('#namein').val();
        console.log(name);
        $('.name-enter').addClass('completed');
    });

    //skipボタンの処理
    $('#skip-button').on('click',function(){
        name = 'にーと';
        console.log('skipしました');
        $('.name-enter').addClass('completed');
    });

    //コメントをクリックしたら次のメッセージを表示する関数
    function nextMessage(comment){

        var mes = $('.mes');
        //クリックした要素のactive要素を取得
        var currentMes =　$(comment).find('.mes.active');
        //activeのインデックスを取得し次のインデックスを返す
        var nextIndex = mes.index(currentMes) + 1;
        //次の要素をかえす
        var nextMes = mes.eq(nextIndex);
        //active要素のつけ外し
        if(nextMes.length > 0){
            currentMes.removeClass('active');
            nextMes.addClass('active');
        };

        return nextIndex;
    };

    //clickの連打を防ぐ
    var click_flg = true;

    //コメントをクリックしたら次を表示
    $('.comment').on('click',function(){
       
        //連打防止
        if(click_flg){
            click_flg = false;

            var nextIndex =  nextMessage(this);

            //なんかこれで思い通りに動く
            if(nextIndex==1){
                var type2 = new Typed('.mes2',{
                    strings:["ニート最高!\n永遠に養ってクレメンス","おや、ニートの様子が..."],
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
            }else if(nextIndex==2){

                var type3 = new Typed('.mes3' ,{
                    strings:["ぱわーーーー","普通の人になった"],
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
            }else if(nextIndex==3){
                click_flg = true;
            }else if(nextIndex==4){
                click_flg = true;
            }else{
                console.log('返事がない。ただの屍のようだ...');
                click_flg = true;
            };
        }else{
            console.log('連打しました');
        };



    });

});