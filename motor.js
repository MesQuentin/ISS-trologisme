const btn = document.querySelector('#signe-button');
const signe = document.querySelector('#signe');

const alien = document.querySelector('#alien');
const georges = document.querySelector('#georges');
const soldat = document.querySelector('#soldat');
const lama = document.querySelector('#lama');
const optimiste = document.querySelector('#optimiste');
const licorne = document.querySelector('#licorne');
const tacos = document.querySelector('#tacos');
const planète = document.querySelector('#planète-chat');
const doug = document.querySelector('#doug');
const santa = document.querySelector('#santa');

const ascendant_alien = document.querySelector('#ascendant_alien');
const ascendant_georges = document.querySelector('#ascendant_georges');
const ascendant_soldat = document.querySelector('#ascendant_soldat');
const ascendant_lama = document.querySelector('#ascendant_lama');
const ascendant_optimiste = document.querySelector('#ascendant_optimiste');
const ascendant_licorne = document.querySelector('#ascendant_licorne');
const ascendant_tacos = document.querySelector('#ascendant_tacos');
const ascendant_planète = document.querySelector('#ascendant_planète-chat');
const ascendant_doug = document.querySelector('#ascendant_doug');
const ascendant_santa = document.querySelector('#ascendant_santa');


async function get_ISS(){
    
    const nb = await get_number()

    let response = await fetch('http://api.open-notify.org/iss-now.json');
    let body = await response.json();

    
    try{
        displaysigne(body.iss_position.latitude,body.iss_position.longitude,nb.number)
        console.log(nb)
        console.log(body)
    }catch{
        console.log('error happened', e);
    }
}


async function get_number(){

    let response = await fetch('http://api.open-notify.org/astros.json');
    let body = await response.json();

    try{
        return body;
    }catch{
        console.log('error happened', e);
    }
}


//A défaut d'avoir une base de donnée, on va procéder au cas par cas

alien.style.display="none";
georges.style.display="none";
soldat.style.display="none";
lama.style.display="none";
optimiste.style.display="none";
licorne.style.display="none";
tacos.style.display="none";
planète.style.display="none";
doug.style.display="none"; 
santa.style.display="none";

ascendant_alien.style.display="none";
ascendant_georges.style.display="none";
ascendant_soldat.style.display="none";
ascendant_lama.style.display="none";
ascendant_optimiste.style.display="none";
ascendant_licorne.style.display="none";
ascendant_tacos.style.display="none";
ascendant_planète.style.display="none";
ascendant_doug.style.display="none"; 
ascendant_santa.style.display="none";

const displaysigne = (lat, lon, nb) => {
    console.log("click");
    signe.style.display="none";


    if (-180 <= lon && lon < -105 && -90 < lat && lat < 0) {
        alien.style.display="block";
    };

    if (-30 <= lon && lon < 45 && -90 <= lat && lat < 0) {
        georges.style.display="block";
    };
    
    if (120 <= lon && lon < 180 && 0 <= lat && lat < 90) {
        soldat.style.display="block";
    };
    
    if (-105 <= lon && lon < -30 && -90 < lat && lat < 0) {
        lama.style.display="block";
    };
    
    if (45 <= lon && lon < 120 && -90 < lat && lat < 0) {
        optimiste.style.display="block";
    };
    
    if (-105 <= lon && lon < -30 && 0 <= lat && lat < 90) {
        licorne.style.display="block";
    };
    
    if (-30 <= lon && lon < 45 && 0 <= lat && lat < 90) {
        tacos.style.display="block";
    };
    
    if (120 <= lon && lon < 180 && -90 < lat && lat < 0) {
        planète.style.display="block";
    };
    
    if (-180 <= lon && lon < -105 && 0 <= lat && lat<= 90) {
        doug.style.display="block";
    };
    
    if (45 <= lon && lon < 120 && 0 <= lat && lat < 90) {
        santa.style.display="block";
    };

    if (nb % 10 == 0) {
        ascendant_georges.style.display="block";
    }
    
    if (nb % 10 == 1) {
        ascendant_doug.style.display="block";
    }

    if (nb % 10 == 2) {
        ascendant_tacos.style.display="block";
    }
    
    if (nb % 10 == 3) {
        ascendant_licorne.style.display="block";
    }
    
    if (nb % 10 == 4) {
        ascendant_alien.style.display="block";
    }
    
    if (nb % 10 == 5) {
        ascendant_planète.style.display="block";
    }
    
    if (nb % 10 == 6) {
        ascendant_soldat.style.display="block";
    }
    
    if (nb % 10 == 7) {
        ascendant_optimiste.style.display="block";
    }
    
    if (nb % 10 == 8) {
        ascendant_lama.style.display="block";
    }
    
    if (nb % 10 == 9) {
        ascendant_santa.style.display="block";
    }
    
}
btn.onclick = get_ISS;