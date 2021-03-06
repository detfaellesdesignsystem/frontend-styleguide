'use strict';
import $ from "jquery";
function isValidEmailAddress(emailAddress) {
    var pattern = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);
    return pattern.test(emailAddress);
};

$( document ).ready(function( $ ) {
    if($('body').hasClass('page-tilmelding-til-nyhedsmail')){
        let urlparams = window.location.search.substr(1).split('&');
        let response = urlparams[0].split('=');
        if (response[0] == 'response'){
            let message = decodeURI(response[1]);
            $('#newsletter-message .alert-text').html(message);
            $('#newsletter-message').removeClass('d-none');
        }
    }

    if ( $('.newsletter-container').length ) {

        // get maillists
        $.ajax({
            url: "https://w2l.dk/pls/wopdprod/aboutils.nyhedsbrev2_drupal_xml?aboid=278&aboid=279&aboid=280",
            async: false,
            cache: true,
            success: function( xmlResponse ) {
                var res = '';
                let segment = [];

                $(xmlResponse).find('gruppe').each(function(i,e) {
                    $(e).find('segment').each(function(i,e) {
                        res += '<li>';
                        res += '<input id="id' + $(e).attr('segment_id') + '" type="checkbox" name="i_segmentid" class="form-checkbox checkbox-large" value="' + $(e).attr('segment_id') + '">';
                        res += '<label class="form-label" for="id' + $(e).attr('segment_id') + '">';
                        res += $(e).children('overskrift').text();
                        res += '</label>';
                        res += '</li>';
                        segment.push($(e).attr('segment_id'));
                    });
                });

                if(segment.length !== 0 && $('#i_newsform_segment') !== null){
                    $('#i_newsform_segment').val(segment.join());
                }

                $('#subscriptions').append(res);
                $('#subscriptions').removeClass('d-none');

                $( "#newsform" ).submit(function( event ) {
                    event.preventDefault();
                });

                $("#unsubmitall").click(function(e) {
                    e.preventDefault();

                    $("#newsform [type='checkbox']").attr('checked', true);
                    $("#Frameld").click();
                });

                $("#Tilmeld").click(function(e) {
                    e.preventDefault();

                    var tilmeld = 'Tilmeld';
                    let error = false

                    $('#mail-error-summary .nobullet-list').html('');

                    if (!isValidEmailAddress($("#i_newsform_email").val())) {
                        $('#i_newsform_email').parent('.form-group').addClass('form-error');
                        $('#mail-error-summary .nobullet-list').append('<li><a class="function-link" href="#i_newsform_email">Indtast en gyldig e-mailadresse.</a></li>');
                        $('#i_newsform_email').parent('.form-group').find('.form-error-message')[0].innerHTML = "Indtast en gyldig e-mailadresse.";
                        $("#i_newsform_email").focus();
                        error = true;
                    } else{
                        $('#i_newsform_email').parent('.form-group').removeClass('form-error');
                        $('#i_newsform_email').parent('.form-group').find('.form-error-message')[0].innerHTML = "";
                    }

                    var segmentid = [];
                    $("#newsform [type='checkbox']:checked").each(function(i,e) {
                        segmentid.push($(e).val());
                    });

                    if ( segmentid.length == 0 ) {
                        $($('#subscriptions').parents('.form-group')[0]).addClass('form-error');
                        $('#mail-error-summary .nobullet-list').append('<li><a class="function-link" href="#'+$($('#subscriptions input')[0]).attr('id')+'">Der skal vælges minimum et nyhedsbrev.</a></li>');
                        $($('#subscriptions').parents('.form-group')[0]).find('.form-error-message')[0].innerHTML = "Der skal vælges minimum et nyhedsbrev.";
                        if(error !== true) {
                            $("#newsform [type='checkbox']:first").focus();
                        }
                        error = true;
                    } else{
                        $($('#subscriptions').parents('.form-group')[0]).removeClass('form-error');
                        $($('#subscriptions').parents('.form-group')[0]).find('.form-error-message')[0].innerHTML = "";
                    }
                    if(!$("#samtykke-check").prop('checked')){
                        error = true;
                        $('#samtykke-group').addClass('form-error');
                        $('#mail-error-summary .nobullet-list').append('<li><a class="function-link" href="#samtykke-check">Giv os venligst samtykke, så vi må opbevare din mailadresse. Uden dit samtykke kan vi ikke sende dig nyhedsmails.</a></li>');
                        document.querySelector('#samtykke-group .form-error-message').innerHTML = "Giv os venligst samtykke, så vi må opbevare din mailadresse. Uden dit samtykke kan vi ikke sende dig nyhedsmails.";
                    } else{

                        $('#samtykke-group').removeClass('form-error');
                        $('#samtykke-group .form-error-message').innerHTML = "";
                    }

                    if(error === true) {
                        $('#mail-error-summary').removeClass('d-none');
                        return false;
                    }

                    $('#mail-error-summary').addClass('d-none');
                    $.ajax({
                        url: 'https://w2l.dk/pls/wopdprod/aboutils.abo_submit_drupal',
                        type: "POST",
                        dataType: "xml",
                        traditional: true,
                        data: { i_segmentid: segmentid,
                            i_email: $("#i_newsform_email").val(),
                            i_navn: '',
                            i_firma: '',
                            i_sprog: 'DA',
                            i_siteid: 'detfaellesdesignsystem',
                            tilmeld: tilmeld,
                            frameld: ''
                        },
                        success: function( xmlResponse ) {
                            let url = window.location.origin + '/omdesignsystemet/nyhedsmail/tilmeldt?';
                            url += 'response='+encodeURI($(xmlResponse).text());
                            window.location.href = url;
                        }
                    });

                    $("#newsform [type='checkbox']").attr('checked', false);
                    $("#i_newsform_email").val('');
                });

                $("#Frameld").click(function(e) {
                    e.preventDefault();

                    var frameld = 'Frameld';
                    let error = false;

                    if (!isValidEmailAddress($("#i_newsform_email").val())) {
                        $('#i_newsform_email').parent('.form-group').addClass('form-error');
                        $('#i_newsform_email').parent('.form-group').find('.form-error-message')[0].innerHTML = "E-mailadresse er ikke gyldig.";
                        $('#i_newsform_email').parent('.form-group').find('.form-error-message').removeClass('d-none');
                        error = true;
                    } else{
                        $('#i_newsform_email').parent('.form-group').removeClass('form-error');
                        $('#i_newsform_email').parent('.form-group').find('.form-error-message')[0].innerHTML = "";
                        $('#i_newsform_email').parent('.form-group').find('.form-error-message').addClass('d-none');
                    }

                    var segmentid = $('#i_newsform_segment').val().split(',');

                    $("#newsform [type='checkbox']:checked").each(function(i,e) {
                        segmentid.push($(e).val());
                    });

                    if(error === true) {
                        return false;
                    }

                    $.ajax({
                        url: 'https://w2l.dk/pls/wopdprod/aboutils.abo_submit_drupal',
                        type: "POST",
                        dataType: "xml",
                        traditional: true,
                        data: { i_segmentid: segmentid,
                            i_email: $("#i_newsform_email").val(),
                            i_navn: '',
                            i_firma: '',
                            i_sprog: 'DA',
                            i_siteid: 'detfaellesdesignsystem',
                            tilmeld: '',
                            frameld: frameld
                        },
                        success: function( xmlResponse ) {
                            $('#newsletter-message .alert-text').html($(xmlResponse).text());
                            $('#newsletter-message').removeClass('d-none');
                            $('.newsletter-container .form-error-message').addClass('d-none');
                            $('.newsletter-container .form-error').removeClass('form-error');
                        }
                    });

                    $("#newsform [type='checkbox']").attr('checked', false);
                    $("#i_newsform_email").val('');
                });
            }
        });
    };

});
