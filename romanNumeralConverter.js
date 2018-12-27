function convertToRoman(num) {

    let numAsString = num.toString();
    let numLength = numAsString.length;

    if (numLength===1){
        if (numAsString == 1){
            return "I";
        }
        else if (numAsString == 2){
            return "II";
        }
        else if (numAsString == 3){
            return "III";
        }
        else if (numAsString == 4){
            return "IV";
        }
        else if (numAsString == 5){
            return "V";
        }
        else if (numAsString == 6){
            return "VI";
        }
        else if (numAsString == 7){
            return "VII";
        }
        else if (numAsString == 8){
            return "VIII";
        }
        else if (numAsString == 9){
            return "IX";
        }
        else if (numAsString ==0){
            return "";
        }
    }

    else if (numLength === 2){
        let tensDigit = numAsString.slice(0,1);
        let onesDigit = numAsString.slice(1);
                 
        if (numAsString == 10){
            return "X";
        }
        else if (tensDigit == 1){
            return "X"+convertToRoman(onesDigit);
        }
        else if (tensDigit == 2){
            return "XX"+convertToRoman(onesDigit);
        }
        else if (tensDigit == 3){
            return "XXX"+convertToRoman(onesDigit);
        }
        else if (tensDigit == 4){
            return "XL"+convertToRoman(onesDigit);
        }
        else if (tensDigit == 5){
            return "L"+convertToRoman(onesDigit);
        }
        else if (tensDigit == 6){
            return "LX"+convertToRoman(onesDigit);
        }
        else if (tensDigit == 7){
            return "LXX"+convertToRoman(onesDigit);
        }
        else if (tensDigit == 8){
            return "LXXX"+convertToRoman(onesDigit);
        }
        else if (tensDigit == 9){
            return "XC"+convertToRoman(onesDigit);
        }
        else if (tensDigit == 0){
            return convertToRoman(onesDigit);
        }
    }

    else if (numLength === 3){
        let hundredsPlace = numAsString.slice(0,1);
        let tensPlace = numAsString.slice(1);

        if (numAsString == 100){
            return "C";
        }
        else if (hundredsPlace == 1){
            return "C"+convertToRoman(tensPlace);
        }
        else if (hundredsPlace == 2){
            return "CC"+convertToRoman(tensPlace);
        }
        else if (hundredsPlace == 3){
            return "CCC"+convertToRoman(tensPlace);
        }
        else if (hundredsPlace == 4){
            return "CD"+convertToRoman(tensPlace);
        }
        else if (hundredsPlace == 5){
            return "D"+convertToRoman(tensPlace);
        }
        else if (hundredsPlace == 6){
            return "DC"+convertToRoman(tensPlace);
        }
        else if (hundredsPlace == 7){
            return "DCC"+convertToRoman(tensPlace);
        }
        else if (hundredsPlace == 8){
            return "DCCC"+convertToRoman(tensPlace);
        }
        else if (hundredsPlace == 9){
            return "CM"+convertToRoman(tensPlace);
        }
        else if (hundredsPlace ==0){
            return convertToRoman(tensPlace);
        }
    }

    else if (numLength === 4){
        let thousandsPlace = numAsString.slice(0,1);
        let hundredsPlace = numAsString.slice(1);

        if (numAsString == 1000){
            return "M";
        }
        else if (thousandsPlace == 1){
            return "M"+convertToRoman(hundredsPlace);
        }
        else if (thousandsPlace == 2){
            return "MM"+convertToRoman(hundredsPlace);
        }
        else if (thousandsPlace == 3){
            return "MMM"+convertToRoman(hundredsPlace);
        }
        else if (thousandsPlace == 4){
            return "MMMM"+convertToRoman(hundredsPlace);
        }
        else if (thousandsPlace == 5){
            return "MMMMM"+convertToRoman(hundredsPlace);
        }
        else if (thousandsPlace == 6){
            return "MMMMMM"+convertToRoman(hundredsPlace);
        }
        else if (thousandsPlace == 7){
            return "MMMMMMM"+convertToRoman(hundredsPlace);
        }
        else if (thousandsPlace == 8){
            return "MMMMMMMM"+convertToRoman(hundredsPlace);
        }
        else if (thousandsPlace == 9){
            return "MMMMMMMMM"+convertToRoman(hundredsPlace);
        }
    }


 return num;
}

convertToRoman(36);
