// import GridLayout from "../resources/gridLayout";
import {fetchFileFromS3, updateS3File} from "./S3Handler";

class ProjectDataSingleton {
    constructor() {
        this.gridLayout = {};
        this.fastAccesibleProjects = {};
        this.initiated = false;
    }

    async init() {
        const gridLayout = await fetchFileFromS3('gridLayout.json');
        this.gridLayout = gridLayout;
        this.fastAccesibleProjects = this._parseProjects(gridLayout);
        this.initiated = true;
    }

    _parseProjects(gridLayout) {
        const projects = {};
        Object.keys(gridLayout).forEach((column) => {
            Object.keys(gridLayout[column]).forEach((row) => {
                const item = gridLayout[column][row];
                projects[row] = item;
            });
        });
        return projects;
    }

    getProjectData(projectName) {
        return this.fastAccesibleProjects[projectName];
    }

    newRow() {
        const id = Object.keys(this.gridLayout).length + 1;
        this.gridLayout[id] = {};
        return id;
    }

    newProject(row, project) {
        this.gridLayout[row][project.id] = project;
    }

    updateProject(row, project) {
        this.gridLayout[row][project.id] = project;
    }

    getGridLayout() {
        return this.gridLayout;
    }

    deleteRow(row) {
        delete this.gridLayout[row];
    }

    deleteProject(row, project) {
        delete this.gridLayout[row][project];
    }

    async upload() {
        await updateS3File('gridLayout.json', this.gridLayout);
    }
}

const projectDataSingleton = new ProjectDataSingleton();
export default projectDataSingleton;