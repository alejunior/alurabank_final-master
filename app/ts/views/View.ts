import { logarTempoDeExecucao } from '../helpers/decorators/index';

export abstract class View<T> {

    protected _elemento: JQuery;

    constructor(seletor: string) {

        this._elemento = $(seletor);
    }
    
    abstract template(model: T): string;

    @logarTempoDeExecucao()
    update(model: T) {

        let template = this.template(model);
        this._elemento.html(template);
    }

}
