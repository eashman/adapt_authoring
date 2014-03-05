define(function(require){

    var Handlebars = require('handlebars');
    var helpers = {
            lowerCase: function(text) {
                return text.toLowerCase();
            },
            numbers: function(index) {
                return index +1;
            },
            capitalise:  function(text) {
                return text.charAt(0).toUpperCase() + text.slice(1);
            },
            odd: function (index) {
                return (index +1) % 2 === 0  ? 'even' : 'odd';
            },
            formatDate: function(isoDate) {
                // 2014-02-17T17:00:34.196Z
                var date = new Date(isoDate);

                return date.toDateString();
            },
            if_value_equals: function(value, text, block) {
                if (value === text) {
                    return block.fn(this);
                } else {
                    return block.inverse();
                }
            }
        };

    for(var name in helpers) {
       if(helpers.hasOwnProperty(name)) {
             Handlebars.registerHelper(name, helpers[name]);
        }
    }

    return helpers;
});