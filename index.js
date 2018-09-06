/**
 * @file mofron-event-hover/index.js
 * @author simpart
 */
const mf     = require('mofron');
const MsOver = require('mofron-event-mouseover');
const MsOut  = require('mofron-event-mouseout');
/**
 * @class mofron.event.Hover
 * @brief hover event class for mofron component
 */
mf.event.Hover = class extends mofron.Event {
    
    constructor (po) {
        try {
            super();
            this.name('Hover');
            this.prmOpt(po);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    contents (tgt_dom) {
        try {
            let hdl = (p1,p2) => {
                try {
                    let hvr = p2[0];
                    let flg = p2[1];
                    hvr.execHandler(flg);
                } catch (e) {
                    console.error(e.stack);
                    throw e;
                }
            }
            this.component().event([
                new MsOver(new mf.Param(hdl,[this,true])),
                new MsOut(new mf.Param(hdl,[this,false]))
            ]);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mf.event.Hover;
/* end of file */
