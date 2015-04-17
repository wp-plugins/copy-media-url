var $ = jQuery.noConflict();
$(document).ready(function(){
    $("#plupload-browse-button").ajaxStart(function(){
    }).ajaxStop(function(){
        var count = 0;
        $.each($('#media-items').children(),function(){
            var self = $(this);
            if (self.hasClass('media-item')) {
                if (self.find('button').length==0) {
                self.find('a').after( "<button type='button' id='copy-"+count+"' class='copy-attachment button' style='float:right;margin-top: 5px;margin-right: 5px;'>Copy</button>" );
                self.find('img').after( "<span class='copy-done' id='copy-message-"+count+"' style='margin-top: 8px; float: right; position: absolute; margin-left: 44%;display:none;color:#3CA5CE;font-weight: bold;'>copied to the clipboard</span>" );
                }; 
            };
            count++;
        });
        setTimeout(function(){$('.copy-attachment').click();},100);
        $('.copy-attachment').click(function(){
            var id = $(this).attr('id');
            var src = $('#'+id).parent().children().first().attr('src');
            //set path
            ZeroClipboard.setMoviePath('http://davidwalsh.name/demo/ZeroClipboard.swf');
            //create client
            var clip = new ZeroClipboard.Client();
            //event
            clip.addEventListener('mousedown',function() {
            clip.setText(src);
            });
            clip.addEventListener('complete',function(client,text) {
                $('#copy-message-'+id.split('-')[1]).fadeIn(1000);
                setTimeout(function(){
                    $('#copy-message-'+id.split('-')[1]).fadeOut(1000); 
                },2000);
            });
            //glue it to the button
            clip.glue(id);
        })
    });
});

