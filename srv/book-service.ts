import cds from '@sap/cds';
import { Request, Service } from '@sap/cds';

const car: { type: string, model: string, year: number } = {
    type: "Toyota",
    model: "Corolla",
    year: 2009
  };

export default (srv: Service) => {
  srv.before('GET', 'Books', async (req: Request) => {
    console.log('Before creating Books');
    let aaa: string = {};
    console.log(aaa);    
    const { Books } = await import('#cds-models/sap/capire/bookshop');
  });

  srv.on('someAction', async (req: Request) => {
    console.log('Start someAction');
    console.log('req.data', req.data);
    let bookID = req.data.ID;

    const { Books } = cds.entities('sap.capire.bookshop');
    const books = await SELECT.from(Books).where({ 'ID': bookID });
    return books ? 'S' : 'E';
  });
};