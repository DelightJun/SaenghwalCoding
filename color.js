var links = {
    setColor: function (color) {
        // var alist = document.querySelectorAll('a');
        // var i = 0;
        // while (i < alist.length) {
        //     console.log(alist[i]);
        //     alist[i].style.color = color;
        //     i++;
        // }
        $('a').css('color', color);
    }
}

/* function linksSetColor(color) {
    var alist = document.querySelectorAll('a');
    var i = 0;
    while (i < alist.length) {
        console.log(alist[i]);
        alist[i].style.color = color;
        i++;
    }
} */

var Body = {
    setBackgroundColor: function (color) {
        // document.querySelector('body').style.backgroundColor = color;
        $('body').css('backgroundColor', color);
    },
    setColor: function (color) {
        // document.querySelector('body').style.color = color;
        $('body').css('color', color);
    }
}

/* function BodySetColor(color) {
    var target = document.querySelector('body');
    target.style.color = color;
} */

/* function BodySetBackgroundColor(color) {
    var target = document.querySelector('body');
    target.style.backgroundColor = color;
} */

function nightDayHandler(self) {
    if (self.value == 'night') {
        Body.setBackgroundColor('black');
        Body.setColor('white');
        self.value = 'day';

        links.setColor('powderblue');
    } else {
        Body.setBackgroundColor('white');
        Body.setColor('black');
        self.value = 'night';

        links.setColor('blue');
    }
}
// document.write('hello world');
// document.write(1 + 1);

// jQuery는 새로운 언어가 아니고 함축적으로 JavaScript 코드를 가지고 있으며 함축적으로 동작을 실행시켜준다. 더 직관적이다.