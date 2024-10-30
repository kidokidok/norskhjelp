const flyer = document.getElementById('potatofield');
    const speed = 5; // Speed of movement

    let x = 0;
    let y = 0;
    let directionX = 1;
    let directionY = 1;

    function move() {
        const rect = flyer.getBoundingClientRect();

        // Change direction if hitting the borders
        if (rect.right >= window.innerWidth || rect.left <= 0) {
            directionX *= -1;
        }
        if (rect.bottom >= window.innerHeight || rect.top <= 0) {
            directionY *= -1;
        }

        // Update position
        x += directionX * speed;
        y += directionY * speed;

        flyer.style.left = x + 'px';
        flyer.style.top = y + 'px';

        requestAnimationFrame(move);
    }

    let numFarmers=0;
    let numPotatoes=0;

    function getRandomInt(min, max) {
        const minCeiled = Math.ceil(min);
        const maxFloored = Math.floor(max);
        return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
    }


    function startGame(){
        // To do: Determine number of farmers randomly
        // To do: Show that number of farmers
        const randomNumber = getRandomInt(1, 11);
        console.log(randomNumber)
        for(let i=0; i<randomNumber; i++){
            numFarmers = numFarmers+1;
            console.log(`${i}🧑‍🌾`)
            document.getElementById("farmerpen").append(
                "🧑‍🌾"
            )
        }
        
    }


    function addPotato(){
        document.getElementById("potatofield").append(
            "🥔"
        )
        numPotatoes = numPotatoes+1;

    }

    function feedFarmers(){
        //To do: Count farmers and potatoes
        //To do: if you have three potatoes per farmer = win yay and if you dont you are a loesr
        if(numPotatoes / 3 === numFarmers){
            document.getElementById("result").append(
                "Du vant! Hurra!"
            )
            document.getElementById("potatofield").className = "flyer"
            move();
        } else {
            document.getElementById("result").append(
                "Buuuuu"
            )
        }
    }

    document.getElementById("startbutton").onclick = startGame;
    document.getElementById("potatobutton").onclick = addPotato;
    document.getElementById("matbøndene").onclick = feedFarmers; 