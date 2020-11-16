let str = 'Every man in the world! Every woman on earth!'

console.log(str);

chp = /(wo)?man/g;

chp.compile(chp);

str3 = str.replace(chp, "person");

console.log(str3);