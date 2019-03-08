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
            this.m_hvrbuf = [];
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
                    //let lst_tm = hvr.lastKickTime();
                    //let tm = new Date().getTime();
                    //hvr.lastKickTime(tm);
                    //hvr.execHandler(flg);
                    
                    if (0 === hvr.hoverBuff().length) {
                        let exe_hdr = () => {
                            try {
                                let buf = hvr.hoverBuff();
                                hvr.execHandler(buf[buf.length-1]);
                                hvr.resetBuff();
                            } catch (e) {
                                console.error(e.stack);
                                throw e;
                            }
                        };
                        setTimeout(exe_hdr, 50);
                    }
                    hvr.hoverBuff(flg);
                } catch (e) {
                    console.error(e.stack);
                    throw e;
                }
            }
            this.component().event([
                new MsOver([hdl,[this,true]]), new MsOut([hdl,[this,false]])
            ]);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    hoverBuff (prm) {
        try {
            if (undefined === prm) {
                /* getter */
                return this.m_hvrbuf;
            }
            /* setter */
            if ('boolean' !== typeof prm) {
                throw new Error('invalid parameter');
            }
            this.m_hvrbuf.push(prm);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    resetBuff () {
        try {
            this.m_hvrbuf = [];
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    lastKickTime (prm) {
        try { return this.member('lastKickTime', 'number', prm, 0); } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mf.event.Hover;
/* end of file */
