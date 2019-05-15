import { ProposalQueryOptions } from '../dto/query/proposals-query-options';
import { HttpQueryParams } from './interface';
export default class ProposalsQuery {
    options?: ProposalQueryOptions;
    constructor(options?: ProposalQueryOptions);
    toQueryParams(): HttpQueryParams;
}
