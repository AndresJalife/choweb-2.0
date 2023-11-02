import GridDataHandler from "./GridDataHandler";

class VideoclipsGridDataHandler extends GridDataHandler {
    constructor() {
        super('videoclips');
    }
}

const videoclipsPageGridDataHandler = new VideoclipsGridDataHandler();
export default videoclipsPageGridDataHandler;