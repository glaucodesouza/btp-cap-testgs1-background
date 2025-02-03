using TESTGS1 from '../db/schema';

service TESTGS1Service {

    entity Books as projection on TESTGS1.Books;

    function testgs1() returns String; 

}
