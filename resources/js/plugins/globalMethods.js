/**
 * You can register global methods & use them as methods in the main Vue instance.
 */

/**
 * Move a component to the top of another component.
 * @param {*} sections Represents an array containing all the components and their configurations.
 * @param {*} component Represents an object containing all the configuration of a component.
 */
const moveSectionInUp = function(sections, component) {
    let index = sections.indexOf(component);
    var newIndex = index - 1;
    //Already at the top or bottom.
    if (newIndex < 0 || newIndex == sections.length) return;
    //Sort the indixes
    var indexes = [index, newIndex].sort();
    //Replace from lowest index, two elements, reverting the order
    sections.splice(indexes[0], 2, sections[indexes[1]], sections[indexes[0]]);
};

/**
 * Move a component to the bottom of another component.
 * @param {*} sections Represents an array containing all the components and their configurations.
 * @param {*} component Represents an object containing all the configuration of a component.
 */
const moveSectionInDown = function(sections, component) {
    let index = sections.indexOf(component);
    var newIndex = index + 1;
    //Already at the top or bottom.
    if (newIndex < 0 || newIndex == sections.length) return;
    //Sort the indixes
    var indexes = [index, newIndex].sort();
    //Replace from lowest index, two elements, reverting the order
    sections.splice(indexes[0], 2, sections[indexes[1]], sections[indexes[0]]);
};

const GlobalMethods = {
    install(Vue) {
        Vue.prototype.moveSectionUp = moveSectionInUp;
        Vue.prototype.moveSectionInDown = moveSectionInDown;
    }
};

export default GlobalMethods;
