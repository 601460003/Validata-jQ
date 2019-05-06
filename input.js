$(function () {
    'use strict'
    window.Input = function (selector) {
       var $ele;

       function init() {
           find_ele();
           parse_rule();
       }

       function find_ele(){
           if(selector instanceof jQuery){
               $ele = selector;
           }else {
               $ele = $(selector);
           }
       }
       function parse_rule(){
           var rule_str = $ele.data('rule');
           if(!rule_str) return;

           var rule_arr = rule_str.split('|');
       }

       init();
    }
});