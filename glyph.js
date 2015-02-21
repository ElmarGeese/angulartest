/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function() {
    var app = angular.module('glyph', []);
    var win;
    var popup ="Hello";
    var strWindowFeatures = "menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes";
    
    app.controller('TabController', function(){
        this.tab = 1;
        
        this.setTab = function(newValue){
            this.tab = newValue;
        };

        this.isSet = function(tabName){
            return this.tab === tabName;
        };
    });

    
    app.controller('GlyphController', function($scope, $window){
        this.glyphs = myglyphs;
        this.colors = mycolors;
        this.popup = popup;
        $scope.setMaster = function(obj, $event){
            console.log($event.target);
            };
        $scope.greeting = 'Hello, World!';
        
        $scope.doAlert = function(greeting) {
            $window.alert(greeting);
        };
        $scope.doPopup = function(sourceurl, text) {
            this.popup = text;
            return openRequestedPopup(sourceurl, text);
        };

        function openRequestedPopup(sourceurl, text) {
            win = $window.open(sourceurl, "Hello", strWindowFeatures);
        }
    });

    var myglyphs = [
        {name : 'Home', id : 'glyphicon glyphicon-home', unicode:'&#xe021;'},
        {name : 'Cutlery',id : 'glyphicon glyphicon-cutlery', unicode:''},
        {name : 'Exclamation Sign',id : 'glyphicon glyphicon-exclamation-sign', unicode:''},
        {name : 'Inbox',id : 'glyphicon glyphicon-inbox', unicode:''},
        {name : 'Refresh',id : 'glyphicon glyphicon-refresh', unicode:''},
        {name : 'User', id: 'glyphicon glyphicon-user', unicode:''}
    ];
     
    var mycolors = [
        {name : 'none', rgb : ''},
        {name : 'blanchedalmond', rgb : ''},
        {name : 'beige',rgb : ''},
        {name : 'bisque', rgb: ''},
        {name : 'brown', rgb : ''},
        {name : 'burlywood',rgb : ''},
        {name : 'buttonface', rgb: ''},
        {name : 'cadetblue', rgb : ''},
        {name : 'captiontext',rgb : ''},
        {name : 'chartreuse', rgb: ''},
        {name : 'chocolate', rgb : ''},
        {name : 'cornsilk',rgb : ''},
        {name : 'cornflowerblue', rgb: ''},
        {name : 'crimson', rgb : ''},
        {name : 'currentColor',rgb : ''},
        {name : 'black', rgb: ''},
        {name : 'red', rgb : ''},
        {name : 'blueviolet',rgb : ''},
        {name : 'blue', rgb: ''},
        {name : 'cadetblue', rgb : ''},
        {name : 'captiontext',rgb : ''},
        {name : 'green', rgb: ''},
        {name : 'greenyellow', rgb : ''},
        {name : 'cyan',rgb : ''},
        {name : 'cornsilk', rgb: ''}
    ];
})();
