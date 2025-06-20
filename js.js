const ua = navigator.userAgent;

let width = window.innerWidth;

if (/mobile/i.test(ua)) {
    console.log("Пользователь зашел с телефона 📱");
} else if (/tablet/i.test(ua)) {
    console.log("Пользователь зашел с планшета 📲");
} else {
    console.log("Пользователь зашел с компьютера 🖥️");
}

$(document).ready(function () {

  function startTyping(text, speed = 120) {
    const $output = $('#typedText');
    const $cursor = $('.cursor');
    $output.text(''); // очистка текста
    let i = 0;

    function typeChar() {
      if (i < text.length) {
        $output.append(text[i]);
        i++;
        setTimeout(typeChar, speed);
      }
    }

    typeChar();
  }
  function removeAll() {
    $('.found-img').animate({'margin-top':'-100%'}, 50);
    $('.search-place').addClass('rem');
    $('.type').animate({'left':'-100%'}, 50);
    $('.type-2').animate({'right':'-100%'}, 50);
  }

  function showGreeting() {
    $('.greeting').animate({'bottom':'0%'});
    setTimeout(() => {
    // Показать первую
    $('.greet-name').css({'display':'block'}, 2000).addClass('show');

    setTimeout(() => {
        // Удалить первую
        $('.greet-name').removeClass('show').addClass('remove');
    }, 2000);

    setTimeout(() => {
        // Показать вторую
        $('.greet-2').show().addClass('show');
    }, 3000);

    setTimeout(() => {
        // Удалить вторую
        $('.greet-2').removeClass('show').addClass('remove');
    }, 5000);

    setTimeout(() => {
        $('.greet-3').show().addClass('show');
    }, 6000);

    setTimeout(() => {
        $('.greet-3').css({
          'display':'none',
        })
    }, 8000);

    }, 500);
  }
  function showSkil() {
    $('.skils-name').css({'display':'block'}).addClass('show');
    // показываем скилы
    setTimeout(() => {
      $('.skil-1').css({'display':'block'}).addClass('show');
    }, 1000);
    setTimeout(() => {
      $('.skil-2').css({'display':'block'}).addClass('show');
    }, 2000);
    setTimeout(() => {
      $('.skil-3').css({'display':'block'}).addClass('show');
    }, 3000);
    setTimeout(() => {
      $('.skil-4').css({'display':'block'}).addClass('show');
    }, 4000);
    setTimeout(() => {
      $('.skil-5').css({'display':'block'}).addClass('show');
    }, 5000);

    // удаляем скилы

    setTimeout(() => {
      $('.skil-1').removeClass('show').addClass('remove');
    }, 7000);
    setTimeout(() => {
      $('.skil-2').removeClass('show').addClass('remove');
    }, 8000);
    setTimeout(() => {
      $('.skil-3').removeClass('show').addClass('remove');
    }, 9000);
    setTimeout(() => {
      $('.skil-4').removeClass('show').addClass('remove');
    }, 10000);
    setTimeout(() => {
      $('.skil-5').removeClass('show').addClass('remove');
    }, 11000);
    setTimeout(() => {
      $('.skils-name').css({'display':'none'});
    }, 12200);
  }

  //knowledge
  function showKnow() {
    $('.know').animate({'bottom':'0%'}, 50);
    if (/mobile/i.test(ua)) {
      setTimeout(() => {
        $('.progress-ring__circle').addClass('dash-mobile')
      }, 1000);
      setTimeout(() => {
        $('.progress-2-ring__circle').addClass('dash-mobile-2')
      }, 4000);

      setTimeout(() => {
        $('.progress-3-ring__circle').addClass('dash-mobile-3');
      }, 6000);
    } else {
      setTimeout(() => {
        $('.progress-ring__circle').addClass('animate');
      }, 1000);

      setTimeout(() => {
        $('.progress-2-ring__circle').addClass('animate-2');
      }, 4000);

      setTimeout(() => {
        $('.progress-3-ring__circle').addClass('animate-3');
      }, 6000);
    }
  }
  function removeKnow() {
    setTimeout(() => {
      $('.know-name').css({'display':'none'});
    }, 500);
    $('.know-1').css({'display':'none'});
    $('.know-2').css({'display':'none'});
    $('.know-3').css({'display':'none'});
  }
  function showLast() {
    setTimeout(() => {
      $('.know').addClass('circle');
    }, 100);
    setTimeout(() => {
      $('.frame').css({'display':'block'}).addClass('show-5');
    }, 2500);
    setTimeout(() => {
      $('.last-name').css({'display':'block'}).addClass('show-5');
    }, 3500);
    setTimeout(() => {
      $('.last-text').css({'display':'block'}).addClass('show-5');
    }, 4500);
    setTimeout(() => {
      $('.text-last').css({'display':'block'}).addClass('show-5');
    }, 5500);
    setTimeout(() => {
      $('.last-link').css({'display':'block'}).addClass('show-5');
    }, 6500);
    setTimeout(() => {
      $('.last-link-2').css({'display':'block'}).addClass('show-5');
    }, 7500);
    setTimeout(() => {
      $('.mess-1').css({'display':'block'}).addClass('show-5');
    }, 8500);
    setTimeout(() => {
      $('.mess-2').css({'display':'block'}).addClass('show-5');
    }, 9500);
    setTimeout(() => {
      $('.mess-3').css({'display':'block'}).addClass('show-5');
    }, 10500);
  }

  //  Запуск по клику
  $('.start-button').on('click', function () {
    $(this).css({
        'border':'2.5px solid black',
    });
    setTimeout(() => {
        $(this).addClass('hidden');
        startTyping("Best Web Dev who likes to code");
        setTimeout(() => {
            removeAll();
        }, 5000)
    }, 500);

    setTimeout(() => {
      showGreeting();
      setTimeout(() => {
        $('.greet-3').fadeOut(1000);
      }, 1000); // исчезает через 1 секунду после показа
    }, 5800);
    setTimeout(() => {
      showSkil();
    }, 15000);
    setTimeout(() => {
      showKnow();
    }, 27100);
    setTimeout(() => {
      removeKnow();
    }, 35500);
    setTimeout(() => {
      $('.last-slide').css({'bottom':'0%'});
    }, 35000);
    setTimeout(() => {
      showLast();
    }, 37000);
  });
});
$(document).ready(function () {
  if(/mobile/i.test(ua)) {
    if(width >= 390 & width <= 400) {
      $('.frame').css({'margin-left':'9%'});
    }
    if(width >= 400 & width <= 410) {
      $('.frame').css({'margin-left':'11%'});
    }
    if(width >= 420) {
      $('.frame').css({'margin-left':'13%'});
    }
  }
});
