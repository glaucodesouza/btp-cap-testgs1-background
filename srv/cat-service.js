const cds = require('@sap/cds');

module.exports = async (srv) => {

    srv.on('testgs1', async (req) => {


        let recordNew = [{
            ID : 5,
            title  : 'teste 2',
            author : 'author test 2',
            stock  : 2
        }];

        const tx1 = await cds.tx(req);

        let affectedRows = await tx1.run(INSERT.into('TESTGS1_BOOKS').entries(recordNew));
        debugger;
        const testgs1TabCount = await tx1.run(SELECT.from('TESTGS1_BOOKS'));
        debugger;

        return testgs1TabCount;

    });
}