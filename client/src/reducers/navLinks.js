import { SET_ACTIVE_NAV_LINK } from "../components/actions/navLinks";

const selected = 'NavBar-link-selected';
const unselected = 'NavBar-link';
const INITIAL_STATE = {
    home: unselected,
    design: unselected,
    video: unselected,
    motionGraphics: unselected,
    illustration: unselected,
    audioProduction: unselected,
    marketing: unselected,
    projectManagement: unselected,
    contact: unselected
};

const navLinks = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_ACTIVE_NAV_LINK:
            return { ...INITIAL_STATE, [action.activeLink]: selected };
        default:
            return state;
    }
}

export default navLinks;