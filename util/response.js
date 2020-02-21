module.exports = {
    ResponseMessage (res, success, msg, result) {
        let results = [];
        results.push({'success': success});
        results.push({'msg': msg});
        results.push({'result': result});
        res.json(results);
    }
};
