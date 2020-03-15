/**
 * @file mofron-event-hover/index.js
 * @brief hover event for mofron
 *        this event notifies when the mouse is hovered or outed on the component.
 * ## event function parameter
 *  - component: event target component object
 *  - event: "click" event object by addEventListener
 *  - mixed: user specified parameter
 * @license MIT
 */
const MsOver  = require('mofron-event-mouseover');
const MsOut   = require('mofron-event-mouseout');
const ConfArg = mofron.class.ConfArg;

module.exports = class extends mofron.class.Event {
    /**
     * initialize event
     * 
     * @param (mixed) short-form parameter
     *                key-value: event config
     * @type private
     */
    constructor (prm) {
        try {
            super();
            this.name('Hover');
	    this.confmng().add("status", { type: "boolean" });
            
	    if (undefined !== prm) {
                this.config(prm);
	    }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * event contents
     * 
     * @param (mofron.class.Dom) event target dom object
     * @type private
     */
    contents (tgt_dom) {
        try {
	    let hover = this;
            let evt = (p1,p2,p3) => {
                try {
                    if (hover.status() !== p3) {
		        hover.status(p3);
                        hover.execListener(p3);
		    }
                } catch (e) {
                    console.error(e.stack);
                    throw e;
                }
            }
            this.component().event([
                new MsOver(new ConfArg(evt,true)),
		new MsOut(new ConfArg(evt, false))
            ]);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * hover status
     * 
     * @param (boolean) hover status
     * @return (boolean) hover status
     * @type function
     */
    status (prm) {
        try {
            return this.confmng("status", prm);
	} catch (e) {
            console.error(e.stack);
            throw e;
	}
    }
}
/* end of file */
