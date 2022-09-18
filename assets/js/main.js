jQuery(document).ready(function($){

  // inizializzazione select
  $('.select').select2();

  // $('.select').select2().data('select2').$dropdown.addClass('my-container');
  // $('.select').on('change', function() {
  //   var getId = $(this).select2('data');
  //   console.log(getId);
  //   var selectId = getId[0].element.id;
  //   if (selectId == '0' ) {
  //     $('.selection > span').addClass('error')
  //   }else {
  //     $('.selection > span').removeClass('error')
  //   }
  // })

  // input text validation
  $('.name').on('change', function(){
    let name = $('.name').val();
    console.log(name);
    if (name == ""){
      $('.name_input > .message').addClass('error');
      $('.name').addClass('error');
      $('body').attr('name','false');
    }else {
      $('.name_input > .message').removeClass('error');
      $('.name').removeClass('error');
      $('body').attr('name','true');
    }
  });

  // email validation
  $('.email').on('change', function(){
    let email = $('.email').val();
    if (email == ""){
      $('.email_input > .message').addClass('error');
      $('.email').addClass('error');
      $('body').attr('email','false');
    }else {
      $('.email_input > .message').removeClass('error');
      $('.email').removeClass('error');
      $('body').attr('email','true');
    }
  });

  // checkbox validation privacy
  $('input.checkbox_check').on('click', function(){
    if ($('input.checkbox_check').is(':checked')) {
      $('.privacy_checkbox > .message').addClass('error');
      $('.checkbox_check').removeClass('error');
      $('body').attr('checkbox','true');
    } else {
      $('.privacy_checkbox > .message').removeClass('error');
      $('.checkbox_check').addClass('error');
      $('body').attr('checkbox','false');
    }
  });

  // checkbox validation marketing
  $('input.marketing').on('click', function(){
    if ($('input.marketing').is(':checked')) {
      $('body').attr('marketing','true');
    } else {
      $('body').attr('marketing','false');
    }
  });

  // select validation
  $('.select').on('change', function(){
    let select_data = $(this).select2('data');
    let select_text = select_data[0].text;
    console.log(select_text);
    if (select_text == ""){
      $('.select').addClass('error');
      $('body').attr('select','false');
    }else {
      $('.age_select .message').removeClass('error');
      $('.select').removeClass('error');
      $('body').attr('select','true');
      $('span.select2-selection.select2-selection--single').removeClass('error');
    }
  });



  $('input[type="submit"]').on('click', function(e){
    e.preventDefault();

    let name_value = $('.name').val();
    let email_value = $('.email').val();
    let select_data = $('.select').select2('data');
    let select_value = select_data[0].text;

    let name = $('body').attr('name');
    let select = $('body').attr('select')
    let email = $('body').attr('email');
    let checkbox = $('body').attr('checkbox');
    let marketing = $('body').attr('marketing');

    if (name == 'true' && select == 'true' && email == 'true' && checkbox == 'true') {

      let name_value = $('.name').val();
      let email_value = $('.email').val();
      let select_data = $('.select').select2('data');
      let select_value = select_data[0].text;

      console.log(email_value);
      $('.name_def span').text(name_value);
      $('.email_def span').text(email_value);
      $('.age_def span').text(select_value);
      $('.privacy span').text(checkbox);
      $('.marketing span').text(marketing);

      setTimeout(function(){
        $('.form').addClass('d-none');
        $('.thanks-container').removeClass('d-none');
      }, 500);

    } else if (select == 'false' || checkbox == 'false' || name == 'false' || email == 'false') {
      if (select == 'false') {
        $('.age_select .message').addClass('error');
        $('.select').addClass('error');
        $('body').attr('select','false');
        $('span.select2-selection.select2-selection--single').addClass('error');
      }
      if (checkbox == 'false') {
        $('.privacy_checkbox > .message').removeClass('error');
        $('.checkbox_check').addClass('error');
        $('body').attr('checkbox','false');
      }
      if (name == 'false') {
        $('.name_input > .message').addClass('error');
        $('.name').addClass('error');
        $('body').attr('name','false');
      }
      if (email == 'false') {
        $('.email_input > .message').addClass('error');
        $('.email').addClass('error');
        $('body').attr('email','false');
      }
    };

  });


})
