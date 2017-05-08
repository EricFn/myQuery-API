// TODO 利用自调函数优化全局域命名空间
(function(global){
    /*
        TODO 工厂函数 $()
        TODO * 返回值 - jQuery对象
        TODO * 作用
        TODO   * 使用选择器 - 定位HTML页面元素
        TODO   * 将DOM对象转换成jQuery对象
        TODO   * 创建HTML页面中的元素 - <ul></ul>
     */
    var jQuery = function(selector){
        // TODO selector 为 string 类型

        // TODO 创建jQuery对象
        var _jquery = new JQUERY();

        // TODO 创建HTML页面元素
        if(selector.charAt( 0 ) === "<" &&
            selector.charAt( selector.length - 1 ) === ">" &&
            selector.length >= 3 ){
            // TODO 实现创建HTML页面元素的逻辑代码
        }

        /*
            TODO 封装选择器的用法
            TODO * #id - '#username'
            TODO * .class - '.mini'
         */
        // TODO 判断当前是不是 id选择器
        if(selector.substring(0,1) == '#'){
            var elemId = selector.substring(1);
            // TODO 返回一定DOM对象
            var element = document.getElementById(elemId);
            _jquery.push(element);
        }else if(selector.substring(0,1) == '.'){
            var className = selector.substring(1);
            // TODO 返回可能是DOM对象或数组
            var elements = document.getElementsByClassName(className);

            for(var i=0;i<elements.length;i++){
                _jquery.push(elements[i]);
            }
        }else{
            // TODO 元素选择器
        }
        return _jquery;

    }
    // TODO 创建jQuery对象的构造函数
    function JQUERY(){}
    JQUERY.prototype = new Array();
    // TODO 封装 get(index) 方法
    JQUERY.prototype.get = function(index){
        return this[index];
    }
    // TODO jQuery的链式操作
    JQUERY.prototype.val = function(value){
        /*
            TODO val()方法 - 获取和设置
            TODO * 获取 - $().val()
            TODO * 设置 - $().val(value)
         */
        if(value){// TODO 设置
            this[0].value = value;
            return this;// TODO 返回当前jQuery对象
        }else{// TODO 获取
            return this[0].value;
        }
    }
    // TODO 封装 text() 方法
    JQUERY.prototype.text = function(text){
        if(text){// TODO 设置
            if(window.navigator.userAgent.toLowerCase().indexOf('firfox') == -1){
                for(var i=0;i<this.length;i++){
                    this[i].innerText = text;
                }
            }else{
                for(var i=0;i<this.length;i++){
                    this[i].textContent = text;
                }
            }
        }else{// TODO 获取
            /*
                TODO innerText属性的问题 - 浏览器兼容问题
                TODO * IE浏览器提供解析的属性 - innerText
                TODO * 其他浏览器提供解析的属性 - textContent
             */
            if(window.navigator.userAgent.toLowerCase().indexOf('firfox') == -1){
                for(var i=0;i<this.length;i++){
                    this[i] = this[i].innerText;
                }
            }else{
                for(var i=0;i<this.length;i++){
                    this[i] = this[i].textContent;
                }
            }
            return this;// TODO string
        }
    }
    // TODO html() 方法
    // TODO css() 方法
    JQUERY.prototype.css = function(name, value){
        if(value){
            this[0].style[name] = value;
        }else{
            // TODO DOM根据CSS属性名称获取对应值
            return this[0].style[name];
        }
    }
    // TODO 封装 each() 方法
    JQUERY.prototype.each = function(fn){
        // TODO 遍历 this
        for(var i=0;i<this.length;i++){
            fn(i,this[i]);
        }
    }
    JQUERY.prototype.inArray = function(value){
        for(var i=0;i<this.length;i++){
            if(this[i] == value){
                return i;
            }
        }
    }
    // TODO 封装 maekArray() 方法 - 将当前的jQuery对象转换成一个数组
    JQUERY.prototype.makeArray = function(){
        var arr = new Array();
        for(var i=0;i<this.length;i++){
            arr[i] = this[i];
        }
        return arr;
    }
    // TODO 将 onclick 事件封装成 click() 方法
    JQUERY.prototype.click = function(fn){
        for(var i=0;i<this.length;i++){
            this[i].onclick = fn;
        }
        return this;
    }
    // TODO 将 ondblclick 事件
    // TODO 通用事件绑定方法 bind(type,callback)
    JQUERY.prototype.bind = function(type,fn){
        for(var i=0;i<this.length;i++){
            this[i].addEventListener(type,fn);
        }
        return this;
    }

    // TODO 将局部对象提升到全局作用域
    global.$ = global.jQuery = jQuery;

    /*
        TODO 定义一个内部使用的工具方法
        TODO * 作用 - 专门处理 for 问题
      */
    /*JQUERY.prototype.tool = function(code){
        // TODO code参数是内容为JavaScript代码的string类型
        for(var i=0;i<this.length;i++){
            // TODO 如何将包含代码的string类型，转换成一段真正的代码
            eval(code);
        }
    }*/
})(window);
