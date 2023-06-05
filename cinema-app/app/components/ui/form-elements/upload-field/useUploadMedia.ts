import { useMutation } from "@tanstack/react-query";
import { TypeUploadMedia } from "./upload-field.interface";
import { useCallback, useState } from 'react';
import { MediaService } from "@/services/media.service";
import { MediaTypeOptions, launchImageLibraryAsync } from "expo-image-picker";


export const useUploadMedia:TypeUploadMedia = (onChange, folder)  => {
    const [isLoading, setIsLoading] = useState(false)

    const {mutateAsync} = useMutation(['upload file'], (data:FormData) => MediaService
    .upload(data, folder),{
        onSuccess (data){
            onChange(data[0].url)
        }
    })

    const uploadFile = useCallback(async () => {
        setIsLoading(true)
        const result = await launchImageLibraryAsync({
            mediaTypes: MediaTypeOptions.All,
            allowsEditing: false,
            quality: 1
        })
        if(result.canceled){
            setIsLoading(false)
            return
        }
    }, [mutateAsync])
}