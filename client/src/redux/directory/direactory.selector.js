import { createSelector } from "reselect";

const sectionSelector=state=>state.directory

const sectionsSelector=createSelector(
    [sectionSelector],
    directory=>directory.sections
)
export default sectionsSelector