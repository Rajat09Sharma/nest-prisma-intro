import { IsBoolean, IsOptional } from "class-validator";

export class UpdateUserSettingDto {

    @IsBoolean()
    @IsOptional()
    smsEnable?: boolean;

    @IsBoolean()
    @IsOptional()
    enableNotification?: boolean;

}