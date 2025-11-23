import { HttpException, Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
    constructor(private prisma: PrismaService) { }

    createUser(data: Prisma.UserCreateInput) {
        return this.prisma.user.create({
            data: {
                ...data,
                userSetting: {
                    create: {
                        smsEnable: true,
                        enableNotification: false
                    }
                }
            }
        });
    }

    getUsers() {
        return this.prisma.user.findMany({ include: { userSetting: true, posts: true } });// include property include the relation table data also in the response.
    }


    async updateUserById(data: Prisma.UserUpdateInput, id: number) {
        const user = await this.getUserById(id);
        if (user && data.email) {
            const findUser = await this.prisma.user.findUnique({ where: { email: data.email as string } });
            if (findUser) throw new HttpException("User email id is already taken.", 404);
        }
        return this.prisma.user.update({ where: { id }, data });
    }

    async getUserById(id: number) {
        const user = await this.prisma.user.findUnique({
            where: { id }, include: {
                userSetting: {
                    select: {
                        smsEnable: true,
                        enableNotification: true
                    }
                }
            }
        });// select property include specific data fields in the response from the table which is set true.

        if (!user) throw new HttpException("User not exist", 404);
        return user;
    }

    async deleteUserById(id: number) {
        const user = await this.getUserById(id);
        if (user) {
            return this.prisma.user.delete({ where: { id } });
        }

    }

    async updateUserSettingById(data: Prisma.userSettingUpdateInput, userId: number) {
        const user = await this.getUserById(userId);
        if (!user.userSetting) throw new Error("No user setting");

        return this.prisma.userSetting.update({ where: { userId }, data })
    }

}
