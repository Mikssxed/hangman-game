var password = "Dogs are better than cats";
password = password.toUpperCase();

var wordlength = password.length;

var fails = 0;

var yes = new Audio("yes.wav");
var no = new Audio("no.wav");

var password1 = "";

for (i = 0; i < wordlength; i++) //masks sentence
{
    if (password.charAt(i) == " ") {
        password1 = password1 + " ";
    } else {
        password1 = password1 + "-";
    }
}

function write_password() //writes password
{
    document.getElementById("board").innerHTML = password1;
}

window.onload = start;

var letters = new Array(25); //array with letters

letters[0] = "A";
letters[1] = "B";
letters[2] = "C";
letters[3] = "D";
letters[4] = "E";
letters[5] = "F";
letters[6] = "G";
letters[7] = "H";
letters[8] = "I";
letters[9] = "J";
letters[10] = "K";
letters[11] = "L";
letters[12] = "M";
letters[13] = "N";
letters[14] = "O";
letters[15] = "P";
letters[16] = "Q";
letters[17] = "R";
letters[18] = "S";
letters[19] = "T";
letters[20] = "U";
letters[21] = "V";
letters[22] = "W";
letters[23] = "X";
letters[24] = "Y";
letters[25] = "Z";

function start()
{

    var div_content = "";

    for (i = 0; i < 26; i++) //generates letters
    {
        var element = "lit" + i; //generates divs id
        div_content = div_content + '<div class="letter" onclick="check('+ i +')" id="'+ element +'">' + letters[i] + '</div>'; //taking letter from array and give id to divs
    }

    document.getElementById("alphabet").innerHTML = div_content;



    write_password();
}

String.prototype.setLetter = function(position, letter) 
{
    if (position > this.length - 1) return this.toString(); //if position is higher then string length
    else return this.substr(0, position) + letter + this.substr(position + 1);
}

function check(nr) //takes nr from function start(i)
{

var hit = false;

    for (i = 0; i < wordlength; i++)
    {
        if (password.charAt(i) == letters[nr])
        {
            password1 = password1.setLetter(i, letters[nr]); //changes dash to letter
            hit = true;
        }
    }

    if (hit == true)
    {
        yes.play();
        var element = "lit" + nr; //generates divs id
        document.getElementById(element).style.background = "#003300";
        document.getElementById(element).style.color = "#00c000";
        document.getElementById(element).style.border = "3px solid #00c000";
        document.getElementById(element).style.cursor = "default";
        write_password();
    } else
    {
        no.play();
        var element = "lit" + nr; //generates divs id
        document.getElementById(element).style.background = "#330000";
        document.getElementById(element).style.color = "#c00000";
        document.getElementById(element).style.border = "3px solid #c00000";
        document.getElementById(element).style.cursor = "default";
        document.getElementById(element).setAttribute("onclick", ";")
        //fails
        fails++;
        var image = "img/s" + fails + ".jpg";
        document.getElementById("images").innerHTML = '<img src="' + image + '"alt="" />';
    }
    //win
    if (password == password1)
    {
        document.getElementById("alphabet").innerHTML = " It is right answer:" + password + '<br /><br /><span class="reset" onclick="location.reload()">ONCE AGAIN?</span>' //shows text if u win and reloads
    }
    //lose
    if (fails >= 9)
    {
        document.getElementById("alphabet").innerHTML = "You lost, right answer:" + password + '<br /><br /><span class="reset" onclick="location.reload()">ONCE AGAIN?</span>' //shows text if u lost and reloads
    }
}
//to do:
//add more passwords and sounds if u win or lost/ add categories