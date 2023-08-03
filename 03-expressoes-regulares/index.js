function PhoneNumber(phoneNumberString){
    const fixedString =  phoneNumberString.replace(/[\sa-zA-Z]/g, " ")
    this.countryCode = fixedString.match(/(?<=\+)\d{1,3}/)[0]
    this.ddd = fixedString.match(/(?<=\()\d+(?=\))/)
    this.number = fixedString.match(/(?<=\)).+/)[0].replace(/-/g, "")
}

console.log(new PhoneNumber('+55 (19) 9 98765-4321'))
console.log(new PhoneNumber('+2 (679) as99-8765-4321'))