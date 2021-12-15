export const SET_ACTIVE_NAV_LINK = 'SET_ACTIVE_NAV_LINK';

export const setActiveNavLink = (activeLink) => {
    return {
        type: SET_ACTIVE_NAV_LINK,
        activeLink: activeLink
    }
}
