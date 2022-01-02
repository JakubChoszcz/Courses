"use strict";
let logged;
const sendAnalytics = (data) => {
    console.log(data);
    logged = true;
    console.log(logged);
};
sendAnalytics('The Data');
