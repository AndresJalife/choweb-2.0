import {Storage} from 'aws-amplify';


export async function fetchFileFromS3(fileKey) {
    try {
        // await Auth.currentAuthenticatedUser();
        const fileUrl = await Storage.get(fileKey, {level: "public", download: true});
        const file = await new Response(fileUrl.Body).json();
        return file;
        // Do something with the file URL, such as displaying it in the app or fetching the file
    } catch (error) {
        console.error('Error fetching file from S3:', error);
    }
}

export async function createOrUpdateS3File(fileName, fileContent, fileFolder) {
    try {
        const fileUrl = await Storage.put(fileFolder + '/' + fileName, fileContent, {
            level: 'public'
        });
        console.log('File updated successfully.');
        return fileUrl.key;
    } catch (error) {
        console.error('Error updating file:', error);
    }
}