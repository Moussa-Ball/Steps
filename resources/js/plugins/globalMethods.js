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

/**
 * Allows to generate an id for a website.
 */
const generateId = function() {
    let now = new Date();
    let timestamp = new Date().getUTCMilliseconds();
    timestamp = now.getFullYear().toString();
    timestamp += (now.getMonth < 9 ? "0" : "") + now.getMonth().toString();
    timestamp += (now.getDate < 10 ? "0" : "") + now.getDate().toString();
    timestamp += now.getHours().toString();
    timestamp += now.getMinutes().toString();
    timestamp += now.getSeconds().toString();
    timestamp += now.getMilliseconds().toString();
    return timestamp;
};

/**
 * Allows to save current website.
 * @param {*} site Represents an object who containing all setup for a website.
 */
const saveWebsite = function(site) {
    let sites = this.$localStorage.get("Sites");
    let index = sites.findIndex(i => i.id == site.id && i.slug == site.slug);
    sites[index] = site;
    this.$localStorage.set("Sites", sites);
    new Noty({
        type: 'success',
        timeout: 2000,
        theme: 'metroui',
        progressBar: false,
        layout: 'bottomCenter',
        text: '<strong style="font-size: 18px;">Your changes have been saved!</strong>',
    }).show()
};

/**
 * Allows to save current website.
 * @param {*} site Represents an object who containing all setup for a website.
 * @param {*} pageIndex Represents the index of an page from an array.
 * @param {*} section Represents a component section of an page.
 */
const saveSectionComponent = function (site, pageIndex, section) {
    // Get & Set up data correctly.
    let sites = this.$localStorage.get("Sites");
    let index = sites.findIndex(i => i.id == site.id && i.slug == site.slug);
    let sectionIndex = sites[index].pages[pageIndex]
        .sections.findIndex(i => i.component == section.component);
    sites[index].pages[pageIndex].sections[sectionIndex] = section
    
    // Saves changes!
    this.$localStorage.set("Sites", sites);

    // Notify the user.
    new Noty({
        type: 'success',
        timeout: 2000,
        theme: 'metroui',
        progressBar: false,
        layout: 'bottomCenter',
        text: '<strong style="font-size: 18px;">Your changes have been saved!</strong>',
    }).show();
};

/**
 * Allows to add section as component in the builder.
 * @param {*} site The current website data.
 * @param {*} params The configuration as js object of component to add.
 */
const addComponent = function(site, params) {
    site.pages[site.currentPage - 1].sections.push(params);
    this.saveWebsite(site)
};

/**
 * Allows to show a modal.
 * @param {*} name The modal name.
 */
const showModal = function(name) {
    this.$modal.show(name);
};

/**
 * Allows to close a modal.
 * @param {*} name The modal name.
 */
const closeModal = function(name) {
    this.$modal.hide(name);
};

const GlobalMethods = {
    install(Vue) {
        Vue.prototype.showModal = showModal;
        Vue.prototype.closeModal = closeModal;
        Vue.prototype.generateId = generateId;
        Vue.prototype.saveWebsite = saveWebsite;
        Vue.prototype.addComponent = addComponent;
        Vue.prototype.moveSectionUp = moveSectionInUp;
        Vue.prototype.moveSectionInDown = moveSectionInDown;
        Vue.prototype.saveSectionComponent = saveSectionComponent;
    }
};

export default GlobalMethods;
