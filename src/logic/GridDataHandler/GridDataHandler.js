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

    moveRowUp(row) {
        const rows = Object.keys(this.gridLayout).sort((a, b) => parseInt(a) - parseInt(b));
        const currentIndex = rows.indexOf(row);
        if (currentIndex > 0) {
            const temp = this.gridLayout[rows[currentIndex - 1]];
            this.gridLayout[rows[currentIndex - 1]] = this.gridLayout[row];
            this.gridLayout[row] = temp;
        }
    }

    moveRowDown(row) {
        const rows = Object.keys(this.gridLayout).sort((a, b) => parseInt(a) - parseInt(b));
        const currentIndex = rows.indexOf(row);
        if (currentIndex < rows.length - 1) {
            const temp = this.gridLayout[rows[currentIndex + 1]];
            this.gridLayout[rows[currentIndex + 1]] = this.gridLayout[row];
            this.gridLayout[row] = temp;
        }
    }

    moveElementLeft(row, projectId) {
        const projects = Object.keys(this.gridLayout[row]);
        const currentIndex = projects.indexOf(projectId);
        if (currentIndex > 0) {
            const newRow = {};
            projects.forEach((key, index) => {
                if (index === currentIndex - 1) {
                    newRow[projects[currentIndex]] = this.gridLayout[row][projects[currentIndex]];
                } else if (index === currentIndex) {
                    newRow[projects[currentIndex - 1]] = this.gridLayout[row][projects[currentIndex - 1]];
                } else {
                    newRow[key] = this.gridLayout[row][key];
                }
            });
            this.gridLayout[row] = newRow;
        }
    }

    moveElementRight(row, projectId) {
        const projects = Object.keys(this.gridLayout[row]);
        const currentIndex = projects.indexOf(projectId);
        if (currentIndex < projects.length - 1) {
            const newRow = {};
            projects.forEach((key, index) => {
                if (index === currentIndex) {
                    newRow[projects[currentIndex + 1]] = this.gridLayout[row][projects[currentIndex + 1]];
                } else if (index === currentIndex + 1) {
                    newRow[projects[currentIndex]] = this.gridLayout[row][projects[currentIndex]];
                } else {
                    newRow[key] = this.gridLayout[row][key];
                }
            });
            this.gridLayout[row] = newRow;
        }
    }

    async upload() {
        await createOrUpdateS3File(this.gridName + 'Layout.json', this.gridLayout, 'json');
    }
}

// const projectDataSingleton = new GridDataHandler();
export default GridDataHandler;