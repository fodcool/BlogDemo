

//= require jquery.js
//= require jquery_ujs
//= require twitter/bootstrap
//= require ckeditor/init
//= require jquery.validate.js
//= require bootstrap-datepicker


$( document ).ready(function() {
    $('.datepicker_input').datepicker({
        format: 'yyyy-mm-dd',
        autoclose: true
    });
});
