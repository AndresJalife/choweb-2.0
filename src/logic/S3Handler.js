import {Auth, Storage} from 'aws-amplify';


export async function fetchFileFromS3(fileKey) {
    try {
        await Auth.currentAuthenticatedUser();
        const fileUrl = await Storage.get(fileKey, {level: "public", download: true });
        const file = await new Response(fileUrl.Body).json();
        return file;
        // Do something with the file URL, such as displaying it in the app or fetching the file
    } catch (error) {
        console.error('Error fetching file from S3:', error);
    }
}
export async function updateS3File(fileName, fileContent) {
    try {
        const fileUrl = await Storage.put(fileName, fileContent, {
            level: 'public', // Set access level as needed
            contentType: 'image/png'
        });
        console.log('File updated successfully.');
        console.log('File URL:', fileUrl);
    } catch (error) {
        console.error('Error updating file:', error);
    }
}