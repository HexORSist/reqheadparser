
module.exports = {
    parsehdr:function(req,res){
        
        var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
        var lang = req.headers['accept-language'].split(/,|;/)[0];
        var uaparser = require('ua-parser').parse(req.headers['user-agent']).os;
        
        return { "ipaddress": ip, "language": lang, "software": uaparser.toString() };

    }

};