import { FieldError } from "react-hook-form";
import { ViewStyle } from "react-native";

export interface IUploadField  {
    folder?: string;
    value?: string;
    onChange: (... events: any[]) => void;
    placeholder: string;
    error?: FieldError
    style?: ViewStyle
    isNoImage?: boolean;
    gradient?: [string, string];
}

type TypeUploadMedia = (onChange:(...value: any[]) => void, folder?: string) => {
    uploadFile: () => Promise<void>
    isLoading: boolean
}