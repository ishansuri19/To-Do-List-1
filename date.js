
exports.getDate = function(){       

    const today = new Date();

        let options = {
            weekday : "long" ,
            day : "numeric",
            month : "long"
        };
        let day = today.toLocaleDateString("en-us",options);

        return day;
};

exports.getDay = getDay;

var getDay = function(){

    const today = new Date();

        const options = {
            weekday : "long" 
        };
        let day = today.toLocaleDateString("en-us",options);

        return day;
};

