var ball = document.querySelector('.ball');    
                
             window.addEventListener('keydown', function(e) {
                // console.log('keyCode', e.keyCode);  
                if ( e.keyCode == 38 ) {
                    var up = ball.offsetTop;
                    ball.style.top = up - 10 + 'px';
                }
                if ( e.keyCode == 39) {
                    var rightSide = ball.offsetLeft;
                    ball.style.left = rightSide + 10 + 'px';
                }
                if ( e.keyCode == 37) {
                    var leftSide = ball.offsetLeft;
                    ball.style.left = leftSide - 10 + 'px';
                }
                if (e.keyCode == 40 ) {
                    var botton = ball.offsetTop;
                    ball.style.top = botton + 10 + 'px';
                }
             }); 
                