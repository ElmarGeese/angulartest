/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

customDirectives = angular.module('customDirectives', []);
customDirectives.directive('customPopover', function () {
    return {
        restrict: 'A',
        template: '<span>{{label}}</span>',
        link: function (scope, el, attrs) {
            scope.label = attrs.popoverLabel;
            $(el).popover({
                trigger: 'click',
                html: true,
                content: attrs.popoverHtml,
                placement: attrs.popoverPlacement
            });
        }
    };
});

angular.module('CustomComponents', ['customDirectives']);