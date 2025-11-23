import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class UpdatePostDto {
    @IsString()
    @IsOptional()
    title?: string;

    @IsString()
    @IsOptional()
    description?: string;

    @IsNotEmpty()
    @IsNumber()
    userId: number;

}