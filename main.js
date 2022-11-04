document.getElementById("result").style.display = "none";
document.getElementById("fel").style.display = "none";
document.getElementById("key").style.display = "none";
let select;
let select2;







function selectItem() {

    select = document.getElementById("items").value;
    select2 = document.getElementById("items2").value;
    if (select == 1 || select == 2) {

        document.getElementById("fel").style.display = "flex";

        if (select == 2) { //key (A,B)           
            document.getElementById("key").style.display = "block";
            document.getElementById("keyA").style.display = "none";
            document.getElementById("keyB").style.display = "none";
            document.getElementById("coma").style.display = "none";
        } else if (select == 1) {
            document.getElementById("key").style.display = "none";
            document.getElementById("keyA").style.display = "block";
            document.getElementById("keyB").style.display = "block";
            document.getElementById("coma").style.display = "inline";
        }
    }
    console.log(select2);
    console.log(select);
}


function myfun() {
    console.log(select2);
    console.log(select);
    let alph = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let en = document.getElementById("mass").value;

    let en2 = en.toLowerCase();
    let en1 = en2.trim();



    let a = parseInt(document.getElementById("keyA").value);

    let b = parseInt(document.getElementById("keyB").value);

    let q = ""

    if (select == 1) { //Affine

        if (select2 == 6) { // En

            for (let i = 0; i < en1.length; i++) {

                for (let x = 0; x < alph.length; x++) {
                    if (en1[i] == alph[x]) {
                        x = x * a + b;
                        let z = x % 26;
                        q = q + alph[z];

                    }

                }

            }
            document.getElementById("result").innerHTML = q;



            let u = document.getElementById("mass").value;
            document.getElementById("result").style.display = "inline";

        } else { //DE
            let a_inv = 0;
            let block_De = 0;
            let result = 0;
            let show = "";

            for (let x = 1; x < 26; x++) //find the Inverse for a
                if (((a % 26) * (x % 26)) % 26 == 1)
                    a_inv = x;
            console.error("a Inv = " + a_inv);

            for (let i = 0; i < en1.length; i++) {


                block_De = alph.indexOf(en1[i]);

                if (block_De != -1) {
                    result = Math.abs((a_inv * (block_De - b) + 52) % 26);
                    show = show + alph[result];
                    console.warn(show);

                }
            }


            document.getElementById("result").innerHTML = show;



            let u = document.getElementById("mass").value;
            document.getElementById("result").style.display = "inline";

        }



    } else if (select == 2) { //Vigenere 


        let plan_text = document.getElementById("mass").value;
        let message = plan_text.toLowerCase();
        let key_V = (document.getElementById("key").value).toLowerCase();
        let text = "";
        let box = 0;
        let box2 = 0;
        let sum = 0;
        if (select2 == 6) { //En


            for (let i = 0; i < message.length; i++) {
                if (message.length != key_V.length) {
                    key_V += key_V[i];

                }

            }
            for (let i = 0; i < message.length; i++) {

                box = alph.indexOf(message[i]);
                box2 = alph.indexOf(key_V[i]);
                sum = (box + box2) % 26;
                text = text + alph[sum];

            }
            document.getElementById("result").innerHTML = text;
            document.getElementById("result").style.display = "inline";


        } else { //DE
            for (let i = 0; i < message.length; i++) {
                if (message.length != key_V.length) {
                    key_V += key_V[i];

                }

            }
            for (let i = 0; i < message.length; i++) {
                box = alph.indexOf(message[i]);
                box2 = alph.indexOf(key_V[i]);
                sum = (box - box2 + 26) % 26;
                text = text + alph[sum];

            }
            document.getElementById("result").innerHTML = text;
            document.getElementById("result").style.display = "inline";


        }


    }


}


function clearbtn() {
    document.getElementById("mass").value = '';
    document.getElementById("result").style.display = "none";
    document.getElementById("keyA").value = '';
    document.getElementById("keyB").value = '';
    document.getElementById("key").value = '';
}