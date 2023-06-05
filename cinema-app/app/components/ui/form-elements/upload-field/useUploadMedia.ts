import { useMutation } from "@tanstack/react-query";
import { TypeUploadMedia } from "./upload-field.interface";
import { useState } from 'react';


export const useUploadMedia:TypeUploadMedia = (onChange, folder)  => {
    const [isLoading, setIsLoading] = useState(false)

    const {mutateAsync} = useMutation(['upload file'], () => )
}