import GridDataHandler from "./GridDataHandler";

class LandingPageGridDataHandler extends GridDataHandler {
    constructor() {
        super('landing');
    }
}

const landingPageGridDataHandler = new LandingPageGridDataHandler();
export default landingPageGridDataHandler;