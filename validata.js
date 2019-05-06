$(function () {
    'use strict'

    window.Validata = function (val, rule) {

        this.validata_min = function () {
            pre_max_min()
            return val>=rule.min
        };

        this.validata_max = function () {
            pre_max_min()
            return val<=rule.max
        };

        this.validata_maxlength = function () {
            pre_length()
            return val.length <= rule.maxLength
        };
        this.validata_minlength = function () {
            pre_length()
            return val.length >= rule.minLength
        };
        
        this.validata_numeric = function () {
            return $.isNumeric(val)
        };

        this.validata_nullable = function () {
          var real = $.trim(val);
            if(!val&& real!==0){
              return false;
          }
            return true;
        };

        this.validata_pattern = function () {
          var reg = new RegExp(rule.pattern)
            return reg.test(val)
        };


        //封装抽出来用于完成this.validata_max或this.validata_min的前置工作
        function pre_max_min() {
            val = parseFloat(val)
        }
        //封装抽出来用于完成this.minlength或this.minlength的前置工作
        function pre_length() {
            val = val.toString();
        }
    }
});