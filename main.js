const axios = require('axios').default;
const fs = require('fs');
const clc = require('cli-color');
const figlet = require('figlet');
const webhook = require('./config');
var file_to_write = "valid-codes.txt";// OUT FILE WHICH EXISTING CODES WILL BE WRITTEN TO
var threads = 100;// INITIALIZE THE MAIN FUNCTION X TIMES. MAKING IT HIGHER WILL CAUSE LONGER WAIT TIME AT THE BEGINNING BUT PROGRAM WILL BE FASTER 
var global_counter = 0;  // DO NOT EDIT 
var string_length = 69;
var delay_seconds =  1;
try {
    console.log("\n")
    console.log(clc.blueBright(`     ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓`))
    console.log(clc.blueBright(`     ┃ `) + " ".repeat(-1 + string_length - ` ┃ `.length) + clc.blueBright("┃"))
    console.log(clc.blueBright(`     ┃ `) + clc.yellowBright(`         /-/ Welcome to Nitro Generator And Checker /-/`) + 
    " ".repeat(-1 + string_length - ` ┃ `.length - `         /-/ Welcome to Nitro Generator And Checker /-/`.length) + clc.blueBright("┃"))
    console.log(clc.blueBright(`     ┃ `) + " ".repeat(-1 + string_length - ` ┃ `.length) + clc.blueBright("┃"))
    console.log(clc.blueBright(`     ┃ `) + clc.yellowBright(`             /-/ Coded By ${clc.yellow("Mr.SIN RE")} And ${clc.yellow("SIZAR Team")} /-/`) + 
    " ".repeat(-1 + string_length - ` ┃ `.length - `             /-/ Coded By Mr.SIN RE And SIZAR Team /-/`.length) + clc.blueBright("┃"))
    console.log(clc.blueBright(`     ┃ `) + " ".repeat(-1 + string_length - ` ┃ `.length) + clc.blueBright("┃"))
    console.log(clc.blueBright(`     ┃ `) + clc.yellowBright(`                 /-/ Discord: ${clc.yellow("Mr.SIN RE#1528")}  /-/`) + 
    " ".repeat(-1 + string_length - ` ┃ `.length - `                 /-/ Discord: Mr.SIN RE#1528  /-/`.length) + clc.blueBright("┃"))
    console.log(clc.blueBright(`     ┃ `) + " ".repeat(-1 + string_length - ` ┃ `.length) + clc.blueBright("┃"))
    console.log(clc.blueBright(`     ┃ `) + clc.cyanBright(`                 https://github.com/Sobhan-SRZA/`) + 
    " ".repeat(-1 + string_length - ` ┃ `.length - `                 https://github.com/Sobhan-SRZA/`.length) + clc.blueBright("┃"))
    console.log(clc.blueBright(`     ┃ `) + " ".repeat(-1 + string_length - ` ┃ `.length) + clc.blueBright("┃"))
    console.log(clc.blueBright(`     ┃ `) + clc.cyanBright(`                   https://dsc.gg/sizar-team`) + 
    " ".repeat(-1 + string_length - ` ┃ `.length - `                   https://dsc.gg/sizar-team`.length) + clc.blueBright("┃"))
    console.log(clc.blueBright(`     ┃ `) + " ".repeat(-1 + string_length - ` ┃ `.length) + clc.blueBright("┃"))
    console.log(clc.blueBright(`     ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛`))
    console.log("\n")
    console.log(clc.blueBright(`     ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓`))
    console.log(clc.blueBright(`     ┃ `) + " ".repeat(-1 + string_length - ` ┃ `.length) + clc.blueBright("┃"))
    console.log(clc.blueBright(`     ┃ `) + clc.greenBright(`                     Starting The Generator...`) + 
    " ".repeat(-1 + string_length - ` ┃ `.length - `                     Starting The Generator...`.length) + clc.blueBright("┃"))
    console.log(clc.blueBright(`     ┃ `) + " ".repeat(-1 + string_length - ` ┃ `.length) + clc.blueBright("┃"))
    console.log(clc.blueBright(`     ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛`))
    console.log("\n")
    while(
        new Date(new Date().getTime() + delay_seconds * 3) > new Date()
    );
    console.clear(); 
} catch { /* */ }
const append_data_to_file = (data, file) => {
    // READ FILE AND THEN WRITE TO END OF LAST DATA 
    existingData = fs.readFile(file, (err, data) => {if (err) return; return data;});
    fs.writeFile(file, existingData + "\n" + data, err => err);
};
const generateRandomNitro = () => {  // GENERATE RANDOM NITRO KEY(16 LETTERS) 
    var nitroKey = "";
    var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    for (var i = 0; i < 16; i++) {
        nitroKey +=  chars.charAt(randomIntBetween(0, chars.length));
    };
    return nitroKey;
};
function randomIntBetween (min, max) { 
    return Math.floor(Math.random() * (max - min) + min);
};
async function main() {
    while (true) {
        var code = generateRandomNitro();
        const p = (text) => console.log(clc.blackBright(`[${global_counter}]`)+text);  // PRINT THE TEXT AND ADD THE COUNTER AT THE BEGIN
        try {
            var data = await axios.get(`https://discordapp.com/api/v6/entitlements/gift-codes/${code}?with_application=false&with_subscription_plan=true`);  // SEND GET REQUEST AND CHECK RESULT CODE 
            // WHEN "data" DOESN'T THROWS AN ERROR
            if(webhook.send === true){
             try {  
                const request = new XMLHttpRequest();
                   request.open('POST', webhook.url);
                   request.setRequestHeader('Content-type', 'application/json');
                const params = {
                     username: webhook.username,
                     avatar_url: webhook.avatar,
                     content: "**Hello Everyone @everyone\nWe Got Valid Nitro Code:\n" + `Code "\`https://discord.gift/${code}\`" is valid and will be written to file "||\`${file_to_write}\`||**"`
                };
                   request.send(JSON.stringify(params));
                } catch (error){
                    console.log(clc.redBright('[E] |  Something went wrong...\n\n'))
                    console.error(error)
                }
            }
            append_data_to_file(code, file_to_write);
            p(clc.greenBright("[+] | ")+`Code "https://discord.gift/${clc.yellowBright(code)}" is valid and will be written to file "${clc.yellowBright(file_to_write)}"`);
        } catch (error) {
            
            // WHEN "data" THROWS AN ERROR
            if (error.toString().includes("429"))
                p(clc.redBright("[-] | ")+` Invalid code:  ${clc.yellowBright(code)}`);
            else{
                console.log(clc.bgMagentaBright("[-] |  Connecting interrupted while reaching to \"https://discordapp.com\". You might want to reduce thread count"));
                continue;
            }
        };
        global_counter +=  1;
    };
};
try {
figlet(`
            NITRO
      GENERATOR
              AND
         CHECKER
`, {
        horizontalLayout: 'default',
        verticalLayout: 'default',
        width: 80,
        whitespaceBreak: true
    }, 
    function(err, data){
        if(err){
           console.log(clc.redBright('[E] |  Something went wrong...'));
           console.dir(err)
           return
        };
        console.log("\n")
        console.log(clc.blueBright(`     ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓`))
        console.log(clc.blueBright(`     ┃ `) + " ".repeat(-1 + string_length - ` ┃ `.length) + clc.blueBright("┃"))
        console.log(clc.blueBright(`     ┃ `) + clc.cyanBright(`                https://github.com/Sobhan-SRZA/`) + 
        " ".repeat(-1 + string_length - ` ┃ `.length - `                https://github.com/Sobhan-SRZA/`.length) + clc.blueBright("┃"))
        console.log(clc.blueBright(`     ┃ `) + " ".repeat(-1 + string_length - ` ┃ `.length) + clc.blueBright("┃"))
        console.log(clc.blueBright(`     ┃ `) + clc.cyanBright(`                   https://dsc.gg/sizar-team`) + 
        " ".repeat(-1 + string_length - ` ┃ `.length - `                   https://dsc.gg/sizar-team`.length) + clc.blueBright("┃"))
        console.log(clc.blueBright(`     ┃ `) + " ".repeat(-1 + string_length - ` ┃ `.length) + clc.blueBright("┃"))
        console.log(clc.blueBright(`     ┃ `) + clc.yellowBright(`             /-/ Coded By ${clc.yellow("Mr.SIN RE")} And ${clc.yellow("SIZAR Team")} /-/`) + 
        " ".repeat(-1 + string_length - ` ┃ `.length - `             /-/ Coded By Mr.SIN RE And SIZAR Team /-/`.length) + clc.blueBright("┃"))
        console.log(clc.blueBright(`     ┃ `) + " ".repeat(-1 + string_length - ` ┃ `.length) + clc.blueBright("┃"))
        console.log(clc.blueBright(`     ┃ `) + clc.yellowBright(`                 /-/ Discord: ${clc.yellow("Mr.SIN RE#1528")}  /-/`) + 
        " ".repeat(-1 + string_length - ` ┃ `.length - `                 /-/ Discord: Mr.SIN RE#1528  /-/`.length) + clc.blueBright("┃"))
        console.log(clc.blueBright(`     ┃ `) + " ".repeat(-1 + string_length - ` ┃ `.length) + clc.blueBright("┃"))    
        console.log(clc.blueBright(`     ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛`))
        console.log('\n')
        console.log(`${clc.magentaBright(data)}`)
        while(
            new Date(new Date().getTime() + delay_seconds * 7) > new Date()
        );
        console.clear(); 
    }
);
} catch { /* */ }
for (var i = 0; i < threads; i++) {  // INITIALIZE ASYNC LOOP AS MUCH AS "threads" VARIABLE SET
    console.clear();
    console.log(clc.green(`[S] |  Starting threads.. [${i+1}/${threads}]`));
    main();
};
/**
 * @INFO
 * Coded by Mr.SIN RE#1528 :) | https://dsc.gg/sizar-team
 * @INFO
 * Work for SIZAR Team | https://dsc.gg/sizar-team
 * @INFO
 * Please Mention Us SIZAR Team, When Using This Code!
 * @INFO
 */