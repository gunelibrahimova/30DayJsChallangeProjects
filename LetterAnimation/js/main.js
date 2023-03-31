consoleText(['Shes the sunshine on my cloudy days', 'The melody in my heart that plays', 'She brings color to my world of gray','And turns my troubles into hay.','Her eyes, like stars, light up my night','And in her arms, everything is alright','Her touch, like magic, soothes my soul,','And with her love, I feel whole.','Her smile, so radiant, warms my heart,','And from her lips, I never want to part.','Her laughter, like music, fills the air,','And in her presence, I forget all my despair.','She is the angel in my life, my saving grace,','And with her, I feel like I am in the right place.','She is my everything, my reason to live,','And with her love, I know I can always give.','She is the girl that makes my world a better place,','And in her embrace, I find my peace and grace.','She is the one Ive been waiting for,','And with her, I want to love forevermore.', 'BE MINE NATASHA'], 'text',['tomato','rebeccapurple','lightblue']);

function consoleText(words, id, colors) {
  if (colors === undefined) colors = ['#fff'];
  var visible = true;
  var con = document.getElementById('console');
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id)
  target.setAttribute('style', 'color:' + colors[0])
  window.setInterval(function() {

    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount)
      window.setTimeout(function() {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute('style', 'color:' + colors[0])
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function() {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x;
    }
  }, 120)
  window.setInterval(function() {
    if (visible === true) {
      con.className = 'console-underscore hidden'
      visible = false;

    } else {
      con.className = 'console-underscore'

      visible = true;
    }
  }, 400)
}