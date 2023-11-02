// import GridLayout from "../resources/gridLayout";
import {createOrUpdateS3File} from "../S3Handler";

class GridDataHandler {
    constructor(gridName) {
        this.gridName = gridName;
        this.gridLayout = {};
    }

    async init() {
        await fetch(`https://d2njbbkhc1pb2y.cloudfront.net/public/json/${this.gridName}Layout.json`, {cache: "no-store"})
            .then((response) => response.json())
            .then((gridLayout) => {
                this.gridLayout = gridLayout;
            })
    }

    getProjectData(projectName) {
        let project = null;
        Object.keys(this.gridLayout).forEach((column) => {
            Object.keys(this.gridLayout[column]).forEach((row) => {
                const item = this.gridLayout[column][row];
                if (item.id === projectName) {
                    project = item;
                }
            });
        });
        return project;
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
        await createOrUpdateS3File(this.gridName + 'Layout.json', this.gridLayout, 'json');
    }
}

// const projectDataSingleton = new GridDataHandler();
export default GridDataHandler;