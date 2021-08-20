// Sets the initial values
let numBottles = 99
let phrase = "bottles"

// Grabs the html ID tags for manipulation
const $bottle = $('#bottle-count')
const $lyric = $('#lyric')
const $formButton = $('#start-song')
let lyric = 1

// Set's a watcher for when the button is clicked
$formButton.click( function(evt){

    // Prevents page reload
    evt.preventDefault()

    // Changes the button text 
    $formButton.prop("value", "Play it again Sam")
    

        for (let i = 0; i < 99; i++)
        {
            if ( numBottles === 1)
            {
                                    
                phrase = "bottle"

                if (lyric === 1)
                {
                    let temp1 = numBottles
                    let temp2 = phrase
                    setTimeout(function()
                    {
                        showLyric1(temp1,temp2)

                    },i*3000,i) //end TimeOut
                    lyric++
                }
                else if (lyric === 2)
                {
                    setTimeout(function()
                    {
                        showLyric2(phrase)

                    },i*3000,i) //end TimeOut
                    lyric++
                }
                else if (lyric === 3)
                {
                    setTimeout(function()
                    {
                        showLyric3()

                    },i*3000,i) //end TimeOut
                    lyric++
                }
                else
                {
                    let temp1 = numBottles
                    let temp2 = phrase
                    setTimeout(function()
                    {
                        showLyric4(temp1,temp2)

                    },i*3000,i) //end TimeOut
                    numBottles--
                    lyric = 1
                }


            }
            else
            {
                numBottles--
                if (numBottles === 1)
                {
                    phrase = "bottle"
                }
                if (lyric === 1)
                {
                    let temp1 = numBottles
                    let temp2 = phrase
                    setTimeout(function()
                    {
                        showLyric1(temp1,temp2)

                    },i*3000,i) //end TimeOut
                    lyric++
                }
                else if (lyric === 2)
                {
                    setTimeout(function()
                    {
                        showLyric2(phrase)

                    },i*3000,i) //end TimeOut
                    lyric++
                }
                else if (lyric === 3)
                {
                    setTimeout(function()
                    {
                        showLyric3()

                    },i*3000,i) //end TimeOut
                    lyric++
                }
                else
                {
                    let temp1 = numBottles
                    let temp2 = phrase
                    setTimeout(function()
                    {
                        showLyric4(temp1,temp2)

                    },i*3000,i) //end TimeOut
                    numBottles--
                    lyric = 1
                }

            }
        }
    





})// End Event

function showLyric1(bottles, phrase)
{
    $('#bottle-count').text(`${bottles}`)
    // Display the first line of text
    $lyric.text(`${phrase} of beer on the wall,`)
}

function showLyric2(phrase)
{
        $lyric.text(`${phrase}, of beer.`)
}

function showLyric3()
{
        $bottle.text("")
        $lyric.text(`Take one down and pass it around`)
         
}

function showLyric4(bottles,phrase)
{
        $bottle.text(`${bottles - 1}`)
        $lyric.text(`${phrase}, of beer on the wall.`)

}
