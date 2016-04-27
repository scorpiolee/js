

/*   获取页面元素的样式  */

function getStyle ( obj, attr ){
					return obj.currentStyle?obj.currentStyle[attr] : getComputedStyle( obj )[attr];
				}

/*   END    获取页面元素的样式   */

/*  找到页面的元素，让元素按照指定的方向，移动，回调函数  */

function doMove( obj, attr, dir, target, endFn){
										
					clearInterval( obj.timer );  //清除定时器
					
					obj.timer = setInterval(function(){
						
						var speed = parseInt( getStyle( obj, attr ) ) + dir;    
						
						if( speed > target && dir > 0 || speed < target && dir < 0){
							speed = target;							
						}													
						obj.style[attr] = speed + 'px';	
						
						if( speed === target ){							
							clearInterval( obj.timer );
							
							endFn && endFn();  //如果回调函数不为0，则执行
						}						
					},30);						
				}

/*    END     找到页面的元素，让元素按照指定的方向，移动，回调函数            */

/*   页面元素抖动             */
function shake( obj, attr, endFn ){
					var pos = parseInt( getStyle( obj, attr ) );				
					var arr = [];
					var num = 0;
					
					
					for( var i=20; i>0; i-=2 ){
						arr.push( i, -i);
					};
					arr.push(0);					
					clearInterval( obj.shake );
					
					obj.shake = setInterval(function(){
						obj.style[attr] = pos + arr[num] + 'px';
						num++;
						if( num === arr.length ){
							clearInterval( obj.shake );
							endFn && endFn();
						}
					},50);					
				}

/*     END       页面元素抖动             */