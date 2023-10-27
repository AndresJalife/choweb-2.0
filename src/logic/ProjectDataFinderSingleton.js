import GridLayout from "../resources/gridLayout";

class ProjectDataFinderSingleton {

    constructor() {
        this.projectData = this.parseProjects();
    }

    parseProjects() {
        const projects = {};
        Object.keys(GridLayout).forEach((column) => {
            Object.keys(GridLayout[column]).forEach((row) => {
                const item = GridLayout[column][row];
                projects[row] = item;
            });
        });
        return projects;
    }

    getProjectData(projectName) {
        return this.projectData[projectName];
    }
}

export default new ProjectDataFinderSingleton();