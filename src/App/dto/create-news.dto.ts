import { IsString, IsDate } from "class-validator";
import { Date } from "mongoose";

export class CreateNewsDto {

    @IsString()
    readonly title: string;
    
    @IsString()
    readonly author: string;

    @IsString()
    readonly url: string;

    @IsDate()
    readonly date: Date;
}