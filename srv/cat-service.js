const cds = require('@sap/cds');

module.exports = async (srv) => {

    srv.on('testgs1', async (req) => {


        // let recordNew = [
        //     {
        //         ID : 5,
        //         title  : 'teste 2',
        //         author : 'author test 2',
        //         stock  : 2
        //     },
        //     {
        //         ID : 6,
        //         title  : 'teste 6',
        //         author : 'author test 6',
        //         stock  : 66
        //     },
        //     {
        //         ID : 7,
        //         title  : 'teste 7',
        //         author : 'author test 7',
        //         stock  : 7
        //     }
        // ];

        // const tx1 = await cds.tx(req);

        // let countTemp = await tx1.run(SELECT.one.columns(["COUNT(*) as count"]).from('TESTGS1_BOOKS'));
        // let affectedRows = await tx1.run(INSERT.into('TESTGS1_BOOKS').entries(recordNew));
        
        // const testgs1TabCount = await tx1.run(SELECT.from('TESTGS1_BOOKS'));

        // countTemp = await tx1.run(SELECT.one.columns(["COUNT(*) as count"]).from('TESTGS1_BOOKS'));
        
        //teste 2 --------------------------------------------------------------------------------
        let recordNew2 = [
            {
                ID : 14,
                title  : 'teste',
                author : 'author test',
                stock  : 1
            },
            {
                ID : 15,
                title  : 'teste',
                author : 'author test',
                stock  : 11
            },
            {
                ID : 16,
                title  : 'teste',
                author : 'author test',
                stock  : 22
            }
        ];
        const db = await cds.connect.to("db");
        let affectedRows2 = await db.run(INSERT.into('TESTGS1_BOOKS').entries(recordNew2));
        // let countTemp2 = await db.run(SELECT.one.columns(["COUNT(*) as count"]).from('TESTGS1_BOOKS'));
        let selectTab = await db.run(SELECT.from('TESTGS1_BOOKS'));

        return selectTab;

    });
}