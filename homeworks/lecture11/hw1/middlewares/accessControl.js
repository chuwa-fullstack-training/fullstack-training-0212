const express = require('express');

module.exports = (req, res, next) => {
    if(req.user) {
        next();
    } else {
        req.restrictFields = ['firstName', 'lastName'];
        next();
    }
}