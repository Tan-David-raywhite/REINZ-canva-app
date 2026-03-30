import { IdGenerator } from '../../../../base/id_generator/id_generator';
const idGenerator = new IdGenerator();
export const domIdGenerator = {
    next: ()=>idGenerator.next()
};
