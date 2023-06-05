import { useMutation } from "@tanstack/react-query";
import { TypeUploadMedia } from "./upload-field.interface";
import { useState } from 'react';
import { MediaService } from "@/services/media.service";


export const useUploadMedia:TypeUploadMedia = (onChange, folder)  => {
    const [isLoading, setIsLoading] = useState(false)

    const {mutateAsync} = useMutation(['upload file'], (data:FormData) => MediaService
    .upload(data, folder),{
        onSuccess (data){
            onChange(data[0].url)
        }
    })
}