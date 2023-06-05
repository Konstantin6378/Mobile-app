type TypeUploadMedia = (onChange:(...value: any[]) => void, folder?: string) => {
    uploadFile: () => Promise<void>
    isLoading: boolean
}


export const useUploadMedia = ()  => {

}